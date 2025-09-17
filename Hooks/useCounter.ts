import { useState } from "react";

export const useCounter = (start: number) => {
  const [counter, setcoutner] = useState(start);
  const add = () => {
    setcoutner(counter + 1);
  };
  return { add, counter };
};
