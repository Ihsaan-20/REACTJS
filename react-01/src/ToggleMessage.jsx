import React, { useState } from 'react';

function ToggleMessage() {
  // `isVisible` state variable hai jo boolean value hold karega.
  // Initial value true hai.
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {/* Agar isVisible true hai to yeh paragraph dikhega */}
      {isVisible && <p>Hello! This is a toggleable message.</p>}
    </div>
  );
}

export default ToggleMessage;