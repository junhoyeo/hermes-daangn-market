import { useState, useEffect } from 'react';
import axios from 'axios';

import { IProduct } from './interfaces';

export default (page: number = 1) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data: newProducts } = await axios.get(`https://hermes-daangn.vercel.app/api?page=${page}`);
      setProducts((previousProducts) => [
        ...previousProducts,
        ...newProducts,
      ]);
    };

    getProducts();
  }, [page]);

  return products;
};
