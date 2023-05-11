// -- H O C component

import { useState } from "react";

const HOC = (WrapperComponent) => {
  const EnhancedComponent = (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const { name } = props;

    console.log(name, "from H O C  counter");

    return (
      <WrapperComponent
        count={count}
        handleIncrement={handleIncrement}
        {...props}
      />
    );
  };

  return EnhancedComponent;
};

export default HOC;
