import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ArtistsPage from './components/ArtistsPage';
import ArtistDetailsPage from './components/ArtistDetailsPage';
import { countryFlags, getCountryCode } from './utils/countryUtils';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCountry, setCurrentCountry] = useState(null);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigateToArtists = (countryName) => {
    console.log('🎯 Navigating to artists for country:', countryName);
    setCurrentCountry(countryName);
    setCurrentPage('artists');
  };

  const navigateToArtistDetails = (artistName, countryName) => {
    console.log('🎵 Artist clicked:', artistName, 'from country:', countryName);
    setCurrentArtist(artistName);
    setCurrentCountry(countryName);
    setCurrentPage('artistDetails');
    console.log('📱 Page changed to artistDetails');
  };

  const goBack = () => {
    if (currentPage === 'artistDetails') {
      setCurrentPage('artists');
      setCurrentArtist(null);
    } else if (currentPage === 'artists') {
      setCurrentPage('home');
      setCurrentCountry(null);
    }
  };

  const goHome = () => {
    setCurrentPage('home');
    setCurrentCountry(null);
    setCurrentArtist(null);
  };

  // Debug current state
  console.log('🔍 Current state:', { currentPage, currentCountry, currentArtist });

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <i className="fas fa-exclamation-triangle"></i>
          <h3>Error</h3>
          <p>{error}</p>
          <button onClick={() => setError(null)}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {currentPage === 'home' && (
        <HomePage 
          onCountryClick={navigateToArtists}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />
      )}
      
      {currentPage === 'artists' && (
        <ArtistsPage 
          countryName={currentCountry}
          onArtistClick={navigateToArtistDetails}
          onBack={goBack}
          onHome={goHome}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />
      )}
      
      {currentPage === 'artistDetails' && (
        <ArtistDetailsPage 
          artist={currentArtist}
          country={currentCountry}
          onBack={goBack}
        />
      )}
    </div>
  );
}

export default App;
