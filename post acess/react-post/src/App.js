import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  return (
    <div className="App">
  <button onClick={()=>{
    // axios.get('http://localhost:5000/').then((re)=>{
    //   console.log(re)
    // })
    axios.post('http://localhost:5000/send/',{
      name:'sanat'
    }).then((res)=>{
    console.log(res)


    })



  }}>press me !!</button>
    </div>
  );
}

export default App;
