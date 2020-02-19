import React from 'react';
import PropTypes from 'prop-types';

const Canvas = ({ children }) => (
  <div className="Canvas">
    {children}
  </div>
);

Canvas.propTypes = {
  children: PropTypes.node,
};

export default Canvas;
