
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1jkCzAZ3dJkeO6XG787EkX0jCubnsw8",
  authDomain: "house-marketplace-app-8b48b.firebaseapp.com",
  projectId: "house-marketplace-app-8b48b",
  storageBucket: "house-marketplace-app-8b48b.appspot.com",
  messagingSenderId: "354647219462",
  appId: "1:354647219462:web:619159c4d93d42d7025287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()