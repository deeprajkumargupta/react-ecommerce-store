import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
}

export default Products;
