const stats = [
  { value: '150+', label: 'Projects Completed', color: 'text-[#fe9824]' },
  { value: '25M',  label: 'Sq. Ft Built',       color: 'text-[#88d982]' },
  { value: '12+',  label: 'Global Awards',       color: 'text-[#fe9824]' },
  { value: '500+', label: 'Engineers',            color: 'text-[#88d982]' },
]

export default function AchievementStats() {
  return (
    <section className="py-8 sm:py-10 bg-[#00263f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center relative z-10">
        {stats.map(({ value, label, color }) => (
          <div key={label} className="flex flex-col items-center">
            <div className={`text-5xl font-black mb-2 ${color}`}>{value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#7fa7cd]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}