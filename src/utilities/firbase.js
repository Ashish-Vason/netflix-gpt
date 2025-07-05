// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA1x0ncpqbRNTfQlS2-1BtQcgWflnmSN-Q',
  authDomain: 'netflixgpt-website.firebaseapp.com',
  projectId: 'netflixgpt-website',
  storageBucket: 'netflixgpt-website.firebasestorage.app',
  messagingSenderId: '25994828243',
  appId: '1:25994828243:web:4dd37484a78cb317f33726',
  measurementId: 'G-7VXL556D80',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
