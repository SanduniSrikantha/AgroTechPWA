// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALoH5EEl4Lx0FvR-gVMTlrFznvyTrB0KY",
  authDomain: "agrotechpwa.firebaseapp.com",
  projectId: "agrotechpwa",
  storageBucket: "agrotechpwa.appspot.com",
  messagingSenderId: "749437763151",
  appId: "1:749437763151:web:fc7c1a6bcab71ccae8f43a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
export const storage = getStorage(app);
// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);