import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Quote } from 'lucide-react'
import './book-slider.css'

const defaultTestimonials = [
  {
    quote:
      'Moving into a UIPL project changed our definition of luxury. The integration of the school right next to our residence has been a game-changer for our children.',
    name: 'Rajesh Khanna',
    role: 'Resident, Emerald Heights',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfOR4048vl5kUSpjC0yP9IcclKiYT2qV-dx6BKSV_Lf7GartUVvvkfpJnaDK7xWoCI3W74-tTBneojBShvAQ_foYqdQ5abKxmNof5jTCFflzqpqTnpL29aXjseA0rlJPLxNdnJlki1vH_A0QXU0PKvwkBYKhKbnvOCX7qGgDz5p8tnGdbLj7yFP4DPD7WOsU6J72Cf_f_yygcZ4e8vlKTi_U1gGmxs5D9KeZdSpFLw-Logr_bTF6tiJQfxlK1CgxnBVzRPEn0WzAc',
  },
  {
    quote:
      "UIPL's vision for healthcare infrastructure in Lucknow is unparalleled. Their facilities are designed with international standards of care in mind.",
    name: 'Dr. Amrita Singh',
    role: 'Medical Director, City Care',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8L4jIxZW0eJV2ab0qjJ-v5BQy1gxQvMepK4-o-BARBD10jr6bNhTpYxlobfMXzPAC1T2m0s8Y5-G6r6QfpgNhnllUfG-7m-Rn6MSwv3b7OFPyJfp-V-VvMh0lLVQSCyOrFKMCFzKiXTwMlTHDqCZZg-6b0S2P1H11HOUxnJDPT9zsCgaCheB2WsL0stgj3o9nAu_m0IVYrb76sJw7_CmOpU0xG4GmJJXLelmWCCBV-7YIqUY43I4OsFmxoY84-Hodrb7rrhCkCI',
  },
  {
    quote:
      'As an investor, UIPL offers the most reliable ROI in the Lucknow real estate market. Their delivery timelines and quality are consistent.',
    name: 'Vikram Malhotra',
    role: 'Institutional Investor',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGy9ynwMIdaEV752MhLudknhQ7v0f8M3aDcwkmk7CtKW62fsbATIC1hNQz72EV6oRu-7HUo3VSHVm6V6NRk69bzu2hfyaUh9hitrs_N1Ij7X4iIzra0ZfOBuLpi-GUAfvRVO_Tfp1HrIloFfAAqfDU551LzpQdsZKPn7DdZOBFeWbme8NCJFo-nPC0yPo5zf7MfHk6mywkGCW-Uh9S5ntSkfGOhbrt9ELiuU6PDoKDroHeZmkEbluc1k24_40jgGEgBD9s',
  },
  {
    quote:
      'The green spaces and landscaping within the UIPL township are truly world-class. Our evenings are spent in gardens that feel like a resort every single day.',
    name: 'Sunita Verma',
    role: 'Homeowner, Green Valley Phase 2',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      "UIPL's commercial spaces are thoughtfully designed for modern businesses. Our office productivity has improved simply because of the environment they've created.",
    name: 'Arjun Sharma',
    role: 'CEO, Nexus Ventures',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      "From the first site visit to handing over the keys, UIPL's team was professional and transparent. We never felt left in the dark at any stage of the purchase.",
    name: 'Priya Nair',
    role: 'First-time Homebuyer',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote:
      "UIPL understands Lucknow's culture while building for the future. Their township feels like home from day one — warm, secure, and beautifully connected.",
    name: 'Mohammed Farooqui',
    role: 'Resident, Signature Towers',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
]

interface Testimonial {
  quote: string
  name: string
  role: string
  img: string
}

interface BookSliderProps {
  testimonials?: Testimonial[]
}

function Component({ testimonials = defaultTestimonials }: BookSliderProps) {
  return (
    <div className="book-section-wrapper">
      {/* ── Section Heading ── */}
      <div className="book-section-heading">
        <span className="book-eyebrow">What Our Customers Say</span>
        <h2 className="book-main-title">Voices of the Ecosystem</h2>
        <p className="book-subtitle">
          Real stories from residents, investors &amp; partners who trust UIPL
        </p>
      </div>

      {/* ── Flipbook ── */}
      <div className="book-center">
        <HTMLFlipBook
          width={370}
          height={500}
          maxShadowOpacity={0.5}
          drawShadow={true}
          showCover={true}
          size="fixed"
          useMouseEvents={true}
          flipped={false}
        >
          {/* Cover Page */}
          <div className="page">
            <div className="page-content cover">
              <div className="testimonial-cover">
                <h1 className="cover-title">Voices of the Ecosystem</h1>
                <p className="cover-subtitle">Customer Testimonials</p>
              </div>
            </div>
          </div>

          {/* Testimonial Pages */}
          {testimonials.map((testimonial, index) => (
            <div className="page" key={index}>
              <div className="page-content">
                <div className="testimonial-container">
                  <Quote size={32} className="quote-icon" />
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <h3 className="author-name">{testimonial.name}</h3>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div className="page">
            <div className="page-content cover back-cover">
              <p className="back-cover-text">Thank you for being part of the UIPL family.</p>
            </div>
          </div>
        </HTMLFlipBook>
      </div>

      <p className="book-hint">Click the page edges to flip &rarr;</p>
    </div>
  )
}

export default Component