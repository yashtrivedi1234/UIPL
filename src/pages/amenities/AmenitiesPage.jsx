import AmenitiesHero       from './components/AmenitiesHero'
import CuratedExperiences  from './components/CuratedExperiences'
import PrecisionEngineering from './components/PrecisionEngineering'
import AmenitiesGallery     from './components/AmenitiesGallery'
import ResidentTestimonials from './components/ResidentTestimonials'
import InteractiveFloorPlan from './components/InteractiveFloorPlan'
import CommunityEventsCalendar from './components/CommunityEventsCalendar'
import WellnessPrograms from './components/WellnessPrograms'
import SustainabilityHighlight from './components/SustainabilityHighlight'
import AmenitiesFAQ         from './components/AmenitiesFAQ'
import AmenitiesCTA        from './components/AmenitiesCTA'

export default function AmenitiesPage() {
  return (
    <>
      <AmenitiesHero />
      <CuratedExperiences />
      <PrecisionEngineering />
      <AmenitiesGallery />
      <ResidentTestimonials />
      <InteractiveFloorPlan />
      <CommunityEventsCalendar />
      <WellnessPrograms />
      <SustainabilityHighlight />
      <AmenitiesFAQ />
      <AmenitiesCTA />
    </>
  )
}