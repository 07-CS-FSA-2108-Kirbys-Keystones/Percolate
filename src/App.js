import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
//how to CRUD with firestore: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9
async function querySnapshot() {
  // let ans = [];
  // const sfDocRef = doc(db, 'cities', 'Jing');
  // // Get a new write batch
  // const batch = writeBatch(db);
  // // Set the value of 'NYC'
  // const nycRef = doc(db, 'cities', 'NYC');
  // batch.set(nycRef, { name: 'New York City' });
  // const jingRef = doc(db, 'cities', 'Jing');
  // batch.update(jingRef, { population: 1000000 });
  // await batch.commit();
  // try {
  //   await runTransaction(db, async (transaction) => {
  //     const sfDoc = await transaction.get(sfDocRef);
  //     if (!sfDoc.exists()) {
  //       throw 'Document does not exist!';
  //     }

  //     const newPopulation = sfDoc.data().population + 1;
  //     transaction.update(sfDocRef, { population: newPopulation });
  //   });
  //   console.log('Transaction successfully committed!');
  // } catch (e) {
  //   console.log('Transaction failed: ', e);
  // }

  // const washingtonRef = doc(db, 'cities', 'Jing');
  // await updateDoc(washingtonRef, {
  //   country: 'China',
  //   name: 'BeiJing',
  //   state: 'HeBei',
  //   capital: true,
  // });
  //const response = await getDoc(doc(db, 'cities', 'Jing'));
  //console.log(response.data());
}

//update a document like so:
/*await updateDoc(doc(db, "businesses", "LA"), {
  id: "updatedoc worked"
});

//delete this document like so:
await deleteDoc(doc(db, "businesses", "LA"))
docRef = doc(db,"businesses", "LA")
collectionRef = collection(db,"businesses")
}
*/

function App() {
  querySnapshot();
  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <h1>All Businesses</h1>
      <ul>
        {}
        <li>

        </li>
        <li>

        </li>
      </ul>
     </div>
  );
}

export default App;
