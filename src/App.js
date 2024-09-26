import React from 'react';
import Logo from './assets/postitIcon.png'
import Title from './components/Title'
import LinkForm from './components/LinkForm';
import './App.css';


export default function App() {
  
  
  return (
    <div className="App">
        <header className="App-header">
          <img src={ Logo } className="App-logo" alt="logo" />            
          <Title/>
          <div>
            <LinkForm/>
          </div>
        </header>
      </div>
  );
}

