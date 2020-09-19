import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Canvas from '../../Panel/Canvas';
import { createSizes, Provider } from '../../context/AutoSizeContext';

const Element = styled.div({
  height: '100%',
  width: '100%',
});

const Page = ({ children }) => (
  <Provider value={createSizes()}>
    <Element className="Page">
      {children}
    </Element>
  </Provider>
);

Page.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([Canvas])
    })
  ),
};

export default Page;
