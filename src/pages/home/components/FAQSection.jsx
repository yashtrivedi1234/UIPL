import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What makes UIPL different from other developers?',
      answer: 'UIPL seamlessly integrates sustainable Education, world-class Healthcare, and premium Real Estate into a singular, thriving ecosystem. With 25+ years of excellence, we create complete living communities, not just buildings.'
    },
    {
      question: 'What are the payment plan options?',
      answer: 'We offer flexible payment plans including upfront payments, installment options during construction, and post-possession schemes. Each project has customized options to suit your financial needs.'
    },
    {
      question: 'Are there any educational institutions within UIPL projects?',
      answer: 'Yes! Our integrated ecosystem includes world-class educational institutions, healthcare facilities, shopping centers, and recreational amenities all within our developments.'
    },
    {
      question: 'What is the average ROI on UIPL investments?',
      answer: 'Investment returns vary by location and project type. Our prime locations have historically shown 8-12% annual appreciation. Contact our investment team for detailed ROI analysis on specific projects.'
    },
    {
      question: 'How can I book a property or schedule a site visit?',
      answer: 'You can book through our website, contact our sales team, or visit our offices. We also offer virtual tours and can arrange personalized site visits at your convenience.'
    },
    {
      question: 'What post-purchase support do you provide?',
      answer: 'We provide comprehensive after-sales service including maintenance support, 24/7 customer care, and a dedicated owner community portal for all your needs.'
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <span className="text-[10px] sm:text-xs font-black uppercase text-orange-500 tracking-widest block"
            style={{ fontFamily: "'Noto Sans', sans-serif" }}>
            Got Questions?
          </span>
          <h2 className="text-[#00263f]">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Find answers to common questions about UIPL projects, investments, and our ecosystem.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:border-orange-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
              >
                <h5 className="text-[#00263f] pr-4 mb-0">
                  {faq.question}
                </h5>
                <ChevronDown
                  size={20}
                  className={`text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 sm:px-7 py-4 sm:py-5 bg-slate-100/50 border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}