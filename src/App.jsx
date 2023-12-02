
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { UserProvider } from "./context/UserContext";

import RegisterPage from "./pages/Users/RegisterPage";
import LoginPage from "./pages/Users/LoginPage";

import CarsRentPage from './pages/CarsRent/CarsRentPage';
import CarRentPage from './pages/CarsRent/CarRentPage';
import MyCarsRentPage from './pages/CarsRent/MyCarsRentPage';
import CarRentFormPage from './pages/CarsRent/CarRentFormPage';
import CarRentPayPage from './pages/CarsRent/CarRentPayPage';


import CarsSalePage from './pages/CarsSale/CarsSalePage';
import CarSalePage from './pages/CarsSale/CarSalePage';
import MyCarsSalePage from './pages/CarsSale/MyCarsSalePage';
import CarSaleFormPage from './pages/CarsSale/CarSaleFormPage';
import CarSalePayPage from './pages/CarsSale/CarSalePayPage';

import OfficesPage from './pages/Offices/OfficesPage';
import OfficePage from './pages/Offices/OfficePage';
import MyOfficesPage from './pages/Offices/MyOfficesPage';
import OfficeFormPage from './pages/Offices/OfficeFormPage';


export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path='/carsRent' element={<CarsRentPage/>}/>
          <Route path='/carsRent/:id' element={<CarRentPage/>}/>
          <Route path='/myCarsRent' element={<MyCarsRentPage/>}/>
          <Route path='/carsRentForm' element={<CarRentFormPage/>}/>
          <Route path='/carsRentForm/:id' element={<CarRentFormPage/>}/>
          <Route path='/carsRentPay/:id' element={<CarRentPayPage/>}/>

          <Route path='/carsSale' element={<CarsSalePage/>}/>
          <Route path='/carsSale/:id' element={<CarSalePage/>}/>
          <Route path='/myCarsSale' element={<MyCarsSalePage/>}/>
          <Route path='/carsSaleForm' element={<CarSaleFormPage/>}/>
          <Route path='/carsSaleForm/:id' element={<CarSaleFormPage/>}/>
          <Route path='/carsSalePay/:id' element={<CarSalePayPage/>}/>


          <Route path='/carsSale' element={<OfficesPage/>}/>
          <Route path='/carsSale/:id' element={<OfficePage/>}/>
          <Route path='/myCarsSale' element={<MyOfficesPage/>}/>
          <Route path='/carsSaleForm' element={<OfficeFormPage/>}/>
          <Route path='/carsSaleForm/:id' element={<OfficeFormPage/>}/>

        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
