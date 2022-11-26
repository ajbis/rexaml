import { useRef } from 'react';

let sizeId = 0;

export default (): number => {
  const ref = useRef<number>();

  if (!ref.current) {
    sizeId += 1;
    ref.current = sizeId;
  }

  return sizeId;
};