import { createContext } from 'react';

/**
 * Maintains a list of heights and widths.
 * Each array item should be an object { sizeId, value, cssValue }
 * sizeId: unique id for the item’s height or width
 * value: the unmodified value passed to the heightList or widthList
 * cssValue: the computed css value to be used
 * @returns {{heights: [], widths: []}}
 */
const setupSizes = () => {
  /**
   * Shape of object is:
   * sizeId: unique id for the item’s height or width
   * value: the unmodified value passed to the heightList or widthList
   * cssValue: the computed css value to be used
   * @type {*[]}
   */
  const heights = [];
  const widths = [];

  const getSizeOf = (sizeId, isWidth = false) =>
    (isWidth ? widths : heights).find(item => item.sizeId === sizeId);

  const setSizeOf = (sizeId, value, isWidth = false) => {
    const updateIndex = (isWidth ? widths : heights).findIndex(item => item.sizeId === sizeId);

    if (updateIndex !== -1) {
      (isWidth ? widths : heights)[updateIndex] = {
        sizeId,
        value,
      };
    } else {
      (isWidth ? widths : heights).push({
        sizeId,
        value,
      });
    }

    (isWidth ? widths : heights).forEach((item, i) => {
      (isWidth ? widths : heights)[i] = {
        sizeId,
        value,
        cssValue: '50%', // TODO: calc css values
      };
    });
  };

  return (() => ({
    getHeightOf: sizeId => getSizeOf(sizeId),
    getWidthOf: sizeId => getSizeOf(sizeId, true),
    setHeightOf: (sizeId, value) => setSizeOf(sizeId, value),
    setWidthOf: (sizeId, value) => setSizeOf(sizeId, value, true),
  }))();
};

const AutoSizeContext = createContext(setupSizes());

const { Provider: _Provider, Consumer: _Consumer } = AutoSizeContext;

export const createSizes = setupSizes;
export const Provider = _Provider;
export const Consumer = _Consumer;
export default AutoSizeContext;
