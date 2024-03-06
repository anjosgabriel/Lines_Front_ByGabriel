import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyBbPLir9jjxKMCOssLWsgg_pD6STHaP44E",
  authDomain: "lines-22bea.firebaseapp.com",
  projectId: "lines-22bea",
  storageBucket: "lines-22bea.appspot.com",
  messagingSenderId: "1039105570228",
  appId: "1:1039105570228:web:bbca3648167580185aeee1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);