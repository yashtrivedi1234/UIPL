import { useEffect, useState } from 'react'
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'

const sampleMediaContent = {
  video: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1280&auto=format&fit=crop',
    background:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop',
    title: 'Immersive Video Experience',
    date: 'Cosmic Journey',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'This demonstration shows ScrollExpandMedia with a video. As you scroll, the media smoothly expands to create an immersive storytelling moment.',
      conclusion:
        'The component can present launch videos, property showcases, and brand films while keeping your page experience interactive and modern.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop',
    background:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
    title: 'Dynamic Image Showcase',
    date: 'Underwater Adventure',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'This demonstrates the same expansion effect with static imagery, useful when you want high-impact visuals without video.',
      conclusion:
        'You can switch between image and video modes without changing the surrounding layout, making this component flexible across campaigns.',
    },
  },
}

const MediaContent = ({ mediaType }) => {
  const currentMedia = sampleMediaContent[mediaType]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">About This Component</h2>
      <p className="text-lg mb-8 text-black dark:text-white">{currentMedia.about.overview}</p>
      <p className="text-lg mb-8 text-black dark:text-white">{currentMedia.about.conclusion}</p>
    </div>
  )
}

const Demo = () => {
  const [mediaType, setMediaType] = useState('video')
  const currentMedia = sampleMediaContent[mediaType]

  useEffect(() => {
    window.scrollTo(0, 0)
    window.dispatchEvent(new Event('resetSection'))
  }, [mediaType])

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Image
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  )
}

export default Demo