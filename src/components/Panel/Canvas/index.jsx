import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizePropType from '../../../util/sizePropType';
import convertSizeValue from '../../../util/convertSizeValue';
import { Consumer, Provider, createSizes } from '../../context/AutoSizeContext';
import useSizeId from '../../hooks/useSizeId';

const Element = styled.div((Height, Width) => ({
  height: Height, // convertSizeValue(Height),
  width: Width, // convertSizeValue(Width),
}));

/**
 * Defines an area within which you can explicitly position child objects,
 * using coordinates that are relative to the Canvas area.
 */
const Canvas = ({ Height = 'Auto', Width = 'Auto', children }) => {
  const sizeId = useSizeId();

  return (
    <Consumer>
      {({
        getHeightOf,
        getWidthOf,
        setHeightOf,
        setWidthOf,
      }) => {
        setHeightOf(sizeId, Height);
        setWidthOf(sizeId, Width);

        return (
          <Element className="Canvas" Height={getHeightOf(sizeId).cssValue} Width={getWidthOf(sizeId).cssValue}>
            <Provider value={createSizes()}>
              {children}
            </Provider>
          </Element>
        );
      }}
    </Consumer>
  )
};

Canvas.propTypes = {
  Height: sizePropType,
  Width: sizePropType,
  children: PropTypes.node,
};

export default Canvas;
