import SectorsHero      from './components/SectorsHero'
import EducationSector  from './components/EducationSector'
import HealthcareSector from './components/HealthcareSector'
import RealEstateSector from './components/RealEstateSector'
import SectorsCTA       from './components/SectorsCTA'

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <EducationSector />
      <HealthcareSector />
      <RealEstateSector />
      <SectorsCTA />
    </>
  )
}