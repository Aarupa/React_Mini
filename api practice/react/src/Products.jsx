function Products({product}) {  
    const {title,description} = product;
    return(
        <>
            <h2>{title}</h2>
            <p>{description}</p>
        </>
    )
}
export default Products;