// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyD9zxNq0hPgKWsXAIdCsBCGyCoszWaRCEk",
  authDomain: "percolate-1cebe.firebaseapp.com",
  projectId: "percolate-1cebe",
});

const db = getFirestore(firebaseApp);

export default db
