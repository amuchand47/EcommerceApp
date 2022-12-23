import ProductItem from './ProductItem'
import React, { useState, useEffect } from "react";

const Product = () => {

  // created an hook that fetch the products

  const [products, setproducts] = useState([]);

  const updateData = async() =>{

    const url = "https://fakestoreapi.com/products";

    let data = await fetch(url);
    let parsedData = await data.json();
    setproducts(parsedData);

  } 

  useEffect(() => {
    updateData()
  }, [])
  

  return (
   
    <div className='container'>

      <div className="row">

        {products.map((element)=>{
            return (
                <div className="col-md-4" key={element.image}>
                   <ProductItem  title={element.title} desc={element.desc} category ={element.category} image = {element.image}/>
                </div>
            );
        })}

    </div>
        
    </div>
  )
}

export default Product