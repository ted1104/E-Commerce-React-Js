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

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additinalData) => {
  if (!userAuth) return;
  // console.log(userAuth);
  // console.log("==============");
  const userRef = firestore.doc(`users/${userAuth.uid}`); //for getting document : firestore.collection('users') for getting collections
  const snapShot = await userRef.get();

  // console.log("==data firebase==");
  // const collectionRef = firestore.collection("users");
  // const collectioSnapshot = await collectionRef.get();
  // console.log({ snapShot });

  if (!snapShot.exists) {
    // Test if another document with this ID already exist
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additinalData,
      });
    } catch (error) {
      console.log("Error creating user ", error.message);
    }
  }

  return userRef;
  // console.log(snapShot.exists);
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectToAdd
) => {
  const collectionsRef = firestore.collection(collectionKey);
  const batch = firebase.batch();

  objectToAdd.forEach((obj) => {
    const newDocRef = collectionsRef.doc(); //generate random id
    batch.set(newDocRef, obj);
  });

  // console.log("==db utilies==");
  // console.log(collectionsRef);

  return await batch.commit();
};
