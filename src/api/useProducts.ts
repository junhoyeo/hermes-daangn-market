import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { IProduct } from './interfaces';

export default () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPending, setisPending] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = useCallback(async (page: number) => {
    const { data: newProducts } = await axios.get(`https://hermes-daangn.vercel.app/api?page=${page}`);
    setProducts((previousProducts) => [
      ...previousProducts,
      ...newProducts,
    ]);
  }, []);

  useEffect(() => {
    getProducts(1);
  }, [getProducts]);

  const update = async () => {
    if (isPending) {
      return;
    }
    setisPending(true);
    await getProducts(currentPage + 1);
    setisPending(false);
    setCurrentPage(currentPage + 1);
  };

  return {
    pending: isPending,
    products,
    update,
  };
};
