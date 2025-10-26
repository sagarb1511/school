import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGpznqp-blzbe076TnNpxLFXh3mawsTQY",
  authDomain: "nodejs-2d35a.firebaseapp.com",
  databaseURL: "https://nodejs-2d35a-default-rtdb.firebaseio.com",
  projectId: "nodejs-2d35a",
  storageBucket: "nodejs-2d35a.appspot.com",
  messagingSenderId: "794426375729",
  appId: "1:794426375729:web:57bc5e05378e03ae9e9f10",
  measurementId: "G-TTNHEL72TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { app, database, storage };
