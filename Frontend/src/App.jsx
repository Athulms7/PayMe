import { useState } from 'react'
import './App.css'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import {Signup} from "./pages/Signup";
import { Signin } from './pages/Signin';
import { Dashboard } from './pages/Dashboard';
import {NotPage} from './pages/pagenotfound';
import { SendMoneyPage } from './pages/sendmoney';
import { PaymentSuccess } from './pages/succespage';
import { Profile } from './pages/profile';
import AboutPage from './pages/about';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="*" element={<NotPage/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/success' element={<PaymentSuccess/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/send' element={<SendMoneyPage/>}></Route>

      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
