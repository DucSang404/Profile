import { motion } from 'framer-motion'
import './DockNav.scss'

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

function DockNav() {
    return (
        <motion.nav
            className="dock-nav"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            aria-label="Section navigation"
        >
            <div className="dock-nav__inner">
                <span className="dock-nav__brand">$ ducsang.dev</span>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    )
}

export default DockNav
