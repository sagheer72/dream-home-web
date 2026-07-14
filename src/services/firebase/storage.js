import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const uploadImages = async (files, propertyId) => {
  return Promise.all(
    Array.from(files).map(async (file) => {
      const r = ref(storage, `properties/${propertyId}/${file.name}`);
      await uploadBytes(r, file);
      return getDownloadURL(r);
    })
  );
};
