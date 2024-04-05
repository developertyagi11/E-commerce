import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import MyContext from '../Context/MyContext';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cartItem = useSelector((state) => state.cart);
  const{mode,toggleMode}=useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user')); // jo bhi kuch pada hai only after login in loacl stoarge toh use yaha leke aoo in form of object or agr koi login nahi hoga toh ye empt hoga
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logout=()=>{
    localStorage.clear('user');
    window.location.href="/login"
    
  }
  return (
    <div>
         <header className="relative bg-white">
         <div style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }} className={`fixed inset-y-0 left-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white w-48 transition-all duration-300 ease-in-out z-[60] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} `}>
      <div className="flex items-center  justify-end p-3">
        <button className="text-black  text-2xl"onClick={toggleSidebar} >
          &times;
        </button>
      </div>
      <ul className="py-4 ">
        <li className="px-4 py-2">
          <Link to="/allproduct" className={`${mode==="dark"?"text-white":"text-black"}`}>All Product</Link>
        </li>
        {user?.user?.email === "tyagichirag.me@gmail.com"?<li className="px-4 py-2">
          <Link to="/dashboard" className={`${mode==="dark"?"text-white":"text-black"}`}>Admin</Link>
        </li>:""}

        {user?<li className="px-4 py-2">
          <Link to="/logout" className={`${mode==="dark"?"text-white":"text-black"}`}>Logout</Link>
        </li>:""}
        <li className="px-4 py-2">
        <img class="inline-block w-10 h-10 rounded-full" src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg" alt="User"/>
        </li>
      </ul>
      <div className=' flex items-center border-t-[1px] border-zinc-300 gap-2 px-4 py-2'> 
      <span><div className=' w-4 h-4 rounded-full bg-green-400'></div></span>
      INDIA
      </div>
    </div>
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={toggleSidebar}
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                 style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  {user?.user?.email === "tyagichirag.me@gmail.com"? <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link>:""}
                  {user?<a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a>:""}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                      alt="User" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItem.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;