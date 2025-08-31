// Global variables
let allCountries = [];
let currentCountry = null;
let currentArtist = null;

// Country code to flag emoji mapping
const countryFlags = {
    'US': '🇺🇸', 'GB': '🇬🇧', 'CA': '🇨🇦', 'MX': '🇲🇽', 'AU': '🇦🇺', 'DE': '🇩🇪', 'PH': '🇵🇭', 'IN': '🇮🇳',
    'BR': '🇧🇷', 'FR': '🇫🇷', 'NL': '🇳🇱', 'SE': '🇸🇪', 'IT': '🇮🇹', 'MY': '🇲🇾', 'NO': '🇳🇴', 'ES': '🇪🇸',
    'PL': '🇵🇱', 'DK': '🇩🇰', 'TR': '🇹🇷', 'CL': '🇨🇱', 'SG': '🇸🇬', 'PT': '🇵🇹', 'BE': '🇧🇪', 'TH': '🇹🇭',
    'NZ': '🇳🇿', 'AR': '🇦🇷', 'CH': '🇨🇭', 'FI': '🇫🇮', 'PE': '🇵🇪', 'IE': '🇮🇪', 'GR': '🇬🇷', 'CO': '🇨🇴',
    'RO': '🇷🇴', 'ZA': '🇿🇦', 'AE': '🇦🇪', 'CZ': '🇨🇿', 'VN': '🇻🇳', 'HU': '🇭🇺', 'AT': '🇦🇹', 'SA': '🇸🇦',
    'TW': '🇹🇼', 'IL': '🇮🇱', 'BG': '🇧🇬', 'SK': '🇸🇰', 'CR': '🇨🇷', 'EC': '🇪🇨', 'LT': '🇱🇹', 'HK': '🇭🇰',
    'KZ': '🇰🇿', 'UA': '🇺🇦', 'PK': '🇵🇰', 'RU': '🇷🇺', 'EG': '🇪🇬', 'LV': '🇱🇻', 'JP': '🇯🇵', 'GT': '🇬🇹',
    'MA': '🇲🇦', 'KR': '🇰🇷', 'EE': '🇪🇪', 'PA': '🇵🇦', 'HN': '🇭🇳', 'BO': '🇧🇴', 'SV': '🇸🇻', 'IS': '🇮🇸',
    'DO': '🇩🇴', 'NI': '🇳🇮', 'PY': '🇵🇾', 'UY': '🇺🇾', 'CY': '🇨🇾', 'LU': '🇱🇺', 'VE': '🇻🇪', 'NG': '🇳🇬',
    'MT': '🇲🇹', 'BY': '🇧🇾', 'AD': '🇦🇩'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadCountries();
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');

    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearch);
    }
}

async function loadCountries() {
    try {
        showLoading(true);
        const response = await fetch('/api/v1/Country');
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        
        const countries = await response.json();
        allCountries = countries;
        
        // Group countries and count unique artists
        const countryMap = new Map();
        countries.forEach(country => {
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

        // Check for missing flag mappings (for debugging)
        checkMissingFlagMappings(uniqueCountries);

        displayCountries(uniqueCountries);
        showLoading(false);
    } catch (error) {
        console.error('Error loading countries:', error);
        showError('Failed to load countries. Please try again.');
        showLoading(false);
    }
}

// Helper function to identify countries without flag mappings
function checkMissingFlagMappings(countries) {
    const missingFlags = [];
    countries.forEach(country => {
        const countryCode = getCountryCode(country.name);
        if (countryCode === 'UN') {
            missingFlags.push(country.name);
        }
    });
    
    if (missingFlags.length > 0) {
        console.log('🌍 Countries without flag mappings:', missingFlags);
        console.log('💡 To add flags, update the countryCodeMap in getCountryCode() function');
    }
}

function displayCountries(countries) {
    const grid = document.getElementById('countriesGrid');
    const noResults = document.getElementById('noResults');
    
    if (countries.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noResults.style.display = 'none';

    grid.innerHTML = countries.map(country => {
        const countryCode = getCountryCode(country.name);
        const flag = countryFlags[countryCode] || '🌍';
        
        return `
            <div class="country-card" onclick="navigateToArtists('${country.name}')">
                <div class="country-flag" style="font-size: 3rem; line-height: 60px;">${flag}</div>
                <div class="country-name">${country.name}</div>
                <div class="artist-count">${country.artistCount} artist${country.artistCount !== 1 ? 's' : ''}</div>
            </div>
        `;
    }).join('');
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const clearBtn = document.getElementById('clearSearch');
    
    if (searchTerm) {
        clearBtn.style.display = 'block';
        const filteredCountries = allCountries.filter(country => 
            country.country.toLowerCase().includes(searchTerm)
        );
        
        // Group filtered results
        const countryMap = new Map();
        filteredCountries.forEach(country => {
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

        displayCountries(uniqueCountries);
    } else {
        clearBtn.style.display = 'none';
        loadCountries();
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    loadCountries();
}

function getCountryCode(countryName) {
    // Comprehensive mapping of country names to ISO codes
    const countryCodeMap = {
        // Major countries
        'United States': 'US', 'United Kingdom': 'GB', 'Canada': 'CA', 'Mexico': 'MX',
        'Australia': 'AU', 'Germany': 'DE', 'Philippines': 'PH', 'India': 'IN',
        'Brazil': 'BR', 'France': 'FR', 'Netherlands': 'NL', 'Sweden': 'SE',
        'Italy': 'IT', 'Malaysia': 'MY', 'Norway': 'NO', 'Spain': 'ES',
        'Poland': 'PL', 'Denmark': 'DK', 'Turkey': 'TR', 'Chile': 'CL',
        'Singapore': 'SG', 'Portugal': 'PT', 'Belgium': 'BE', 'Thailand': 'TH',
        'New Zealand': 'NZ', 'Argentina': 'AR', 'Switzerland': 'CH', 'Finland': 'FI',
        'Peru': 'PE', 'Ireland': 'IE', 'Greece': 'GR', 'Colombia': 'CO',
        'Romania': 'RO', 'South Africa': 'ZA', 'United Arab Emirates': 'AE',
        'Czech Republic': 'CZ', 'Vietnam': 'VN', 'Hungary': 'HU', 'Austria': 'AT',
        'Saudi Arabia': 'SA', 'Taiwan': 'TW', 'Israel': 'IL', 'Bulgaria': 'BG',
        'Slovakia': 'SK', 'Costa Rica': 'CR', 'Ecuador': 'EC', 'Lithuania': 'LT',
        'Hong Kong': 'HK', 'Kazakhstan': 'KZ', 'Ukraine': 'UA', 'Pakistan': 'PK',
        'Russia': 'RU', 'Egypt': 'EG', 'Latvia': 'LV', 'Japan': 'JP',
        'Guatemala': 'GT', 'Morocco': 'MA', 'South Korea': 'KR', 'Estonia': 'EE',
        'Panama': 'PA', 'Honduras': 'HN', 'Bolivia': 'BO', 'El Salvador': 'SV',
        'Iceland': 'IS', 'Dominican Republic': 'DO', 'Nicaragua': 'NI',
        'Paraguay': 'PY', 'Uruguay': 'UY', 'Cyprus': 'CY', 'Luxembourg': 'LU',
        'Venezuela': 'VE', 'Nigeria': 'NG', 'Malta': 'MT', 'Belarus': 'BY',
        'Andorra': 'AD',
        
        // Alternative spellings and variations
        'USA': 'US', 'America': 'US', 'United States of America': 'US',
        'UK': 'GB', 'Great Britain': 'GB', 'England': 'GB',
        'Czechia': 'CZ', 'Czech': 'CZ',
        'UAE': 'AE', 'Emirates': 'AE',
        'Korea': 'KR', 'South Korea': 'KR',
        'Dominican Rep': 'DO', 'Dominican Republic': 'DO',
        'El Salvador': 'SV', 'Salvador': 'SV',
        'Hong Kong SAR': 'HK', 'Hong Kong': 'HK',
        'Taiwan (Province of China)': 'TW', 'Taiwan': 'TW'
    };
    
    const code = countryCodeMap[countryName];
    if (!code) {
        console.warn(`No flag mapping found for country: "${countryName}". Using 🌍 as default.`);
        return 'UN';
    }
    return code;
}

function navigateToArtists(countryName) {
    currentCountry = countryName;
    loadArtistsPage(countryName);
}

async function loadArtistsPage(countryName) {
    try {
        showLoading(true);
        const response = await fetch(`/api/v1/Country?countryName=${encodeURIComponent(countryName)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch artists');
        }
        
        const artists = await response.json();
        displayArtistsPage(countryName, artists);
        showLoading(false);
    } catch (error) {
        console.error('Error loading artists:', error);
        showError('Failed to load artists. Please try again.');
        showLoading(false);
    }
}

function displayArtistsPage(countryName, artists) {
    const container = document.querySelector('.container');
    const countryCode = getCountryCode(countryName);
    const flag = countryFlags[countryCode] || '🌍';
    
    container.innerHTML = `
        <div class="artists-header">
            <button class="back-btn" onclick="goBack()">
                <i class="fas fa-arrow-left"></i>
                Back to Countries
            </button>
            <div class="country-info">
                <h2>${flag} ${countryName}</h2>
                <p>${artists.length} artist${artists.length !== 1 ? 's' : ''} found</p>
            </div>
        </div>
        
        <div class="artists-list">
            ${artists.map(artist => `
                <div class="artist-card" onclick="navigateToArtistDetails('${artist.artist.replace(/'/g, "\\'")}', '${countryName.replace(/'/g, "\\'")}')">
                    <div class="artist-name">${artist.artist}</div>
                    <div class="artist-rank">Rank: ${artist.rank}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function navigateToArtistDetails(artistName, countryName) {
    console.log('🎵 Artist clicked:', artistName, 'from country:', countryName);
    currentArtist = artistName;
    loadArtistDetailsPage(artistName, countryName);
}

async function loadArtistDetailsPage(artistName, countryName) {
    try {
        console.log('🔍 Fetching artist details for:', artistName);
        showLoading(true);
        const response = await fetch(`/api/v1/artist-details?artist=${encodeURIComponent(artistName)}`);
        console.log('📡 API Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch artist details: ${response.status}`);
        }
        
        const artistDetails = await response.json();
        console.log('📊 Artist details received:', artistDetails);
        displayArtistDetailsPage(artistName, countryName, artistDetails);
        showLoading(false);
    } catch (error) {
        console.error('❌ Error loading artist details:', error);
        showError('Failed to load artist details. Please try again.');
        showLoading(false);
    }
}

function displayArtistDetailsPage(artistName, countryName, artistDetails) {
    const container = document.querySelector('.container');
    const countryCode = getCountryCode(countryName);
    const flag = countryFlags[countryCode] || '🌍';
    
    if (!artistDetails || artistDetails.length === 0) {
        container.innerHTML = `
            <div class="artist-details-header">
                <button class="back-btn" onclick="navigateToArtists('${countryName}')">
                    <i class="fas fa-arrow-left"></i>
                    Back to Artists
                </button>
                <div class="artist-info">
                    <h2>${artistName}</h2>
                    <p>${flag} ${countryName}</p>
                </div>
            </div>
            
            <div style="text-align: center; padding: 40px; color: #888;">
                <i class="fas fa-music" style="font-size: 3rem; margin-bottom: 20px;"></i>
                <h3>No songs found</h3>
                <p>No song details available for this artist.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="artist-details-header">
            <button class="back-btn" onclick="navigateToArtists('${countryName}')">
                <i class="fas fa-arrow-left"></i>
                Back to Artists
            </button>
            <div class="artist-info">
                <h2>${artistName}</h2>
                <p>${flag} ${countryName}</p>
            </div>
        </div>
        
        <div class="songs-grid">
            ${artistDetails.map(song => `
                <div class="song-card">
                    <div class="song-title">${song.title || 'Unknown Song'}</div>
                    <div class="song-stats">
                        <div class="stat-item">
                            <div class="stat-label">Streams</div>
                            <div class="stat-value">${formatNumber(song.streams)}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Global Rank</div>
                            <div class="stat-value">${song.global || 'N/A'}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">US Rank</div>
                            <div class="stat-value">${song.us || 'N/A'}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">UK Rank</div>
                            <div class="stat-value">${song.gb || 'N/A'}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function goBack() {
    window.location.reload();
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    const grid = document.getElementById('countriesGrid');
    const noResults = document.getElementById('noResults');
    
    if (show) {
        loading.style.display = 'block';
        if (grid) grid.style.display = 'none';
        if (noResults) noResults.style.display = 'none';
    } else {
        loading.style.display = 'none';
    }
}

function showError(message) {
    const container = document.querySelector('.container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #ff6b6b;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px;"></i>
            <h3>Error</h3>
            <p>${message}</p>
            <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #00ff88; color: #000; border: none; border-radius: 5px; cursor: pointer;">
                Try Again
            </button>
        </div>
    `;
    
    container.appendChild(errorDiv);
}

function formatNumber(num) {
    if (num === null || num === undefined) return 'N/A';
    return new Intl.NumberFormat().format(num);
}
