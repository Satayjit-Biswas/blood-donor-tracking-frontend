// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQKYilZOAd77ESTE3b6lWXlBSksn_ZMH8",
  authDomain: "blood-donor-1653a.firebaseapp.com",
  projectId: "blood-donor-1653a",
  storageBucket: "blood-donor-1653a.appspot.com",
  messagingSenderId: "957644456847",
  appId: "1:957644456847:web:a8e0d7f695e267362841fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [dataComing, setDataComing] = useState(true);
  const auth = getAuth(app);

  // Email password
  const handleRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Email sign
  const handleEmailSign = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out
  const logOut = () => {
    signOut(auth).then(() => {});
  };
  // State Changed 
  useEffect(()=>{
    const notsubscibed = onAuthStateChanged(auth,user => {
        if (user){
            setUser(user)
        }
        else{
            setUser({})
        }
        
    })
    return() => notsubscibed;
},[])


  return { handleRegistration, handleEmailSign, logOut ,user};
};

export default useFirebase;
