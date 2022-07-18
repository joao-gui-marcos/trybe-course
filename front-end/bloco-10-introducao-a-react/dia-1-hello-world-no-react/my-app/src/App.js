import React from 'react';
import About from './About'
import Header from './Header'
import Content from './Content';
import Footer from './Footer'
import CSS from './App.css'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['task1', 'task2', 'task3']

function App() {
  return (
    <div className="App">
      <ul>{tasks.map((elem) => Task(elem))}</ul>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
