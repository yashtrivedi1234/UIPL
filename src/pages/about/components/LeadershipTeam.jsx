const leaders = [
  {
    name: 'Vikram Singh',
    role: 'Founder & CEO',
    roleColor: 'text-[#fe9824]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRTfBH48AQj45f5EA0i3q4CORnG6ajTDHrKei8mmBFuXHxQTBrCli7xLIhIrpRsJmRQaQ0fbNDf4BrbZXFyx49t6rW7NA4t_y67nyY5dozfdklhzYuYps10LifNjGKGbsrVPREfisytIPDDJUizcVsz6s1HOXFyHiQuVjKge4Nd6jba38UPrfmNVfpOWTPvy6YMukRpaUK7FiFfPyK-E8kfhlLpKxO_v8k12Knkh96oYgo8DRaWoGPpLiZdIdOgRYxxnlfLKBoyEU',
  },
  {
    name: 'Ananya Verma',
    role: 'Director of Operations',
    roleColor: 'text-[#88d982]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXogHYxp9g-NJpQRgRKkjnRiSMSNxiblbR8e4eOSEdQi3tSAqo-ceFZjldXQN7EezYiHwhoB1JBsEiKD9pA2M6A19zvfzgS87GSQ8a8-vm6gr8_jrGCpXBsvCR5dDIBBASVY-n6lccMmxPUH5-gUu7kDjcHr_e_nbkVuAq8ciRIWyN-Re9c1Xa7fFKZPMT3ifnB3o_NPE6OK_Y6FX0zqxlqQ29DJOG_vkIyKda99w2xHnB1z8nXUn-SkzJeOXl9mdFExjp0Zae0v4',
  },
  {
    name: 'Rajesh Khanna',
    role: 'Technical Director',
    roleColor: 'text-[#ffdcc0]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNio84LAz83otulPjat5B8Ov5HdvTMIfNLoJEW8iXmMTIsMZ4R-Ypmq8gWQTIInARaQ_dJUWGFKrv5s1iDB3fd59MWmbXqntOU54F_6_HObqhxGgLWjdErDpwzdLnz5aDXOQocmtBg3xLv7zhFzVyBzkzCx7NZe4gBrlWWAbCZauQzY4TrNU8mYKgT8M8Z13DUI3xnaDewwuM0czpNZ9I1IA4w3rBgsrYCtZ4QCij66bzedPNVFuytdAyhujkyRWJDb8rq7G2RfQs',
  },
]

export default function LeadershipTeam() {
  return (
    <section className="py-8 sm:py-12 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-black text-[#00263f] mb-4">The Vanguard</h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Guided by a collective of visionary leaders committed to engineering the world's
            most resilient structures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {leaders.map(({ name, role, roleColor, img }) => (
            <div key={name} className="group">
              <div className="relative overflow-hidden rounded-2xl h-72 sm:h-80 md:h-96">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/90 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <p className={`font-black tracking-widest text-xs uppercase mb-1 ${roleColor}`}>{role}</p>
                  <h3 className="text-xl sm:text-2xl font-black">{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}