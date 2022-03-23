import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] = useState('');
  const [headingText,setHeading] = useState('');

  function defaultval(event){
    console.log("changed")
    console.log(event.target.value);
    setName(event.target.value);
    //console.log(event.target.placeholder);
    //console.log(event.target.type);
  }
  function handleClick(event){
    
    console.log("submit");
    setHeading(name);
    event.preventDefault();
   //without this form get submited and get auto refresh
   //it act like html not like a react
  }
  return (
    <div className="container">
      <h1>hello {name}</h1>
      <h1>after sub {headingText}</h1>
      <form onSubmit={handleClick}>
        <input type="text" placeholder='name' onChange={defaultval} value={name}></input>
        <button type="submit">submit</button>
      </form>      
    </div>
  );
}

export default App;
