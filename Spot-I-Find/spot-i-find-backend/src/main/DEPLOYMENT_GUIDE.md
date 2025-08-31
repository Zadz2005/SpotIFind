# 🚀 Spot-I-Find Deployment Guide

Complete guide to deploy your Spot-I-Find application to production.

## 📋 Prerequisites

### Required Accounts
- **GitHub** account
- **Vercel** account (for frontend)
- **Railway** account (for backend) - Recommended
- **Heroku** account (alternative for backend)

### Required Tools
- **Git** installed
- **Node.js** (for local frontend testing)
- **Java 17** (for local backend testing)

## 🎯 Deployment Strategy

```
Frontend (React) → Vercel
Backend (Spring Boot) → Railway/Heroku
Database → Railway PostgreSQL / Heroku Postgres
```

## 📁 Project Structure After Separation

```
Spot-I-Find/
├── spot-i-find-frontend/     ← React app for Vercel
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
└── spot-i-find-backend/      ← Spring Boot for Railway/Heroku
    ├── java/
    ├── resources/
    ├── pom.xml
    └── README.md
```

## 🎵 Step 1: Backend Deployment (Railway - Recommended)

### 1.1 Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with your GitHub account
3. Verify your email

### 1.2 Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your GitHub repository
4. Select the `spot-i-find-backend` folder

### 1.3 Configure Environment Variables
Add these environment variables in Railway dashboard:
```
SPRING_PROFILES_ACTIVE=production
SPRING_DATASOURCE_URL=${DATABASE_URL}
SPRING_DATASOURCE_USERNAME=${DB_USERNAME}
SPRING_DATASOURCE_PASSWORD=${DB_PASSWORD}
```

### 1.4 Add Database (Optional)
1. Click "New" → "Database" → "PostgreSQL"
2. Railway will automatically set `DATABASE_URL`
3. Your backend will connect to this database

### 1.5 Deploy
1. Railway will automatically build and deploy
2. Wait for deployment to complete
3. Note your backend URL (e.g., `https://your-app.railway.app`)

## 🌐 Step 2: Frontend Deployment (Vercel)

### 2.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Verify your email

### 2.2 Import Project
1. Click "New Project"
2. Import your GitHub repository
3. Select the `spot-i-find-frontend` folder
4. Configure project settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `spot-i-find-frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

### 2.3 Configure Environment Variables
Add this environment variable in Vercel dashboard:
```
REACT_APP_API_URL=https://your-backend.railway.app
```
Replace with your actual backend URL from Step 1.

### 2.4 Deploy
1. Click "Deploy"
2. Vercel will build and deploy your frontend
3. Note your frontend URL (e.g., `https://your-app.vercel.app`)

## 🔧 Step 3: Connect Frontend to Backend

### 3.1 Update CORS Configuration
In your backend `SpotIFindApplication.java`, ensure CORS allows your Vercel domain:

```java
@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/api/**")
                    .allowedOrigins(
                        "http://localhost:3000",
                        "https://your-app.vercel.app",  // Add your Vercel URL
                        "https://*.vercel.app"
                    )
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*");
        }
    };
}
```

### 3.2 Test the Connection
1. Visit your Vercel frontend URL
2. Try to load countries
3. Check browser console for any CORS errors
4. If errors occur, update CORS configuration and redeploy backend

## 🔄 Step 4: Automatic Deployments

### 4.1 GitHub Repository Setup
1. Push both projects to GitHub:
   ```bash
   # Frontend
   cd spot-i-find-frontend
   git init
   git add .
   git commit -m "Initial frontend commit"
   git remote add origin https://github.com/yourusername/spot-i-find-frontend.git
   git push -u origin main

   # Backend
   cd ../spot-i-find-backend
   git init
   git add .
   git commit -m "Initial backend commit"
   git remote add origin https://github.com/yourusername/spot-i-find-backend.git
   git push -u origin main
   ```

### 4.2 Automatic Deployment Flow
```
You make code changes
    ↓
Push to GitHub
    ↓
Vercel auto-deploys frontend (1-3 minutes)
Railway auto-deploys backend (2-5 minutes)
    ↓
Your website updates automatically!
```

## 🧪 Step 5: Testing

### 5.1 Test Frontend
- Visit your Vercel URL
- Check if countries load
- Test search functionality
- Test navigation between pages

### 5.2 Test Backend
- Visit `https://your-backend.railway.app/api/v1/Country`
- Should return JSON data
- Check for any errors

### 5.3 Test Full Flow
1. Load homepage
2. Click on a country
3. Click on an artist
4. Verify all data loads correctly

## 🔧 Troubleshooting

### Common Issues

#### CORS Errors
**Problem**: Frontend can't connect to backend
**Solution**: Update CORS configuration in backend to include your Vercel domain

#### Environment Variables
**Problem**: Frontend shows "Cannot connect to backend"
**Solution**: Check `REACT_APP_API_URL` in Vercel environment variables

#### Build Failures
**Problem**: Vercel build fails
**Solution**: 
- Check `package.json` has correct scripts
- Ensure all dependencies are listed
- Check for syntax errors in React code

#### Backend Won't Start
**Problem**: Railway deployment fails
**Solution**:
- Check Java version (should be 17)
- Verify `pom.xml` is correct
- Check application logs in Railway dashboard

### Debugging Commands

#### Check Backend Health
```bash
curl https://your-backend.railway.app/actuator/health
```

#### Check Frontend Build
```bash
cd spot-i-find-frontend
npm run build
```

#### Local Testing
```bash
# Backend
cd spot-i-find-backend
mvn spring-boot:run

# Frontend (in new terminal)
cd spot-i-find-frontend
npm start
```

## 🎉 Success!

Once everything is working:
- ✅ Frontend deployed to Vercel
- ✅ Backend deployed to Railway
- ✅ Automatic deployments enabled
- ✅ Full application working

Your Spot-I-Find application is now live and will automatically update whenever you push code changes!

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Railway and Vercel logs
3. Check browser console for errors
4. Verify environment variables are set correctly

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railway Dashboard**: https://railway.app/dashboard
- **GitHub**: https://github.com
- **Spot-I-Find Frontend**: Your Vercel URL
- **Spot-I-Find Backend**: Your Railway URL
