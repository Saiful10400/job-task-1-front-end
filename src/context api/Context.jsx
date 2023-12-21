import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase credentials/firebase.config";

export const contextProvider = createContext(null);

const Context = ({ children }) => {

// ass states
const [user,setUser]=useState(null)


// on authstatechange
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(res)=>{
    setUser(res)
  })
  return ()=>unsubscribe
},[])


// create account with Email and password.
const emailPasswordSignin=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}

// email Password login
const emailPasswordLogin=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}

// google login
const googleLogin=()=>{
  const googleAuth =new GoogleAuthProvider()
  return signInWithPopup(auth,googleAuth)
}

// github login
const gitHubLogin=()=>{
  const gitHubAuth= new GithubAuthProvider()
  return signInWithPopup(auth,gitHubAuth)
}

// teitter login
const twitterLogin=()=>{
  const twitterAuth=new TwitterAuthProvider()
  return signInWithPopup(auth,twitterAuth)
}

// logout
const logout=()=>{
  signOut(auth)
}



// constext api provided data.
  const contextData = {emailPasswordLogin,googleLogin,gitHubLogin,twitterLogin,logout,emailPasswordSignin,user};

  return (
    <contextProvider.Provider value={contextData}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
