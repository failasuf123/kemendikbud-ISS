import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PrivacyPolicy from '@/app/privacy-policy/page'

describe('Page', () => {
    it('renders a heading', () => {
        render(<PrivacyPolicy />)

        const heading = screen.getByRole('navigation')

        expect(heading).toBeInTheDocument()
    })
})