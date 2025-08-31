import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { getCountryFlagImage } from '../utils/countryUtils';
import { fetchCountries } from '../utils/apiConfig';

const HomePage = ({ onCountryClick, loading, setLoading, setError }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm, countries]);

  const loadCountries = async () => {
    try {
      setLoading(true);
      const data = await fetchCountries();
      
      // Group countries and count unique artists
      const countryMap = new Map();
      data.forEach(country => {
        const countryName = country.country;
        if (!countryMap.has(countryName)) {
          countryMap.set(countryName, new Set());
        }
        countryMap.get(countryName).add(country.artist);
      });

      const uniqueCountries = Array.from(countryMap.entries()).map(([countryName, artists]) => ({
        name: countryName,
        artistCount: artists.size
      }));

      setCountries(uniqueCountries);
      setFilteredCountries(uniqueCountries);
    } catch (error) {
      console.error('Error loading countries:', error);
      setError('Failed to load countries. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const renderFlag = (countryName) => {
    const flagData = getCountryFlagImage(countryName);
    
    if (flagData.type === 'image') {
      return (
        <img 
          src={flagData.src} 
          alt={flagData.alt}
          className="country-flag-image"
          onError={(e) => {
            // Fallback to emoji if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
      );
    } else {
      return (
        <span className="country-flag-emoji">
          {flagData.emoji}
        </span>
      );
    }
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="loading-text">Loading countries...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <i className="fas fa-music"></i>
          <h1>Spot-I-Find</h1>
        </div>
        <p className="subtitle">Discover Spotify Artists by Country</p>
      </header>

      <div className="search-section">
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a country..."
            className="search-input"
          />
          {searchTerm && (
            <button onClick={clearSearch} className="clear-btn">
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>

      <div className="content">
        {filteredCountries.length === 0 ? (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No countries found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="countries-grid">
            {filteredCountries.map((country, index) => (
              <div
                key={index}
                className="country-card"
                onClick={() => onCountryClick(country.name)}
              >
                <div className="country-flag">
                  {renderFlag(country.name)}
                </div>
                <div className="country-name">{country.name}</div>
                <div className="artist-count">
                  {country.artistCount} artist{country.artistCount !== 1 ? 's' : ''}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
