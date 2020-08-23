import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Canvas from '../../Panel/Canvas';

const Element = styled.div({
  height: '100%',
  width: '100%',
});

const Page = ({ children }) => (
  <Element className="Page">
    {children}
  </Element>
);

Page.propTypes = {
  children: PropTypes.shape(PropTypes.oneOf([Canvas])),
};

export default Page;
