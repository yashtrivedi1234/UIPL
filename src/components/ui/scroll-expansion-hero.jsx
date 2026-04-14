import { Children, useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

function ScrollExpandMedia({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  paragraph,
  date,
  scrollToExpand,
  textBlend,
  children,
}) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false)
  const [touchStartY, setTouchStartY] = useState(0)
  const [isMobileState, setIsMobileState] = useState(false)
  const [isTabletState, setIsTabletState] = useState(false)
  const touchAccumRef = useRef(0)

  useEffect(() => {
    setScrollProgress(0)
    setShowContent(false)
    setMediaFullyExpanded(false)
  }, [mediaType])

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false)
        e.preventDefault()
      } else if (!mediaFullyExpanded) {
        e.preventDefault()
        const scrollDelta = e.deltaY * 0.0009
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1)
        setScrollProgress(newProgress)

        if (newProgress >= 1) {
          setMediaFullyExpanded(true)
          setShowContent(true)
        } else if (newProgress < 0.75) {
          setShowContent(false)
        }
      }
    }

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY)
      touchAccumRef.current = 0
    }

    const handleTouchMove = (e) => {
      if (!touchStartY) return

      const touchY = e.touches[0].clientY
      const deltaY = touchStartY - touchY

      touchAccumRef.current += deltaY

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false)
        e.preventDefault()
      } else if (!mediaFullyExpanded) {
        e.preventDefault()

        // Tuned sensitivity for mobile: slower expansion on small screens
        const scrollFactor = isMobileState
          ? deltaY < 0 ? 0.004 : 0.003
          : deltaY < 0 ? 0.008 : 0.005

        const scrollDelta = deltaY * scrollFactor
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1)
        setScrollProgress(newProgress)

        if (newProgress >= 1) {
          setMediaFullyExpanded(true)
          setShowContent(true)
        } else if (newProgress < 0.75) {
          setShowContent(false)
        }

        setTouchStartY(touchY)
      }
    }

    const handleTouchEnd = () => {
      setTouchStartY(0)
      touchAccumRef.current = 0
    }

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [scrollProgress, mediaFullyExpanded, touchStartY, isMobileState])

  useEffect(() => {
    const checkViewport = () => {
      const w = window.innerWidth
      setIsMobileState(w < 640)
      setIsTabletState(w >= 640 && w < 1024)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  // --- Responsive sizing ---
  // Base sizes shrink on mobile so the card starts visibly smaller
  const baseWidth  = isMobileState ? 220 : isTabletState ? 260 : 300
  const baseHeight = isMobileState ? 280 : isTabletState ? 340 : 400

  // Max expansion: on mobile expand to nearly full viewport width
  const expandWidth  = isMobileState ? 380 : isTabletState ? 800 : 1250
  const expandHeight = isMobileState ? 300 : isTabletState ? 280 : 400

  const mediaWidth  = baseWidth  + scrollProgress * expandWidth
  const mediaHeight = baseHeight + scrollProgress * expandHeight

  // Text slide distance: much shorter on mobile to avoid clipping off screen
  const maxTranslate = isMobileState ? 60 : isTabletState ? 100 : 150
  const textTranslateX = scrollProgress * maxTranslate

  const firstWord   = title ? title.split(' ')[0] : ''
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : ''
  const hasChildren = Children.toArray(children).some(
    (child) => typeof child !== 'string' || child.trim().length > 0
  )

  const youtubeSrc = mediaSrc.includes('embed')
    ? `${mediaSrc}${mediaSrc.includes('?') ? '&' : '?'}autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1`
    : `${mediaSrc.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=${mediaSrc.split('v=')[1] || ''}`

  return (
    <div className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background image */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt="Background"
              className="w-screen h-screen object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10 px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding media card */}
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  // Clamp tightly on mobile — never overflow viewport width
                  maxWidth: isMobileState ? '92vw' : '95vw',
                  maxHeight: isMobileState ? '75vh' : '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className="relative w-full h-full pointer-events-none">
                      <iframe
                        width="100%"
                        height="100%"
                        src={youtubeSrc}
                        className="w-full h-full rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={title || 'Embedded media'}
                      />
                      <div className="absolute inset-0 z-10 pointer-events-none" />
                      <motion.div
                        className="absolute inset-0 bg-black/30 rounded-xl"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full pointer-events-none">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-xl"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div className="absolute inset-0 z-10 pointer-events-none" />
                      <motion.div
                        className="absolute inset-0 bg-black/30 rounded-xl"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 rounded-xl"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                {/* Date + hint labels */}
                <div className="flex flex-col items-center text-center relative z-10 mt-3 sm:mt-4 transition-none">
                  {date && (
                    <p
                      className="text-base sm:text-xl md:text-2xl text-white"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-xs sm:text-sm text-white font-medium text-center"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {/* Title + paragraph overlay */}
              <div
                className={`flex items-center justify-center text-center gap-2 sm:gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-none leading-tight"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white transition-none leading-tight"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.h2>
                {paragraph && (
                  <motion.p
                    className="max-w-xs sm:max-w-md md:max-w-2xl px-4 text-xs sm:text-sm md:text-base lg:text-lg text-white"
                    style={{ transform: `translateY(${textTranslateX * 0.08}vw)` }}
                  >
                    {paragraph}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Children content revealed after expansion */}
            {hasChildren && (
              <motion.section
                className="flex flex-col w-full px-4 sm:px-8 md:px-16 py-8 sm:py-10 lg:py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.7 }}
              >
                {children}
              </motion.section>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScrollExpandMedia