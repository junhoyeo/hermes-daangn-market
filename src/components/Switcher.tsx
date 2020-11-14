import React, { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

import isHermesState from '../recoil/isHermesState';
import hermesImage from '../assets/hermes.png';
import appleWatchImage from '../assets/apple-watch.png';

export default () => {
  const [isHermes, setIsHermes] = useRecoilState(isHermesState);

  const image = useMemo(() => (isHermes ? appleWatchImage : hermesImage), [
    isHermes,
  ]);

  const onClick = () => setIsHermes(!isHermes);

  return (
    <SwitcherContainer onClick={onClick}>
      <Image src={image} />
      <Title isHermes={isHermes}>
        애플워치{' '}
        {!isHermes && (
          <>
            에르메스
            <br />
          </>
        )}
        알아보기
      </Title>
    </SwitcherContainer>
  );
};

const SwitcherContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 48px 0;
  cursor: pointer;
`;

const Image = styled.img`
  height: 256px;
  width: 256px;
  object-fit: contain;
`;

interface ITitle {
  isHermes: boolean;
}

const Title = styled.span<ITitle>`
  font-size: 22px;
  font-weight: bold;
  color: white;
  text-shadow: 3px 3px 9px rgba(0, 0, 0, 0.15);
  margin-top: 16px;
  text-align: center;
  line-height: 1.25;

  ${({ isHermes }) =>
    !isHermes &&
    css`
      color: #f26739;
      text-shadow: 3px 3px 9px rgba(255, 255, 255, 0.15);
      font-size: 19px;
    `};
`;
