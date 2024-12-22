import AppRoutes from "./components/routes";
import Home from './pages/Home'

import Navbar from './components/Navbar'
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
// import { motion } from "framer-motion"
// import { motion } from "motion/react"
function App() {
  

  return (
    <>
    
      
     <Navbar></Navbar>

     
      <AppRoutes />
    
      <Footer/>
       
    </>
  )
}

export default App
