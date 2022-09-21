import React, {useEffect, useState} from 'react';


const Products = () =>{
const[products, setProducts] = useState();
const[loading, setLoading] = useState(false);

    useEffect(() => {fetchProductData()},[])

   const fetchProductData = () => {
    fetch("http://localhost:5000/products")
    .then(res => res.json()) 
    .then((data) =>{
        setProducts(data)
        setLoading(true)})
    .catch(e =>{throw new Error(e.message)})
}
if(!loading){
console.log(`loading, ${loading}`)
return <div>lodaing...........</div>

}
return (<div>
    {products.map(product=>(
        <div key={product.id}>
    <p>{product.name}</p>
   
            </div>
    ))}
    </div>
        )}
  export default Products;