import AboutHero from './components/AboutHero'
import LegacyTimeline   from './components/LegacyTimeline'
import VisionMission    from './components/VisionMission'
import AchievementStats from './components/AchievementStats'
import LeadershipTeam   from './components/LeadershipTeam'
import CompanyHistory   from './components/CompanyHistory'
import ValuesCulture    from './components/ValuesCulture'
import MilestonesSection from './components/MilestonesSection'


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <LegacyTimeline />
      {/* <CompanyHistory /> */}
      <VisionMission />
      <AchievementStats />
      <ValuesCulture />
      <MilestonesSection />
      <LeadershipTeam />
    </>
  )
}