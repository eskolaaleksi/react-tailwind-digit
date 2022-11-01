import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Home;
