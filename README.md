# React Simple Shopping App

Frontend-only React application intended for interview debugging exercises. State and data are mocked locally; no backend services are required.

## Prerequisites
- Node.js 18+
- npm 9+ (ships with Node.js 18)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the printed local URL (defaults to `http://localhost:5173`) in your browser.

### Credentials
- Username: `admin`
- Password: `1234`

## Available Scripts
- `npm run dev`: Launches the Vite dev server with hot reload.
- `npm run build`: Bundles the app for production into the `dist` folder.
- `npm run preview`: Serves the production build locally.

## Notes
- The project intentionally includes several bugs and unfinished enhancements as outlined in the interview brief.
- All application state lives in-memory using React Context and mock data files under `src/data`.
