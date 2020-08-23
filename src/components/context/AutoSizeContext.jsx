import { createContext } from 'react';

/**
 * Shape of object is:
 * sizeId: unique id for the item’s height or width
 * value: the unmodified value passed to the heightList or widthList
 * cssValue: the computed css value to be used
 * @type {*[]}
 */
const heightList = [];
const widthList = [];

const getSizeOf = (sizeId, isWidth = false) => ({});
const setSizeOf = (sizeId, value, isWidth = false) => {
  const list = isWidth ? widthList : heightList;

  if (list.some(({ sizeId: itemId }) => itemId === sizeId)) {

  } else {
    
  }
};

const getHeightOf = sizeId => getSizeOf(sizeId);
const getWidthOf = sizeId => getSizeOf(sizeId, true);

const setHeightOf = (sizeId, value) => setSizeOf(sizeId, value);
const setWidthOf = (sizeId, value) => setSizeOf(sizeId, value, true);

const AutoSizeContext = createContext({
  getHeightOf,
  getWidthOf,
  setHeightOf,
  setWidthOf,
});

const { Provider: _Provider, Consumer: _Consumer } = AutoSizeContext;

export const Provider = _Provider;
export const Consumer = _Consumer;
export default AutoSizeContext;
