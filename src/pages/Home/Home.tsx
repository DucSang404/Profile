import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import DockNav from '../../components/DockNav/DockNav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Timeline from '../../components/Timeline/Timeline'
import { landingData } from '../../data/landingData'
import './Home.scss'

function Home() {
    return (
        <main className="home">
            <DockNav />
            <div className="home__fx home__fx--left" aria-hidden="true" />
            <div className="home__fx home__fx--right" aria-hidden="true" />
            <Hero content={landingData.hero} />
            <About content={landingData.about} />
            <Skills skills={landingData.skills} />
            <Projects projects={landingData.projects} />
            <Timeline items={landingData.timeline} />
            <Contact links={landingData.socials} />
            <Footer text={landingData.footer} />
        </main>
    )
}

export default Home
