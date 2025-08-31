import React, { useState, useEffect } from 'react';
import './ArtistDetailsPage.css';
import { fetchCountries, fetchArtistDetails } from '../utils/apiConfig';

const ArtistDetailsPage = ({ artist, country, onBack }) => {
  const [artistDetails, setArtistDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArtistDetails();
  }, [artist]);

  const cleanArtistName = (artistName) => {
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

      // Get all artist details first
      console.log('Fetching all artist details...');
      let allArtistDetails;
      try {
        allArtistDetails = await fetchArtistDetails();
        console.log('All artist details received:', allArtistDetails);
      } catch (allError) {
        console.error('Error fetching all artist details:', allError);
        setError(`Failed to load artist details: ${allError.message}`);
        setLoading(false);
        return;
      }

      // Filter for the specific artist
      const filteredDetails = allArtistDetails.filter(detail => {
        const detailArtistName = detail.artistName || detail.artist || detail.id?.artistName;
        return detailArtistName && detailArtistName.toLowerCase().includes(cleanedArtistName.toLowerCase());
      });

      console.log('Filtered artist details:', filteredDetails);

      if (filteredDetails.length === 0) {
        setError(`No songs found for "${cleanedArtistName}". Please check the artist name.`);
      } else {
        setArtistDetails(filteredDetails);
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
          <p className="country-subtitle">from {country}</p>
        </div>
      </header>

      <div className="content">
        <div className="songs-grid">
          {artistDetails.map((detail, index) => (
            <div key={index} className="song-card">
              <div className="song-info">
                <h3 className="song-title">
                  {detail.title || 'Unknown Song'}
                </h3>
                <p className="song-artist">
                  {detail.artistName || detail.artist || 'Unknown Artist'}
                </p>
                <p className="song-country">
                  {detail.countryName || detail.country || 'Unknown Country'}
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
                  <span className="stat-label">Rank:</span>
                  <span className="stat-value">
                    {detail.rank || detail.countryRank || 'N/A'}
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
