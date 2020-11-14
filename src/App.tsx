import React from 'react';
import { RecoilRoot } from 'recoil';

import Router from './Router';
import ServiceWrapper from './components/ServiceWrapper';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ServiceWrapper>
        <Router />
      </ServiceWrapper>
    </RecoilRoot>
  );
};

export default App;
