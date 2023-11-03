import { useToggle } from '@uidotdev/usehooks';
import React from 'react';

const MockComponent = () => {
  
  const [value, toggleValue] = useToggle()
  
  return (
    <div>
      <button onClick={() => toggleValue()}>Toggle</button>
      {String(value)}
    </div>
  );
}

export default MockComponent;