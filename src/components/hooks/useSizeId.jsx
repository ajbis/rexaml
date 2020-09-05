import { useRef } from 'react';

let sizeId = 0;

export default () => {
  const ref = useRef();

  if (!ref.current) {
    sizeId += 1;
    ref.current = sizeId;
  }

  return sizeId;
};
