import type { ProfileInfo } from '../../types/profile'
import './ProfileHeader.scss'

interface ProfileHeaderProps {
  profile: ProfileInfo
}

function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="profile-header container section-shell" id="home">
      <div className="profile-header__image-wrap">
        <img className="profile-header__image" src={profile.avatarUrl} alt={profile.avatarAlt} />
      </div>

      <div className="profile-header__content">
        <span className="pill profile-header__tag">{profile.tagline}</span>
        <h1>{profile.fullName}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.introduction}</p>
        <p className="profile-header__location">Based in {profile.location}</p>

        <div className="profile-header__actions">
          <a href="#projects" className="profile-header__button profile-header__button--primary">
            {profile.ctaProjectsLabel}
          </a>
          <a href="#contact" className="profile-header__button profile-header__button--ghost">
            {profile.ctaContactLabel}
          </a>
        </div>
      </div>
    </header>
  )
}

export default ProfileHeader
