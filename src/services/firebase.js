
// src/services/firebase.js

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ... other config
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(googleProvider);
    const user = result.user;
    return {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
  } catch (error) {
    console.error("Google Sign-In error:", error);
    throw error;
  }
};
