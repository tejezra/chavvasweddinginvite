import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AmbientToggle() {
  const [isOn, setIsOn] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    // Initialize and play audio on page load
    if (!audioRef.current) {
      audioRef.current = new Audio('/Meghaallo.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0.3
      audioRef.current.preload = 'auto'
    }

    // Try to play audio
    const playAudio = async () => {
      try {
        await audioRef.current.play()
      } catch (err) {
        console.log('Audio autoplay blocked by browser policy. Click to enable.')
        // Setup click listener as fallback for browser autoplay restrictions
        const enableAudio = async () => {
          try {
            await audioRef.current.play()
            document.removeEventListener('click', enableAudio)
          } catch (e) {
            console.log('Error playing audio:', e)
          }
        }
        document.addEventListener('click', enableAudio)
      }
    }

    playAudio()
  }, [])

  const toggle = () => {
    if (isOn) {
      if (audioRef.current) {
        audioRef.current.pause()
      }
      setIsOn(false)
    } else {
      if (audioRef.current) {
        audioRef.current.play()
      }
      setIsOn(true)
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
