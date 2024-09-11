import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../services/filrebase";
import { IOrder } from "./types";

async function getCollection<T>(collectionName: string) {
  const list: T[] = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    const product = {...doc.data() as T, id: doc.id};
    list.push(product);
  });
  return list;
}

async function addDocument(order: IOrder) {
  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef;
}

export {getCollection, addDocument};
