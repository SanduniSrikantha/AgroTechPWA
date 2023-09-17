// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app