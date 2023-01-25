import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { JsonObjectExpression } from 'typescript';



function App() {
  const [data, setData] = useState({"members":[]})
  useEffect(() => {
    fetch("http://127.0.0.1:5000/members", {mode:'cors'}).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  })
  return (
    <div className="App">
      {(typeof data === 'undefined') ? (
        <p>Loading...</p>):(
          data.members.map((member: string, i: number) => (
            <p key={i}> {member}</p>
          ))
        )
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> hi this is reloading
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;