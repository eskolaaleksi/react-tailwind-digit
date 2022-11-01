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
    <div className="flex flex-wrap bg-blue-light ">
      <div className="w-full text-center text-4xl p-4 bg-blue">
        Aleksin nettikauppa
      </div>
      <div className="flex flex-wrap bg-blue-light dark:bg-gray-800">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
