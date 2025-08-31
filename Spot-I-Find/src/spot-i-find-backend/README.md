# 🎵 Spot-I-Find Backend

Spring Boot backend API for the Spot-I-Find application.

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Maven 3.6 or higher

### Local Development
```bash
# Install dependencies
mvn clean install

# Run the application
mvn spring-boot:run
```

The API will be available at `http://localhost:8080`

## 🌐 Deployment

### Railway Deployment (Recommended)
1. **Create Railway Account:**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Connect Repository:**
   - Create new project
   - Connect your GitHub repository
   - Railway will auto-detect Spring Boot

3. **Environment Variables:**
   - Add database configuration if needed
   - Set `PORT` if required

4. **Deploy:**
   - Railway will automatically deploy on every push to main branch

### Heroku Deployment
1. **Create Heroku Account:**
   - Go to [heroku.com](https://heroku.com)
   - Sign up and install Heroku CLI

2. **Deploy:**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### DigitalOcean App Platform
1. **Create DigitalOcean Account:**
   - Go to [digitalocean.com](https://digitalocean.com)
   - Create account

2. **Deploy:**
   - Create new app
   - Connect GitHub repository
   - Select Spring Boot buildpack

## 🔧 Configuration

### Environment Variables
```properties
# Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=create-drop

# Server
server.port=8080

# CORS (for frontend integration)
spring.web.cors.allowed-origins=https://your-frontend.vercel.app
```

### CORS Configuration
The backend is configured to allow requests from:
- `http://localhost:3000` (development)
- `https://*.vercel.app` (Vercel frontend)
- `https://*.railway.app` (Railway frontend)

## 📁 Project Structure
```
java/
├── com/SpotifyArtists/Spot_I_Find/
│   ├── artist/                    # Artist detail entities and controllers
│   │   ├── ArtistDetail.java
│   │   ├── ArtistDetailController.java
│   │   ├── ArtistDetailService.java
│   │   └── ArtistDetailRepository.java
│   ├── Country/                   # Country entities and controllers
│   │   ├── Country.java
│   │   ├── CountryController.java
│   │   ├── CountryService.java
│   │   └── CountryRepository.java
│   └── SpotIFindApplication.java  # Main application class
resources/
├── application.properties         # Application configuration
└── data.sql                      # Sample data (if any)
```

## 🔌 API Endpoints

### Countries
- `GET /api/v1/Country` - Get all countries and artists
- `GET /api/v1/Country/{countryName}` - Get artists by country

### Artist Details
- `GET /api/v1/artist-details` - Get all artist details
- `GET /api/v1/artist-details?artist={artistName}` - Get details by artist
- `GET /api/v1/artist-details?country={countryName}` - Get details by country

## 🗄️ Database

### Current Setup
- **H2 In-Memory Database** (for development)
- **JPA/Hibernate** for ORM
- **Auto-generated schema** from entities

### Production Database
For production, consider:
- **PostgreSQL** (Railway, Heroku)
- **MySQL** (DigitalOcean)
- **MongoDB** (MongoDB Atlas)

## 🔒 Security

### CORS Configuration
The application includes CORS configuration to allow frontend requests:
```java
@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:3000", 
                                   "https://*.vercel.app",
                                   "https://*.railway.app")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*");
        }
    };
}
```

## 🚀 Automatic Deployment
- **Railway**: Automatic deployment on every push to main branch
- **Heroku**: Automatic deployment on every push to main branch
- **DigitalOcean**: Automatic deployment on every push to main branch

## 📊 Monitoring
- **Health Check**: `GET /actuator/health`
- **Application Info**: `GET /actuator/info`

## 🔧 Development

### Running Tests
```bash
mvn test
```

### Building JAR
```bash
mvn clean package
```

### Running JAR
```bash
java -jar target/Spot-I-Find-1.0.0.jar
```

## 📄 License
MIT License
