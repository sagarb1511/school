import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWk9vSHadp8mYlysdeDfZh0vCv7Byivq4",
  authDomain: "vishalraoshindeschool.firebaseapp.com",
  databaseURL: "https://vishalraoshindeschool-default-rtdb.firebaseio.com",
  projectId: "vishalraoshindeschool",
  storageBucket: "vishalraoshindeschool.firebasestorage.app",
  messagingSenderId: "1046805738642",
  appId: "1:1046805738642:web:2945ff2a445aa39db9624b",
  measurementId: "G-7XQCBMLCTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { app, database, storage };
