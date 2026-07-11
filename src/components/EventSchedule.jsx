import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import eventsData from '../data/events.json'
import page2Bg from '../../Page2_BG.png'
import page2BgMain from '../../page2_bgmain.png'
import flowerTopLeft from '../../Flower_pt.png'
import flowerBottomRight from '../../Flower_bt.png'
import smallLamp from '../../smalllamp.png'
import shadesOfBlue from '../../shadesofblue.png'
import shadesOfPink from '../../shadesofpink.png'
import tallLamp from '../../talllamp.png'
import pkMain from '../../pk_main.png'
import pkBg from '../../pk_bg.png'
import ltFlower from '../../lt_flower.png'
import rtFlower from '../../rt_flower.png'
import rcBg from '../../rc_bg.png'
import rcInner from '../../rc_inner.png'
import rcItop from '../../rc_itop.png'
import petal1 from '../../petal1.png'
import petal2 from '../../petal2.png'
import petal3 from '../../petal3.png'
import haldiBg from '../../haldi_bg.png'
import haldiInner from '../../haldi_inner.png'
import haldiBorder from '../../haldi_border.png'
import vkBg from '../../vk_bg.png'
import vkInner from '../../vk_inner.png'
import vkTop from '../../vk_top.png'
import vkProp from '../../vk_prop.png'
import bt1 from '../../bt1.png'
import bt2 from '../../bt2.png'
import pgBorder from '../../pg_border.png'
import pgBg from '../../pg_bg.png'
import pgCenter from '../../pg_center.png'
import wedBg from '../../wed_bg.png'
import wedInner from '../../wed_inner.png'
import wedFl1 from '../../wed_fl1.png'
import wedFl2 from '../../wed_fl2.png'
import wedLt from '../../wed_lt.png'
import wedLa1 from '../../wed_la1.png'
import wedLa2 from '../../wed_la2.png'
import wedLa3 from '../../wed_la3.png'
import bell1 from '../../bell1.png'
import bell2 from '../../bell2.png'
import bell3 from '../../bell3.png'

const PETAL_SRCS = [petal1, petal2, petal3]
const PETAL_CONFIGS = [
  { src: 0, left:  '8%', size: '6%',   duration: 6.2, delay: 0.0, sway: [0, 12, -8,  15,  0], spin: [0,  40, -20,  60, 0] },
  { src: 1, left: '18%', size: '5%',   duration: 7.1, delay: 0.8, sway: [0,-10, 14,  -6,  0], spin: [0, -30,  50, -40, 0] },
  { src: 2, left: '29%', size: '7%',   duration: 5.8, delay: 1.5, sway: [0,  8,-12,  10,  0], spin: [0,  55, -15,  30, 0] },
  { src: 0, left: '41%', size: '5.5%', duration: 6.8, delay: 2.3, sway: [0,-14,  8, -10,  0], spin: [0, -45,  25, -60, 0] },
  { src: 1, left: '52%', size: '6%',   duration: 7.4, delay: 0.3, sway: [0, 10,-16,  12,  0], spin: [0,  35, -50,  20, 0] },
  { src: 2, left: '63%', size: '5%',   duration: 5.5, delay: 1.1, sway: [0, -8, 12, -14,  0], spin: [0,  60, -30,  45, 0] },
  { src: 0, left: '74%', size: '6.5%', duration: 6.5, delay: 2.7, sway: [0, 14,-10,   8,  0], spin: [0, -25,  55, -35, 0] },
  { src: 1, left: '85%', size: '5%',   duration: 7.8, delay: 0.6, sway: [0,-12, 16,  -8,  0], spin: [0,  50, -40,  65, 0] },
  { src: 2, left: '13%', size: '7%',   duration: 6.0, delay: 3.2, sway: [0,  6,-14,  10,  0], spin: [0, -60,  20, -50, 0] },
  { src: 0, left: '35%', size: '5.5%', duration: 7.2, delay: 1.8, sway: [0,-10,  8, -12,  0], spin: [0,  30, -55,  40, 0] },
  { src: 1, left: '57%', size: '6%',   duration: 5.9, delay: 2.0, sway: [0, 12, -8,  16,  0], spin: [0, -40,  60, -25, 0] },
  { src: 2, left: '79%', size: '7%',   duration: 6.7, delay: 0.4, sway: [0,-16, 10,  -8,  0], spin: [0,  45, -30,  55, 0] },
  { src: 0, left: '47%', size: '5%',   duration: 8.0, delay: 3.5, sway: [0,  8,-12,   6,  0], spin: [0, -35,  25, -45, 0] },
  { src: 1, left: '23%', size: '6.5%', duration: 6.3, delay: 1.2, sway: [0,-14, 18, -10,  0], spin: [0,  55, -20,  65, 0] },
  { src: 2, left: '91%', size: '5.5%', duration: 7.5, delay: 2.6, sway: [0, 10,-14,   8,  0], spin: [0, -50,  35, -30, 0] },
]

const sectionLayouts = [
  {
    // Mehendi – diagonal hatch, centered, blurIn title, left-border cards
    titleAnim: 'blurIn',
    align: 'text-center',
    cardClass: 'rounded-2xl px-5 py-4',
    cardBg: 'transparent',
    Decor: () => (
      <>
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '22px 22px' }} />
        <motion.div className="absolute -top-24 -left-24 w-80 h-80 rounded-full border-4 border-white/10"
          animate={{ rotate: [0, 360] }} transition={{ duration: 44, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border-2 border-white/8"
          animate={{ rotate: [360, 0] }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }} />
      </>
    ),
  },
  {
    // Haldi & Sangeet – scan lines, left-aligned, slideRight title, outlined cards
    titleAnim: 'slideRight',
    align: 'text-center sm:text-left',
    cardClass: 'rounded-2xl px-4 py-4',
    cardBg: 'transparent',
    Decor: () => (
      <>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-[14rem] leading-none text-white/[0.05] select-none pointer-events-none">✦</div>
        {[0,1,2,3,4].map((i) => (
          <motion.div key={i} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ top: `${12 + i * 16}%` }}
            animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [0.7, 1.05, 0.7] }}
            transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }} />
        ))}
      </>
    ),
  },
  {
    // Wedding – concentric pulse rings, centered, zoomIn title, pill cards
    titleAnim: 'zoomIn',
    align: 'text-center',
    cardClass: 'rounded-3xl px-4 py-4',
    cardBg: 'transparent',
    Decor: () => (
      <>
        {[300, 220, 150, 80].map((size, i) => (
          <motion.div key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12"
            style={{ width: size, height: size }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 5 + i * 1.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }} />
        ))}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
      </>
    ),
  },
  {
    // Reception – horizontal speed lines, slideLeft title, bottom-bar minimal cards
    titleAnim: 'slideLeft',
    align: 'text-center',
    cardClass: 'rounded-none pb-4 pt-2 px-1',
    cardBg: 'transparent',
    Decor: () => (
      <>
        {[0,1,2,3,4,5,6].map((i) => (
          <motion.div key={i}
            className="absolute h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ top: `${6 + i * 13}%`, left: 0, right: 0 }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 4 + i * 0.35, repeat: Infinity, ease: 'linear', delay: i * 0.28 }} />
        ))}
        <motion.div className="absolute right-8 top-10 text-white/18 text-8xl select-none"
          animate={{ rotate: [0, 360] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>✦</motion.div>
        <motion.div className="absolute left-6 bottom-12 text-white/14 text-5xl select-none"
          animate={{ rotate: [360, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>❋</motion.div>
      </>
    ),
  },
]

function Reveal({ children, type = 'fadeUp', delay = 0, amount = 0.2 }) {
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
    },
    slideLeft: {
      initial: { opacity: 0, x: -28 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
    },
    slideRight: {
      initial: { opacity: 0, x: 28 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -3, y: 10 },
      whileInView: { opacity: 1, rotate: 0, y: 0 },
      transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
    },
    blurIn: {
      initial: { opacity: 0, y: 14, filter: 'blur(8px)' },
      whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const v = variants[type] || variants.fadeUp

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: false, amount }}
      transition={v.transition}
    >
      {children}
    </motion.div>
  )
}

function PopArtImage({ accent, ink, label, variant }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden"
      whileHover={{ y: -6, rotate: variant === 1 ? -1 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 pastel-lace opacity-45 rounded-2xl" />
      <svg viewBox="0 0 300 180" className="w-full h-36" aria-hidden="true">
        <rect x="0" y="0" width="300" height="180" fill={accent} opacity="0.2" />
        <circle cx={variant === 1 ? '78' : '224'} cy="90" r="56" fill={accent} opacity="0.55" />
        <path d="M40 132 L150 38 L260 132" fill="none" stroke={ink} strokeWidth="10" strokeLinecap="round" />
        <path d="M30 148 L270 148" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round" />
        <circle cx="150" cy="90" r="20" fill={ink} opacity="0.8" />
      </svg>
      <div className="px-3 py-2 text-xs font-semibold tracking-widest uppercase text-[#7d6b74] bg-white/55 backdrop-blur-sm">
        {label}
      </div>
    </motion.div>
  )
}

function MotifSticker({ motif, accent }) {
  const shared = 'absolute w-20 h-20 opacity-80'

  if (motif === 'paisley') {
    return (
      <svg className={shared} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M74 13c-23 0-42 18-42 42 0 20 14 34 33 34 14 0 25-11 25-25 0-11-8-20-19-20-9 0-16 8-16 17 0 7 6 13 13 13 5 0 9-4 9-9" stroke={accent} strokeWidth="7" strokeLinecap="round" />
      </svg>
    )
  }

  if (motif === 'sunburst') {
    return (
      <svg className={shared} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="16" fill={accent} />
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 50 + Math.cos(angle) * 25
          const y1 = 50 + Math.sin(angle) * 25
          const x2 = 50 + Math.cos(angle) * 42
          const y2 = 50 + Math.sin(angle) * 42
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeWidth="5" strokeLinecap="round" />
        })}
      </svg>
    )
  }
  if (motif === 'lotus') {
    return (
      <svg className={shared} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M50 20c6 10 6 22 0 32-6-10-6-22 0-32Z" fill={accent} />
        <path d="M28 34c11 4 19 14 22 25-11-4-19-14-22-25Z" fill={accent} />
        <path d="M72 34c-11 4-19 14-22 25 11-4 19-14 22-25Z" fill={accent} />
        <path d="M17 55c13-1 25 4 33 13-13 1-25-4-33-13Z" fill={accent} />
        <path d="M83 55c-13-1-25 4-33 13 13 1 25-4 33-13Z" fill={accent} />
      </svg>
    )
  }

  return (
    <svg className={shared} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M20 70c0-26 19-46 43-46h17v15H64c-14 0-25 13-25 31v10H20V70Z" fill={accent} />
      <path d="M80 31c0 26-19 46-43 46H20V62h17c14 0 25-13 25-31V21h18v10Z" fill={accent} opacity="0.7" />
    </svg>
  )
}

export default function EventSchedule() {
  // — Section 0 scroll hooks (intro card) —
  const zeroSectionRef = useRef(null)
  const { scrollYProgress: scrollYProgress0 } = useScroll({ target: zeroSectionRef, offset: ['start end', 'end start'] })
  const smooth0             = useSpring(scrollYProgress0, { stiffness: 60, damping: 20, restDelta: 0.001 })
  const titleOpacity0       = useTransform(smooth0, [0.25, 0.42], [0, 1])
  const titleScale0         = useTransform(smooth0, [0.25, 0.42], [0.88, 1])
  const contentOpacity0     = useTransform(smooth0, [0.32, 0.52], [0, 1])
  const contentY0           = useTransform(smooth0, [0.32, 0.52], [18, 0])

  const firstSectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: firstSectionRef,
    offset: ['start end', 'end start'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })
  const darkOverlayOpacity = useTransform(smooth, [0, 0.1, 0.3], [1, 0.9, 0])
  const lampGlowOpacity = useTransform(
    smooth,
    [0,    0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.25],
    [0,    0,    0.75, 0.05, 0.9,  0.08, 1.0,  0.12, 0.85, 0.22, 0.95, 0.30, 0.92, 1   ]
  )
  const lampGlowScale = useTransform(smooth, [0.05, 0.22], [0.05, 1])

  const titleOpacity  = useTransform(smooth, [0.05, 0.15], [0, 1])
  const titleScale    = useTransform(smooth, [0.05, 0.15], [0.82, 1])

  const subtitleOpacity = useTransform(smooth, [0.08, 0.18], [0, 1])
  const subtitleY       = useTransform(smooth, [0.08, 0.18], [20, 0])
  const subtitleFilter  = useTransform(smooth, [0.08, 0.18], ['blur(8px)', 'blur(0px)'])

  const venueOpacity = useTransform(smooth, [0.12, 0.22], [0, 1])
  const venueX       = useTransform(smooth, [0.12, 0.22], [-28, 0])

  const dateOpacity = useTransform(smooth, [0.15, 0.25], [0, 1])
  const dateX       = useTransform(smooth, [0.15, 0.25], [28, 0])

  const dressOpacity = useTransform(smooth, [0.18, 0.28], [0, 1])
  const dressY       = useTransform(smooth, [0.18, 0.28], [22, 0])
  const dressRotate  = useTransform(smooth, [0.18, 0.28], [-2, 0])

  const qrOpacity = useTransform(smooth, [0.20, 0.30], [0, 1])
  const qrScale   = useTransform(smooth, [0.20, 0.30], [0.88, 1])

  // — Section 2 scroll hooks (same config, separate ref) —
  const secondSectionRef = useRef(null)
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: secondSectionRef, offset: ['start end', 'end start'] })
  const smooth2            = useSpring(scrollYProgress2, { stiffness: 60, damping: 20, restDelta: 0.001 })
  const darkOverlayOpacity2 = useTransform(smooth2, [0, 0.1, 0.3], [1, 0.9, 0])
  const titleOpacity2       = useTransform(smooth2, [0.05, 0.15], [0, 1])
  const titleScale2         = useTransform(smooth2, [0.05, 0.15], [0.82, 1])
  const subtitleOpacity2    = useTransform(smooth2, [0.08, 0.18], [0, 1])
  const subtitleY2          = useTransform(smooth2, [0.08, 0.18], [20, 0])
  const subtitleFilter2     = useTransform(smooth2, [0.08, 0.18], ['blur(8px)', 'blur(0px)'])
  const venueOpacity2       = useTransform(smooth2, [0.12, 0.22], [0, 1])
  const venueX2             = useTransform(smooth2, [0.12, 0.22], [-28, 0])
  const dateOpacity2        = useTransform(smooth2, [0.15, 0.25], [0, 1])
  const dateX2              = useTransform(smooth2, [0.15, 0.25], [28, 0])
  const dressOpacity2       = useTransform(smooth2, [0.18, 0.28], [0, 1])
  const dressY2             = useTransform(smooth2, [0.18, 0.28], [22, 0])
  const dressRotate2        = useTransform(smooth2, [0.18, 0.28], [-2, 0])
  const qrOpacity2          = useTransform(smooth2, [0.20, 0.30], [0, 1])
  const qrScale2            = useTransform(smooth2, [0.20, 0.30], [0.88, 1])

  // — Section 3 scroll hooks (Haldi — same config, separate ref) —
  const thirdSectionRef = useRef(null)
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: thirdSectionRef, offset: ['start end', 'end start'] })
  const smooth3             = useSpring(scrollYProgress3, { stiffness: 60, damping: 20, restDelta: 0.001 })
  const darkOverlayOpacity3 = useTransform(smooth3, [0, 0.1, 0.3], [1, 0.9, 0])
  const titleOpacity3       = useTransform(smooth3, [0.05, 0.15], [0, 1])
  const titleScale3         = useTransform(smooth3, [0.05, 0.15], [0.82, 1])
  const subtitleOpacity3    = useTransform(smooth3, [0.08, 0.18], [0, 1])
  const subtitleY3          = useTransform(smooth3, [0.08, 0.18], [20, 0])
  const subtitleFilter3     = useTransform(smooth3, [0.08, 0.18], ['blur(8px)', 'blur(0px)'])
  const venueOpacity3       = useTransform(smooth3, [0.12, 0.22], [0, 1])
  const venueX3             = useTransform(smooth3, [0.12, 0.22], [-28, 0])
  const dateOpacity3        = useTransform(smooth3, [0.15, 0.25], [0, 1])
  const dateX3              = useTransform(smooth3, [0.15, 0.25], [28, 0])
  const dressOpacity3       = useTransform(smooth3, [0.18, 0.28], [0, 1])
  const dressY3             = useTransform(smooth3, [0.18, 0.28], [22, 0])
  const dressRotate3        = useTransform(smooth3, [0.18, 0.28], [-2, 0])
  const qrOpacity3          = useTransform(smooth3, [0.20, 0.30], [0, 1])
  const qrScale3            = useTransform(smooth3, [0.20, 0.30], [0.88, 1])

  const firstSectionTextShadow = '0 5px 10px rgba(49, 58, 2, 0.5)'
  const firstSectionOverlayWidth = 'min(94vw, 42rem)'
  const firstSectionOverlayScale = 1.0
  const firstSectionFlowers = {
    topLeft: { left: '-3.5%', top: '35%', width: '30%' },
    bottomRight: { right: '-3.5%', bottom: '-1%', width: '30%' },
  }
  const firstSectionLamps = {
    small: { left: '3%', bottom: '10%', width: '12%' },
    tall: { right: '3%', bottom: '41.9%', width: '15%' },
  }
  const firstSectionContent = {
    wrapper: { left: '14%', top: '17%', right: '16%', bottom: '10%' },
    title: {
      top: '-9%',
      left: '2%',
      width: '100%',
      textAlign: 'center',
      fontSize: '14cqw',
      color: '#45381C',
      fontClassName: 'font-script-title',
    },
    subtitle: {
      marginTop: '24%',
      left: '0%',
      width: '100%',
      textAlign: 'center',
      fontSize: '4.3cqw',
      color: 'rgba(69,56,28,1)',
      fontClassName: 'font-elegant-subtitle',
    },
    venue: {
      marginTop: '13%',
      left: '0%',
      width: '100%',
      textAlign: 'center',
      fontSize: '3.7cqw',
      color: 'rgba(69,56,28,1)',
      labelColor: '#45381C',
      fontClassName: 'font-sans',
    },
    cards: { marginTop: '4%', gap: '3.5%', width: '90%' },
    cardTitle: {
      left: '0%',
      width: '100%',
      textAlign: 'center',
      fontSize: '3.7cqw',
      color: '#45381C',
      fontClassName: 'font-sans',
    },
    cardBody: {
      left: '0%',
      width: '100%',
      textAlign: 'center',
      fontSize: '3.6cqw',
      color: 'rgba(69,56,28,1)',
      fontClassName: 'font-sans',
    },
    dressCodeImage: {
      width: '44%',
      marginTop: '4%',
    },
    qr: {
      maxWidth: '28%',
      labelFontSize: '2.35cqw',
      textAlign: 'center',
      labelColor: '#5f4a56',
      labelBg: 'rgba(255,255,255,1)',
      fontClassName: 'font-sans',
    },
  }

  const secondSectionContent = {
    wrapper:  { left: '14%', top: '17%', right: '16%', bottom: '10%' },
    title:    { top: '-9%', left: '1%', width: '100%', textAlign: 'center', fontSize: '14cqw', color: '#45381C', fontClassName: 'font-script-title' },
    subtitle: { marginTop: '24%', left: '2%', width: '100%', textAlign: 'center', fontSize: '4.3cqw', color: 'rgba(69,56,28,1)', fontClassName: 'font-elegant-subtitle' },
    venue:    { marginTop: '9%', left: '0%', width: '100%', textAlign: 'center', fontSize: '3.7cqw', color: 'rgba(69,56,28,1)', labelColor: '#45381C', fontClassName: 'font-sans' },
    cards:    { marginTop: '4%', gap: '2%', width: '90%' },
    cardTitle: { left: '0%', width: '100%', textAlign: 'center', fontSize: '3.7cqw', color: '#45381C', fontClassName: 'font-sans' },
    cardBody:  { left: '0%', width: '100%', textAlign: 'center', fontSize: '3.6cqw', color: 'rgba(69,56,28,1)', fontClassName: 'font-sans' },
    dressCodeImage: { width: '44%', marginTop: '4%' },
    qr: { maxWidth: '25%', labelFontSize: '2.35cqw', textAlign: 'center', labelColor: '#5f4a56', labelBg: 'rgba(255,255,255,1)', fontClassName: 'font-sans' },
  }

  // — Section 2 image swaps —
  const secondSectionImages = {
    bgColor:          '#4A0135',
    bgMain:           pkBg,
    flowerTopLeft:    ltFlower,
    flowerBottomRight: rtFlower,
  }
  const secondSectionLayout = {
    // pk_bg.png — scale: 1.0 = same size as page2BgMain; increase to zoom in
    bgMain: { scale: 2.05 },
    // lt_flower.png — left / top / width (% of container)
    flowerLeft:  { left: '-4%', bottom: '0%',  width: '50%' },
    // rt_flower.png — right / bottom / width (% of container)
    flowerRight: { right: '-12%', bottom: '0%', width: '70%' },
  }

  // — Section 3 (Haldi) config —
  const thirdSectionContent = {    wrapper:  { left: '14%', top: '17%', right: '16%', bottom: '10%' },
    title:    { top: '-9%', left: '2%', width: '100%', textAlign: 'center', fontSize: '14cqw', color: '#0c4108', fontClassName: 'font-script-title' },
    subtitle: { marginTop: '24%', left: '0%', width: '100%', textAlign: 'center', fontSize: '4.3cqw', color: '#0c4108', fontClassName: 'font-elegant-subtitle' },
    venue:    { marginTop: '13%', left: '0%', width: '100%', textAlign: 'center', fontSize: '3.7cqw', color: '#0c4108', labelColor: '#0c4108', fontClassName: 'font-sans' },
    cards:    { marginTop: '2%', gap: '2%', width: '90%' },
    cardTitle: { left: '0%', width: '100%', textAlign: 'center', fontSize: '3.7cqw', color: '#0c4108', fontClassName: 'font-sans' },
    cardBody:  { left: '0%', width: '100%', textAlign: 'center', fontSize: '3.6cqw', color: '#0c4108', fontClassName: 'font-sans' },
    dressCodeImage: { width: '50%', marginTop: '4%' },
    qr: { maxWidth: '28%', labelFontSize: '2.35cqw', textAlign: 'center', labelColor: '#5f4a56', labelBg: 'rgba(255,255,255,1)', fontClassName: 'font-sans' },
  }
  const thirdSectionOverlayScale = 0.9
  const thirdSectionBorder = { top: '28%', left: '0%', width: '100%', scaleX: 1.9, scaleY: 2.1 }
  // Haldi vibe: falling turmeric drops & marigold petals
  const HALDI_PARTICLES = [
    { left: '5%',  size: 7,  color: '#FFD700', delay: 0.0,  duration: 3.4, sway: [0, -8,  4],  spin: [0, 120, 240]  },
    { left: '13%', size: 5,  color: '#FFA500', delay: 0.7,  duration: 2.9, sway: [0,  6, -5],  spin: [0, -90, -180] },
    { left: '22%', size: 8,  color: '#FFEC8B', delay: 1.3,  duration: 3.6, sway: [0, -10, 7],  spin: [0,  60,  120] },
    { left: '30%', size: 5,  color: '#FF8C00', delay: 0.4,  duration: 3.1, sway: [0,  9, -6],  spin: [0, -150,-300] },
    { left: '39%', size: 6,  color: '#FFD700', delay: 1.6,  duration: 3.3, sway: [0, -7,  5],  spin: [0,  200, 400] },
    { left: '48%', size: 4,  color: '#FFA500', delay: 0.9,  duration: 2.7, sway: [0,  5, -8],  spin: [0, -80, -160] },
    { left: '57%', size: 9,  color: '#FFEC8B', delay: 0.2,  duration: 3.8, sway: [0, -6,  9],  spin: [0,  100, 200] },
    { left: '65%', size: 5,  color: '#FF8C00', delay: 1.1,  duration: 3.0, sway: [0,  8, -4],  spin: [0, -110,-220] },
    { left: '74%', size: 7,  color: '#FFD700', delay: 0.5,  duration: 3.5, sway: [0, -9,  6],  spin: [0,  140, 280] },
    { left: '82%', size: 5,  color: '#FFA500', delay: 1.4,  duration: 2.8, sway: [0,  7, -7],  spin: [0, -70, -140] },
    { left: '90%', size: 6,  color: '#FFEC8B', delay: 0.3,  duration: 3.2, sway: [0, -5,  4],  spin: [0,  90,  180] },
    // second wave — offset positions & timings for density
    { left: '9%',  size: 5,  color: '#FF8C00', delay: 1.8,  duration: 3.0, sway: [0,  7, -4],  spin: [0, -160,-320] },
    { left: '17%', size: 7,  color: '#FFD700', delay: 0.5,  duration: 3.7, sway: [0, -9,  6],  spin: [0,  80,  160] },
    { left: '26%', size: 4,  color: '#FFA500', delay: 1.0,  duration: 2.6, sway: [0,  5, -7],  spin: [0, -50, -100] },
    { left: '35%', size: 8,  color: '#FFEC8B', delay: 0.2,  duration: 3.9, sway: [0, -8,  5],  spin: [0,  170, 340] },
    { left: '43%', size: 5,  color: '#FF8C00', delay: 1.5,  duration: 3.2, sway: [0,  10,-6],  spin: [0, -130,-260] },
    { left: '52%', size: 6,  color: '#FFD700', delay: 0.6,  duration: 3.4, sway: [0, -6,  8],  spin: [0,  110, 220] },
    { left: '61%', size: 4,  color: '#FFA500', delay: 1.9,  duration: 2.8, sway: [0,  8, -5],  spin: [0, -60, -120] },
    { left: '70%', size: 9,  color: '#FFEC8B', delay: 0.8,  duration: 3.6, sway: [0, -7,  4],  spin: [0,  150, 300] },
    { left: '78%', size: 5,  color: '#FF8C00', delay: 0.1,  duration: 3.1, sway: [0,  6, -9],  spin: [0, -100,-200] },
    { left: '86%', size: 7,  color: '#FFD700', delay: 1.2,  duration: 3.3, sway: [0, -5,  7],  spin: [0,  130, 260] },
    { left: '94%', size: 5,  color: '#FFA500', delay: 0.4,  duration: 2.9, sway: [0,  9, -4],  spin: [0, -75, -150] },
  ]
  const HALDI_SPARKLES = [
    { left: '8%',  top: '5%',  size: 12, delay: 0.0,  duration: 1.6 },
    { left: '16%', top: '10%', size: 9,  delay: 0.6,  duration: 1.9 },
    { left: '25%', top: '3%',  size: 14, delay: 1.2,  duration: 1.5 },
    { left: '34%', top: '12%', size: 10, delay: 0.3,  duration: 2.0 },
    { left: '44%', top: '1%',  size: 13, delay: 0.9,  duration: 1.7 },
    { left: '54%', top: '9%',  size: 11, delay: 1.5,  duration: 1.8 },
    { left: '63%', top: '4%',  size: 14, delay: 0.2,  duration: 1.6 },
    { left: '72%', top: '13%', size: 9,  delay: 1.0,  duration: 2.1 },
    { left: '81%', top: '6%',  size: 12, delay: 0.5,  duration: 1.5 },
    { left: '89%', top: '11%', size: 10, delay: 1.7,  duration: 1.9 },
    { left: '20%', top: '16%', size: 8,  delay: 0.7,  duration: 2.0 },
    { left: '50%', top: '17%', size: 9,  delay: 1.3,  duration: 1.7 },
    { left: '76%', top: '18%', size: 8,  delay: 0.4,  duration: 1.8 },
  ]

  // — Section 4 scroll hooks (Vakkaku Sastram) —
  const fourthSectionRef = useRef(null)
  const { scrollYProgress: scrollYProgress4 } = useScroll({ target: fourthSectionRef, offset: ['start end', 'end start'] })
  const smooth4             = useSpring(scrollYProgress4, { stiffness: 60, damping: 20, restDelta: 0.001 })
  const darkOverlayOpacity4 = useTransform(smooth4, [0, 0.1, 0.3], [1, 0.9, 0])
  const titleOpacity4       = useTransform(smooth4, [0.05, 0.15], [0, 1])
  const titleScale4         = useTransform(smooth4, [0.05, 0.15], [0.82, 1])
  const subtitleOpacity4    = useTransform(smooth4, [0.08, 0.18], [0, 1])
  const subtitleY4          = useTransform(smooth4, [0.08, 0.18], [20, 0])
  const subtitleFilter4     = useTransform(smooth4, [0.08, 0.18], ['blur(8px)', 'blur(0px)'])
  const venueOpacity4       = useTransform(smooth4, [0.12, 0.22], [0, 1])
  const venueX4             = useTransform(smooth4, [0.12, 0.22], [-28, 0])
  const dateOpacity4        = useTransform(smooth4, [0.15, 0.25], [0, 1])
  const dateX4              = useTransform(smooth4, [0.15, 0.25], [28, 0])
  const dressOpacity4       = useTransform(smooth4, [0.18, 0.28], [0, 1])
  const dressY4             = useTransform(smooth4, [0.18, 0.28], [22, 0])
  const dressRotate4        = useTransform(smooth4, [0.18, 0.28], [-2, 0])
  const qrOpacity4          = useTransform(smooth4, [0.20, 0.30], [0, 1])
  const qrScale4            = useTransform(smooth4, [0.20, 0.30], [0.88, 1])

  // — Section 5 scroll hooks (Wedding) —
  const fifthSectionRef = useRef(null)
  const { scrollYProgress: scrollYProgress5 } = useScroll({ target: fifthSectionRef, offset: ['start end', 'end start'] })
  const smooth5             = useSpring(scrollYProgress5, { stiffness: 60, damping: 20, restDelta: 0.001 })
  const darkOverlayOpacity5 = useTransform(smooth5, [0, 0.1, 0.3], [1, 0.9, 0])
  const titleOpacity5       = useTransform(smooth5, [0.05, 0.15], [0, 1])
  const titleScale5         = useTransform(smooth5, [0.05, 0.15], [0.82, 1])
  const subtitleOpacity5    = useTransform(smooth5, [0.08, 0.18], [0, 1])
  const subtitleY5          = useTransform(smooth5, [0.08, 0.18], [20, 0])
  const subtitleFilter5     = useTransform(smooth5, [0.08, 0.18], ['blur(8px)', 'blur(0px)'])
  const venueOpacity5       = useTransform(smooth5, [0.12, 0.22], [0, 1])
  const venueX5             = useTransform(smooth5, [0.12, 0.22], [-28, 0])
  const dateOpacity5        = useTransform(smooth5, [0.15, 0.25], [0, 1])
  const dateX5              = useTransform(smooth5, [0.15, 0.25], [28, 0])
  const dressOpacity5       = useTransform(smooth5, [0.18, 0.28], [0, 1])
  const dressY5             = useTransform(smooth5, [0.18, 0.28], [22, 0])
  const dressRotate5        = useTransform(smooth5, [0.18, 0.28], [-2, 0])
  const qrOpacity5          = useTransform(smooth5, [0.20, 0.30], [0, 1])
  const qrScale5            = useTransform(smooth5, [0.20, 0.30], [0.88, 1])

  // — Section 6 scroll hooks (Reception) —
  const sixthSectionRef = useRef(null)
  const { scrollYProgress: scrollYProgress6 } = useScroll({ target: sixthSectionRef, offset: ['start end', 'end start'] })
  const smooth6             = useSpring(scrollYProgress6, { stiffness: 60, damping: 20, restDelta: 0.001 })
  const darkOverlayOpacity6 = useTransform(smooth6, [0, 0.1, 0.3], [1, 0.9, 0])
  const titleOpacity6       = useTransform(smooth6, [0.05, 0.15], [0, 1])
  const titleScale6         = useTransform(smooth6, [0.05, 0.15], [0.82, 1])
  const subtitleOpacity6    = useTransform(smooth6, [0.08, 0.18], [0, 1])
  const subtitleY6          = useTransform(smooth6, [0.08, 0.18], [20, 0])
  const subtitleFilter6     = useTransform(smooth6, [0.08, 0.18], ['blur(8px)', 'blur(0px)'])
  const venueOpacity6       = useTransform(smooth6, [0.12, 0.22], [0, 1])
  const venueX6             = useTransform(smooth6, [0.12, 0.22], [-28, 0])
  const dateOpacity6        = useTransform(smooth6, [0.15, 0.25], [0, 1])
  const dateX6              = useTransform(smooth6, [0.15, 0.25], [28, 0])
  const qrOpacity6          = useTransform(smooth6, [0.20, 0.30], [0, 1])
  const qrScale6            = useTransform(smooth6, [0.20, 0.30], [0.88, 1])

  // — Section 5 (Wedding) config —
  const fifthSectionContent = {
    wrapper:  { left: '14%', top: '17%', right: '16%', bottom: '10%' },
    title:    { top: '-10%', left: '-1%', width: '100%', textAlign: 'center', fontSize: '15cqw', color: '#ffffff', fontClassName: 'font-script-title' },
    subtitle: { marginTop: '31.8%', left: '3%', width: '100%', textAlign: 'center', fontSize: '4.3cqw', color: '#ffffff', fontClassName: 'font-elegant-subtitle' },
    venue:    { marginTop: '10%', left: '0%', width: '100%', textAlign: 'center', fontSize: '4cqw', color: '#ffffff', labelColor: '#ffffff', fontClassName: 'font-sans' },
    cards:    { marginTop: '2%', gap: '2%', width: '90%' },
    cardTitle: { left: '0%', width: '100%', textAlign: 'center', fontSize: '4cqw', color: '#ffffff', fontClassName: 'font-sans' },
    cardBody:  { left: '0%', width: '100%', textAlign: 'center', fontSize: '3.7cqw', color: '#ffffff', fontClassName: 'font-sans' },
    qr: { maxWidth: '28%', labelFontSize: '2.35cqw', textAlign: 'center', labelColor: '#5f4a56', labelBg: 'rgba(255,255,255,1)', fontClassName: 'font-sans' },
  }
  const sixthSectionContent = {
    wrapper:  { left: '14%', top: '17%', right: '16%', bottom: '10%' },
    title:    { top: '-10%', left: '-1%', width: '100%', textAlign: 'center', fontSize: '14cqw', color: '#fff4dc', fontClassName: 'font-script-title' },
    subtitle: { marginTop: '50%', left: '1%', width: '100%', textAlign: 'center', fontSize: '4.3cqw', color: '#fff4dc', fontClassName: 'font-elegant-subtitle' },
    venue:    { marginTop: '10%', left: '0%', width: '100%', textAlign: 'center', fontSize: '4cqw', color: '#fff4dc', labelColor: '#fff4dc', fontClassName: 'font-sans' },
    cards:    { marginTop: '2%', gap: '2%', width: '90%' },
    cardTitle: { left: '0%', width: '100%', textAlign: 'center', fontSize: '4cqw', color: '#fff4dc', fontClassName: 'font-sans' },
    cardBody:  { left: '0%', width: '100%', textAlign: 'center', fontSize: '3.7cqw', color: '#fff4dc', fontClassName: 'font-sans' },
    qr: { maxWidth: '28%', labelFontSize: '2.35cqw', textAlign: 'center', labelColor: '#5f4a56', labelBg: 'rgba(255,255,255,1)', fontClassName: 'font-sans' },
  }
  const sixthSectionInnerSize = { width: '100%', height: '100%', scaleX: 1.1, scaleY: 1.0 }
  const sixthSectionOverlayScale = 0.9
  const fifthSectionTextShadow = '0 0 10px rgba(255,215,0,0.7), 0 0 22px rgba(255,165,0,0.35), 0 2px 6px rgba(0,0,0,0.6)'
  const WEDDING_SPARKLES = [
    { left: '7%',  top: '8%',  size: 13, delay: 0.0,  duration: 1.8 },
    { left: '18%', top: '22%', size: 9,  delay: 0.6,  duration: 2.1 },
    { left: '30%', top: '5%',  size: 15, delay: 1.2,  duration: 1.5 },
    { left: '43%', top: '14%', size: 11, delay: 0.3,  duration: 1.9 },
    { left: '55%', top: '6%',  size: 14, delay: 0.9,  duration: 1.6 },
    { left: '67%', top: '19%', size: 10, delay: 1.5,  duration: 2.0 },
    { left: '79%', top: '9%',  size: 12, delay: 0.2,  duration: 1.7 },
    { left: '89%', top: '24%', size: 8,  delay: 1.1,  duration: 2.2 },
    { left: '12%', top: '45%', size: 10, delay: 0.7,  duration: 1.8 },
    { left: '38%', top: '52%', size: 13, delay: 1.4,  duration: 1.6 },
    { left: '62%', top: '40%', size: 9,  delay: 0.4,  duration: 2.0 },
    { left: '84%', top: '55%', size: 11, delay: 1.8,  duration: 1.7 },
    { left: '25%', top: '70%', size: 8,  delay: 0.5,  duration: 1.9 },
    { left: '50%', top: '78%', size: 12, delay: 1.0,  duration: 1.5 },
    { left: '74%', top: '65%', size: 10, delay: 0.8,  duration: 2.1 },
    { left: '93%', top: '72%', size: 9,  delay: 1.6,  duration: 1.8 },
    { left: '5%',  top: '85%', size: 11, delay: 0.1,  duration: 1.6 },
    { left: '46%', top: '90%', size: 8,  delay: 1.3,  duration: 2.0 },
    // second wave — fills gaps between first wave
    { left: '13%', top: '3%',  size: 10, delay: 1.9,  duration: 1.7 },
    { left: '24%', top: '16%', size: 14, delay: 0.5,  duration: 1.5 },
    { left: '36%', top: '27%', size: 8,  delay: 1.0,  duration: 2.2 },
    { left: '49%', top: '32%', size: 12, delay: 0.2,  duration: 1.8 },
    { left: '58%', top: '11%', size: 9,  delay: 1.7,  duration: 1.6 },
    { left: '72%', top: '28%', size: 13, delay: 0.4,  duration: 2.0 },
    { left: '83%', top: '15%', size: 8,  delay: 1.3,  duration: 1.9 },
    { left: '95%', top: '36%', size: 11, delay: 0.7,  duration: 1.7 },
    { left: '3%',  top: '33%', size: 9,  delay: 1.5,  duration: 2.1 },
    { left: '21%', top: '58%', size: 12, delay: 0.3,  duration: 1.6 },
    { left: '42%', top: '63%', size: 8,  delay: 1.1,  duration: 1.8 },
    { left: '60%', top: '75%', size: 14, delay: 0.6,  duration: 1.5 },
    { left: '77%', top: '48%', size: 10, delay: 1.9,  duration: 2.0 },
    { left: '88%', top: '82%', size: 9,  delay: 0.9,  duration: 1.7 },
    { left: '16%', top: '93%', size: 11, delay: 0.4,  duration: 1.9 },
    { left: '34%', top: '83%', size: 8,  delay: 1.6,  duration: 2.2 },
    { left: '65%', top: '88%', size: 13, delay: 0.1,  duration: 1.6 },
    { left: '91%', top: '92%', size: 10, delay: 1.2,  duration: 1.8 },
  ]
  const LANTERN_SRCS = [wedLa1, wedLa2, wedLa3]
  const BELL_SRCS = [bell1, bell2, bell3]
  const WEDDING_LANTERNS = [
    { src: 0, left: '5%',  size: '5%',   duration: 22,   delay: 0,    driftX: [0,  28, -18, 42,  8],  rot: [-4, 10,  -6, 14,  -2] },
    { src: 1, left: '20%', size: '4%',   duration: 26,   delay: 2.8,  driftX: [0, -22,  14, -35, -6], rot: [3, -9,   5, -13,  2]  },
    { src: 2, left: '37%', size: '5.5%', duration: 20,   delay: 1.2,  driftX: [0,  18, -30,  22, -10], rot: [-3, 8, -12,  10, -4] },
    { src: 0, left: '56%', size: '4.5%', duration: 24,   delay: 4.1,  driftX: [0, -30,  12, -44,  5],  rot: [5, -11,  7, -16,  3] },
    { src: 1, left: '73%', size: '4%',   duration: 22,   delay: 0.5,  driftX: [0,  24, -16,  36, -4],  rot: [-4, 9,  -7,  13, -2] },
    { src: 2, left: '87%', size: '5%',   duration: 25,   delay: 2.3,  driftX: [0, -18,  26, -28, 10],  rot: [3, -8,  11, -12,  5] },
    { src: 0, left: '13%', size: '4.5%', duration: 21,   delay: 5.6,  driftX: [0,  32, -10,  44, -6],  rot: [-5, 12,  -4, 16, -3] },
    { src: 1, left: '49%', size: '5%',   duration: 23,   delay: 3.3,  driftX: [0, -26,  18, -38,  8],  rot: [4, -10,  6, -15,  2] },
    { src: 2, left: '78%', size: '4%',   duration: 24,   delay: 7.1,  driftX: [0,  20, -28,  30, -12], rot: [-3, 8, -10,  11, -5] },
  ]

  const fifthSectionInnerSize = { width: '95%', height: '98%', scaleX: 0.9, scaleY: 1.0 }
  const fifthSectionDecorations = {
    fl1: { left: '-11%',  top: '65%',  width: '50%' },
    fl2: { right: '70%', top: '54%',  width: '30%' },
    lt:  { left: '32%', top: '-4%', width: '37%' },
  }
  const fourthSectionContent = {
    wrapper:  { left: '14%', top: '17%', right: '16%', bottom: '10%' },
    title:    { top: '-9%', left: '2%', width: '100%', textAlign: 'center', fontSize: '14cqw', color: '#6f1212', fontClassName: 'font-script-title' },
    subtitle: { marginTop: '24%', left: '0%', width: '100%', textAlign: 'center', fontSize: '4.3cqw', color: '#6f1212', fontClassName: 'font-elegant-subtitle' },
    venue:    { marginTop: '8%', left: '0%', width: '100%', textAlign: 'center', fontSize: '3.7cqw', color: '#6f1212', labelColor: '#6f1212', fontClassName: 'font-sans' },
    cards:    { marginTop: '2%', gap: '2%', width: '90%' },
    cardTitle: { left: '0%', width: '100%', textAlign: 'center', fontSize: '3.7cqw', color: '#6f1212', fontClassName: 'font-sans' },
    cardBody:  { left: '0%', width: '100%', textAlign: 'center', fontSize: '3.6cqw', color: '#6f1212', fontClassName: 'font-sans' },
    qr: { maxWidth: '28%', labelFontSize: '2.35cqw', textAlign: 'center', labelColor: '#5f4a56', labelBg: 'rgba(255,255,255,1)', fontClassName: 'font-sans' },
  }
  const fourthSectionOverlayScale = 0.8
  const fourthSectionInnerSize = { width: '100%', height: '100%' }
  const fourthSectionDecorations = {
    top:  { top: '-3%',  left: '10%', width: '80%' },
    prop: { right: '-4%', top: '28.7%', width: '70%' },
  }
  // Marigold pile: flowers fall from vk_top down and settle at the bottom
  const MARIGOLD_PILE = [
    { img: bt1, left: '4%',  size: '5%', delay: 0.0,  duration: 2.8, sway: [0, -8,  4],  spin: [0, -40, -80]  },
    { img: bt2, left: '12%', size: '4%', delay: 0.6,  duration: 2.4, sway: [0,  6, -4],  spin: [0,  30,  70]  },
    { img: bt1, left: '21%', size: '6%', delay: 1.2,  duration: 3.0, sway: [0, -6,  8],  spin: [0, -20, -55]  },
    { img: bt2, left: '31%', size: '5%', delay: 0.3,  duration: 2.6, sway: [0,  8, -6],  spin: [0,  45,  90]  },
    { img: bt1, left: '40%', size: '5%', delay: 1.5,  duration: 2.9, sway: [0, -10, 6],  spin: [0, -35, -70]  },
    { img: bt2, left: '50%', size: '4%', delay: 0.8,  duration: 2.5, sway: [0,  5, -8],  spin: [0,  25,  60]  },
    { img: bt1, left: '59%', size: '6%', delay: 0.2,  duration: 3.1, sway: [0, -7,  5],  spin: [0, -50, -95]  },
    { img: bt2, left: '69%', size: '5%', delay: 1.0,  duration: 2.7, sway: [0,  9, -5],  spin: [0,  40,  80]  },
    { img: bt1, left: '78%', size: '5%', delay: 0.4,  duration: 2.8, sway: [0, -5,  7],  spin: [0, -30, -65]  },
    { img: bt2, left: '86%', size: '4%', delay: 1.3,  duration: 2.4, sway: [0,  6, -6],  spin: [0,  35,  75]  },
  ]

  return (
    <section className="relative" aria-label="Chronological wedding events">
      {eventsData.slice(0, 7).map((event, index) => {
        if (event.id === 0 || event.id === 1) {
          return null
        }

        const mapDestination = event.mapUrl
        const qrData = encodeURIComponent(mapDestination)
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${qrData}`
        const mapLink = mapDestination
        const isZeroSection   = index === 0
        const isThirdSection  = index === 1
        const isFirstSection  = index === 2
        const layout = sectionLayouts[index % sectionLayouts.length]
        const isSecondSection = index === 3
        const isFourthSection = index === 4
        const isFifthSection  = index === 5
        const isSixthSection  = index === 6
        const sectionStyle = isZeroSection
          ? { backgroundImage: `url(${pgBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
          : isThirdSection
          ? { backgroundColor: '#D4A017' }
          : isFirstSection
          ? { backgroundImage: `url(${page2Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0F6606' }
          : isSecondSection
          ? { backgroundImage: `url(${pkMain})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: secondSectionImages.bgColor }
          : isFourthSection
          ? { backgroundColor: '#1a1a2e' }
          : isFifthSection
          ? { backgroundColor: '#1a0a0a' }
          : isSixthSection
          ? { backgroundColor: '#2f1b10' }
          : {}

        return (
          <section
            key={event.id}
            id={`event-${event.id}`}
            data-event-section
            ref={isZeroSection ? zeroSectionRef : isThirdSection ? thirdSectionRef : isFirstSection ? firstSectionRef : isSecondSection ? secondSectionRef : isFourthSection ? fourthSectionRef : isFifthSection ? fifthSectionRef : isSixthSection ? sixthSectionRef : null}
            className={`relative overflow-hidden border-y border-black/20 ${isZeroSection || isThirdSection || isFirstSection || isSecondSection || isFourthSection || isFifthSection || isSixthSection ? 'px-0 py-0' : 'min-h-[80vh] py-12 sm:py-16 px-4 section-transition-top'}`}
            style={sectionStyle}
          >
            {isZeroSection ? (
              <>
                {/* Full-width top border strip */}
                <div
                  className="absolute top-0 left-0 w-full z-[2]"
                  style={{
                    height: 'clamp(44px, 11vw, 110px)',
                    backgroundColor: '#431818',
                    backgroundImage: `url(${pgBorder})`,
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: 'auto 100%',
                    backgroundPosition: 'left top',
                  }}
                />
                {/* Card */}
                <div className="relative z-[1] mx-auto flex w-full justify-center" style={{ minHeight: 'max-content' }}>
                  <div className="relative" style={{ width: firstSectionOverlayWidth, aspectRatio: '852 / 1261' }}>
                    <div className="absolute inset-0 flex items-center justify-center px-[8%]">
                      <div
                        className="w-full border border-gray-200 rounded-2xl shadow-lg text-center"
                        style={{ padding: '6% 8%', backgroundColor: 'rgba(255,255,255,0.85)' }}
                      >
                        {/* Center image */}
                        <motion.img src={pgCenter} alt="" aria-hidden="true" className="mx-auto mb-[3%] object-contain" style={{ width: '40%', opacity: titleOpacity0, scale: titleScale0 }} />
                        {/* Title */}
                        <motion.h2 className="font-script-title font-bold text-gray-800 mb-[3%]" style={{ fontSize: 'clamp(0.9rem, 3cqw, 1.4rem)', opacity: titleOpacity0, scale: titleScale0 }}>{event.title}</motion.h2>
                        <motion.div style={{ opacity: contentOpacity0, y: contentY0 }}>
                          {/* Subtitles 1–5, 7 — normal; subtitle6 — bold */}
                          {[event.subtitle, event.subtitle2, event.subtitle3, event.subtitle4, event.subtitle5].filter(Boolean).map((s, i) => (
                            <p key={i} className="text-gray-600 italic mb-[1.5%]" style={{ fontSize: 'clamp(0.65rem, 2cqw, 0.88rem)' }}>{s}</p>
                          ))}
                          {event.subtitle6 && <p className="text-gray-600 italic font-bold mb-[1.5%]" style={{ fontSize: 'clamp(0.65rem, 2cqw, 0.88rem)' }}>{event.subtitle6}</p>}
                          {event.subtitle7 && <p className="text-gray-600 italic mb-[1.5%]" style={{ fontSize: 'clamp(0.65rem, 2cqw, 0.88rem)' }}>{event.subtitle7}</p>}
                          {/* Title 2 */}
                          {event.title2 && <h3 className="font-script-title font-bold text-gray-800 mt-[4%] mb-[2%]" style={{ fontSize: 'clamp(1.05rem, 3.8cqw, 1.7rem)' }}>{event.title2}</h3>}
                          {/* Subtitle 8 */}
                          {event.subtitle8 && <p className="text-gray-600 italic mb-[1.5%]" style={{ fontSize: 'clamp(0.65rem, 2cqw, 0.88rem)' }}>{event.subtitle8}</p>}
                          {/* Title 3 */}
                          {event.title3 && <h3 className="font-script-title font-bold text-gray-800 mt-[4%] mb-[2%]" style={{ fontSize: 'clamp(1.05rem, 3.8cqw, 1.7rem)' }}>{event.title3}</h3>}
                          {/* Subtitle 9 — normal; subtitle10 — bold */}
                          {event.subtitle9 && <p className="text-gray-600 italic mb-[1.5%]" style={{ fontSize: 'clamp(0.65rem, 2cqw, 0.88rem)' }}>{event.subtitle9}</p>}
                          {event.subtitle10 && <p className="text-gray-600 italic font-bold mb-[1.5%]" style={{ fontSize: 'clamp(0.65rem, 2cqw, 0.88rem)' }}>{event.subtitle10}</p>}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Full-width bottom border strip — flipped */}
                <div
                  className="absolute bottom-0 left-0 w-full z-[2]"
                  style={{
                    height: 'clamp(44px, 11vw, 110px)',
                    backgroundColor: '#431818',
                    backgroundImage: `url(${pgBorder})`,
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: 'auto 100%',
                    backgroundPosition: 'left top',
                    transform: 'scaleY(-1)',
                  }}
                />
              </>
            ) : isThirdSection ? (
              <>
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ backgroundImage: `url(${haldiBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
                />
                <motion.div
                  className="absolute inset-0 z-50 pointer-events-none bg-black"
                  style={{ opacity: darkOverlayOpacity3 }}
                />
                <div className="relative z-[1] mx-auto flex w-full justify-center" style={{ minHeight: 'max-content' }}>
                <div
                  className="relative"
                  style={{ width: firstSectionOverlayWidth, aspectRatio: '852 / 1261' }}
                >
                <img
                  src={haldiInner}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  style={{ transform: `scale(${thirdSectionOverlayScale})`, transformOrigin: 'center center'}}
                />
                  <img
                    src={haldiBorder}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute object-contain z-[10]"
                    style={{ top: thirdSectionBorder.top, left: thirdSectionBorder.left, width: thirdSectionBorder.width, transform: `scaleX(${thirdSectionBorder.scaleX}) scaleY(${thirdSectionBorder.scaleY})`, transformOrigin: 'center center' }}
                  />
                  {/* Haldi vibe — falling turmeric drops */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[8]">
                    {HALDI_PARTICLES.map((p, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{ left: p.left, top: '-3%', width: p.size, height: p.size, backgroundColor: p.color }}
                        animate={{ y: [0, 1100], x: p.sway, rotate: p.spin, opacity: [0, 0.85, 0.85, 0] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
                      />
                    ))}
                  </div>
                  {/* Haldi vibe — golden sparkles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[9]">
                    {HALDI_SPARKLES.map((s, i) => (
                      <motion.div
                        key={i}
                        className="absolute select-none"
                        style={{ left: s.left, top: s.top, fontSize: s.size, color: '#FFD700', lineHeight: 1, textShadow: '0 0 6px #FFD700, 0 0 12px #FFA500' }}
                        animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], rotate: [0, 30, 0] }}
                        transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
                      >
                        ✦
                      </motion.div>
                    ))}
                  </div>
                  <div
                    className="absolute z-20 overflow-hidden"
                    style={{
                      containerType: 'inline-size',
                      left: thirdSectionContent.wrapper.left,
                      top: thirdSectionContent.wrapper.top,
                      right: thirdSectionContent.wrapper.right,
                      bottom: thirdSectionContent.wrapper.bottom,
                    }}
                  >
                    <article className="h-full w-full text-center">
                      <div className="relative h-full w-full">
                        <div
                          className="absolute z-30 px-[4%]"
                          style={{
                            top: thirdSectionContent.title.top,
                            left: thirdSectionContent.title.left,
                            width: thirdSectionContent.title.width,
                            textAlign: thirdSectionContent.title.textAlign,
                          }}
                        >
                            <motion.h3
                              className={`${thirdSectionContent.title.fontClassName} leading-[1.05]`}
                              style={{ fontSize: thirdSectionContent.title.fontSize, color: thirdSectionContent.title.color, textShadow: firstSectionTextShadow, opacity: titleOpacity3, scale: titleScale3 }}
                            >
                              {event.title}
                            </motion.h3>
                        </div>

                          <motion.div
                            style={{ opacity: subtitleOpacity3, y: subtitleY3, filter: subtitleFilter3 }}
                          >
                            <p
                            className={`${thirdSectionContent.subtitle.fontClassName} font-bold`}
                            style={{
                              marginTop: thirdSectionContent.subtitle.marginTop,
                              marginLeft: thirdSectionContent.subtitle.left,
                              width: thirdSectionContent.subtitle.width,
                              textAlign: thirdSectionContent.subtitle.textAlign,
                              fontSize: thirdSectionContent.subtitle.fontSize,
                              color: thirdSectionContent.subtitle.color,
                              textShadow: firstSectionTextShadow,
                            }}
                          >
                            {event.subtitle}
                          </p>
                          </motion.div>

                          <motion.div
                            style={{ opacity: venueOpacity3, x: venueX3 }}
                          >
                            <div
                            className={thirdSectionContent.venue.fontClassName}
                            style={{
                              marginTop: thirdSectionContent.venue.marginTop,
                              marginLeft: thirdSectionContent.venue.left,
                              width: thirdSectionContent.venue.width,
                              textAlign: thirdSectionContent.venue.textAlign,
                              fontSize: thirdSectionContent.venue.fontSize,
                              color: thirdSectionContent.venue.color,
                              textShadow: firstSectionTextShadow,
                            }}
                          >
                            <p className="font-semibold" style={{ color: thirdSectionContent.venue.labelColor, textShadow: firstSectionTextShadow }}>Venue: {event.venue}</p>
                            <p className="leading-snug">{event.address}</p>
                          </div>
                          </motion.div>

                        <div className="mb-[2%]" style={{ marginTop: thirdSectionContent.cards.marginTop }}>
                            <motion.div
                              style={{ opacity: dateOpacity3, x: dateX3 }}
                            >
                              <motion.div
                              className={`${layout.cardClass} px-[3.2%] py-[2.7%]`}
                              style={{ backgroundColor: layout.cardBg, width: thirdSectionContent.cards.width, marginInline: 'auto' }}
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className={`${thirdSectionContent.cardTitle.fontClassName} font-semibold`} style={{ marginLeft: thirdSectionContent.cardTitle.left, width: thirdSectionContent.cardTitle.width, textAlign: thirdSectionContent.cardTitle.textAlign, fontSize: thirdSectionContent.cardTitle.fontSize, color: thirdSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Date & Time</p>
                              <p className={thirdSectionContent.cardBody.fontClassName} style={{ marginLeft: thirdSectionContent.cardBody.left, width: thirdSectionContent.cardBody.width, textAlign: thirdSectionContent.cardBody.textAlign, fontSize: thirdSectionContent.cardBody.fontSize, color: thirdSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.date}</p>
                              <p className={thirdSectionContent.cardBody.fontClassName} style={{ marginLeft: thirdSectionContent.cardBody.left, width: thirdSectionContent.cardBody.width, textAlign: thirdSectionContent.cardBody.textAlign, fontSize: thirdSectionContent.cardBody.fontSize, color: thirdSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.time}</p>
                            </motion.div>
                            </motion.div>

                            <motion.div
                              style={{ opacity: dressOpacity3, y: dressY3, rotate: dressRotate3 }}
                            >
                              <motion.div
                              className={`${layout.cardClass} px-[3.2%] py-[2.7%]`}
                              style={{ backgroundColor: layout.cardBg, marginTop: thirdSectionContent.cards.gap, width: thirdSectionContent.cards.width, marginInline: 'auto' }}
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className={`${thirdSectionContent.cardTitle.fontClassName} font-semibold`} style={{ marginLeft: thirdSectionContent.cardTitle.left, width: thirdSectionContent.cardTitle.width, textAlign: thirdSectionContent.cardTitle.textAlign, fontSize: thirdSectionContent.cardTitle.fontSize, color: thirdSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Dress Code</p>
                              <p className={thirdSectionContent.cardBody.fontClassName} style={{ marginLeft: thirdSectionContent.cardBody.left, width: thirdSectionContent.cardBody.width, textAlign: thirdSectionContent.cardBody.textAlign, fontSize: thirdSectionContent.cardBody.fontSize, color: thirdSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.dressCode}</p>
                              <div className="mx-auto rounded-xl overflow-hidden" style={{ width: thirdSectionContent.dressCodeImage.width, marginTop: thirdSectionContent.dressCodeImage.marginTop, padding: '4%' }}>
                                <img
                                  src={shadesOfPink}
                                  alt="Dress code reference"
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            </motion.div>
                            </motion.div>

                            <motion.div
                              style={{ opacity: qrOpacity3, scale: qrScale3 }}
                            >
                              <motion.div
                              className={`${layout.cardClass} px-[3.2%] py-[2.7%]`}
                              style={{ backgroundColor: layout.cardBg, marginTop: thirdSectionContent.cards.gap, width: thirdSectionContent.cards.width, marginInline: 'auto' }}
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className={`${thirdSectionContent.cardTitle.fontClassName} font-semibold`} style={{ marginLeft: thirdSectionContent.cardTitle.left, width: thirdSectionContent.cardTitle.width, textAlign: thirdSectionContent.cardTitle.textAlign, fontSize: thirdSectionContent.cardTitle.fontSize, color: thirdSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Venue QR</p>
                              <a
                                href={mapLink}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col items-center mx-auto"
                                aria-label={`Open maps for ${event.title}`}
                              >
                                <div className="overflow-hidden" style={{ maxWidth: thirdSectionContent.qr.maxWidth }}>
                                  <img src={qrUrl} alt={`QR code for ${event.venue}`} className="w-full bg-white p-[2%] shadow-md" loading="lazy" />
                                </div>
                                <div
                                  className={`${thirdSectionContent.qr.fontClassName} mt-[2%] rounded-xl px-[3%] py-[2%] font-semibold transition group-hover:bg-white/90 whitespace-nowrap w-max max-w-none`}
                                  style={{ backgroundColor: thirdSectionContent.qr.labelBg, textAlign: thirdSectionContent.qr.textAlign, fontSize: thirdSectionContent.qr.labelFontSize, lineHeight: 1.2, color: thirdSectionContent.qr.labelColor, textShadow: firstSectionTextShadow }}
                                >
                                  Tap/Scan QR to Open Venue Map
                                </div>
                              </a>
                            </motion.div>
                            </motion.div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              </>
            ) : isFirstSection ? (
              <>
                <motion.div
                  className="absolute inset-0 z-50 pointer-events-none bg-black"
                  style={{ opacity: darkOverlayOpacity }}
                />
                <div className="relative z-[1] mx-auto flex w-full justify-center" style={{ minHeight: 'max-content' }}>
                <div
                  className="relative"
                  style={{ width: firstSectionOverlayWidth, aspectRatio: '852 / 1261' }}
                >
                <img
                  src={page2BgMain}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  style={{ transform: `scale(${firstSectionOverlayScale})`, transformOrigin: 'center center' }}
                />
                  <img
                    src={flowerTopLeft}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute object-contain"
                    style={{
                      left: firstSectionFlowers.topLeft.left,
                      top: firstSectionFlowers.topLeft.top,
                      width: firstSectionFlowers.topLeft.width,
                    }}
                  />
                  <img
                    src={flowerBottomRight}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute object-contain"
                    style={{
                      right: firstSectionFlowers.bottomRight.right,
                      bottom: firstSectionFlowers.bottomRight.bottom,
                      width: firstSectionFlowers.bottomRight.width,
                    }}
                  />
                  <motion.img
                    src={smallLamp}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute object-contain"
                    style={{
                      left: firstSectionLamps.small.left,
                      bottom: firstSectionLamps.small.bottom,
                      width: firstSectionLamps.small.width,
                      transformOrigin: 'top center',
                    }}
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Tall lamp + glow wrapped together so they swing as one */}
                  <motion.div
                    className="pointer-events-none absolute"
                    style={{
                      right: firstSectionLamps.tall.right,
                      bottom: firstSectionLamps.tall.bottom,
                      width: firstSectionLamps.tall.width,
                      transformOrigin: 'top center',
                    }}
                    animate={{ rotate: [4, -4, 4] }}
                    transition={{ duration: 3.0, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img
                      src={tallLamp}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none w-full object-contain"
                    />
                    {/* Glow — positioned relative to wrapper so it moves with the lamp */}
                    <motion.div
                      className="pointer-events-none absolute z-[15]"
                      style={{
                        left: '-50%',
                        top: '62%',
                        width: '200%',
                        aspectRatio: '1',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,200,60,0.9) 0%, rgba(255,140,20,0.5) 28%, rgba(255,90,0,0.2) 52%, transparent 72%)',
                        opacity: lampGlowOpacity,
                        scale: lampGlowScale,
                      }}
                    />
                  </motion.div>
                  {/* Small lamp warm glow */}
                  <motion.div
                    className="pointer-events-none absolute z-[15]"
                    style={{
                      left: '-6%',
                      bottom: '10%',
                      width: '30%',
                      aspectRatio: '1',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(255,200,60,0.9) 0%, rgba(255,140,20,0.5) 28%, rgba(255,90,0,0.2) 52%, transparent 72%)',
                      opacity: lampGlowOpacity,
                      scale: lampGlowScale,
                      transformOrigin: 'top right',
                    }}
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Tall lamp warm glow — now handled inside the wrapper above */}
                  <div
                    className="absolute z-20 overflow-hidden"
                    style={{
                      containerType: 'inline-size',
                      left: firstSectionContent.wrapper.left,
                      top: firstSectionContent.wrapper.top,
                      right: firstSectionContent.wrapper.right,
                      bottom: firstSectionContent.wrapper.bottom,
                    }}
                  >
                    <article className="h-full w-full text-center">
                      <div className="relative h-full w-full">
                        <div
                          className="absolute z-30 px-[4%]"
                          style={{
                            top: firstSectionContent.title.top,
                            left: firstSectionContent.title.left,
                            width: firstSectionContent.title.width,
                            textAlign: firstSectionContent.title.textAlign,
                          }}
                        >
                            <motion.h3
                              className={`${firstSectionContent.title.fontClassName} leading-[1.05]`}
                              style={{ fontSize: firstSectionContent.title.fontSize, color: firstSectionContent.title.color, textShadow: firstSectionTextShadow, opacity: titleOpacity, scale: titleScale }}
                            >
                              {event.title}
                            </motion.h3>
                        </div>

                          <motion.div
                            style={{ opacity: subtitleOpacity, y: subtitleY, filter: subtitleFilter }}
                          >
                            <p
                            className={`${firstSectionContent.subtitle.fontClassName} font-bold`}
                            style={{
                              marginTop: firstSectionContent.subtitle.marginTop,
                              marginLeft: firstSectionContent.subtitle.left,
                              width: firstSectionContent.subtitle.width,
                              textAlign: firstSectionContent.subtitle.textAlign,
                              fontSize: firstSectionContent.subtitle.fontSize,
                              color: firstSectionContent.subtitle.color,
                              textShadow: firstSectionTextShadow,
                            }}
                          >
                            {event.subtitle}
                          </p>
                          </motion.div>

                          <motion.div
                            style={{ opacity: venueOpacity, x: venueX }}
                          >
                            <div
                            className={firstSectionContent.venue.fontClassName}
                            style={{
                              marginTop: firstSectionContent.venue.marginTop,
                              marginLeft: firstSectionContent.venue.left,
                              width: firstSectionContent.venue.width,
                              textAlign: firstSectionContent.venue.textAlign,
                              fontSize: firstSectionContent.venue.fontSize,
                              color: firstSectionContent.venue.color,
                              textShadow: firstSectionTextShadow,
                            }}
                          >
                            <p className="font-semibold" style={{ color: firstSectionContent.venue.labelColor, textShadow: firstSectionTextShadow }}>Venue: {event.venue}</p>
                            <p className="leading-snug">{event.address}</p>
                          </div>
                          </motion.div>

                        <div className="mb-[2%]" style={{ marginTop: firstSectionContent.cards.marginTop }}>
                            <motion.div
                              style={{ opacity: dateOpacity, x: dateX }}
                            >
                              <motion.div
                              className={`${layout.cardClass} px-[3.2%] py-[2.7%]`}
                              style={{ backgroundColor: layout.cardBg, width: firstSectionContent.cards.width, marginInline: 'auto' }}
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className={`${firstSectionContent.cardTitle.fontClassName} font-semibold`} style={{ marginLeft: firstSectionContent.cardTitle.left, width: firstSectionContent.cardTitle.width, textAlign: firstSectionContent.cardTitle.textAlign, fontSize: firstSectionContent.cardTitle.fontSize, color: firstSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Date & Time</p>
                              <p className={firstSectionContent.cardBody.fontClassName} style={{ marginLeft: firstSectionContent.cardBody.left, width: firstSectionContent.cardBody.width, textAlign: firstSectionContent.cardBody.textAlign, fontSize: firstSectionContent.cardBody.fontSize, color: firstSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.date}</p>
                              <p className={firstSectionContent.cardBody.fontClassName} style={{ marginLeft: firstSectionContent.cardBody.left, width: firstSectionContent.cardBody.width, textAlign: firstSectionContent.cardBody.textAlign, fontSize: firstSectionContent.cardBody.fontSize, color: firstSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.time}</p>
                            </motion.div>
                            </motion.div>

                            <motion.div
                              style={{ opacity: dressOpacity, y: dressY, rotate: dressRotate }}
                            >
                              <motion.div
                              className={`${layout.cardClass} px-[3.2%] py-[2.7%]`}
                              style={{ backgroundColor: layout.cardBg, marginTop: firstSectionContent.cards.gap, width: firstSectionContent.cards.width, marginInline: 'auto' }}
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className={`${firstSectionContent.cardTitle.fontClassName} font-semibold`} style={{ marginLeft: firstSectionContent.cardTitle.left, width: firstSectionContent.cardTitle.width, textAlign: firstSectionContent.cardTitle.textAlign, fontSize: firstSectionContent.cardTitle.fontSize, color: firstSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Dress Code</p>
                              <p className={firstSectionContent.cardBody.fontClassName} style={{ marginLeft: firstSectionContent.cardBody.left, width: firstSectionContent.cardBody.width, textAlign: firstSectionContent.cardBody.textAlign, fontSize: firstSectionContent.cardBody.fontSize, color: firstSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.dressCode}</p>
                              <img
                                src={shadesOfBlue}
                                alt="Dress code reference"
                                className="mx-auto h-auto object-contain"
                                style={{ width: firstSectionContent.dressCodeImage.width, marginTop: firstSectionContent.dressCodeImage.marginTop }}
                              />
                            </motion.div>
                            </motion.div>

                            <motion.div
                              style={{ opacity: qrOpacity, scale: qrScale }}
                            >
                              <motion.div
                              className={`${layout.cardClass} px-[3.2%] py-[2.7%]`}
                              style={{ backgroundColor: layout.cardBg, marginTop: firstSectionContent.cards.gap, width: firstSectionContent.cards.width, marginInline: 'auto' }}
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className={`${firstSectionContent.cardTitle.fontClassName} font-semibold`} style={{ marginLeft: firstSectionContent.cardTitle.left, width: firstSectionContent.cardTitle.width, textAlign: firstSectionContent.cardTitle.textAlign, fontSize: firstSectionContent.cardTitle.fontSize, color: firstSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Venue QR</p>
                              <a
                                href={mapLink}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col items-center mx-auto"
                                aria-label={`Open maps for ${event.title}`}
                              >
                                <div className="overflow-hidden" style={{ maxWidth: firstSectionContent.qr.maxWidth }}>
                                  <img src={qrUrl} alt={`QR code for ${event.venue}`} className="w-full bg-white p-[2%] shadow-md" loading="lazy" />
                                </div>
                                <div
                                  className={`${firstSectionContent.qr.fontClassName} mt-[2%] rounded-xl px-[3%] py-[2%] font-semibold transition group-hover:bg-white/90 whitespace-nowrap w-max max-w-none`}
                                  style={{ backgroundColor: firstSectionContent.qr.labelBg, textAlign: firstSectionContent.qr.textAlign, fontSize: firstSectionContent.qr.labelFontSize, lineHeight: 1.2, color: firstSectionContent.qr.labelColor, textShadow: firstSectionTextShadow }}
                                >
                                  Tap/Scan QR to Open Venue Map
                                </div>
                              </a>
                            </motion.div>
                            </motion.div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              </>
            ) : isSecondSection ? (
              <>
                <motion.div className="absolute inset-0 z-50 pointer-events-none bg-black" style={{ opacity: darkOverlayOpacity2 }} />
                <div className="relative z-[1] mx-auto flex w-full justify-center" style={{ minHeight: 'max-content' }}>
                  <div className="relative" style={{ width: firstSectionOverlayWidth, aspectRatio: '852 / 1261' }}>
                    <img src={secondSectionImages.bgMain} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-contain object-center pointer-events-none" style={{ transform: `scale(${secondSectionLayout.bgMain.scale})`, transformOrigin: 'center center' }} />
                    <img src={secondSectionImages.flowerTopLeft} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: secondSectionLayout.flowerLeft.left, bottom: secondSectionLayout.flowerLeft.bottom, width: secondSectionLayout.flowerLeft.width }} />
                    <img src={secondSectionImages.flowerBottomRight} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ right: secondSectionLayout.flowerRight.right, bottom: secondSectionLayout.flowerRight.bottom, width: secondSectionLayout.flowerRight.width }} />
                    {/* Petals clipped to container, flowers are outside this layer so they can bleed */}
                    <div className="absolute inset-0 overflow-hidden z-[24] pointer-events-none">
                      {PETAL_CONFIGS.map((p, i) => (
                        <motion.img
                          key={i}
                          src={PETAL_SRCS[p.src]}
                          alt=""
                          aria-hidden="true"
                          className="pointer-events-none absolute"
                          style={{ left: p.left, top: '-5%', width: p.size }}
                          animate={{ y: [0, 1400], x: p.sway, rotate: p.spin, opacity: [0, 0.9, 0.9, 0] }}
                          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
                        />
                      ))}
                    </div>
                    {/* Content overlay */}
                    <div className="absolute z-20 overflow-hidden" style={{ containerType: 'inline-size', left: secondSectionContent.wrapper.left, top: secondSectionContent.wrapper.top, right: secondSectionContent.wrapper.right, bottom: secondSectionContent.wrapper.bottom }}>
                      <article className="h-full w-full text-center">
                        <div className="relative h-full w-full">
                          {/* Title */}
                          <div className="absolute z-30 px-[4%]" style={{ top: secondSectionContent.title.top, left: secondSectionContent.title.left, width: secondSectionContent.title.width, textAlign: secondSectionContent.title.textAlign }}>
                            <motion.h3 className={`${secondSectionContent.title.fontClassName} leading-[1.05]`} style={{ fontSize: secondSectionContent.title.fontSize, color: secondSectionContent.title.color, textShadow: firstSectionTextShadow, opacity: titleOpacity2, scale: titleScale2 }}>
                              {event.title}
                            </motion.h3>
                          </div>
                          {/* Subtitle */}
                          <motion.div style={{ opacity: subtitleOpacity2, y: subtitleY2, filter: subtitleFilter2 }}>
                            <p className={`${secondSectionContent.subtitle.fontClassName} font-bold`} style={{ marginTop: secondSectionContent.subtitle.marginTop, marginLeft: secondSectionContent.subtitle.left, width: secondSectionContent.subtitle.width, textAlign: secondSectionContent.subtitle.textAlign, fontSize: secondSectionContent.subtitle.fontSize, color: secondSectionContent.subtitle.color, textShadow: firstSectionTextShadow }}>
                              {event.subtitle}
                            </p>
                          </motion.div>
                          {/* Venue */}
                          <motion.div style={{ opacity: venueOpacity2, x: venueX2 }}>
                            <div className={secondSectionContent.venue.fontClassName} style={{ marginTop: secondSectionContent.venue.marginTop, marginLeft: secondSectionContent.venue.left, width: secondSectionContent.venue.width, textAlign: secondSectionContent.venue.textAlign, fontSize: secondSectionContent.venue.fontSize, color: secondSectionContent.venue.color, textShadow: firstSectionTextShadow }}>
                              <p className="font-semibold" style={{ color: secondSectionContent.venue.labelColor, textShadow: firstSectionTextShadow }}>Venue: {event.venue}</p>
                              <p className="leading-snug">{event.address}</p>
                            </div>
                          </motion.div>
                          {/* QR card */}
                          <div className="mb-[2%]" style={{ marginTop: secondSectionContent.cards.marginTop }}>
                            <motion.div style={{ opacity: dateOpacity2, x: dateX2 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, width: secondSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${secondSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: secondSectionContent.cardTitle.width, textAlign: secondSectionContent.cardTitle.textAlign, fontSize: secondSectionContent.cardTitle.fontSize, color: secondSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Date &amp; Time</p>
                                <p className={secondSectionContent.cardBody.fontClassName} style={{ width: secondSectionContent.cardBody.width, textAlign: secondSectionContent.cardBody.textAlign, fontSize: secondSectionContent.cardBody.fontSize, color: secondSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.date}</p>
                                <p className={secondSectionContent.cardBody.fontClassName} style={{ width: secondSectionContent.cardBody.width, textAlign: secondSectionContent.cardBody.textAlign, fontSize: secondSectionContent.cardBody.fontSize, color: secondSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.time}</p>
                                <p className={secondSectionContent.cardBody.fontClassName} style={{ width: secondSectionContent.cardBody.width, textAlign: secondSectionContent.cardBody.textAlign, fontSize: '2.8cqw', color: secondSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>(followed by Lunch)</p>
                              </motion.div>
                            </motion.div>
                            <motion.div style={{ opacity: dressOpacity2, y: dressY2, rotate: dressRotate2 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, marginTop: secondSectionContent.cards.gap, width: secondSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${secondSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: secondSectionContent.cardTitle.width, textAlign: secondSectionContent.cardTitle.textAlign, fontSize: secondSectionContent.cardTitle.fontSize, color: secondSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Dress Code</p>
                                <p className={secondSectionContent.cardBody.fontClassName} style={{ width: secondSectionContent.cardBody.width, textAlign: secondSectionContent.cardBody.textAlign, fontSize: secondSectionContent.cardBody.fontSize, color: secondSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.dressCode}</p>
                              </motion.div>
                            </motion.div>
                            <motion.div style={{ opacity: qrOpacity2, scale: qrScale2 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, marginTop: secondSectionContent.cards.gap, width: secondSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${secondSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: secondSectionContent.cardTitle.width, textAlign: secondSectionContent.cardTitle.textAlign, fontSize: secondSectionContent.cardTitle.fontSize, color: secondSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Venue QR</p>
                                <a href={mapLink} target="_blank" rel="noreferrer" className="group flex flex-col items-center mx-auto" aria-label={`Open maps for ${event.title}`}>
                                  <div className="overflow-hidden" style={{ maxWidth: secondSectionContent.qr.maxWidth }}>
                                    <img src={qrUrl} alt={`QR code for ${event.venue}`} className="w-full bg-white p-[2%] shadow-md" loading="lazy" />
                                  </div>
                                  <div className={`${secondSectionContent.qr.fontClassName} mt-[2%] rounded-xl px-[3%] py-[2%] font-semibold transition group-hover:bg-white/90 whitespace-nowrap w-max max-w-none`} style={{ backgroundColor: secondSectionContent.qr.labelBg, textAlign: secondSectionContent.qr.textAlign, fontSize: secondSectionContent.qr.labelFontSize, lineHeight: 1.2, color: secondSectionContent.qr.labelColor, textShadow: firstSectionTextShadow }}>
                                    Tap/Scan QR to Open Venue Map
                                  </div>
                                </a>
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </>
            ) : isFourthSection ? (
              <>
                {/* Vakkaku Sastram — Section 4 */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ backgroundImage: `url(${vkBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
                <motion.div
                  className="absolute inset-0 z-50 pointer-events-none bg-black"
                  style={{ opacity: darkOverlayOpacity4 }}
                />
                <div className="relative z-[1] mx-auto flex w-full justify-center" style={{ minHeight: 'max-content' }}>
                  <div className="relative" style={{ width: firstSectionOverlayWidth, aspectRatio: '852 / 1261' }}>
                    {/* Center inner block */}
                    <img
                      src={vkInner}
                      alt=""
                      aria-hidden="true"
                      className="absolute object-fill"
                      style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%) scale(${fourthSectionOverlayScale})`, transformOrigin: 'center center', width: fourthSectionInnerSize.width, height: fourthSectionInnerSize.height }}
                    />
                    {/* vk_top — top of inner */}
                    <img
                      src={vkTop}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute object-contain"
                      style={{ top: fourthSectionDecorations.top.top, left: fourthSectionDecorations.top.left, width: fourthSectionDecorations.top.width }}
                    />
                    {/* vk_prop — right of inner */}
                    <img
                      src={vkProp}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute object-contain"
                      style={{ right: fourthSectionDecorations.prop.right, top: fourthSectionDecorations.prop.top, width: fourthSectionDecorations.prop.width }}
                    />
                    {/* Marigold rain — continuously fall from vk_top level */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
                      {MARIGOLD_PILE.map((f, i) => (
                        <motion.img
                          key={i}
                          src={f.img}
                          alt=""
                          aria-hidden="true"
                          className="absolute object-contain"
                          style={{ left: f.left, top: '-6%', width: f.size }}
                          animate={{ y: [0, 1050], x: f.sway, rotate: f.spin, opacity: [0, 1, 1, 0] }}
                          transition={{ duration: f.duration, repeat: Infinity, delay: f.delay, ease: 'linear' }}
                        />
                      ))}
                    </div>
                    {/* Content overlay */}
                    <div
                      className="absolute z-20 overflow-hidden"
                      style={{ containerType: 'inline-size', left: fourthSectionContent.wrapper.left, top: fourthSectionContent.wrapper.top, right: fourthSectionContent.wrapper.right, bottom: fourthSectionContent.wrapper.bottom }}
                    >
                      <article className="h-full w-full text-center">
                        <div className="relative h-full w-full">
                          <div className="absolute z-30 px-[4%]" style={{ top: fourthSectionContent.title.top, left: fourthSectionContent.title.left, width: fourthSectionContent.title.width, textAlign: fourthSectionContent.title.textAlign }}>
                            <motion.h3
                              className={`${fourthSectionContent.title.fontClassName} leading-[1.05]`}
                              style={{ fontSize: fourthSectionContent.title.fontSize, color: fourthSectionContent.title.color, textShadow: firstSectionTextShadow, opacity: titleOpacity4, scale: titleScale4 }}
                            >
                              {event.title}
                            </motion.h3>
                          </div>
                          <motion.div style={{ opacity: subtitleOpacity4, y: subtitleY4, filter: subtitleFilter4 }}>
                            <p className={`${fourthSectionContent.subtitle.fontClassName} font-bold`} style={{ marginTop: fourthSectionContent.subtitle.marginTop, marginLeft: fourthSectionContent.subtitle.left, width: fourthSectionContent.subtitle.width, textAlign: fourthSectionContent.subtitle.textAlign, fontSize: fourthSectionContent.subtitle.fontSize, color: fourthSectionContent.subtitle.color, textShadow: firstSectionTextShadow }}>
                              {event.subtitle}
                            </p>
                          </motion.div>
                          <motion.div style={{ opacity: venueOpacity4, x: venueX4 }}>
                            <div className={fourthSectionContent.venue.fontClassName} style={{ marginTop: fourthSectionContent.venue.marginTop, marginLeft: fourthSectionContent.venue.left, width: fourthSectionContent.venue.width, textAlign: fourthSectionContent.venue.textAlign, fontSize: fourthSectionContent.venue.fontSize, color: fourthSectionContent.venue.color, textShadow: firstSectionTextShadow }}>
                              <p className="font-semibold" style={{ color: fourthSectionContent.venue.labelColor, textShadow: firstSectionTextShadow }}>Venue: {event.venue}</p>
                              <p className="leading-snug">{event.address}</p>
                            </div>
                          </motion.div>
                          <div className="mb-[2%]" style={{ marginTop: fourthSectionContent.cards.marginTop }}>
                            <motion.div style={{ opacity: dateOpacity4, x: dateX4 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, width: fourthSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${fourthSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: fourthSectionContent.cardTitle.width, textAlign: fourthSectionContent.cardTitle.textAlign, fontSize: fourthSectionContent.cardTitle.fontSize, color: fourthSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Date &amp; Time</p>
                                <p className={fourthSectionContent.cardBody.fontClassName} style={{ width: fourthSectionContent.cardBody.width, textAlign: fourthSectionContent.cardBody.textAlign, fontSize: fourthSectionContent.cardBody.fontSize, color: fourthSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.date}</p>
                                <p className={fourthSectionContent.cardBody.fontClassName} style={{ width: fourthSectionContent.cardBody.width, textAlign: fourthSectionContent.cardBody.textAlign, fontSize: fourthSectionContent.cardBody.fontSize, color: fourthSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.time}</p>
                                <p className={fourthSectionContent.cardBody.fontClassName} style={{ width: fourthSectionContent.cardBody.width, textAlign: fourthSectionContent.cardBody.textAlign, fontSize: '2.8cqw', color: fourthSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>(followed by Dinner)</p>
                              </motion.div>
                            </motion.div>
                            <motion.div style={{ opacity: dressOpacity4, y: dressY4, rotate: dressRotate4 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, marginTop: fourthSectionContent.cards.gap, width: fourthSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${fourthSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: fourthSectionContent.cardTitle.width, textAlign: fourthSectionContent.cardTitle.textAlign, fontSize: fourthSectionContent.cardTitle.fontSize, color: fourthSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Dress Code</p>
                                <p className={fourthSectionContent.cardBody.fontClassName} style={{ width: fourthSectionContent.cardBody.width, textAlign: fourthSectionContent.cardBody.textAlign, fontSize: fourthSectionContent.cardBody.fontSize, color: fourthSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.dressCode}</p>
                              </motion.div>
                            </motion.div>
                            <motion.div style={{ opacity: qrOpacity4, scale: qrScale4 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, marginTop: fourthSectionContent.cards.gap, width: fourthSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${fourthSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: fourthSectionContent.cardTitle.width, textAlign: fourthSectionContent.cardTitle.textAlign, fontSize: fourthSectionContent.cardTitle.fontSize, color: fourthSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Venue QR</p>
                                <a href={mapLink} target="_blank" rel="noreferrer" className="group flex flex-col items-center mx-auto" aria-label={`Open maps for ${event.title}`}>
                                  <div className="overflow-hidden" style={{ maxWidth: fourthSectionContent.qr.maxWidth }}>
                                    <img src={qrUrl} alt={`QR code for ${event.venue}`} className="w-full bg-white p-[2%] shadow-md" loading="lazy" />
                                  </div>
                                  <div className={`${fourthSectionContent.qr.fontClassName} mt-[2%] rounded-xl px-[3%] py-[2%] font-semibold transition group-hover:bg-white/90 whitespace-nowrap w-max max-w-none`} style={{ backgroundColor: fourthSectionContent.qr.labelBg, textAlign: fourthSectionContent.qr.textAlign, fontSize: fourthSectionContent.qr.labelFontSize, lineHeight: 1.2, color: fourthSectionContent.qr.labelColor, textShadow: firstSectionTextShadow }}>
                                    Tap/Scan QR to Open Venue Map
                                  </div>
                                </a>
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </>
            ) : isFifthSection ? (
              <>
                {/* Wedding — Section 5 */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ backgroundImage: `url(${wedBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
                <motion.div
                  className="absolute inset-0 z-50 pointer-events-none bg-black"
                  style={{ opacity: darkOverlayOpacity5 }}
                />
                {/* Flying lanterns */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[55]">
                  {WEDDING_LANTERNS.map((l, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{ left: l.left, top: '108%', width: l.size }}
                      animate={{ y: [0, -2600], x: l.driftX, rotate: l.rot }}
                      transition={{ duration: l.duration, delay: l.delay, repeat: Infinity, ease: 'linear' }}
                    >
                      <motion.img
                        src={LANTERN_SRCS[l.src]}
                        alt=""
                        aria-hidden="true"
                        className="w-full object-contain select-none"
                        animate={{
                          filter: [
                            'drop-shadow(0 0 5px rgba(255,160,0,0.75)) drop-shadow(0 0 12px rgba(255,100,0,0.45))',
                            'drop-shadow(0 0 12px rgba(255,190,0,1.0)) drop-shadow(0 0 28px rgba(255,130,0,0.8)) drop-shadow(0 0 45px rgba(255,80,0,0.35))',
                            'drop-shadow(0 0 5px rgba(255,160,0,0.75)) drop-shadow(0 0 12px rgba(255,100,0,0.45))',
                          ],
                        }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: l.delay % 2.2 }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="relative z-[1] mx-auto flex w-full justify-center" style={{ minHeight: 'max-content' }}>
                  <div className="relative" style={{ width: firstSectionOverlayWidth, aspectRatio: '852 / 1261' }}>
                    {/* Center inner block */}
                    <img
                      src={wedInner}
                      alt=""
                      aria-hidden="true"
                      className="absolute object-fill"
                      style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%) scaleX(${fifthSectionInnerSize.scaleX}) scaleY(${fifthSectionInnerSize.scaleY})`, transformOrigin: 'center center', width: fifthSectionInnerSize.width, height: fifthSectionInnerSize.height }}
                    />
                    {/* Decorations */}
                    <img src={wedFl2} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ right: fifthSectionDecorations.fl2.right, top: fifthSectionDecorations.fl2.top, width: fifthSectionDecorations.fl2.width }} />
                    <img src={wedFl1} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: fifthSectionDecorations.fl1.left, top: fifthSectionDecorations.fl1.top, width: fifthSectionDecorations.fl1.width }} />
                    <img src={wedLt}  alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: fifthSectionDecorations.lt.left, top: fifthSectionDecorations.lt.top, width: fifthSectionDecorations.lt.width }} />
                    {/* Light glows on wedLt */}
                    {[
                      { left: '36.4%', top: '7.5%',  delay: 0    },
                      { left: '41.7%', top: '6.6%', delay: 0.55 },
                      { left: '56.8%', top: '6.2%', delay: 1.1  },
                      { left: '58.99%', top: '7.8%',  delay: 0.3  },
                    ].map((g, i) => (
                      <motion.div
                        key={i}
                        className="pointer-events-none absolute"
                        style={{
                          left: g.left, top: g.top,
                          width: '5%', aspectRatio: '1',
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(255,200,60,0.9) 0%, rgba(255,140,20,0.5) 28%, rgba(255,90,0,0.2) 52%, transparent 72%)',
                        }}
                        animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.55, 1, 0.55] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: g.delay }}
                      />
                    ))}
                    {/* Bells — left side: bell1, bell2, bell3 */}
                    <img src={BELL_SRCS[0]} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: '15%',  top: '11%', width: '8%' }} />
                    <img src={BELL_SRCS[1]} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: '25%', top: '6.9%', width: '5%' }} />
                    <img src={BELL_SRCS[2]} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: '21.3%', top: '8%', width: '4%' }} />
                    {/* Bells — right side: bell3, bell2, bell1 */}
                    <img src={BELL_SRCS[2]} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: '75%', top: '8%', width: '4%' }} />
                    <img src={BELL_SRCS[1]} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: '70%', top: '6.6%', width: '5%' }} />
                    <img src={BELL_SRCS[0]} alt="" aria-hidden="true" className="pointer-events-none absolute object-contain" style={{ left: '77%', top: '10.2%', width: '8%' }} />
                    {/* Silver sparkles over inner image */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[9]">
                      {WEDDING_SPARKLES.map((s, i) => (
                        <motion.div
                          key={i}
                          className="absolute select-none"
                          style={{ left: s.left, top: s.top, fontSize: s.size, color: '#E8E8E8', lineHeight: 1, textShadow: '0 0 6px #ffffff, 0 0 14px #C0C0C0, 0 0 22px #A8A8A8' }}
                          animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0], rotate: [0, 45, 0] }}
                          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
                        >
                          ✦
                        </motion.div>
                      ))}
                    </div>
                    {/* Content overlay */}
                    <div
                      className="absolute z-20 overflow-hidden"
                      style={{ containerType: 'inline-size', left: fifthSectionContent.wrapper.left, top: fifthSectionContent.wrapper.top, right: fifthSectionContent.wrapper.right, bottom: fifthSectionContent.wrapper.bottom }}
                    >
                      <article className="h-full w-full text-center">
                        <div className="relative h-full w-full">
                          <div className="absolute z-30 px-[4%]" style={{ top: fifthSectionContent.title.top, left: fifthSectionContent.title.left, width: fifthSectionContent.title.width, textAlign: fifthSectionContent.title.textAlign }}>
                            <motion.h3 className={`${fifthSectionContent.title.fontClassName} leading-[1.05]`} style={{ fontSize: fifthSectionContent.title.fontSize, color: fifthSectionContent.title.color, textShadow: fifthSectionTextShadow, opacity: titleOpacity5, scale: titleScale5 }}>
                              {event.title}
                            </motion.h3>
                          </div>
                          <motion.div style={{ opacity: subtitleOpacity5, y: subtitleY5, filter: subtitleFilter5 }}>
                            <p className={`${fifthSectionContent.subtitle.fontClassName} font-bold`} style={{ marginTop: fifthSectionContent.subtitle.marginTop, marginLeft: fifthSectionContent.subtitle.left, width: fifthSectionContent.subtitle.width, textAlign: fifthSectionContent.subtitle.textAlign, fontSize: fifthSectionContent.subtitle.fontSize, color: fifthSectionContent.subtitle.color, textShadow: fifthSectionTextShadow }}>
                              {event.subtitle}
                            </p>
                          </motion.div>
                          <motion.div style={{ opacity: venueOpacity5, x: venueX5 }}>
                            <div className={fifthSectionContent.venue.fontClassName} style={{ marginTop: fifthSectionContent.venue.marginTop, marginLeft: fifthSectionContent.venue.left, width: fifthSectionContent.venue.width, textAlign: fifthSectionContent.venue.textAlign, fontSize: fifthSectionContent.venue.fontSize, color: fifthSectionContent.venue.color, textShadow: fifthSectionTextShadow }}>
                              <p className="font-semibold" style={{ color: fifthSectionContent.venue.labelColor, textShadow: fifthSectionTextShadow }}>Venue: {event.venue}</p>
                              <p className="leading-snug">{event.address}</p>
                            </div>
                          </motion.div>
                          <div className="mb-[2%]" style={{ marginTop: fifthSectionContent.cards.marginTop }}>
                            <motion.div style={{ opacity: dateOpacity5, x: dateX5 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, width: fifthSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${fifthSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: fifthSectionContent.cardTitle.width, textAlign: fifthSectionContent.cardTitle.textAlign, fontSize: fifthSectionContent.cardTitle.fontSize, color: fifthSectionContent.cardTitle.color, textShadow: fifthSectionTextShadow }}>Reception</p>
                                <p className={fifthSectionContent.cardBody.fontClassName} style={{ width: fifthSectionContent.cardBody.width, textAlign: fifthSectionContent.cardBody.textAlign, fontSize: fifthSectionContent.cardBody.fontSize, color: fifthSectionContent.cardBody.color, textShadow: fifthSectionTextShadow }}>{event.date}</p>
                                <p className={fifthSectionContent.cardBody.fontClassName} style={{ width: fifthSectionContent.cardBody.width, textAlign: fifthSectionContent.cardBody.textAlign, fontSize: fifthSectionContent.cardBody.fontSize, color: fifthSectionContent.cardBody.color, textShadow: fifthSectionTextShadow }}>{event.time}</p>
                                <p className={fifthSectionContent.cardBody.fontClassName} style={{ width: fifthSectionContent.cardBody.width, textAlign: fifthSectionContent.cardBody.textAlign, fontSize: '2.8cqw', color: fifthSectionContent.cardBody.color, textShadow: fifthSectionTextShadow }}>(followed by Dinner)</p>                                
                              </motion.div>
                            </motion.div>
                            <motion.div style={{ opacity: dressOpacity5, y: dressY5, rotate: dressRotate5 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, marginTop: fifthSectionContent.cards.gap, width: fifthSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${fifthSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: fifthSectionContent.cardTitle.width, textAlign: fifthSectionContent.cardTitle.textAlign, fontSize: fifthSectionContent.cardTitle.fontSize, color: fifthSectionContent.cardTitle.color, textShadow: fifthSectionTextShadow }}>Muhurtham</p>
                                <p className={fifthSectionContent.cardBody.fontClassName} style={{ width: fifthSectionContent.cardBody.width, textAlign: fifthSectionContent.cardBody.textAlign, fontSize: fifthSectionContent.cardBody.fontSize, color: fifthSectionContent.cardBody.color, textShadow: fifthSectionTextShadow }}>{event.dressCode}</p>
                                <p className={fifthSectionContent.cardBody.fontClassName} style={{ width: fifthSectionContent.cardBody.width, textAlign: fifthSectionContent.cardBody.textAlign, fontSize: '2.8cqw', color: fifthSectionContent.cardBody.color, textShadow: fifthSectionTextShadow }}>Sravana Nakshatram Vrushabha Lagnam</p>
                              </motion.div>
                            </motion.div>
                            <motion.div style={{ opacity: qrOpacity5, scale: qrScale5 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, marginTop: fifthSectionContent.cards.gap, width: fifthSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${fifthSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: fifthSectionContent.cardTitle.width, textAlign: fifthSectionContent.cardTitle.textAlign, fontSize: fifthSectionContent.cardTitle.fontSize, color: fifthSectionContent.cardTitle.color, textShadow: fifthSectionTextShadow }}>Venue QR</p>
                                <a href={mapLink} target="_blank" rel="noreferrer" className="group flex flex-col items-center mx-auto" aria-label={`Open maps for ${event.title}`}>
                                  <div className="overflow-hidden" style={{ maxWidth: fifthSectionContent.qr.maxWidth }}>
                                    <img src={qrUrl} alt={`QR code for ${event.venue}`} className="w-full bg-white p-[2%] shadow-md" loading="lazy" />
                                  </div>
                                  <div className={`${fifthSectionContent.qr.fontClassName} mt-[2%] rounded-xl px-[3%] py-[2%] font-semibold transition group-hover:bg-white/90 whitespace-nowrap w-max max-w-none`} style={{ backgroundColor: fifthSectionContent.qr.labelBg, textAlign: fifthSectionContent.qr.textAlign, fontSize: fifthSectionContent.qr.labelFontSize, lineHeight: 1.2, color: fifthSectionContent.qr.labelColor, textShadow: fifthSectionTextShadow }}>
                                    Tap/Scan QR to Open Venue Map
                                  </div>
                                </a>
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </>
            ) : isSixthSection ? (
              <>
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ backgroundImage: `url(${rcBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
                <motion.div
                  className="absolute inset-0 z-50 pointer-events-none bg-black"
                  style={{ opacity: darkOverlayOpacity6 }}
                />
                <div className="relative z-[1] mx-auto flex w-full justify-center" style={{ minHeight: 'max-content' }}>
                  <div className="relative" style={{ width: firstSectionOverlayWidth, aspectRatio: '852 / 1261' }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
                      {[
                        { left: '8%', top: '12%', size: '4%', delay: 0.0, duration: 3.4 },
                        { left: '16%', top: '22%', size: '3.2%', delay: 0.7, duration: 3.9 },
                        { left: '24%', top: '16%', size: '3.6%', delay: 1.2, duration: 3.1 },
                        { left: '32%', top: '30%', size: '3.2%', delay: 1.6, duration: 3.6 },
                        { left: '40%', top: '18%', size: '3.8%', delay: 0.5, duration: 3.2 },
                        { left: '48%', top: '12%', size: '3.4%', delay: 0.8, duration: 3.4 },
                        { left: '56%', top: '28%', size: '3.6%', delay: 1.3, duration: 3.8 },
                        { left: '64%', top: '18%', size: '3.2%', delay: 1.9, duration: 3.5 },
                        { left: '72%', top: '30%', size: '3.4%', delay: 0.4, duration: 3.3 },
                        { left: '80%', top: '16%', size: '2.8%', delay: 2.1, duration: 3.2 },
                        { left: '14%', top: '40%', size: '3.4%', delay: 1.4, duration: 4.0 },
                        { left: '22%', top: '56%', size: '3%', delay: 0.2, duration: 3.7 },
                        { left: '34%', top: '44%', size: '3.2%', delay: 1.0, duration: 3.6 },
                        { left: '50%', top: '44%', size: '3.6%', delay: 0.6, duration: 3.7 },
                        { left: '60%', top: '56%', size: '3.2%', delay: 1.8, duration: 3.4 },
                        { left: '74%', top: '44%', size: '2.9%', delay: 2.3, duration: 3.5 },
                        { left: '84%', top: '42%', size: '3%', delay: 0.9, duration: 3.8 },
                        { left: '10%', top: '72%', size: '3.4%', delay: 0.3, duration: 3.6 },
                        { left: '20%', top: '82%', size: '3.2%', delay: 1.1, duration: 3.9 },
                        { left: '30%', top: '74%', size: '3.6%', delay: 1.7, duration: 3.4 },
                        { left: '44%', top: '84%', size: '3.4%', delay: 0.8, duration: 3.6 },
                        { left: '58%', top: '74%', size: '3.2%', delay: 1.5, duration: 3.5 },
                        { left: '70%', top: '84%', size: '3.4%', delay: 2.0, duration: 3.7 },
                        { left: '82%', top: '74%', size: '3%', delay: 0.6, duration: 3.3 },
                      ].map((sparkle, index) => (
                        <motion.div
                          key={index}
                          className="absolute rounded-full"
                          style={{
                            left: sparkle.left,
                            top: sparkle.top,
                            width: sparkle.size,
                            height: sparkle.size,
                            background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,190,215,0.45) 35%, rgba(255,120,180,0.12) 70%, transparent 100%)',
                            filter: 'blur(0.2px)',
                            boxShadow: '0 0 6px rgba(255,180,215,0.35)',
                          }}
                          animate={{
                            opacity: [0.12, 0.7, 0.12],
                            scale: [0.55, 0.95, 0.55],
                            y: [0, -4, 0],
                            rotate: [0, 135, 270],
                          }}
                          transition={{ duration: sparkle.duration, repeat: Infinity, delay: sparkle.delay, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                    <img
                      src={rcInner}
                      alt=""
                      aria-hidden="true"
                      className="absolute object-fill"
                      // style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%) scale(${sixthSectionOverlayScale})`, transformOrigin: 'center center', width: '100%', height: '100%' }}
                      style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%) scaleX(${sixthSectionInnerSize.scaleX}) scaleY(${sixthSectionInnerSize.scaleY})`, transformOrigin: 'center center', width: sixthSectionInnerSize.width, height: sixthSectionInnerSize.height }}

                    />
                    <img
                      src={rcItop}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute object-contain"
                      style={{ top: '15%', left: '22%', width: '50%' }}
                    />
                    <div
                      className="absolute z-20 overflow-hidden"
                      style={{ containerType: 'inline-size', left: sixthSectionContent.wrapper.left, top: sixthSectionContent.wrapper.top, right: sixthSectionContent.wrapper.right, bottom: sixthSectionContent.wrapper.bottom }}
                    >
                      <article className="h-full w-full text-center">
                        <div className="relative h-full w-full">
                          <div className="absolute z-30 px-[4%]" style={{ top: sixthSectionContent.title.top, left: sixthSectionContent.title.left, width: sixthSectionContent.title.width, textAlign: sixthSectionContent.title.textAlign }}>
                            <motion.h3
                              className={`${sixthSectionContent.title.fontClassName} leading-[1.05]`}
                              style={{ fontSize: sixthSectionContent.title.fontSize, color: sixthSectionContent.title.color, textShadow: firstSectionTextShadow, opacity: titleOpacity6, scale: titleScale6 }}
                            >
                              {event.title}
                            </motion.h3>
                          </div>
                          <motion.div style={{ opacity: subtitleOpacity6, y: subtitleY6, filter: subtitleFilter6 }}>
                            <p className={`${sixthSectionContent.subtitle.fontClassName} font-bold`} style={{ marginTop: sixthSectionContent.subtitle.marginTop, marginLeft: sixthSectionContent.subtitle.left, width: sixthSectionContent.subtitle.width, textAlign: sixthSectionContent.subtitle.textAlign, fontSize: sixthSectionContent.subtitle.fontSize, color: sixthSectionContent.subtitle.color, textShadow: firstSectionTextShadow }}>
                              {event.subtitle}
                            </p>
                          </motion.div>
                          <motion.div style={{ opacity: venueOpacity6, x: venueX6 }}>
                            <div className={sixthSectionContent.venue.fontClassName} style={{ marginTop: sixthSectionContent.venue.marginTop, marginLeft: sixthSectionContent.venue.left, width: sixthSectionContent.venue.width, textAlign: sixthSectionContent.venue.textAlign, fontSize: sixthSectionContent.venue.fontSize, color: sixthSectionContent.venue.color, textShadow: firstSectionTextShadow }}>
                              <p className="font-semibold" style={{ color: sixthSectionContent.venue.labelColor, textShadow: firstSectionTextShadow }}>Venue: {event.venue}</p>
                              <p className="leading-snug text-[2.7cqw]" >{event.address}</p>
                            </div>
                          </motion.div>
                          <div className="mb-[2%]" style={{ marginTop: sixthSectionContent.cards.marginTop }}>
                            <motion.div style={{ opacity: dateOpacity6, x: dateX6 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, width: sixthSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${sixthSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: sixthSectionContent.cardTitle.width, textAlign: sixthSectionContent.cardTitle.textAlign, fontSize: sixthSectionContent.cardTitle.fontSize, color: sixthSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Date &amp; Time</p>
                                <p className={sixthSectionContent.cardBody.fontClassName} style={{ width: sixthSectionContent.cardBody.width, textAlign: sixthSectionContent.cardBody.textAlign, fontSize: sixthSectionContent.cardBody.fontSize, color: sixthSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.date}</p>
                                <p className={sixthSectionContent.cardBody.fontClassName} style={{ width: sixthSectionContent.cardBody.width, textAlign: sixthSectionContent.cardBody.textAlign, fontSize: sixthSectionContent.cardBody.fontSize, color: sixthSectionContent.cardBody.color, textShadow: firstSectionTextShadow }}>{event.time}</p>
                              </motion.div>
                            </motion.div>
                            <motion.div style={{ opacity: qrOpacity6, scale: qrScale6 }}>
                              <motion.div className={`${layout.cardClass} px-[3.2%] py-[2.7%]`} style={{ backgroundColor: layout.cardBg, marginTop: sixthSectionContent.cards.gap, width: sixthSectionContent.cards.width, marginInline: 'auto' }} whileHover={{ scale: 1.01 }}>
                                <p className={`${sixthSectionContent.cardTitle.fontClassName} font-semibold`} style={{ width: sixthSectionContent.cardTitle.width, textAlign: sixthSectionContent.cardTitle.textAlign, fontSize: sixthSectionContent.cardTitle.fontSize, color: sixthSectionContent.cardTitle.color, textShadow: firstSectionTextShadow }}>Venue QR</p>
                                <a href={mapLink} target="_blank" rel="noreferrer" className="group flex flex-col items-center mx-auto" aria-label={`Open maps for ${event.title}`}>
                                  <div className="overflow-hidden" style={{ maxWidth: sixthSectionContent.qr.maxWidth }}>
                                    <img src={qrUrl} alt={`QR code for ${event.venue}`} className="w-full bg-white p-[2%] shadow-md" loading="lazy" />
                                  </div>
                                  <div className={`${sixthSectionContent.qr.fontClassName} mt-[2%] rounded-xl px-[3%] py-[2%] font-semibold transition group-hover:bg-white/90 whitespace-nowrap w-max max-w-none`} style={{ backgroundColor: sixthSectionContent.qr.labelBg, textAlign: sixthSectionContent.qr.textAlign, fontSize: sixthSectionContent.qr.labelFontSize, lineHeight: 1.2, color: sixthSectionContent.qr.labelColor, textShadow: firstSectionTextShadow }}>
                                    Tap/Scan QR to Open Venue Map
                                  </div>
                                </a>
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <layout.Decor />

                <div className={`max-w-xl mx-auto relative z-20 ${layout.align}`}>
                  <article className="w-full">
                    <div className="p-6 sm:p-8 relative">
                      <Reveal type="rotateIn" delay={0.02} amount={0.6}>
                        <motion.div
                          className="absolute right-6 top-2"
                          animate={{ y: [0, -8, 0], rotate: [0, 7, 0] }}
                          transition={{ duration: 2.9, repeat: Infinity }}
                        >
                          <MotifSticker motif={event.motif} accent={event.theme.accent} />
                        </motion.div>
                      </Reveal>

                      <Reveal type={layout.titleAnim} delay={0.06}>
                        <h3 className="font-display text-3xl sm:text-4xl text-white mb-1">{event.title}</h3>
                      </Reveal>
                      <Reveal type="blurIn" delay={0.1}>
                        <p className="text-white/80 font-semibold mb-5">{event.subtitle}</p>
                      </Reveal>

                      <Reveal type="slideRight" delay={0.12} amount={0.5}>
                        <div className="mb-6 text-sm text-white/75">
                          <p className="font-semibold text-white">Venue: {event.venue}</p>
                          <p>{event.address}</p>
                        </div>
                      </Reveal>

                      <div className="space-y-4 mb-6">
                        <Reveal type="slideLeft" delay={0.15} amount={0.55}>
                          <motion.div
                            className={layout.cardClass}
                            style={{ backgroundColor: layout.cardBg }}
                            whileHover={{ scale: 1.01 }}
                          >
                            <p className="font-semibold text-white mb-2">Date & Time</p>
                            <p className="text-white/80">{event.date}</p>
                            <p className="text-white/80">{event.time}</p>
                          </motion.div>
                        </Reveal>

                        <Reveal type="slideRight" delay={0.22} amount={0.55}>
                          <motion.div
                            className={layout.cardClass}
                            style={{ backgroundColor: layout.cardBg }}
                            whileHover={{ scale: 1.01 }}
                          >
                            <p className="font-semibold text-white mb-2">Dress Code</p>
                            <p className="text-white/80">{event.dressCode}</p>
                          </motion.div>
                        </Reveal>

                        <Reveal type="zoomIn" delay={0.28} amount={0.55}>
                          <motion.div
                            className={layout.cardClass}
                            style={{ backgroundColor: layout.cardBg }}
                            whileHover={{ scale: 1.01 }}
                          >
                            <p className="font-semibold text-white mb-2">Venue QR</p>
                            <a
                              href={mapLink}
                              target="_blank"
                              rel="noreferrer"
                              className="group flex flex-col items-center mx-auto"
                              aria-label={`Open maps for ${event.title}`}
                            >
                              <div className="w-full max-w-[220px] overflow-hidden rounded-2xl">
                                <img src={qrUrl} alt={`QR code for ${event.venue}`} className="w-full bg-white p-2 rounded-2xl shadow-md" loading="lazy" />
                              </div>
                              <div className="mt-2 px-3 py-2 bg-white/70 text-[#5f4a56] font-semibold text-center rounded-xl group-hover:bg-white/90 transition text-sm whitespace-nowrap w-max max-w-none">
                                Tap/Scan QR to Open Venue Map
                              </div>
                            </a>
                          </motion.div>
                        </Reveal>
                      </div>

                      <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-3">
                        Animated Story Beats
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
                        {event.storyFrames.map((frame, idx) => (
                          <motion.div
                            key={`${event.id}-${frame}`}
                            className="rounded-xl px-3 py-3 text-sm font-semibold text-white"
                            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 * idx, duration: 0.45 }}
                            animate={{ y: [0, -3, 0] }}
                          >
                            ✦ {frame}
                          </motion.div>
                        ))}
                      </div>

                      <Reveal type="blurIn" delay={0.33} amount={0.55}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <PopArtImage accent={event.theme.accent} ink={event.theme.ink} label="Poster Frame A" variant={1} />
                          <PopArtImage accent={event.theme.accent} ink={event.theme.ink} label="Poster Frame B" variant={2} />
                          <PopArtImage accent={event.theme.accent} ink={event.theme.ink} label="Poster Frame C" variant={1} />
                        </div>
                      </Reveal>

                      <Reveal type="fadeUp" delay={0.36} amount={0.55}>
                        <motion.p
                          className="mt-5 text-sm text-white/75 leading-relaxed"
                          animate={{ opacity: [0.95, 1, 0.95] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {event.designNote}
                        </motion.p>
                      </Reveal>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                        {event.highlights.map((item, idx) => (
                          <Reveal key={`${event.id}-${item}`} type={idx % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={0.05 * idx} amount={0.55}>
                            <motion.div
                              className="rounded-lg px-3 py-2 font-medium text-white"
                              style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}
                              whileHover={{ scale: 1.03 }}
                            >
                              {item}
                            </motion.div>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              </>
            )}
          </section>
        )
      })}
    </section>
  )
}
