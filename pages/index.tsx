import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const Home: NextPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default Home;
