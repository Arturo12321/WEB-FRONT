
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { UserProvider } from "./context/UserContext";
import RegisterPage from "./pages/Users/RegisterPage";
import LoginPage from "./pages/Users/LoginPage";
import CarsPage from './pages/CarsRent/CarsPage';


export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/cars' element={<CarsPage/>}/>
          <Route path='/add-car' element={<h1>Add Car Page</h1>}></Route>
          <Route path='/cars/:id' element={<h1>Car Page</h1>}></Route>
          <Route path='/profile' element={<h1>Profile Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
