import React, { Fragment, useRef } from "react";
import "./App.css";

function App() {
  const focusDiv = useRef(null);

  const onClickHandler =()=>{
    focusDiv.current.value="today is very nice day";
    focusDiv.current.focus();
  }
  return (
    <div className="App">
      <div className="App-header">
        <Fragment>
          <div>
            <button onClick={onClickHandler}>Click to Focus</button>
            <label>
              Please Click on the button to foucs into the Text Area
            </label>
          </div>
          <textarea ref={focusDiv}></textarea>
        </Fragment>
      </div>
    </div>
  );
}

export default App;
