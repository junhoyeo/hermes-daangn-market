import { useCallback, useEffect, useState } from 'react';

import client from './client';
import { IProduct } from './interfaces';

export default () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPending, setisPending] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = useCallback(async (page: number) => {
    const { data: newProducts } = await client.get(`/api?page=${page}`);
    setProducts((previousProducts) => [...previousProducts, ...newProducts]);
  }, []);

  useEffect(() => {
    getProducts(1);
  }, [getProducts]);

  const update = async () => {
    if (isPending) {
      return;
    }
    setisPending(true);
    const previousPageLength = products.length;
    await getProducts(currentPage + 1);
    setisPending(false);
    setCurrentPage(currentPage + 1);
    return previousPageLength;
  };

  return {
    pending: isPending,
    products,
    update,
  };
};
