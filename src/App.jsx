
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RegisterPage from "./pages/Users/RegisterPage";
import LoginPage from "./pages/Users/LoginPage";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/cars' element={<h1>Cars Page</h1>}></Route>
      <Route path='/add-car' element={<h1>Add Car Page</h1>}></Route>
      <Route path='/cars/:id' element={<h1>Car Page</h1>}></Route>
      <Route path='/profile' element={<h1>Profile Page</h1>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
