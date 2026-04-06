import EducationHero         from './components/EducationHero'
import EducationOverview     from './components/EducationOverview'
import EducationFacilities   from './components/EducationFacilities'
import EducationInstitutions from './components/EducationInstitutions'
import EducationGallery      from './components/EducationGallery'
import EducationCTA          from './components/EducationCTA'

export default function EducationPage() {
  return (
    <>
      <EducationHero />
      <EducationOverview />
      <EducationFacilities />
      <EducationInstitutions />
      <EducationGallery />
      <EducationCTA />
    </>
  )
}