import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDC_W_mYAZj_tDTqzfpo6Gv7Uf01c-Fo-Q",
    authDomain: "botogram-40d6c.firebaseapp.com",
    projectId: "botogram-40d6c",
    storageBucket: "botogram-40d6c.appspot.com",
    messagingSenderId: "1065423532596",
    appId: "1:1065423532596:web:e621eeed48c108b37cd061"
  }).auth();