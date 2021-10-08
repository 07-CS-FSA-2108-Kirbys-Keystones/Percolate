import React, { useState } from "react";
import db from "./firebase";
import { collection, doc, getDocs } from "firebase/firestore"

async function querySnapshot(){
  let ans = []
  const businesses = await getDocs(collection(db, "businesses"));
  businesses.forEach(business=>console.log(business));

}

function App() {
  querySnapshot();
  return (
    <div className="App">
      <h1>Businesses</h1>
    </div>
  );
}

export default App;
