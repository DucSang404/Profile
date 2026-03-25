import { motion } from 'framer-motion'
import './Footer.scss'

interface FooterProps {
    text: string
}

function Footer({ text }: FooterProps) {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.9 }}
        >
            <div className="container footer__inner">
                <p>{text}</p>
                <small>© 2026 Duc Sang</small>
            </div>
        </motion.footer>
    )
}

export default Footer
