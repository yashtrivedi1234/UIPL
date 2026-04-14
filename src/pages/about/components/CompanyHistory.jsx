import { Briefcase, Zap } from 'lucide-react'

export default function CompanyHistory() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4">Our Company History</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            From humble beginnings to becoming an industry leader, our journey is marked by innovation, dedication, and a commitment to excellence in every project we undertake.
          </p>
        </div>

        {/* History Timeline */}
        <div className="space-y-8 sm:space-y-10">
          
          {/* 1980s - Foundation */}
          <div className="flex gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fe9824] rounded-full flex items-center justify-center text-white font-black text-lg sm:text-xl flex-shrink-0">
                1980
              </div>
              <div className="w-1 flex-grow bg-gradient-to-b from-[#fe9824] to-transparent mt-2 sm:mt-3" style={{ minHeight: '120px' }} />
            </div>
            <div className="pb-8 sm:pb-10">
              <h3 className="text-lg sm:text-xl font-black text-[#00263f] mb-2">Foundation Era</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a vision to revolutionize infrastructure development, our company started with a small team of passionate engineers and architects. We undertook our first commercial project, setting the stage for decades of excellence.
              </p>
            </div>
          </div>

          {/* 1995 - Growth */}
          <div className="flex gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#88d982] rounded-full flex items-center justify-center text-white font-black text-lg sm:text-xl flex-shrink-0">
                1995
              </div>
              <div className="w-1 flex-grow bg-gradient-to-b from-[#88d982] to-transparent mt-2 sm:mt-3" style={{ minHeight: '120px' }} />
            </div>
            <div className="pb-8 sm:pb-10">
              <h3 className="text-lg sm:text-xl font-black text-[#00263f] mb-2">Expansion & Innovation</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Entered the corporate real estate sector with cutting-edge technology integration. Established our first regional office and expanded our team to 100+ professionals trained in global best practices.
              </p>
            </div>
          </div>

          {/* 2005 - Recognition */}
          <div className="flex gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fe9824] rounded-full flex items-center justify-center text-white font-black text-lg sm:text-xl flex-shrink-0">
                2005
              </div>
              <div className="w-1 flex-grow bg-gradient-to-b from-[#fe9824] to-transparent mt-2 sm:mt-3" style={{ minHeight: '120px' }} />
            </div>
            <div className="pb-8 sm:pb-10">
              <h3 className="text-lg sm:text-xl font-black text-[#00263f] mb-2">Global Recognition</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Received our first international award for sustainable infrastructure. Crossed the milestone of 50+ completed projects and 20M sq. ft of built space. Opened offices in neighboring countries.
              </p>
            </div>
          </div>

          {/* 2015 - Digital Transformation */}
          <div className="flex gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#88d982] rounded-full flex items-center justify-center text-white font-black text-lg sm:text-xl flex-shrink-0">
                2015
              </div>
              <div className="w-1 flex-grow bg-gradient-to-b from-[#88d982] to-transparent mt-2 sm:mt-3" style={{ minHeight: '120px' }} />
            </div>
            <div className="pb-8 sm:pb-10">
              <h3 className="text-lg sm:text-xl font-black text-[#00263f] mb-2">Digital Transformation</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Pioneered BIM (Building Information Modeling) and AI-driven design optimization. Launched our proprietary project management platform. Became carbon-neutral in operations.
              </p>
            </div>
          </div>

          {/* 2024 - Present */}
          <div className="flex gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fe9824] rounded-full flex items-center justify-center text-white font-black text-lg sm:text-xl flex-shrink-0">
                2024
              </div>
            </div>
            <div className="pb-8 sm:pb-10">
              <h3 className="text-lg sm:text-xl font-black text-[#00263f] mb-2">Present Day - Industry Leadership</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Leading the industry with 150+ completed projects, 25M+ sq. ft of iconic infrastructure, and 500+ engineers dedicated to excellence. Our commitment to innovation and sustainability continues to shape the future of urban development.
              </p>
            </div>
          </div>

        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="bg-[#eff4ff] p-6 sm:p-8 rounded-xl border-l-4 border-[#fe9824]">
            <div className="flex items-start gap-4">
              <Briefcase className="text-[#fe9824] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-black text-[#00263f] mb-2">Our Expertise</h4>
                <p className="text-slate-600 text-sm sm:text-base">45+ years of specialized knowledge in commercial, residential, and industrial infrastructure development with global standards compliance.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f0fde8] p-6 sm:p-8 rounded-xl border-l-4 border-[#88d982]">
            <div className="flex items-start gap-4">
              <Zap className="text-[#88d982] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-black text-[#00263f] mb-2">Innovation DNA</h4>
                <p className="text-slate-600 text-sm sm:text-base">Embedded innovation in every process, from design conception to post-project support, ensuring we stay ahead of industry trends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
