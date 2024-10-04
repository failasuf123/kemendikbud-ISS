import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Profile from '@/app/profil-lembaga/page'

describe('Page', () => {
    it('renders a navigation menu', () => {
        render(<Profile />)

        const navbar = screen.getByRole('navigation')

        expect(navbar).toBeInTheDocument()
    })
})