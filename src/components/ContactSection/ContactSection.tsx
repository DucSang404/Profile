import type { ContactLink } from '../../types/profile'
import './ContactSection.scss'

interface ContactSectionProps {
  contacts: ContactLink[]
}

function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <section className="contact-section container section-shell" id="contact">
      <div className="section-header">
        <h2>Contact</h2>
        <p>I am open to internship opportunities, collaboration, and meaningful tech conversations.</p>
      </div>

      <div className="contact-section__grid">
        {contacts.map((contact) => {
          const isExternal = contact.href.startsWith('http')

          return (
            <a
              key={contact.label}
              className="contact-section__card"
              href={contact.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              aria-label={contact.label}
            >
              <span className="contact-section__label">{contact.label}</span>
              <span className="contact-section__value">{contact.value}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default ContactSection
