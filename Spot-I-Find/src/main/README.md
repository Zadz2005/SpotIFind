# 🎵 Spot-I-Find

A web application for discovering Spotify artists by country, built with React frontend and Spring Boot backend.

## 📁 Project Structure

This repository contains the main project documentation and guides. The actual application code has been separated into two independent projects:

```
Spot-I-Find/
├── README.md                    ← This file (main documentation)
├── DEPLOYMENT_GUIDE.md          ← Complete deployment instructions
├── SEPARATION_SUMMARY.md        ← Summary of project separation
├── CUSTOM_FLAGS_GUIDE.md        ← Guide for adding custom country flags
├── EXAMPLE_FLAG_SETUP.md        ← Quick flag setup example
├── FLAG_GUIDE.md               ← Flag system documentation
├── spot-i-find-frontend/        ← React frontend application
└── spot-i-find-backend/         ← Spring Boot backend API
```

## 🚀 Quick Start

### Frontend (React)
```bash
cd spot-i-find-frontend
npm install
npm start
```
Visit: http://localhost:3000

### Backend (Spring Boot)
```bash
cd spot-i-find-backend
mvn spring-boot:run
```
API: http://localhost:8080

## 🌐 Deployment

For complete deployment instructions, see:
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Step-by-step deployment guide
- **[SEPARATION_SUMMARY.md](SEPARATION_SUMMARY.md)** - Project separation details

### Recommended Deployment
- **Frontend**: Vercel
- **Backend**: Railway
- **Database**: Railway PostgreSQL

## 🎨 Features

- **Country Flags**: Custom flag images with emoji fallbacks
- **Artist Discovery**: Browse artists by country
- **Search**: Filter countries and artists
- **Responsive Design**: Works on mobile and desktop
- **Black & Green Theme**: Modern UI with Spotify-inspired colors

## 🔧 Customization

### Adding Custom Country Flags
See **[CUSTOM_FLAGS_GUIDE.md](CUSTOM_FLAGS_GUIDE.md)** for detailed instructions on adding custom flag images.

### Quick Flag Setup
See **[EXAMPLE_FLAG_SETUP.md](EXAMPLE_FLAG_SETUP.md)** for a quick example.

## 📋 API Endpoints

### Countries
- `GET /api/v1/Country` - Get all countries and artists
- `GET /api/v1/Country/{countryName}` - Get artists by country

### Artist Details
- `GET /api/v1/artist-details` - Get all artist details
- `GET /api/v1/artist-details?artist={artistName}` - Get details by artist
- `GET /api/v1/artist-details?country={countryName}` - Get details by country

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **CSS3** - Styling with custom animations
- **JavaScript ES6+** - Modern JavaScript features

### Backend
- **Spring Boot 3.2** - Java framework
- **Spring Data JPA** - Database ORM
- **H2 Database** - In-memory database (development)
- **Maven** - Build tool

## 🔄 Automatic Deployment

Once deployed, the application automatically updates when you push code changes:
- **Frontend**: Vercel auto-deploys in 1-3 minutes
- **Backend**: Railway auto-deploys in 2-5 minutes

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter issues:
1. Check the deployment guide
2. Review the troubleshooting section
3. Check browser console for errors
4. Verify environment variables

---

**Happy coding! 🎵**
