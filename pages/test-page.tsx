import { useToggle } from 'react-use';
import React from 'react';

const MockComponent = () => {
  
  const [value, toggleValue] = useToggle(false)
  
  return (
    <div>
      <button onClick={() => toggleValue()}>Toggle</button>
      {String(value)}
    </div>
  );
}

export default MockComponent;