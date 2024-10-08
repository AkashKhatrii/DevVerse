import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    host: '0.0.0.0',
  },
  define: {
    'process.env': {
      VITE_BACKEND_URL: JSON.stringify(process.env.VITE_BACKEND_URL),
      VITE_FIREBASE_API_KEY: JSON.stringify(process.env.VITE_FIREBASE_API_KEY),
      VITE_FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.VITE_FIREBASE_AUTH_DOMAIN),
      VITE_FIREBASE_DATABASE_URL: JSON.stringify(process.env.VITE_FIREBASE_DATABASE_URL),
      VITE_FIREBASE_PROJECT_ID: JSON.stringify(process.env.VITE_FIREBASE_PROJECT_ID),
      VITE_FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.VITE_FIREBASE_STORAGE_BUCKET),
      VITE_FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
      VITE_FIREBASE_APP_ID: JSON.stringify(process.env.VITE_FIREBASE_APP_ID),
      VITE_FIREBASE_MEASUREMENT_ID: JSON.stringify(process.env.VITE_FIREBASE_MEASUREMENT_ID),
    },
  },
})
