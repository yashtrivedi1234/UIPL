import { ArrowRight, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'
import homeImage from '@/assets/home.webp'
import hospitalImage from '@/assets/hospital.webp'

export default function HeroSection({
  heroHeading = 'Architecting Future-Ready Civilizations',
  heroDescription =
    'United Infracity Private Limited seamlessly integrates sustainable Education, world-class Healthcare, and premium Real Estate into a singular, thriving ecosystem.',
  badgeText = 'Integrated Ecosystem of Life',
}) {
  const navigate = useNavigate()

  const heroMedia = {
    src: homeImage,
    background: hospitalImage,
    title: heroHeading,
  }

  return (
    <section id="home" className="relative">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={heroMedia.src}
        bgImageSrc={heroMedia.background}
        title={heroMedia.title}
        paragraph={heroDescription}
        textBlend
      >
       
      </ScrollExpandMedia>
    </section>
  )
}