import { render, screen } from '@testing-library/react'

test('renders current date', () => {
    const timeFormat = screen.getByText(/GMT/i)
    expect(timeFormat).toBeInTheDocument()
})
