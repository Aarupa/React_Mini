import { useState,useEffect } from "react"
import Products from "./Products";

function App() {
  const [product,setProduct]=useState([]);
  useEffect (()=>{
    const fetchData = async()=>{
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setProduct(data.products);
    }
    fetchData();
  },[])
 return(
  <>
  {
    product.map((product)=> <Products key={product.id} product={product}/>)
  }
  </>
  )
}

export default App
