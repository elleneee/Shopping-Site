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

  /**================== Products table =================*/

  // Get products from db
  async function getProducts () {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "products");
    const q = query(proCollection, orderBy("id"));
    return (await getDocs(q)).docs.map((d) => d.data());
  };

  // Get product by id
  async function getProductById(id) {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "products");
    const q = query(proCollection, where("id", "==", id));
    return (await getDocs(q)).docs[0];
  };

  // Add new Product to db
  async function addProduct(product) {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "products");
    await addDoc(proCollection, product);
  };

  // Delete product from db
  async function deleteProduct(id) {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const docId = (await me.getProductById(id)).id;
    // await deleteDoc(doc(db, "products", id));
    await deleteDoc(doc(db, "products", docId));
  };

  // Update product by Id
  async function updateProduct(product) {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const docId = (await me.getProductById(product.id)).id;
    await updateDoc(doc(db, "products", docId), product);
    // await updateDoc(doc(db, "products", docid), product);
  };

  /**================== cartProducts table ==================*/
  // Get products in cart
  async function getCart() {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "cartProducts");
    const q = query(proCollection, orderBy("id"));
    return (await getDocs(q)).docs.map((d) => d.data());
  };

  // Get product from cart by id
  async function getCartPro (id) {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "cartProducts");
    const q = query(proCollection, where("id", "==", id));
    return (await getDocs(q)).docs[0];
    // return (await getDocs(doc(db, "products", id))).docs[0];
  };

  // Add product to cart
  async function addToCart(product) {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const proCollection = collection(db, "cartProducts");
    await addDoc(proCollection, product);
  };

  // Delete product from cart
  async function deleteFromCart(id) {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    const docId = (await me.getCartPro(id)).id;
    await deleteDoc(doc(db, "cartProducts", docId));
    // await deleteDoc(doc(db, "cartProducts", id));
  };

  me.getProducts = getProducts;
  me.getProductById = getProductById;
  me.addProduct = addProduct;
  me.deleteProduct = deleteProduct;
  me.updateProduct = updateProduct;
  me.getCart = getCart;
  me.getCartPro = getCartPro;
  me.addToCart = addToCart;
  me.deleteFromCart = deleteFromCart;

  return me;
}

// Singleton
export const myFirebase = new MyFirebase();