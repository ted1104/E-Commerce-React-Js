import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD9X41rUPN-HwTLA693FJlWRHqmde3cgpI",
  authDomain: "shop-db-react-b32a1.firebaseapp.com",
  projectId: "shop-db-react-b32a1",
  storageBucket: "shop-db-react-b32a1.appspot.com",
  messagingSenderId: "775439131093",
  appId: "1:775439131093:web:eadd06663b26cfe2a6dd5c",
  measurementId: "G-BJBV8E35R3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
