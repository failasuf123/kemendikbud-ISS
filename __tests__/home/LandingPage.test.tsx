import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Page', () => {
  it('renders a navigation menu', () => {
    render(<Home />)

    const navbar = screen.getByRole('navigation')

    expect(navbar).toBeInTheDocument()
  })
})