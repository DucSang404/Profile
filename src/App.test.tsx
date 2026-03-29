import { render, screen, within } from '@testing-library/react'
import App from './App'
import { portfolioData } from './data/portfolioData'

describe('App', () => {
    it('renders the hero content and top navigation without numbered labels', () => {
        render(<App />)

        expect(
            screen.getByRole('heading', {
                level: 1,
                name: new RegExp(`${portfolioData.identity.name}\\.`, 'i'),
            }),
        ).toBeInTheDocument()

        expect(screen.getByText(portfolioData.identity.availability)).toBeInTheDocument()

        const navigation = screen.getByRole('navigation', { name: /primary/i })
        expect(within(navigation).getByRole('link', { name: /^about$/i })).toHaveAttribute('href', '#about')
        expect(within(navigation).getByRole('link', { name: /^experience$/i })).toHaveAttribute('href', '#experience')
        expect(within(navigation).getByRole('link', { name: /^work$/i })).toHaveAttribute('href', '#projects')
        expect(within(navigation).getByRole('link', { name: /^contact$/i })).toHaveAttribute('href', '#contact')

        expect(screen.queryByRole('link', { name: /01\./i })).not.toBeInTheDocument()
        expect(screen.queryByRole('link', { name: /04\./i })).not.toBeInTheDocument()
    })

    it('renders the featured project timeline with GitHub actions', () => {
        render(<App />)

        const projectsHeading = screen.getByRole('heading', {
            level: 2,
            name: /featured projects/i,
        })
        const projectsSection = projectsHeading.closest('section')

        expect(projectsSection).not.toBeNull()

        for (const yearGroup of portfolioData.projectTimeline) {
            expect(within(projectsSection as HTMLElement).getByRole('heading', { level: 3, name: yearGroup.year })).toBeInTheDocument()
        }

        const githubLinks = within(projectsSection as HTMLElement).getAllByRole('link', { name: /view .* on github/i })
        expect(githubLinks).toHaveLength(
            portfolioData.projectTimeline.flatMap((yearGroup) => yearGroup.items).filter((item) => item.href).length,
        )
    })

    it('renders scroll-to-top actions in both the footer and floating button', () => {
        render(<App />)

        const backToTopLinks = screen.getAllByRole('link', { name: /back to top/i })
        expect(backToTopLinks).toHaveLength(2)

        for (const link of backToTopLinks) {
            expect(link).toHaveAttribute('href', '#intro')
        }
    })
})
