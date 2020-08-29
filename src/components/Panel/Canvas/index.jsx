import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizePropType from '../../../util/sizePropType';
import convertSizeValue from '../../../util/convertSizeValue';
import { Consumer, Provider, createSizes } from '../../context/AutoSizeContext';

const Element = styled.div((Height, Width) => ({
  height: convertSizeValue(Height),
  width: convertSizeValue(Width),
}));

/**
 * Defines an area within which you can explicitly position child objects,
 * using coordinates that are relative to the Canvas area.
 */
const Canvas = ({ Height = 'Auto', Width = 'Auto', children }) => {
  console.log('Height', Height);
  console.log('Width', Width);


  return (
    <Consumer>
      {sizes => (
        <Element className="Canvas" Height={Height} Width={Width}>
          <Provider value={createSizes()}>
            {children}
          </Provider>
        </Element>
      )}
    </Consumer>
  )
};

Canvas.propTypes = {
  Height: sizePropType,
  Width: sizePropType,
  children: PropTypes.node,
};

export default Canvas;
