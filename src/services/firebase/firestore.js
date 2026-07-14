import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export const subscribe = (col, callback) => {
  const q = query(collection(db, col), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) =>
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
};

export const addDoc_ = (col, data) =>
  addDoc(collection(db, col), { ...data, createdAt: serverTimestamp() });

export const updateDoc_ = (col, id, data) =>
  updateDoc(doc(db, col, id), data);

export const deleteDoc_ = (col, id) =>
  deleteDoc(doc(db, col, id));
