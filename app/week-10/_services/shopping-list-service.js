import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);
  const myDocs = querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return myDocs;
}

export async function addItem(userId, item) {
  await addDoc(collection(db, "users", userId, "items"), item);
}
