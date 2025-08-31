# 🎵 Spot-I-Find Frontend

React frontend application for discovering Spotify artists by country.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
```

## 🌐 Deployment

### Vercel Deployment
1. **Connect to GitHub:**
   - Push this project to a GitHub repository
   - Connect the repository to Vercel

2. **Environment Variables:**
   - Add `REACT_APP_API_URL` with your backend URL
   - Example: `https://your-backend.railway.app`

3. **Deploy:**
   - Vercel will automatically deploy on every push to main branch

### Environment Variables
Create a `.env` file for local development:
```
REACT_APP_API_URL=http://localhost:8080
```

## 📁 Project Structure
```
src/
├── components/          # React components
│   ├── HomePage.js     # Homepage with country flags
│   ├── ArtistsPage.js  # Artists list page
│   └── ArtistDetailsPage.js # Artist details page
├── utils/              # Utility functions
│   └── countryUtils.js # Country flag utilities
└── App.js              # Main app component
```

## 🎨 Features
- **Country Flags**: Custom flag images with emoji fallbacks
- **Search**: Filter countries by name
- **Responsive Design**: Works on mobile and desktop
- **Black & Green Theme**: Modern UI with Spotify-inspired colors

## 🔧 Configuration

### API Configuration
The app connects to the backend API. Update the API URL in:
- Development: `.env` file
- Production: Vercel environment variables

### Custom Flags
Add custom country flag images in `public/images/flags/`:
- Format: PNG (32x24px recommended)
- Naming: ISO country codes (e.g., `us.png`, `uk.png`)
- Update mappings in `src/utils/countryUtils.js`

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Automatic Deployment
- Every push to main branch triggers automatic deployment
- Build time: ~1-3 minutes
- Zero downtime deployments

## 🔗 Backend Integration
This frontend connects to the Spot-I-Find backend API:
- **Countries**: `/api/v1/Country`
- **Artist Details**: `/api/v1/artist-details`

## 📄 License
MIT License
