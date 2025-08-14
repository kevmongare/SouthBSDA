// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Menu';
import Hero from './components/hero';
import AboutUs from './components/about';
import Body from './components/body';
import Map from './components/Map'
import Footer from './components/Footer';



function App() {
 

  return (
    <>
    <Header />
    <Hero />
    <AboutUs/>
    <Body/>
    <Map/>
    <Footer/>
      
    </>
  )
}

export default App
