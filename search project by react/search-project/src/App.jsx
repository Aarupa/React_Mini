import { useState,useEffect } from "react";
import Header from "./Component/Header"
import Search from "./Component/Search"
import Product from "./Component/Product"
function App() {
  const[products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
        const response = await fetch('src/api/product.json');
        const data =await response.json();
        console.log(data);
        setProducts(data.places);

    }

    fetchData();

   },[])

  return (
    <>
    <Header />
    <Search products={products} setProducts={setProducts}/>
    <Product products={products}/>
    </>
  )
}

export default App
