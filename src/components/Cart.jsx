import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return

    const orderMessage = cart
      .map(
        (item) =>
          `• ${item.name} - Cantidad: ${item.quantity} - Precio: ${item.price}`
      )
      .join('\n')

    const totalMessage = `\n\nTotal: $${cartTotal.toLocaleString()}`
    const finalMessage = `Hola, me gustaría realizar el siguiente pedido:\n\n${orderMessage}${totalMessage}`

    const whatsappUrl = `https://wa.me/573000000000?text=${encodeURIComponent(finalMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className='cart-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            className='cart-panel'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className='cart-header'>
              <h2>Tu Carrito</h2>
              <motion.button
                className='close-cart'
                onClick={() => setIsCartOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>

            <div className='cart-items'>
              {cart.length === 0 ? (
                <div className='cart-empty'>
                  <p>Tu carrito está vacío</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    className='cart-item'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <img src={item.image} alt={item.name} />
                    <div className='cart-item-details'>
                      <h4>{item.name}</h4>
                      <p className='cart-item-price'>{item.price}</p>
                      <div className='cart-item-controls'>
                        <motion.button
                          className='quantity-btn'
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          −
                        </motion.button>
                        <span>{item.quantity}</span>
                        <motion.button
                          className='quantity-btn'
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          +
                        </motion.button>
                      </div>
                    </div>
                    <motion.button
                      className='remove-item'
                      onClick={() => removeFromCart(item.id)}
                      whileHover={{ scale: 1.1, color: '#ef4444' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      🗑
                    </motion.button>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className='cart-footer'>
                <div className='cart-total'>
                  <span>Total:</span>
                  <span className='total-amount'>${cartTotal.toLocaleString()}</span>
                </div>
                <motion.button
                  className='checkout-btn'
                  onClick={handleWhatsAppOrder}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pedir por WhatsApp
                </motion.button>
                <motion.button
                  className='clear-cart-btn'
                  onClick={clearCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Vaciar Carrito
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
