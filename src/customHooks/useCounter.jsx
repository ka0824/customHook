import React, { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  return { count, handlePlus, handleMinus };
};

export default useCounter;
