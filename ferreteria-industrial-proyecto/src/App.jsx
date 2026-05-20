import { motion, useScroll, useSpring } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Cart from './components/Cart'

function AppContent() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className='app'>
      <motion.div className='scroll-progress' style={{ scaleX }} />
      <Header />
      <Hero />
      <Services />
      <Products />
      <Benefits />
      <Contact />
      <Footer />
      <Cart />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
