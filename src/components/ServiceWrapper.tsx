import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MobileSizedView from 'react-mobile-sized-view';

import Switcher from './Switcher';
import isHermesState from '../recoil/isHermesState';

const ServiceWrapper: React.FC = ({ children }) => {
  const isHermes = useRecoilValue(isHermesState);

  return (
    <MobileSizedView
      backgroundColor={isHermes ? '#F26739' : '#DEE7EC'}
      screenBackgroundColor={isHermes ? '#F7F7F7' : '#F0F4F8'}
      screenLightShadow={isHermes ? '-31px -31px 62px #F06648' : 'none'}
      screenDarkShadow={isHermes ? '31px 31px 62px #FD5644' : 'none'}
      absoluteChildren={<Switcher />}
    >
      <ContentWrapper id="content-wrapper">{children}</ContentWrapper>
    </MobileSizedView>
  );
};

export default ServiceWrapper;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
