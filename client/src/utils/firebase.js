// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQV4uKyUDa6JdtZZpQSg3UKSeOVdlGfGA",
  authDomain: "codersbase-e1250.firebaseapp.com",
  databaseURL: "https://codersbase-e1250-default-rtdb.firebaseio.com",
  projectId: "codersbase-e1250",
  storageBucket: "codersbase-e1250.appspot.com",
  messagingSenderId: "888151611252",
  appId: "1:888151611252:web:9fe88f44bf9955e3147e21",
  measurementId: "G-4DL68Y56CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)

export default firebase;