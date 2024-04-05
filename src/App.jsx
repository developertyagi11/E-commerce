import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Admin from './Pages/Admin';
import NoPage from './Pages/NoPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ProductInfo from './Pages/ProductInfo';
import Dashboard from './Pages/Dashboard';
import UpdateProduct from './Pages/UpdateProduct';
import AddProduct from './Pages/AddProduct';
import AllProduct from './Pages/AllProduct';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/productinfo/:id' element={<ProductInfo/>}/> 
        {/* by adding id in path we make it dynamic and only particular productinfo show based on id */}
        <Route path='/dashboard' element={<ProtectedRoutesForAdmin><Dashboard/></ProtectedRoutesForAdmin>}/>
        <Route path='/updateproduct' element={<ProtectedRoutesForAdmin><UpdateProduct/></ProtectedRoutesForAdmin>}/>
        <Route path='/addproduct' element={<ProtectedRoutesForAdmin><AddProduct/></ProtectedRoutesForAdmin>}/>
        <Route path='/allproducts' element={<AllProduct/>}/>
        <Route path='/*' element={<NoPage/>}/>
      </Routes> 
  )
}


export default App;


export const ProtectedRoutes = ({ children }) => { //ye uske around wrap karoge jo after login dikhna chaiye
  if (localStorage.getItem('user')) {
    return children                    //agr kuch pada hai in loacal storage toh isk mtlb toh ye hi hai ki hum login hain
  }
  else {
    return <Navigate to='/login' />
  }
};
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email) // jo object ayega uska andar user hai jisme ye email padi hai
  if (admin.user.email === 'tyagichirag.me@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}