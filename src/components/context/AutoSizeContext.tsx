import { createContext } from 'react';

type SizeType = {
  sizeId: number;
  value?: string | number;
  cssValue?: string;
};

type AutoSizeContextType = {
  getHeightOf: (sizeId: number) => SizeType | undefined,
  getWidthOf: (sizeId: number) => SizeType | undefined,
  setHeightOf: (sizeId: number, value?: string | number) => void,
  setWidthOf: (sizeId: number, value?: string | number) => void,
};

/**
 * Maintains a list of heights and widths.
 * Each array item should be an object { sizeId, value, cssValue }
 * sizeId: unique id for the item’s height or width
 * value: the unmodified value passed to the heightList or widthList
 * cssValue: the computed css value to be used
 * @returns {{heights: [], widths: []}}
 */
const setupSizes = (): AutoSizeContextType => {
  /**
   * Shape of object is:
   * sizeId: unique id for the item’s height or width
   * value: the unmodified value passed to the heightList or widthList
   * cssValue: the computed css value to be used
   * @type {*[]}
   */
  const heights: SizeType[] = [];
  const widths: SizeType[] = [];

  const getSizeOf = (sizeId: number, isWidth = false) =>
    (isWidth ? widths : heights).find(item => item.sizeId === sizeId);

  const setSizeOf = (sizeId: number, value?: string | number, isWidth = false) => {
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

  return ((): AutoSizeContextType => ({
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
