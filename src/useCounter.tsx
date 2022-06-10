import * as React from "react";

const useCounter: Function = () => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return { count, increment, decrement };
};

export default useCounter;
