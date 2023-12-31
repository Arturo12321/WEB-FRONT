import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./context/UserContext";
import { UsersProvider } from './context/UsersContext';
import { CarRentProvider } from './context/CarsRentContext';
import { CarSaleProvider } from './context/CarsSaleContext';
import { OfficesProvider }   from './context/OfficesContext';
import { InformePDFProvider } from './context/pdfContext';

import Navbar from './components/Navbar';
import HomePage from './pages/Home/HomePage';
import RegisterPage from "./pages/Users/RegisterPage";
import LoginPage from "./pages/Users/LoginPage";
import UsersPage from './pages/Users/UsersPage';
import ProfilePage from './pages/Users/ProfilePage';

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

import ProtectedRoute from './pages/Home/ProtectedRoute';
import UserFormPage from './pages/Users/UserFormPage';
import UserPage from './pages/Users/UserPage';


export default function App() {
  return (
    <UserProvider>
      <UsersProvider>
      <CarRentProvider>
        <CarSaleProvider>
          <OfficesProvider>
            <InformePDFProvider>
              <BrowserRouter>
              <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />

                  <Route element={<ProtectedRoute />} >

                    <Route path='/users' element={<UsersPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path='/profileForm/:id' element={<UserFormPage/>}/>
                    <Route path='/profile/:id' element={<UserPage/>}/>

                    <Route path='/carsRent' element={<CarsRentPage/>}/>
                    <Route path='/carRent/:id' element={<CarRentPage/>}/>
                    <Route path='/myCarsRent' element={<MyCarsRentPage/>}/>
                    <Route path='/carRentForm' element={<CarRentFormPage/>}/>
                    <Route path='/carRentForm/:id' element={<CarRentFormPage/>}/>
                    <Route path='/carRentPay/:id' element={<CarRentPayPage/>}/>

                    <Route path='/carsSale' element={<CarsSalePage/>}/>
                    <Route path='/carSale/:id' element={<CarSalePage/>}/>
                    <Route path='/myCarsSale' element={<MyCarsSalePage/>}/>
                    <Route path='/carSaleForm' element={<CarSaleFormPage/>}/>
                    <Route path='/carSaleForm/:id' element={<CarSaleFormPage/>}/>
                    <Route path='/carSalePay/:id' element={<CarSalePayPage/>}/>

                    <Route path='/offices' element={<OfficesPage/>}/>
                    <Route path='/office/:id' element={<OfficePage/>}/>
                    <Route path='/myOffices' element={<MyOfficesPage/>}/>
                    <Route path='/officeForm' element={<OfficeFormPage/>}/>
                    <Route path='/officeForm/:id' element={<OfficeFormPage/>}/>
                  </Route>

                </Routes>
              </BrowserRouter>
            </InformePDFProvider>
          </OfficesProvider>
        </CarSaleProvider>
      </CarRentProvider>
      </UsersProvider>
    </UserProvider>
  )
}
