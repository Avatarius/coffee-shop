import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/filrebase";

async function getCollection<T>(collectionName: string) {
  const list: T[] = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    const product = {...doc.data() as T, id: doc.id};
    list.push(product);
  });
  return list;
}

export {getCollection};
