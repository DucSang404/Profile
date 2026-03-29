import { render, screen, within } from '@testing-library/react'
import App from './App'
import { landingData } from './data/landingData'

describe('App', () => {
    it('renders the main landing sections with project and contact content', () => {
        render(<App />)

        expect(
            screen.getByRole('heading', {
                level: 1,
                name: new RegExp(`Hi, I'm ${landingData.hero.name}`, 'i'),
            }),
        ).toBeInTheDocument()

        const projectsHeading = screen.getByRole('heading', {
            level: 2,
            name: /featured projects/i,
        })
        const projectsSection = projectsHeading.closest('section')

        expect(projectsHeading).toBeInTheDocument()
        expect(projectsSection).not.toBeNull()
        expect(within(projectsSection as HTMLElement).getAllByRole('article')).toHaveLength(
            landingData.projects.length,
        )

        expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
            'href',
            landingData.socials.find((social) => social.label === 'GitHub')?.href,
        )
        expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })
})
