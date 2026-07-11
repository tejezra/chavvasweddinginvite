import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import heroLogo from '../../image0.png'
import gridCellImage from '../../E594F4E0-F076-4E44-9713-F238456FCC3D.png'
import alternateGridCellImage from '../../AD10A774-1DEF-4999-9AAB-E59CB69AC128.png'

const palette = ['#4A0101', '#494A01', '#014A08', '#4A0135', '#A85800', '#470B1E']
const fixedGridColor = '#470B1E'

const desktopFixedCells = [10, 11, 12, 13, 18, 19, 20, 21, 26, 27, 28, 29]

function buildFixedCells({ columns, colStart, colSpan, rowStart, rowSpan }) {
  const cells = []
  const colEnd = colStart + colSpan - 1
  const rowEnd = rowStart + rowSpan - 1

  for (let row = rowStart; row <= rowEnd; row += 1) {
    for (let col = colStart; col <= colEnd; col += 1) {
      cells.push((row - 1) * columns + (col - 1))
    }
  }

  return cells
}

function seeded(index) {
  const x = Math.sin((index + 1) * 97.13) * 10000
  return x - Math.floor(x)
}

function AnimatedGrid({ className, fixedCells, columns, rows, containerStyle }) {
  const fixedCellSet = useMemo(() => new Set(fixedCells), [fixedCells])

  const cells = useMemo(
    () =>
      Array.from({ length: columns * rows }, (_, i) => {
        const baseIndex = Math.floor(seeded(i) * palette.length)
        const altIndex = Math.floor(seeded(i + 17) * palette.length)

        return {
          id: i,
          baseColor: palette[baseIndex],
          altColor: palette[altIndex === baseIndex ? (altIndex + 1) % palette.length : altIndex],
          delay: seeded(i + 53) * 2.4,
          duration: 7 + seeded(i + 71) * 5,
        }
      }),
    [columns, rows]
  )

  return (
    <div className={`absolute z-0 pointer-events-none ${className}`} style={containerStyle}>
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {cells.map((cell) => {
          const row = Math.floor(cell.id / columns)
          const column = cell.id % columns
          const mirroredColumn = columns - 1 - column
          const showGridCellImage = !fixedCellSet.has(cell.id) && (row + mirroredColumn) % 2 === 0
          const useAlternateImage = (row + mirroredColumn) % 4 === 0

          return (
            <motion.div
              key={cell.id}
              className="relative overflow-hidden"
              animate={fixedCellSet.has(cell.id) ? undefined : { backgroundColor: [cell.baseColor, cell.altColor, cell.baseColor] }}
              transition={fixedCellSet.has(cell.id) ? undefined : { duration: cell.duration, delay: cell.delay, repeat: Infinity, ease: 'easeInOut' }}
              style={fixedCellSet.has(cell.id) ? { backgroundColor: fixedGridColor } : { border: '1px solid #FCD556' }}
            >
              {showGridCellImage && (
                <img
                  src={useAlternateImage ? alternateGridCellImage : gridCellImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-[20%] h-[60%] w-[60%] object-contain opacity-75"
                />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function Hero() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  const mobileRows = useMemo(() => {
    if (!viewport.width || !viewport.height) {
      return 10
    }

    const usableWidth = Math.max(viewport.width - 32, 320)
    const mobileHeightFactor = 0.84
    const effectiveHeight = viewport.width < 768 ? viewport.height * mobileHeightFactor : viewport.height
    const computedRows = Math.round((effectiveHeight / usableWidth) * 5)
    return Math.max(8, Math.min(14, computedRows))
  }, [viewport.height, viewport.width])

  const mobileRowSpan = useMemo(() => Math.max(3, Math.round(mobileRows * 0.45)), [mobileRows])

  const mobileRowStart = useMemo(
    () => Math.max(1, Math.floor((mobileRows - mobileRowSpan) / 2) + 1),
    [mobileRows, mobileRowSpan]
  )

  const mobileFixedCells = useMemo(
    () =>
      buildFixedCells({
        columns: 5,
        colStart: 2,
        colSpan: 3,
        rowStart: mobileRowStart,
        rowSpan: mobileRowSpan,
      }),
    [mobileRowStart, mobileRowSpan]
  )

  const mobileGridStyle = useMemo(
    () => ({ height: `calc((100vw - 2rem) * ${mobileRows / 5})` }),
    [mobileRows]
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const ambientOrbs = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${8 + seeded(i + 5) * 84}%`,
        top: `${6 + seeded(i + 21) * 86}%`,
        size: `${18 + seeded(i + 41) * 46}px`,
        duration: 8 + seeded(i + 67) * 10,
        delay: seeded(i + 89) * 2.5,
        xOffset: -18 + seeded(i + 103) * 36,
        yOffset: -22 + seeded(i + 131) * 44,
      })),
    []
  )

  return (
    <motion.section
      className="relative min-h-[84svh] md:min-h-[100svh] bg-white flex items-center justify-center px-4 py-6 sm:py-14 overflow-hidden"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {ambientOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full bg-[#FCD556]/20 blur-[18px]"
            style={{ left: orb.left, top: orb.top, width: orb.size, height: orb.size }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.42, 0.16, 0.35],
              x: [0, orb.xOffset, 0],
              y: [0, orb.yOffset, 0],
            }}
            transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-0 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 1.15, ease: 'easeOut' }}
      >
        <AnimatedGrid
          className="md:hidden inset-x-0 top-1/2 -translate-y-1/2"
          fixedCells={mobileFixedCells}
          columns={5}
          rows={mobileRows}
          containerStyle={mobileGridStyle}
        />
        <AnimatedGrid className="hidden md:block inset-0" fixedCells={desktopFixedCells} columns={8} rows={5} />
      </motion.div>

      <motion.div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 md:hidden grid grid-cols-5"
        style={{ ...mobileGridStyle, gridTemplateRows: `repeat(${mobileRows}, minmax(0, 1fr))` }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          style={{ gridColumn: '2 / span 3', gridRow: `${mobileRowStart} / span ${mobileRowSpan}` }}
          className="flex h-full w-full items-center justify-center overflow-visible bg-transparent backdrop-blur-lg border border-[#FCD556] shadow-2xl [box-shadow:inset_0_0_0_1px_#FCD556,0_25px_50px_-12px_rgba(0,0,0,0.55)] p-2"
          initial={{ opacity: 0, y: 28, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="flex h-full w-full flex-col items-center justify-start overflow-visible pt-4 text-center">
            <div className="flex w-full flex-1 min-h-0 items-center justify-center">
              <motion.img
                src={heroLogo}
                alt="Wedding logo"
                className="h-auto max-h-full w-full object-contain"
                initial={{ opacity: 0, y: 14, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.03, 1] }}
                transition={{ opacity: { delay: 0.62, duration: 0.55 }, y: { delay: 0.62, duration: 0.55 }, scale: { delay: 1.1, duration: 4.2, repeat: Infinity, ease: 'easeInOut' } }}
              />
            </div>
            <motion.h1
              className="font-script-title mt-2 max-w-full overflow-visible bg-gradient-to-b from-[#FFF8CC] via-[#F6D76A] to-[#B8860B] bg-clip-text px-1 pt-2 text-[clamp(1.7rem,8vw,2.45rem)] leading-[1.1] text-transparent [text-shadow:0_0_18px_rgba(246,215,106,0.24)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-center">{"Chavva's"}</span>
              <span className="block text-center whitespace-nowrap">Wedding Invitation</span>
            </motion.h1>
            <motion.p
              className="font-script-subtitle mt-2 bg-gradient-to-b from-[#FFF3B2] via-[#EBC85A] to-[#A97808] bg-clip-text px-1 pb-1 text-[clamp(0.84rem,3.16vw,1.07rem)] leading-snug text-transparent [text-shadow:0_0_14px_rgba(246,215,106,0.2)]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.02, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-center">Join us for a celebration</span>
              <span className="block text-center">of</span>
              <span className="block text-center">love, tradition, and joy</span>
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 hidden md:grid md:grid-cols-8 md:grid-rows-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="col-start-3 col-span-4 row-start-2 row-span-3 flex h-full w-full items-center justify-center overflow-visible bg-transparent backdrop-blur-lg border border-[#FCD556] shadow-2xl [box-shadow:inset_0_0_0_1px_#FCD556,0_25px_50px_-12px_rgba(0,0,0,0.55)] p-8"
          initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.38, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="flex h-full w-full flex-col items-center justify-start overflow-visible pt-4 text-center">
            <div className="flex w-full flex-1 min-h-0 items-center justify-center">
              <motion.img
                src={heroLogo}
                alt="Wedding logo"
                className="h-auto max-h-full w-full object-contain"
                initial={{ opacity: 0, y: 18, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.03, 1] }}
                transition={{ opacity: { delay: 0.64, duration: 0.55 }, y: { delay: 0.64, duration: 0.55 }, scale: { delay: 1.15, duration: 4.2, repeat: Infinity, ease: 'easeInOut' } }}
              />
            </div>
            <motion.h1
              className="font-script-title mt-1 max-w-full overflow-visible whitespace-nowrap bg-gradient-to-b from-[#FFF8CC] via-[#F6D76A] to-[#B8860B] bg-clip-text px-1 pt-2 text-[clamp(1.7rem,3.5vw,2.9rem)] leading-[1.1] text-transparent [text-shadow:0_0_18px_rgba(246,215,106,0.24)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {"Chavva's Wedding Invitation"}
            </motion.h1>
            <motion.p
              className="font-script-subtitle mt-2 bg-gradient-to-b from-[#FFF3B2] via-[#EBC85A] to-[#A97808] bg-clip-text px-1 pb-1 text-[clamp(0.97rem,1.73vw,1.28rem)] leading-snug text-transparent [text-shadow:0_0_14px_rgba(246,215,106,0.2)]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.03, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              Join us for a celebration of love, tradition, and joy
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
