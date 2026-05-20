import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { setIsCartOpen, cartCount } = useCart()

  return (
    <motion.button
      className='cart-icon-btn'
      onClick={() => setIsCartOpen(true)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
        <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'/>
        <line x1='3' y1='6' x2='21' y2='6'/>
        <path d='M16 10a4 4 0 0 1-8 0'/>
      </svg>
      {cartCount > 0 && (
        <motion.span
          className='cart-badge'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          key={cartCount}
        >
          {cartCount}
        </motion.span>
      )}
    </motion.button>
  )
}
