// import { useState } from 'react'

import './App.css'

function App() {
  let showItems = 10;
  
  const addNumber = () => {
    showItems += 1;
    console.log("showItems", showItems);
  }

  return (
    <>
      <h1>Header count - {showItems} </h1>
      <div className="card">
        <button onClick={addNumber}>
          count is {showItems}
        </button>
      </div>
      <h1>Footer count - {showItems} </h1>
     
    </>
  )
}

export default App
