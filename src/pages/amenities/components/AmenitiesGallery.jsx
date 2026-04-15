import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Olympic Swimming Pool',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6suApVkGQp7fGXfa56pTb6Ir225kDhrCUg_Ip4tHqqiNMGiXM0aWuiyNGRSDfsVlBOvkpZCXPKK-KULFeMFKOnoeOAqM6LfLkoPCAglAEWbR1l7zQKTZi2HCYZipMevhh3ANy2xkhzaBbPkS5NT1vXRDfshP91q7j7NppRcubd0its4agk2AGLzR0zc9t9iUANOE1xKfsp0U42ZD9Rdr9FKvenNjOoF3D9XEt3XvoV68SEpITil2VADt0oO3PEkAboTGJA7Q_O3k',
    category: 'Aquatics'
  },
  {
    id: 2,
    title: 'State-of-the-Art Gymnasium',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUGXC5Ckp16kTwoOZH4Vo6H7BDW1uq0PW2fwIFqESJ0_WqdNOAQ0rSqZXg4KWrCKgHUZ_Ian7_n4HuLn7cRsAEwrENcviFUbcXVjZstZ3UNO7IlZsBgL9fpLWtENRrJhH50Pb-MfC9_iMlUQUsKWCWYn7S09arVzIqiqf0pwP2m2B2W3dEOLKgZT8RZR_b_JYJM5tkY9R3sMsNSZBGjhz_ne0TYAvzvLQDMomMqAcTzV9gmIg1M7FqQkxiCozP1l81SJLh8r-qCLs',
    category: 'Fitness'
  },
  {
    id: 3,
    title: 'Premium Wellness Spa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6suApVkGQp7fGXfa56pTb6Ir225kDhrCUg_Ip4tHqqiNMGiXM0aWuiyNGRSDfsVlBOvkpZCXPKK-KULFeMFKOnoeOAqM6LfLkoPCAglAEWbR1l7zQKTZi2HCYZipMevhh3ANy2xkhzaBbPkS5NT1vXRDfshP91q7j7NppRcubd0its4agk2AGLzR0zc9t9iUANOE1xKfsp0U42ZD9Rdr9FKvenNjOoF3D9XEt3XvoV68SEpITil2VADt0oO3PEkAboTGJA7Q_O3k',
    category: 'Wellness'
  },
  {
    id: 4,
    title: 'Community Event Hall',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUGXC5Ckp16kTwoOZH4Vo6H7BDW1uq0PW2fwIFqESJ0_WqdNOAQ0rSqZXg4KWrCKgHUZ_Ian7_n4HuLn7cRsAEwrENcviFUbcXVjZstZ3UNO7IlZsBgL9fpLWtENRrJhH50Pb-MfC9_iMlUQUsKWCWYn7S09arVzIqiqf0pwP2m2B2W3dEOLKgZT8RZR_b_JYJM5tkY9R3sMsNSZBGjhz_ne0TYAvzvLQDMomMqAcTzV9gmIg1M7FqQkxiCozP1l81SJLh8r-qCLs',
    category: 'Recreation'
  },
  {
    id: 5,
    title: 'Kids Play Zone',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6suApVkGQp7fGXfa56pTb6Ir225kDhrCUg_Ip4tHqqiNMGiXM0aWuiyNGRSDfsVlBOvkpZCXPKK-KULFeMFKOnoeOAqM6LfLkoPCAglAEWbR1l7zQKTZi2HCYZipMevhh3ANy2xkhzaBbPkS5NT1vXRDfshP91q7j7NppRcubd0its4agk2AGLzR0zc9t9iUANOE1xKfsp0U42ZD9Rdr9FKvenNjOoF3D9XEt3XvoV68SEpITil2VADt0oO3PEkAboTGJA7Q_O3k',
    category: 'Family'
  },
]

export default function AmenitiesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((currentIndex + 1) % galleryItems.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + galleryItems.length) % galleryItems.length)

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[#00263f]">Amenity Showcase</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Explore our world-class facilities designed for modern living
          </p>
        </div>

        {/* Main carousel */}
        <div className="relative group mb-8">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src={galleryItems[currentIndex].image}
              alt={galleryItems[currentIndex].title}
              className="w-full h-full object-cover duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 bg-[#fe9824] text-white text-xs font-bold rounded-full mb-3">
                {galleryItems[currentIndex].category}
              </span>
              <h3 className="text-white">{galleryItems[currentIndex].title}</h3>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 duration-300 backdrop-blur"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 duration-300 backdrop-blur"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full duration-300 ${
                  idx === currentIndex ? 'bg-[#0b3c5d] w-8' : 'bg-[#d0d0d0] w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-32 rounded-lg overflow-hidden duration-300 ${
                idx === currentIndex ? 'ring-4 ring-[#fe9824] scale-105' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
