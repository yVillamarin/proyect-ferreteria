import { motion } from 'framer-motion'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { useCart } from '../context/CartContext'

const services = [
  {
    id: 101,
    title: 'Herramientas Eléctricas',
    text: 'Taladros, pulidoras, sierras y equipos industriales profesionales.',
    price: 0,
    priceDisplay: 'Consultar',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 102,
    title: 'Materiales de Construcción',
    text: 'Cemento, acero, pinturas y soluciones para obra civil.',
    price: 0,
    priceDisplay: 'Consultar',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 103,
    title: 'Plomería y Fontanería',
    text: 'Accesorios hidráulicos, válvulas, tuberías y conexiones.',
    price: 0,
    priceDisplay: 'Consultar',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function Services() {
  const { ref, animated } = useIntersectionObserver(0.2)
  const { addToCart } = useCart()

  return (
    <section className='section dark'>
      <div className='container'>
        <motion.div
          className='section-title'
          initial={{ opacity: 0, y: 30 }}
          animate={animated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span>NUESTRAS CATEGORÍAS</span>
          <h2>Equipamiento Industrial Profesional</h2>
        </motion.div>

        <motion.div
          ref={ref}
          className='cards-grid'
          variants={containerVariants}
          initial='hidden'
          animate={animated ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              className='service-card'
              key={service.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <motion.button
                className='add-to-cart-btn'
                onClick={() => addToCart(service)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Productos
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
