
// eslint-disable-next-line react/prop-types
function Product({products}) { 
   // eslint-disable-next-line react/prop-types
   const productcard = products.map(product =>{
    return(
        <div key={product.id} className="border-2 m-2 rounded-lg border-gray-500 p-2">
            <img src={product.image} alt={product.name}/>
            <h3><b>{product.name}</b></h3>
            <h4 className="text-black">{product.description}</h4>
        </div>
    )
   });

   return(
    <div className="grid grid-cols-3 m-3 mt-12">
    {productcard}
    </div>
   )
 }
 export default Product;