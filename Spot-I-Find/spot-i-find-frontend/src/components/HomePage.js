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
        country.displayName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm, countries]);

  // Function to convert database country names to proper display names
  const getDisplayName = (databaseName) => {
    const nameMap = {
      'us weekly totals': 'United States',
      'gb weekly totals': 'United Kingdom',
      'au weekly totals': 'Australia',
      'ar weekly totals': 'Argentina',
      'at weekly totals': 'Austria',
      'ad weekly totals': 'Andorra',
      'global weekly totals': 'Global'
    };
    
    return nameMap[databaseName] || databaseName;
  };

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
        displayName: getDisplayName(countryName), // Add display name
        artistCount: artists.size
      }));

      // Debug: Log all country names from database
      console.log('🌍 All country names from database:', uniqueCountries.map(c => c.name));
      console.log('📊 Total countries found:', uniqueCountries.length);

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
    console.log(`Rendering flag for ${countryName}:`, flagData);
    
    if (flagData.type === 'image') {
      return (
        <div className="flag-container">
          <img 
            src={flagData.src} 
            alt={flagData.alt}
            className="country-flag-image"
            onError={(e) => {
              console.error(`Failed to load image: ${flagData.src}`);
              // Hide the image if it fails to load
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log(`Successfully loaded image: ${flagData.src}`);
            }}
          />
        </div>
      );
    } else if (flagData.type === 'emoji') {
      return (
        <span className="country-flag-emoji">
          {flagData.emoji}
        </span>
      );
    } else {
      // No flag to show
      return null;
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
        <div className="update-notice">
          <small>Website will be updated to include more artists and rising artists</small>
        </div>
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
                onClick={() => onCountryClick(country.name)} // Keep original name for API calls
              >
                <div className="country-flag">
                  {renderFlag(country.name)} {/* Keep original name for flag lookup */}
                </div>
                <div className="country-name">{country.displayName}</div> {/* Use display name */}
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
