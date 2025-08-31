// Country code to flag emoji mapping (fallback)
export const countryFlags = {
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

// Country code to image file mapping
export const countryImageFlags = {
  // Add your custom image mappings here
  // Format: 'US': 'us.png', 'GB': 'uk.png', etc.
  // Example mappings (uncomment and add your images):
  // 'US': 'us.png',
  // 'GB': 'uk.png',
  // 'CA': 'ca.png',
  // 'AU': 'au.png',
  // 'DE': 'de.png',
  // 'FR': 'fr.png',
  // 'IT': 'it.png',
  // 'ES': 'es.png',
  // 'JP': 'jp.png',
  // 'BR': 'br.png',
};

export function getCountryCode(countryName) {
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

export function getCountryFlag(countryName) {
  const countryCode = getCountryCode(countryName);
  return countryFlags[countryCode] || '🌍';
}

// New function to get country flag image with fallback to emoji
export function getCountryFlagImage(countryName) {
  const countryCode = getCountryCode(countryName);
  
  // Check if we have a custom image for this country
  if (countryImageFlags[countryCode]) {
    return {
      type: 'image',
      src: `/images/flags/${countryImageFlags[countryCode]}`,
      alt: `${countryName} flag`
    };
  }
  
  // Fallback to emoji flag
  return {
    type: 'emoji',
    emoji: countryFlags[countryCode] || '🌍',
    alt: `${countryName} flag`
  };
}

// Helper function to check if an image exists
export function checkImageExists(imagePath) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
}

export function formatNumber(num) {
  if (num === null || num === undefined) return 'N/A';
  return new Intl.NumberFormat().format(num);
}
