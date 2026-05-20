import { motion } from 'framer-motion'
import { products } from '../data/products'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { useCart } from '../context/CartContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function Products() {
  const { ref, animated } = useIntersectionObserver(0.15)
  const { addToCart } = useCart()

  return (
    <section className='section'>
      <div className='container'>
        <motion.div
          className='section-title'
          initial={{ opacity: 0, x: -50 }}
          animate={animated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span>PRODUCTOS DESTACADOS</span>
          <h2>Catálogo Industrial</h2>
        </motion.div>

        <motion.div
          ref={ref}
          className='products-grid'
          variants={containerVariants}
          initial='hidden'
          animate={animated ? 'visible' : 'hidden'}
        >
          {products.map((product) => (
            <motion.div
              className='product-card'
              key={product.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.08,
                y: -15,
                boxShadow: '0 25px 50px rgba(249, 115, 22, 0.25)',
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className='image-wrapper'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={product.image} alt={product.name} />
              </motion.div>

              <div className='product-content'>
                <small>{product.category}</small>
                <h3>{product.name}</h3>
                <strong>{product.priceDisplay}</strong>
                <motion.button
                  className='add-to-cart-btn'
                  onClick={() => addToCart(product)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agregar al Carrito
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
