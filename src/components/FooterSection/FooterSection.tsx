import type { FooterInfo } from '../../types/profile'
import './FooterSection.scss'

interface FooterSectionProps {
  footer: FooterInfo
}

function FooterSection({ footer }: FooterSectionProps) {
  return (
    <footer className="footer-section container" id="footer">
      <p>{footer.copyright}</p>
      <p>{footer.closingLine}</p>
    </footer>
  )
}

export default FooterSection
