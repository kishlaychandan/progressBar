import './App.css';
import ProgressBar from './component/ProgressBar';
import React, { useEffect, useState } from "react";

function App() {
  const[progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setProgress((val) => val + 1);
    }, 100);
  }, []);

  return (
    <>
      <div className="app">
        <div className="container">
        <h1 className="bounce">Progress Bar</h1>
          <div className="row">
            <div className="col">

                <ProgressBar val={progress}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
