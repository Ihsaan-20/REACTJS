import React, { useState } from 'react';

function TextInput() {
  // `inputValue` string value hold karega. Initial value empty string hai.
  const [inputValue, setInputValue] = useState('');

  // Jab input field mein change hota hai to yeh function call hota hai
  const handleChange = (event) => {
    setInputValue(event.target.value); // Input ki current value ko state mein save karo
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue} // Input field ki value state se control ho rahi hai
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default TextInput;