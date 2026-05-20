import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const StatCounter = ({ value, label, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        scale: 1.1,
        boxShadow: '0 15px 30px rgba(249, 115, 22, 0.2)',
        transition: { duration: 0.3 }
      }}
    >
      <h3>{value}</h3>
      <p>{label}</p>
    </motion.div>
  )
}

export default function Benefits() {
  const { ref, animated } = useIntersectionObserver(0.2)

  return (
    <section className='section dark benefits'>
      <div className='container benefits-grid'>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={animated ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className='mini-title'>¿POR QUÉ ELEGIRNOS?</span>
          <h2>Más de 15 años abasteciendo proyectos industriales</h2>
        </motion.div>

        <motion.div
          ref={ref}
          className='stats'
          initial={{ opacity: 0 }}
          animate={animated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <StatCounter value='+10.000' label='Productos' delay={0.4} />
          <StatCounter value='+2.500' label='Clientes' delay={0.5} />
          <StatCounter value='24/7' label='Soporte Comercial' delay={0.6} />
        </motion.div>
      </div>
    </section>
  )
}
