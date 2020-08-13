import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizePropType from '../../../util/sizePropType';
import convertSizeValue from '../../../util/convertSizeValue';

const Element = styled.div((height, width) => ({
  height: convertSizeValue(height),
  width: convertSizeValue(width),
}));

/**
 * Defines an area within which you can explicitly position child objects,
 * using coordinates that are relative to the Canvas area.
 */
const Canvas = ({ Height = 'Auto', Width = 'Auto', children }) => {
  console.log('Height', Height);
  console.log('Width', Width);

  return (
    <Element className="Canvas" height={Height} width={Width}>
      {children}
    </Element>
  )
};

Canvas.propTypes = {
  Height: sizePropType,
  Width: sizePropType,
  children: PropTypes.node,
};

export default Canvas;
