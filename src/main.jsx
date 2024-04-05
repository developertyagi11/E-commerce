import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MycontextProvider } from './Context/MyContext.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <MycontextProvider>
        <Provider store={store}>
        <App />
        <ToastContainer/>
        </Provider>
      </MycontextProvider>
    </BrowserRouter>
    
)
