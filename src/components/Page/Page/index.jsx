import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Provider } from '../../context/AutoSizeContext';

const Element = styled.div({
  height: '100%',
  width: '100%',
});

const Page = ({ children }) => {
  return (
    <Provider value>
      <Element className="Page">
        {children}
      </Element>
    </Provider>
  );
};

Page.propTypes = {
  children: PropTypes.shape(PropTypes.oneOf([Canvas])),
};

export default Page;
