import React from 'react';
import MyWebsite from './componets/MyWebsite';
import Navbar from './componets/Navbar';
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <MyWebsite />
    </div>
  );
};

export default App;
