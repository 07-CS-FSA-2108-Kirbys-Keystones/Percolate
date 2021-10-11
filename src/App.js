import React, { useState } from "react";
import db from "./firebase";
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore"

//how to CRUD with firestore: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9
async function querySnapshot(){
  let ans = []
  // collectionRef = collection(db, "businesses"))
  // documentRef = doc(db, "businesses", "LA")
  //get
  const businesses = await getDocs(collection(db, "businesses"));
  businesses.forEach(business=>console.log(business.data()));

// Add a new document in collection "businesses" set doc comes with other options and variations like merge option and addDoc variation
await setDoc(doc(db, "businesses", "LA"), {
  id: "Los Angeles",
  title: "CA",
  description: "USA"
});
}

//update a document like so:
/*await updateDoc(doc(db, "businesses", "LA"), {
  id: "updatedoc worked"
});

//delete this document like so:
await deleteDoc(doc(db, "businesses", "LA"))
}
*/

function App() {
  querySnapshot();
  return (
    <div className="App">
      <h1>Businesses</h1>
    </div>
  );
}

export default App;
