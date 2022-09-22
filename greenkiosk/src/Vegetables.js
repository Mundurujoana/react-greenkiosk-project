
import './Vegetables.css';
import React, {useEffect, useState} from 'react';


const Vegetables = () =>{
const[vegetables, setVegetables] = useState();
const[loading, setLoading] = useState(false);

    useEffect(() => {fetchVegetableData()},[])

   const fetchVegetableData = () => {
    fetch("http://localhost:5000/products/fruits")
    .then(res => res.json()) 
    .then((data) =>{
        setVegetables(data)
        setLoading(true)})
    .catch(e =>{throw new Error(e.message)})
}

if(!loading){
console.log(`loading, ${loading}`)
return <div>lodaing...........</div>
}

return (<div className='Vegetables'>
    {vegetables.map(vegetable=>(
        <div key={vegetable.id}>
    <p>{vegetable.name}</p>
            </div>
    ))}
    </div>
        )}

  export default Vegetables;