import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AmbientToggle() {
  const [isOn, setIsOn] = useState(false)
  const ctxRef = useRef(null)
  const gainRef = useRef(null)
  const oscARef = useRef(null)
  const oscBRef = useRef(null)

  const startAmbient = async () => {
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      const ctx = new AudioCtx()
      const gain = ctx.createGain()
      gain.gain.value = 0.03
      gain.connect(ctx.destination)

      const oscA = ctx.createOscillator()
      const oscB = ctx.createOscillator()
      oscA.type = 'sine'
      oscB.type = 'triangle'
      oscA.frequency.value = 196
      oscB.frequency.value = 293.66

      oscA.connect(gain)
      oscB.connect(gain)
      oscA.start()
      oscB.start()

      ctxRef.current = ctx
      gainRef.current = gain
      oscARef.current = oscA
      oscBRef.current = oscB
    }

    if (ctxRef.current.state === 'suspended') {
      await ctxRef.current.resume()
    }

    setIsOn(true)
  }

  const stopAmbient = () => {
    if (ctxRef.current && ctxRef.current.state === 'running') {
      ctxRef.current.suspend()
    }
    setIsOn(false)
  }

  const toggle = () => {
    if (isOn) {
      stopAmbient()
    } else {
      startAmbient()
    }
  }

  return (
    <motion.button
      onClick={toggle}
      className={`fixed left-3 bottom-3 sm:left-4 sm:bottom-4 z-50 px-3 sm:px-4 py-2 rounded-full border-2 border-pop-dark shadow-lg text-xs sm:text-sm font-semibold ${isOn ? 'bg-pop-gold text-pop-dark' : 'bg-white text-pop-dark'}`}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle ambient sound"
    >
      {isOn ? 'Sound On' : 'Sound Off'}
    </motion.button>
  )
}
