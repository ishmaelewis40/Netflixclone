import React, { useState, useEffect } from 'react'
import '../components/Plans.css'
import db from '../firebase';

function Plans() {
    const [products, setProducts] = useState([]);



useEffect(() => {
    db.collection('products').where("active", "==", true)
    .get().then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
            products[productDoc.id] = productDoc.data();
            const priceSnap = await productDoc.ref.collection("prices").get();
            priceSnap.docs.forEach(price => {
                products[productDoc.id].prices = {
                    priceId: price.id,
                    priceData: price.data()
                };
            });
        });
        setProducts(products);

    });
}, []);

console.log(products)
  return (
    <div className='plans'>
        {Object.entries(products).map(([productId, productData]) => {
            return(
                <div className='plans_plan'>
                    <div className='plans_info'>
                       <h5>{productData.name}</h5>
                       <h6>{productData.description}</h6>
                    </div>
                </div>
            )
        })}


    </div>
  )
}

export default Plans