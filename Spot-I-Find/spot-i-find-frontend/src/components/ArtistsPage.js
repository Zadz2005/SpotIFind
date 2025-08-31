import React, { useState, useEffect } from 'react';
import './ArtistsPage.css';
import { getCountryFlagImage } from '../utils/countryUtils';
import { fetchCountriesByName } from '../utils/apiConfig';

const ArtistsPage = ({ countryName, onArtistClick, onBack, onHome, loading, setLoading, setError }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    loadArtists();
  }, [countryName]);

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

  const loadArtists = async () => {
    try {
      setLoading(true);
      const data = await fetchCountriesByName(countryName);
      console.log('📊 Artists loaded from Country table:', data);
      console.log('🎵 Artist names in Country table:', data.map(a => a.artist));
      setArtists(data);
    } catch (error) {
      console.error('Error loading artists:', error);
      setError('Failed to load artists. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleArtistClick = (artist, country) => {
    console.log('👆 Artist card clicked:', artist, 'from country:', country);
    console.log('🔍 This artist name will be searched in ArtistDetail table:', artist);
    onArtistClick(artist, country);
  };

  const renderFlag = (countryName) => {
    const flagData = getCountryFlagImage(countryName);
    
    if (flagData.type === 'image') {
      return (
        <div className="flag-container">
          <img 
            src={flagData.src} 
            alt={flagData.alt}
            className="country-flag-image"
            onError={(e) => {
              // Hide the image if it fails to load
              e.target.style.display = 'none';
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
        <p className="loading-text">Loading artists...</p>
      </div>
    );
  }

  return (
    <div className="artists-page">
      <div className="artists-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back to Countries
        </button>
        <button className="home-btn" onClick={onHome}>
          <i className="fas fa-home"></i>
          Home
        </button>
        <div className="country-info">
          <h2>{renderFlag(countryName)} {getDisplayName(countryName)}</h2>
          <p>{artists.length} artist{artists.length !== 1 ? 's' : ''} found</p>
        </div>
      </div>
      
      <div className="artists-list">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="artist-card"
            onClick={() => handleArtistClick(artist.artist, countryName)}
            style={{ cursor: 'pointer' }}
          >
            <div className="artist-name">{artist.artist}</div>
            <div className="artist-rank">Rank: {artist.rank}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsPage;
