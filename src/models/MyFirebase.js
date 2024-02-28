// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore/lite";

function MyFirebase() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCknEqGL7XSrIj1a40-5QpAfIui90ZgoXk",
    authDomain: "shoppingsite-dfe90.firebaseapp.com",
    projectId: "shoppingsite-dfe90",
    storageBucket: "shoppingsite-dfe90.appspot.com",
    messagingSenderId: "199260371543",
    appId: "1:199260371543:web:127bfe6c90708bf37d8112"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const me = {};

  /**================== Products table ==========*/
  // Get products from db
  me.getProducts = async () => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "products");
    const q = query(proCollection, orderBy("id"));
    return (await getDocs(q)).docs.map((d) => d.data());
  };

  // Get product by id
  me.getProductById = async (id) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "products");
    const q = query(proCollection, where("id", "==", id));
    return (await getDocs(q)).docs[0];
  };

  // Add new Product to db
  me.addProduct = async (product) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "products");
    await addDoc(proCollection, product);
  };

  // Delete product from db
  me.deleteProduct = async (id) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const docId = (await me.getProductById(id)).id;
    await deleteDoc(doc(db, "products", docId));
  };

  // Update product by Id
  me.updateProduct = async (product) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const docId = (await me.getProductById(product.id)).id;
    await updateDoc(doc(db, "products", docId), product);
  };

  /**================== cartProducts table ==========*/
  // Get products in cart
  me.getCart = async () => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "cartProducts");
    const q = query(proCollection, orderBy("id"));
    return (await getDocs(q)).docs.map((d) => d.data());
  };

  // Get product from cart by id
  me.getCartPro = async (id) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "cartProducts");
    const q = query(proCollection, where("id", "==", id));
    return (await getDocs(q)).docs[0];
  };

  // Add product to cart
  me.addToCart = async (product) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "cartProducts");
    await addDoc(proCollection, product);
  };

  // Delete product from cart
  me.deleteFromCart = async (id) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const docId = (await me.getCartPro(id)).id;
    await deleteDoc(doc(db, "cartProducts", docId));
  };

  return me;
}


// Singleton
export const myFirebase = new MyFirebase();