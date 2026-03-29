import '@testing-library/jest-dom/vitest'

class IntersectionObserverMock implements IntersectionObserver {
    readonly root = null
    readonly rootMargin = ''
    readonly thresholds = []

    disconnect() {}

    observe() {}

    takeRecords(): IntersectionObserverEntry[] {
        return []
    }

    unobserve() {}
}

if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
        }),
    })
}

if (!window.IntersectionObserver) {
    window.IntersectionObserver = IntersectionObserverMock
}
