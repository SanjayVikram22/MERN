import React,{createContext,useContext} from 'react';


import './App.css';
import ChildComponent from './ChildComponent';

const InitialContext =createContext("Initial Data")

function App() {
  return (
    <>
      <ChildComponent/>
    </>
  );
}

export default App;
