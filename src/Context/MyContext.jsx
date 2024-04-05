import { createContext, useEffect, useState } from "react";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  deleteDoc,
  getDocs
 
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../Firebase/Config";

const MyContext = createContext();

export function MycontextProvider({ children }) {
  const [mode, setmode] = useState("light");
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState({
    title:"",
    price:"",
    imageUrl:"",
    category:"",
    description:"",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  const addProduct = async () => {
    if (
      products.title === "" ||
      products.price === "" ||
      products.imageUrl === "" ||
      products.category === "" ||
      products.description === ""
    ) {
      return toast.error("Please fill all fields"); // check kar raha hai ye wala if ki koi bhi field khali na rahe
    }
    setloading(true);
    try {
      const productRef = collection(db, "product");
      await addDoc(productRef, products);
      toast.success("Produy Add Sucessfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProduct();
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProduct = async () => {
    setloading(true);
    try {
      const q = query(collection(db, "product"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setloading(false);
      });
  
      return () => data;
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };



  const editHandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async ()=> {
    setloading(true);
    try {
      await setDoc(doc(db, 'product',products.id), products);
      toast.success("Product Updated successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProduct();
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };


  const deleteProduct = async (item) => {
    try {
      setloading(true);
      await deleteDoc(doc(db, "product", item.id));
      toast.success("Product Deleted successfully");
      setloading(false);
      getProduct();
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  function toggleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.Color = "fff";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.Color = "#333";
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setloading(true)
    try {
      const result = await getDocs(collection(db, "orders"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setloading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setloading(false);
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }


  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  useEffect(() => {
    getProduct();
    getUserData();
  }, []);

  

  const values = {
    toggleMode,
    mode,
    loading,
    setloading,
    product,
    setProduct,
    products,
    setProducts,
    getProduct,
    addProduct,
    editHandle,
    deleteProduct,
    updateProduct,
    user,
    setUser,
    getUserData,
    searchkey,
    setSearchkey,
    filterType, setFilterType,
    filterPrice, setFilterPrice
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}

export default MyContext;
