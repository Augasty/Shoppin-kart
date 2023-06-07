
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes className='App'>
          <Route path='/' element={<Home />} exact />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
