import React, { useState, useEffect } from 'react';
import './ArtistDetailsPage.css';
import { fetchCountries, fetchArtistDetailsByName } from '../utils/apiConfig';

const ArtistDetailsPage = ({ artist, country, onBack }) => {
  const [artistDetails, setArtistDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArtistDetails();
  }, [artist]);

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

  const cleanArtistName = (artistName) => {
    // Handle null or undefined artist names
    if (!artistName) {
      return '';
    }
    // Remove text after " - " (dash surrounded by spaces)
    return artistName.split(' - ')[0].trim();
  };

  const loadArtistDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      // Test backend connectivity first
      console.log('Testing backend connectivity...');
      try {
        await fetchCountries();
        console.log('Backend connectivity test passed');
      } catch (error) {
        console.error('Backend connectivity test failed:', error);
        setError('Cannot connect to backend server. Please check if the backend is running.');
        setLoading(false);
        return;
      }

      const cleanedArtistName = cleanArtistName(artist);
      console.log('Loading artist details for:', cleanedArtistName);

      // Get artist details by name
      console.log('Fetching artist details for:', cleanedArtistName);
      let artistDetails;
      try {
        artistDetails = await fetchArtistDetailsByName(cleanedArtistName);
        console.log('Artist details received:', artistDetails);
      } catch (detailError) {
        console.error('Error fetching artist details:', detailError);
        setError(`Failed to load artist details: ${detailError.message}`);
        setLoading(false);
        return;
      }

      if (artistDetails.length === 0) {
        setError(`No songs found for "${cleanedArtistName}". Please check the artist name.`);
      } else {
        setArtistDetails(artistDetails);
      }
    } catch (error) {
      console.error('Error loading artist details:', error);
      setError(`Failed to load artist details: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="artist-details-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p className="loading-text">Loading artist details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="artist-details-page">
        <div className="error-message">
          <i className="fas fa-exclamation-triangle"></i>
          <h3>Error</h3>
          <p>{error}</p>
          <button onClick={onBack} className="back-btn">
            <i className="fas fa-arrow-left"></i>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="artist-details-page">
      <header className="header">
        <button onClick={onBack} className="back-btn">
          <i className="fas fa-arrow-left"></i>
          Back to Artists
        </button>
        <div className="artist-info">
          <h1>{cleanArtistName(artist)}</h1>
          <p className="country-subtitle">from {getDisplayName(country)}</p>
        </div>
      </header>

      <div className="content">
        <div className="songs-grid">
          {artistDetails.map((detail, index) => (
            <div key={index} className="song-card">
              <div className="song-info">
                <h3 className="song-title">
                  {detail.id?.title || detail.title || 'Unknown Song'}
                </h3>
                <p className="song-artist">
                  {detail.id?.artistName || detail.artistName || detail.artist || 'Unknown Artist'}
                </p>
                <p className="song-country">
                  {getDisplayName(detail.id?.countryName || detail.countryName || detail.country || 'Unknown Country')}
                </p>
              </div>
              <div className="song-stats">
                <div className="stat">
                  <span className="stat-label">Streams:</span>
                  <span className="stat-value">
                    {detail.streams ? new Intl.NumberFormat().format(detail.streams) : 'N/A'}
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-label">Global Rank:</span>
                  <span className="stat-value">
                    {detail.global || 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistDetailsPage;
