# 🚩 Custom Country Flag Images Guide

## 📁 **Where to Place Your Images**

### **Option 1: React Public Folder (Recommended)**
```
public/
└── images/
    └── flags/
        ├── us.png      (United States)
        ├── uk.png      (United Kingdom)
        ├── ca.png      (Canada)
        ├── au.png      (Australia)
        ├── de.png      (Germany)
        ├── fr.png      (France)
        ├── it.png      (Italy)
        ├── es.png      (Spain)
        ├── jp.png      (Japan)
        ├── br.png      (Brazil)
        └── ...
```

### **Option 2: Spring Boot Static Folder**
```
resources/static/images/flags/
├── us.png
├── uk.png
├── ca.png
└── ...
```

## 🎨 **Image Specifications**

### **Technical Requirements:**
- **Format**: PNG (preferred) or SVG
- **Dimensions**: 32x24 pixels (4:3 aspect ratio)
- **Background**: Transparent
- **File Size**: < 10KB per image
- **Quality**: High resolution (will be scaled down)

### **Naming Convention:**
- Use ISO 3166-1 alpha-2 country codes
- Lowercase letters
- `.png` extension
- Examples: `us.png`, `uk.png`, `ca.png`

## 🌍 **Country Code Mapping**

| Country | Code | Filename |
|---------|------|----------|
| United States | US | `us.png` |
| United Kingdom | GB | `uk.png` |
| Canada | CA | `ca.png` |
| Australia | AU | `au.png` |
| Germany | DE | `de.png` |
| France | FR | `fr.png` |
| Italy | IT | `it.png` |
| Spain | ES | `es.png` |
| Japan | JP | `jp.png` |
| Brazil | BR | `br.png` |
| India | IN | `in.png` |
| China | CN | `cn.png` |
| Mexico | MX | `mx.png` |
| Netherlands | NL | `nl.png` |
| Sweden | SE | `se.png` |
| Norway | NO | `no.png` |
| Denmark | DK | `dk.png` |
| Finland | FI | `fi.png` |
| Switzerland | CH | `ch.png` |
| Austria | AT | `at.png` |

## 🔧 **How to Add Custom Flags**

### **Step 1: Prepare Your Images**
1. **Find flag images** (PNG format recommended)
2. **Resize to 32x24 pixels** (4:3 aspect ratio)
3. **Ensure transparent background**
4. **Save with correct filename** (e.g., `us.png`)

### **Step 2: Place Images**
1. **Create the folder structure**:
   ```bash
   mkdir -p public/images/flags
   ```

2. **Copy your images** to the flags folder

### **Step 3: Update the Code**
Edit `src/utils/countryUtils.js` and add your mappings:

```javascript
// Country code to image file mapping
export const countryImageFlags = {
  // Add your custom image mappings here
  'US': 'us.png',
  'GB': 'uk.png',
  'CA': 'ca.png',
  'AU': 'au.png',
  'DE': 'de.png',
  'FR': 'fr.png',
  'IT': 'it.png',
  'ES': 'es.png',
  'JP': 'jp.png',
  'BR': 'br.png',
  // Add more as needed...
};
```

### **Step 4: Test**
1. **Start your React app**: `npm start`
2. **Check the homepage** - your custom flags should appear
3. **If images don't load**, check the browser console for errors

## 🎯 **Example Implementation**

### **For United States Flag:**

1. **Save image as**: `public/images/flags/us.png`
2. **Add to countryUtils.js**:
   ```javascript
   export const countryImageFlags = {
     'US': 'us.png',
     // ... other flags
   };
   ```
3. **Result**: US flag will show as custom image instead of emoji 🇺🇸

## ⚠️ **Important Notes**

### **Fallback System:**
- If custom image fails to load → falls back to emoji flag
- If no emoji available → shows 🌍 (globe)

### **Best Practices:**
- **Keep file names lowercase**
- **Use only letters and numbers** in filenames
- **Test images** in the app after adding
- **Optimize images** for web (compress if needed)

### **Troubleshooting:**

**Image not showing:**
1. Check file path: `public/images/flags/[countrycode].png`
2. Verify filename matches country code mapping
3. Check browser console for 404 errors
4. Ensure image format is supported (PNG/SVG)

**Wrong flag showing:**
1. Verify country code mapping in `countryUtils.js`
2. Check that country name matches exactly
3. Clear browser cache and reload

## 🎨 **Image Sources**

### **Free Flag Resources:**
- **Flagpedia.net** - High-quality flag images
- **Wikimedia Commons** - Public domain flags
- **Countryflags.com** - Various formats available
- **Flaticon.com** - Icon-style flags

### **Image Editing Tools:**
- **GIMP** (free) - Resize and optimize
- **Photoshop** - Professional editing
- **Online tools** - Resizeimage.net, TinyPNG

## 📱 **Responsive Design**

The flag images are automatically:
- **Scaled** to fit the container (80x60px)
- **Responsive** on mobile devices
- **Optimized** for different screen sizes

## 🚀 **Quick Start**

1. **Download flag images** for your countries
2. **Resize to 32x24px** with transparent background
3. **Save as** `[countrycode].png` in `public/images/flags/`
4. **Add mapping** in `countryUtils.js`
5. **Test** in your React app

Your custom flags will now display beautifully in your Spot-I-Find application! 🎵
