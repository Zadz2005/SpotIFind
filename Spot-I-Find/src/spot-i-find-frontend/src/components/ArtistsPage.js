import React, { useState, useEffect } from 'react';
import './ArtistsPage.css';
import { getCountryFlag } from '../utils/countryUtils';
import { fetchCountriesByName } from '../utils/apiConfig';

const ArtistsPage = ({ countryName, onArtistClick, onBack, onHome, loading, setLoading, setError }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    loadArtists();
  }, [countryName]);

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
          <h2>{getCountryFlag(countryName)} {countryName}</h2>
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
