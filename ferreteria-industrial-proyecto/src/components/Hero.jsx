import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className='hero'>
      <motion.div 
        className='overlay' 
        style={{ opacity }}
      />
      
      <motion.div 
        className='hero-background'
        style={{ y: y1 }}
      />

      <motion.div
        className='hero-content'
        style={{ y: y2, opacity }}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      >
        <motion.span 
          className='badge'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FERRETERÍA INDUSTRIAL
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Soluciones integrales para construcción y hogar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Especialistas en herramientas profesionales, materiales de construcción,
          plomería industrial y suministros técnicos de alta calidad.
        </motion.p>

        <motion.div 
          className='hero-buttons'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className='primary-btn'
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 15px 40px rgba(249, 115, 22, 0.4)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Catálogo
          </motion.button>
          <motion.button 
            className='secondary-btn'
            whileHover={{ 
              scale: 1.05, 
              borderColor: 'rgba(249, 115, 22, 0.8)',
              backgroundColor: 'rgba(249, 115, 22, 0.1)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Cotización
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
