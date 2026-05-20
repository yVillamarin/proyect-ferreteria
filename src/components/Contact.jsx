import { motion } from 'framer-motion'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Contact() {
  const { ref, animated } = useIntersectionObserver(0.2)

  return (
    <section className='section contact'>
      <div className='container contact-box'>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={animated ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className='mini-title'>CONTACTO COMERCIAL</span>
          <h2>Solicita una cotización profesional</h2>
          <p>
            Atención personalizada para constructoras, empresas y proyectos residenciales.
          </p>
        </motion.div>

        <motion.form
          ref={ref}
          className='contact-form'
          initial={{ opacity: 0, x: 80 }}
          animate={animated ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.input
            type='text'
            placeholder='Nombre completo'
            initial={{ opacity: 0, y: 20 }}
            animate={animated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileFocus={{
              scale: 1.02,
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)',
              borderColor: 'rgba(249, 115, 22, 0.5)'
            }}
          />
          <motion.input
            type='email'
            placeholder='Correo electrónico'
            initial={{ opacity: 0, y: 20 }}
            animate={animated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileFocus={{
              scale: 1.02,
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)',
              borderColor: 'rgba(249, 115, 22, 0.5)'
            }}
          />
          <motion.textarea
            placeholder='Describe tu requerimiento'
            initial={{ opacity: 0, y: 20 }}
            animate={animated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileFocus={{
              scale: 1.02,
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)',
              borderColor: 'rgba(249, 115, 22, 0.5)'
            }}
          />
          <motion.button
            type='submit'
            initial={{ opacity: 0, y: 20 }}
            animate={animated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Solicitud
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
