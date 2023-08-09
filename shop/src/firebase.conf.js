import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVElchUTEi9MJStHdivmN9GFcTGA91e_I",
  authDomain: "shopapp-ac14a.firebaseapp.com",
  projectId: "shopapp-ac14a",
  storageBucket: "shopapp-ac14a.appspot.com",
  messagingSenderId: "804590523705",
  appId: "1:804590523705:web:37a44203e7fce72bf0c4e8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
