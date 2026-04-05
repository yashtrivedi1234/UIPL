import ContactHero from './components/ContactHero'
import ContactInfo  from './components/ContactInfo'
import ContactForm  from './components/ContactForm'
import ContactMap   from './components/ContactMap'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
    </>
  )
}