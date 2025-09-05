import React from "react";
import { products } from "../data/products";

const Home = () => {
  const discountItems = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6)
    .map((p) => ({
      ...p,
      discountPrice: (p.price * 0.8).toFixed(2),
    }));

  const categories = products.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔥 Hot Deals</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {discountItems.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 min-w-[100px] flex-shrink-0"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full "
            />
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="line-through text-gray-400">${p.price}</p>
            <p className="text-red-500 font-semibold">
              ${p.discountPrice}    
            </p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">🛍 Shop by Category</h2>
      {Object.keys(categories).map((cat) => (
        <div key={cat} className="mb-8">
          <h3 className="text-xl font-semibold mb-3">{cat}</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories[cat].map((p) => (
              <div
                key={p.id}
                className="border rounded-lg p-4 min-w-[100px] flex-shrink-0"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-40 w-full "
                />
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p>${p.price}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
