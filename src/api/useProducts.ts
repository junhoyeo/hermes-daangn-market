import { useState, useEffect } from 'react';
import axios from 'axios';

import { IProduct } from './interfaces';

export default (page: number = 1) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`https://hermes-daangn.vercel.app/api?page=${page}`);
      setProducts(data);
    };

    getProducts();
  }, [page]);

  return products;
};
