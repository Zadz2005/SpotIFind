// API Configuration for Spot-I-Find Frontend
// This file handles the backend API URL for different environments

// Get the API URL from environment variables or use Railway production URL
const API_BASE_URL = 'https://spot-i-find-production.up.railway.app';

// API endpoints
export const API_ENDPOINTS = {
  COUNTRIES: `${API_BASE_URL}/api/v1/Country`,
  ARTIST_DETAILS: `${API_BASE_URL}/api/v1/artist-details`,
};

// Helper function to make API calls
export const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

// Specific API functions
export const fetchCountries = () => apiCall(API_ENDPOINTS.COUNTRIES);
export const fetchArtistDetails = (params = {}) => {
  const url = new URL(API_ENDPOINTS.ARTIST_DETAILS);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return apiCall(url.toString());
};

export default API_ENDPOINTS;
