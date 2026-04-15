import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    id: 1,
    question: 'Are all amenities available to all residents?',
    answer: 'Yes! All premium amenities are complimentary for all residents regardless of unit type. Access is available 24/7 using your resident card or mobile app.'
  },
  {
    id: 2,
    question: 'How do I book or reserve amenities?',
    answer: 'You can book amenities through our mobile app, website portal, or by contacting the front desk. Most facilities operate on a first-come, first-serve basis, except for spa services which require advance booking.'
  },
  {
    id: 3,
    question: 'Are there swimming pool timings?',
    answer: 'The Olympic pool is open 24/7, with supervised swimming sessions from 6 AM to 8 PM. Morning aqua aerobics classes run at 6:30 AM and evening sessions at 7 PM.'
  },
  {
    id: 4,
    question: 'Can I bring guests to use the amenities?',
    answer: 'Residents can bring guests to amenities during daytime hours (6 AM - 10 PM) with proper visitor registration. Guest fees may apply for certain premium services.'
  },
  {
    id: 5,
    question: 'Is personal training available at the gymnasium?',
    answer: 'Yes! We have certified personal trainers available during peak hours (6-10 AM and 4-8 PM). Sessions can be booked through the app with an additional fee.'
  },
  {
    id: 6,
    question: 'What is included in the wellness spa package?',
    answer: 'The basic package includes massage therapy, steam room, and sauna access. Premium packages include holistic treatments, hydrotherapy, and specialized wellness sessions.'
  },
  {
    id: 7,
    question: 'Are there fitness classes for beginners?',
    answer: 'Absolutely! We offer beginner yoga, Zumba, pilates, and swimming classes daily. Professional instructors guide you through each session tailored to your fitness level.'
  },
  {
    id: 8,
    question: 'How can I report maintenance issues in amenities?',
    answer: 'Please report any issues through the mobile app, email, or contact the front desk. Our maintenance team responds within 24 hours for urgent issues and 48 hours for regular maintenance.'
  },
]

export default function AmenitiesFAQ() {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-8 bg-[#f8f9ff]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[#00263f]">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg">
            Find answers to common questions about our amenities
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden duration-300 hover:border-[#0b3c5d] hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#f8f9ff] duration-300"
              >
                <h3 className="text-[#00263f] text-left">{item.question}</h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-[#fe9824] transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === item.id && (
                <div className="px-8 pb-6 border-t border-[#e0e0e0] bg-gradient-to-br from-[#f8f9ff] to-white">
                  <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                 
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        
      </div>
    </section>
  )
}
