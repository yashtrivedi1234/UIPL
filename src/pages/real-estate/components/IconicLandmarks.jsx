import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const projects = [
  {
    title: 'The UIPL Plaza',
    tag: 'Commercial · Sector 7',
    tagColor: 'text-[#ffdcc0]',
    span: 'md:col-span-8',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWAFZ86-iaFCEKvhCexiWKFCbOoRmsHNi7_IIrhJpudg74vJa4GqAEkzM_Z-yGZreZEsH5DYXWODT74abxkB3nt-MkooP8U856kVPb8xR9pwiN-nNlDr8zdynXZguKkFifbP7Iqg53DUTF_dswx0B6-FW5bVJAsEj8FkPqUMHmYdIXo0sqb35qONDPV3VZhkjyxbNEp3cvZGraiEXwvOhgJcmV2hXec7aZoM_CajTyHZBNFKx9sblotZAo2a_702AIo5p_HkkhxIs',
  },
  {
    title: 'Emerald Heights',
    tag: 'Residential · Gomti Nagar',
    tagColor: 'text-[#88d982]',
    span: 'md:col-span-4',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSI98xC4w9W-WvjDU8qaeF3eTl7Y9qOrJe1ohAh177Lt_5NRFFEI7Taw1nkcFWyS4yonmIukbq70zlk5xMqQwkeaedEGVXHAeUWIJFa8EgfKJzbbDunrkDHe1X7CSCFPklvkAAJupqPTP7dIOvT4OiLJym5qXFkjJgrcMr3d4fhyGkHb5icatcCxKUm5RZ_hHmGM1pxTmjw_Ctf3b-xIZhuYoVHR7NvSCayFtMhdhWcRoOMlBzAFAIsES4UkZopKcw02IcrrPCJAw',
  },
  {
    title: 'Sky Hub Corporate',
    tag: 'Business Hub · Shaheed Path',
    tagColor: 'text-[#ffdcc0]',
    span: 'md:col-span-4',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhF7IaDIb_JItNkUO8EmH1Uv4S9XaX9-CHkDLI8wUJqPw_U9i_YWWBI-mkI73FotpcZh4MzrayWt705Y70_ysofgPKS6nVkTVUNWmtgzNZ5kqrGFZATdWn9dnUEOQU8L9JsrKEiNglQ2eg4HbY0CvE-yoRWp-YDF7iQo_veec-OKNks0uzZQlEl5sKk9L_A5vk9nKDOiyls_sCIyta2eMk-wuBQu0tKs-cGTQ9elsjJsgdW8hGgbj7F93Rj7ucpGLenj4ub69sozo',
  },
  {
    title: 'The Heritage Grand',
    tag: 'Residential · Sushant Golf City',
    tagColor: 'text-[#cee5ff]',
    span: 'md:col-span-8',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1XlNI4356Hybl3eLgrdz1rhICm12oRJ8YDPN5DqrYcU9CteZzcIZkp7aVcSY10djMpsZ2rtBiSijPTwPVvMs1p0SbzzH-X_eOnBFtmChA-tMZdIFueNghod5NOHcQ__HRz6cDhOQQ18EPEeuGnEI8amUcSvl7cXRkbB-t1qIuKyhItt1BeBBi1NdCLNRKDeYlGRM04gmcI9XhuVLHuHL85M2LhSCQ58MnIIIIP9zwSzmr3AsSQKsQEJw7qQUss9lnrGaFDgIdqic',
  },
]

export default function IconicLandmarks() {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-[#eff4ff]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-end mb-14">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black tracking-tighter text-[#00263f]">Iconic Landmarks</h2>
            <p className="text-slate-500 mt-4 text-sm leading-relaxed">
              Discover our portfolio of ongoing and completed masterpieces across Lucknow's
              most prestigious sectors.
            </p>
          </div>
          <button
            onClick={() => navigate('/projects')}
            className="text-[#8d4f00] font-black flex items-center gap-2 hover:translate-x-1 transition-transform text-sm"
          >
            View Portfolio <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-auto md:h-[800px]">
          {projects.map(({ title, tag, tagColor, span, img }) => (
            <div key={title} className={`${span} group relative overflow-hidden rounded-2xl shadow-xl`}>
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-7 left-7 text-white">
                <span className={`font-black tracking-widest text-xs uppercase ${tagColor}`}>{tag}</span>
                <h3 className="text-3xl font-black mt-1">{title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}