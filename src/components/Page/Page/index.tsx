import React, {FC, PropsWithChildren} from 'react';
import styled from 'styled-components';
import Canvas from '../../Panel/Canvas';
import { createSizes, Provider } from '../../context/AutoSizeContext';

const Element = styled.div({
  height: '100%',
  width: '100%',
});

const Page: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <Provider value={createSizes()}>
    <Element className="Page">
      {children}
    </Element>
  </Provider>
);

export default Page;
