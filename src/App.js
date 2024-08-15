import React from 'react'
import "./App.css"
import Pricing from './components/Pricing/Pricing';
import DarkMode from './components/Theme-switch/DarkMode';


const App = () => {
  return (
    <div>
      <DarkMode />
      <Pricing />
    </div>
  )
}

export default App;
