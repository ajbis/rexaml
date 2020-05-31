import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizePropType from '../../util/sizePropType';

const Element = styled.div(Width => ({
  width: Width === 'Auto' ? 'auto' : '100%',
}));

/**
 * Defines an area within which you can explicitly position child objects,
 * using coordinates that are relative to the Canvas area.
 *
 * @param Width
 * @param children
 * @returns {*}
 * @constructor
 */
const Canvas = ({ Width = 'Auto', children }) => (
  <Element className="Canvas" Width={Width}>
    {children}
  </Element>
);

Canvas.propTypes = {
  Width: sizePropType,
  children: PropTypes.node,
};

export default Canvas;
