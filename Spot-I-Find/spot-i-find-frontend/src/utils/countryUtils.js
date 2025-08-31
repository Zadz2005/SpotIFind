// Country code to flag emoji mapping (fallback)
export const countryFlags = {
  'US': '🇺🇸', 'GB': '🇬🇧', 'AU': '🇦🇺', 'AR': '🇦🇷', 'AT': '🇦🇹', 'AD': '🇦🇩'
};

// Country code to image file mapping
export const countryImageFlags = {
  // Flag images available in the images/flags folder
  'US': 'us.png',
  'GB': 'gb.png',
  'AU': 'au.png',
  'AR': 'ar.png',
  'AT': 'at.png',
  'AD': 'ad.png',
};

export function getCountryCode(countryName) {
  console.log(`Getting country code for: "${countryName}"`);
  
  // Handle the actual database values like "us weekly totals", "gb weekly totals", etc.
  const countryCodeMap = {
    // Handle the "weekly totals" format from database
    'us weekly totals': 'US',
    'gb weekly totals': 'GB',
    'au weekly totals': 'AU',
    'ar weekly totals': 'AR',
    'at weekly totals': 'AT',
    'ad weekly totals': 'AD',
    'global weekly totals': 'GLOBAL', // Special case for global
    
    // Also keep the original mappings for flexibility
    'United States': 'US',
    'United States of America': 'US',
    'USA': 'US',
    'US': 'US',
    
    'United Kingdom': 'GB',
    'UK': 'GB',
    'Great Britain': 'GB',
    'England': 'GB',
    
    'Australia': 'AU',
    'AU': 'AU',
    
    'Argentina': 'AR',
    'AR': 'AR',
    
    'Austria': 'AT',
    'AT': 'AT',
    
    'Andorra': 'AD',
    'AD': 'AD'
  };

  // Try exact match first
  let code = countryCodeMap[countryName];
  
  // If no exact match, try case-insensitive match
  if (!code) {
    const lowerCountryName = countryName.toLowerCase();
    for (const [key, value] of Object.entries(countryCodeMap)) {
      if (key.toLowerCase() === lowerCountryName) {
        code = value;
        break;
      }
    }
  }
  
  if (!code) {
    console.warn(`No flag mapping found for country: "${countryName}". No flag will be shown.`);
    return null;
  }
  console.log(`Found country code: ${code} for "${countryName}"`);
  return code;
}

export function getCountryFlag(countryName) {
  const countryCode = getCountryCode(countryName);
  return countryCode ? countryFlags[countryCode] : '';
}

// New function to get country flag image with fallback to emoji
export function getCountryFlagImage(countryName) {
  const countryCode = getCountryCode(countryName);

  // If no country code found, return no flag
  if (!countryCode) {
    return {
      type: 'none',
      alt: `${countryName} flag`
    };
  }

  // Check if we have a custom image for this country
  if (countryImageFlags[countryCode]) {
    // Use a simpler path - just the filename
    const imagePath = `/images/flags/${countryImageFlags[countryCode]}`;
    console.log(`Loading flag image for ${countryName} (${countryCode}): ${imagePath}`);
    
    return {
      type: 'image',
      src: imagePath,
      alt: `${countryName} flag`
    };
  }

  // No image available for this country
  console.log(`No image found for ${countryName} (${countryCode}), no flag will be shown`);
  return {
    type: 'none',
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