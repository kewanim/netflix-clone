# Netflix Clone

A Netflix-inspired streaming UI built with React, featuring dynamic movie data from the TMDB API and trailer playback via YouTube.

## Features

- Netflix-style homepage with categorized movie rows
- Live movie data fetched from TMDB API
- Trailer playback on row item click (react-youtube)
- Animated banner with featured movie
- Fully responsive layout using Material-UI
- Netflix logo and branding styles

## Tech Stack

- React (Create React App)
- Axios — API requests
- TMDB API — movie/TV data
- react-youtube — trailer embedding
- movie-trailer — trailer URL lookup
- Material-UI — icons and UI components

## Getting Started

```bash
# Clone the repo
git clone https://github.com/kewanim/netflix-clone.git
cd netflix-clone

# Install dependencies
npm install

# Create your environment file
cp .env.example .env
# Add your TMDB API key to .env

# Start development server
npm start
```

## Environment Variables

```
REACT_APP_API_KEY=your_tmdb_api_key_here
```

Get a free API key at [themoviedb.org](https://www.themoviedb.org/settings/api).

## Deployment

Configured for Netlify. Set `REACT_APP_API_KEY` in Netlify environment variables.

Build command: `npm run build`  
Publish directory: `build`
