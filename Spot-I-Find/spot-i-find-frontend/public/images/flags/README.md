# Country Flag Images

## 📁 **Folder Structure**
```
public/images/flags/
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

### **Country Code Mapping:**
Common countries and their codes:
- United States: `us`
- United Kingdom: `uk`
- Canada: `ca`
- Australia: `au`
- Germany: `de`
- France: `fr`
- Italy: `it`
- Spain: `es`
- Japan: `jp`
- Brazil: `br`
- India: `in`
- China: `cn`
- Mexico: `mx`
- Netherlands: `nl`
- Sweden: `se`
- Norway: `no`
- Denmark: `dk`
- Finland: `fi`
- Switzerland: `ch`
- Austria: `at`

## 🔧 **How to Add New Flags:**

1. **Find your country's ISO code** (search online for "ISO country codes")
2. **Create/obtain flag image** with specifications above
3. **Save as** `[countrycode].png` in this folder
4. **Update** the `countryFlags` mapping in `src/utils/countryUtils.js`

## 📝 **Example:**
If you want to add the French flag:
1. Save flag image as `fr.png` in this folder
2. Add to `countryUtils.js`: `"France": "fr"`
3. The app will automatically use your custom image!

## ⚠️ **Important Notes:**
- Keep file names lowercase
- Use only letters and numbers in filenames
- Test images in the app after adding
- Fallback to emoji flags if image not found
