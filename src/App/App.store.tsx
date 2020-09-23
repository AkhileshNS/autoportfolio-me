import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useStore = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return {
    counter,
    increment,
    decrement,
  };
};

export const Store = createContainer(useStore);
