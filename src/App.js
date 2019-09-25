import React from '../node_modules/react';
import './App.css';

import DemoStateless from './components/demo.stateless'
import DemoStateFul from './components/demo.stateful';
import Products from './components/Products';
import Tick from './components/Tick';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    <DemoStateless username = {'mern1'} email = {'mern1@gmail.com'} />
    <DemoStateFul username= {'mern2'} email = {'mern2@gmail.com'} />
    <Products/>
    <Tick/>
    <Todo/>
    </div>
  );
}

export default App;
