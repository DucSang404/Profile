import { render, screen, within } from '@testing-library/react'
import App from './App'
import { portfolioData } from './data/portfolioData'

describe('App', () => {
    it('renders the template-inspired portfolio structure and project cards', () => {
        render(<App />)

        expect(
            screen.getByRole('heading', {
                level: 1,
                name: new RegExp(`${portfolioData.identity.name}\\.`, 'i'),
            }),
        ).toBeInTheDocument()

        const projectsHeading = screen.getByRole('heading', {
            level: 2,
            name: /some noteworthy projects/i,
        })
        const projectsSection = projectsHeading.closest('section')

        expect(projectsSection).not.toBeNull()
        expect(within(projectsSection as HTMLElement).getAllByRole('heading', { level: 3 })).toHaveLength(
            portfolioData.projectTimeline.length,
        )

        expect(screen.getByRole('link', { name: /04\. contact/i })).toHaveAttribute('href', '#contact')
        expect(screen.getByRole('link', { name: /back to top/i })).toHaveAttribute('href', '#intro')
    })
})
