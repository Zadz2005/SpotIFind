
# 🚩 Quick Example: Adding Your First Custom Flag

## 📝 **Step-by-Step Guide**

### **Step 1: Create the Folder**
```bash
# In your project root, create the flags folder
mkdir -p public/images/flags
```

### **Step 2: Get a Flag Image**
1. **Download** a US flag image (PNG format)
2. **Resize** to 32x24 pixels
3. **Save as** `us.png` in `public/images/flags/`

### **Step 3: Update the Code**
Edit `src/utils/countryUtils.js` and uncomment/add this line:

```javascript
export const countryImageFlags = {
  'US': 'us.png',  // ← Uncomment this line
  // Add more flags here...
};
```

### **Step 4: Test**
1. **Start your app**: `npm start`
2. **Check the homepage** - US flag should now show as custom image instead of 🇺🇸

## 🎯 **What You'll See**

**Before (emoji flag):**
```
🇺🇸 United States
```

**After (custom image):**
```
[Custom US Flag Image] United States
```

## 🔧 **Troubleshooting**

**If the image doesn't show:**
1. Check file path: `public/images/flags/us.png`
2. Verify the mapping in `countryUtils.js`
3. Check browser console for errors
4. Clear browser cache and reload

**If you see a broken image:**
- The app will automatically fall back to the emoji flag 🇺🇸

## 📁 **File Structure After Setup**

```
your-project/
├── public/
│   └── images/
│       └── flags/
│           └── us.png          ← Your custom flag
├── src/
│   └── utils/
│       └── countryUtils.js     ← Updated with mapping
└── ...
```

## 🚀 **Next Steps**

Once you've successfully added the US flag:
1. **Add more flags** following the same pattern
2. **Use the full guide** in `CUSTOM_FLAGS_GUIDE.md`
3. **Customize sizes** if needed
4. **Add different formats** (SVG, etc.)

Your custom flags will make your Spot-I-Find app look amazing! 🎵
