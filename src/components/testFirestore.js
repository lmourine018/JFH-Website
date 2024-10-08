// src/components/testFirestore.js

import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const testFirestore = async () => {
  try {
    const docRef = await addDoc(collection(db, "testCollection"), {
      testField: "testValue"
    });
    console.log("Test document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error writing test document: ", error);
  }
};

testFirestore();
