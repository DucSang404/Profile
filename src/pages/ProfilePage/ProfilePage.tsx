import AboutSection from '../../components/AboutSection/AboutSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import EducationSection from '../../components/EducationSection/EducationSection'
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection'
import SkillsSection from '../../components/SkillsSection/SkillsSection'
import { profileData } from '../../data/profileData'
import './ProfilePage.scss'

function ProfilePage() {
  const { profile, about, skills, projects, education, activities, contacts, footer } = profileData

  return (
    <main className="profile-page">
      <ProfileHeader profile={profile} />
      <AboutSection paragraphs={about} />
      <SkillsSection categories={skills} />
      <ProjectsSection projects={projects} />
      <EducationSection educationItems={education} />
      <ExperienceSection activities={activities} />
      <ContactSection contacts={contacts} />
      <FooterSection footer={footer} />
    </main>
  )
}

export default ProfilePage
