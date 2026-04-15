import HealthcareHero from './components/HealthcareHero'
import HealthcareOverview from './components/HealthcareOverview'
import HealthcareFacilities from './components/HealthcareFacilities'
import ClinicalExcellence from './components/ClinicalExcellence'
import WellnessEcosystem from './components/WellnessEcosystem'
import HealthcareCTA from './components/HealthcareCTA'

export default function HealthcarePage() {
  return (
    <>
      <HealthcareHero />
      <HealthcareOverview />
      <HealthcareFacilities />
      <ClinicalExcellence />
      <WellnessEcosystem />
      {/* <HealthcareCTA /> */}
    </>
  )
}
