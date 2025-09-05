import React from 'react'
import { products } from "../data/products";
const Products = () => {
  return (
   <div className="grid grid-cols-3 gap-4 p-6">
         {products.map((p) => (
           <div key={p.id} className="border rounded-lg p-4">
             <img src={p.image} alt={p.name} className="h-40 w-full " />
             <h2 className="text-lg font-bold">{p.name}</h2>
             <p>${p.price}</p>
             <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
               Add to Cart
             </button>
           </div>
         ))}
       </div>
  )
}

export default Products