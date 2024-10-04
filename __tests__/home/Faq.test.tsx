import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Faq from '@/app/faq/page'

describe('Page', () => {
    it('renders a navigation menu', () => {
        render(<Faq />)

        const navbar = screen.getByRole('navigation')

        expect(navbar).toBeInTheDocument()
    })
})