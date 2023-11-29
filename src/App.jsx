
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>}></Route>
      <Route path='/login' element={<h1>Login Page</h1>}></Route>
      <Route path='/register' element={<h1>Register Page</h1>}></Route>
      <Route path='/cars' element={<h1>Cars Page</h1>}></Route>
      <Route path='/add-car' element={<h1>Add Car Page</h1>}></Route>
      <Route path='/cars/:id' element={<h1>Car Page</h1>}></Route>
      <Route path='/profile' element={<h1>Profile Page</h1>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
