import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMYV0iozKi3W5LNDf0VSRemnnSLXDG_Hc",
    authDomain: "images-52e1e.firebaseapp.com",
    projectId: "images-52e1e",
    storageBucket: "images-52e1e.appspot.com",
    messagingSenderId: "691005377021",
    appId: "1:691005377021:web:5ed0f65e37cee4a5563194"
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {
    db
  }