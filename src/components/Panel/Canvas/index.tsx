import React, {FC, PropsWithChildren} from 'react';
import styled from 'styled-components';
// import convertSizeValue from '../../../util/convertSizeValue';
import { Consumer, Provider, createSizes } from '../../context/AutoSizeContext';
import useSizeId from '../../hooks/useSizeId';

type ElementProps = {
  Height?: string | number;
  Width?: string | number;
};

const Element = styled.div<ElementProps>(({ Height, Width }) => ({
  height: Height, // convertSizeValue(Height),
  width: Width, // convertSizeValue(Width),
}));

type CanvasProps = PropsWithChildren<ElementProps>;

/**
 * Defines an area within which you can explicitly position child objects,
 * using coordinates that are relative to the Canvas area.
 */
const Canvas: FC<CanvasProps> = ({ Height = 'Auto', Width = 'Auto', children }) => {
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

        console.log('Height', getHeightOf(sizeId)?.cssValue);
        console.log('Width', getWidthOf(sizeId)?.cssValue);

        return (
          <Element className="Canvas" Height={getHeightOf(sizeId)?.cssValue} Width={getWidthOf(sizeId)?.cssValue}>
            <Provider value={createSizes()}>
              {children}
            </Provider>
          </Element>
        );
      }}
    </Consumer>
  )
};

export default Canvas;
