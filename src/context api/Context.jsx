import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase credentials/firebase.config";

export const contextProvider = createContext(null);

const Context = ({ children }) => {

// ass states
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

// on authstatechange
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(res)=>{
    setUser(res)
    setLoading(false)
  })
  return ()=>unsubscribe
},[])


// create account with Email and password.
const emailPasswordSignin=(email,password)=>{
  setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
}

// email Password login
const emailPasswordLogin=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}

// google login
const googleLogin=()=>{
  setLoading(true)
  const googleAuth =new GoogleAuthProvider()
  return signInWithPopup(auth,googleAuth)
}

// github login
const gitHubLogin=()=>{
  setLoading(true)
  const gitHubAuth= new GithubAuthProvider()
  return signInWithPopup(auth,gitHubAuth)
}

// teitter login
const twitterLogin=()=>{
  setLoading(true)
  const twitterAuth=new TwitterAuthProvider()
  return signInWithPopup(auth,twitterAuth)
}

// logout
const logout=()=>{
  signOut(auth)
}



// constext api provided data.
  const contextData = {emailPasswordLogin,googleLogin,gitHubLogin,twitterLogin,logout,emailPasswordSignin,user,loading};

  return (
    <contextProvider.Provider value={contextData}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
