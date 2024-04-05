import React  from 'react'
import Layout from '../Componenets/Layout';
import HeroSection from '../Componenets/HeroSection';
import Filter from '../Componenets/Filter';
import ProductCard from '../Componenets/ProductCard';
import Track from '../Componenets/Track';
import Testimonial from '../Componenets/Testimonial';
import { useDispatch, useSelector } from 'react-redux';



const Home = () => {
 const cartItem=useSelector((state)=>state.cart);
 const dispatch=useDispatch();



  return (
    
    <Layout>
     <HeroSection/>
     <Filter/>
     <ProductCard/>
     <Track/>
     <Testimonial/>
    </Layout>
  )
}

export default Home;