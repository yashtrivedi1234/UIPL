const stats = [
  { value: '150+', label: 'Projects Completed', color: 'text-[#fe9824]' },
  { value: '25M',  label: 'Sq. Ft Built',       color: 'text-[#88d982]' },
  { value: '12+',  label: 'Global Awards',       color: 'text-[#fe9824]' },
  { value: '500+', label: 'Engineers',            color: 'text-[#88d982]' },
]

export default function AchievementStats() {
  return (
    <section className="py-20 bg-[#00263f] text-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.6,-0.3C86.1,15.1,81.7,30.2,74.4,43.6C67.1,57,56.9,68.7,43.5,76C30.1,83.3,15.1,86.2,0.4,85.5C-14.3,84.8,-28.6,80.5,-42,73.2C-55.4,65.9,-67.9,55.6,-75.2,42.2C-82.5,28.8,-84.6,14.4,-84.1,0.3C-83.6,-13.8,-80.5,-27.6,-73.2,-41C-65.9,-54.4,-54.4,-67.4,-41,-74.6C-27.6,-81.8,-13.8,-83.2,0.5,-84C14.8,-84.8,29.6,-85,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
        {stats.map(({ value, label, color }) => (
          <div key={label}>
            <div className={`text-5xl font-black mb-2 ${color}`}>{value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#7fa7cd]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}