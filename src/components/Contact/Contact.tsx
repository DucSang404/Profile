import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import type { SocialIcon, SocialLink } from '../../types/landing'
import './Contact.scss'

interface ContactProps {
    links: SocialLink[]
}

const iconMap: Record<SocialIcon, ReactNode> = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    mail: <FaEnvelope />,
    instagram: <FaInstagram />,
}

function Contact({ links }: ContactProps) {
    return (
        <section className="contact section" id="contact">
            <div className="container section__inner">
                <motion.div
                    className="contact__wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section__heading contact__heading">
                        <p className="section__eyebrow">Contact</p>
                        <h2>Let&apos;s Build Something Fresh</h2>
                        <p>Open to internship opportunities, collaboration, and creative coding conversations.</p>
                    </div>

                    <div className="contact__content">
                        <motion.form
                            className="contact__form"
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.7 }}
                        >
                            <label>
                                <span>Name</span>
                                <input type="text" name="name" placeholder="Your name" />
                            </label>
                            <label>
                                <span>Email</span>
                                <input type="email" name="email" placeholder="you@example.com" />
                            </label>
                            <label>
                                <span>Message</span>
                                <textarea name="message" rows={4} placeholder="Let’s build something together..." />
                            </label>

                            <motion.button type="button" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                Send Message
                            </motion.button>
                        </motion.form>

                        <motion.div
                            className="contact__links"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            {links.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                                    className={`contact__link contact__link--${link.icon}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 24 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    whileHover={{ y: -6, scale: 1.04 }}
                                >
                                    <span className="contact__icon">{iconMap[link.icon]}</span>
                                    <span>{link.label}</span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
