import React from 'react';
import styled from 'styled-components';

export interface IProductCard {
  href: string;
  image: string;
  title: string;
  content: string;
  regionName: string;
  price: string;
}

const ProductCard: React.FC<IProductCard> = ({
  href, image, title, content, regionName, price,
}) => {
  return (
    <Container>
      <Image src={`${image}?q=85&s=400x400&t=crop`} />
      <Title>{title}</Title>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  width: 48%;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.25;
  margin: 0;
  margin-top: 8px;
`;
