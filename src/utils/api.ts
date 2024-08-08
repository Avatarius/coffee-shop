import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/filrebase";

async function getCollection<T>(collectionName: string) {
  const list: T[] = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    list.push(doc.data() as T);
  });
  return list;
}

export {getCollection};
