import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavWrapper from './components/NavWrapper';
import Home from './viewsExamples/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavWrapper>
        <Home/>
      </NavWrapper>
    </>
  )
}

export default App
