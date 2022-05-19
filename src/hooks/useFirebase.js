import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase =()=>{
const [user, setUser] = useState({});

const auth =getAuth();
const googleProvider = new GoogleAuthProvider();

const signInUsingGoogle =()=>{
    return signInWithPopup(auth, googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
}
const logOut =()=>{
    signOut(auth)
    .then(()=>{
setUser({});
    })
}
//Observe Whether users auth state changed or not
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
        }
      });
},[])
return {
    user,
    signInUsingGoogle,
    logOut
}
}
export default useFirebase;