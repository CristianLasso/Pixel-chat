import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextMessage from '../components/TextMessage'


beforeEach(() => {
  render(<TextMessage/>)
})
describe('TextMessage', () => {

  it('renders the textfield', () => {

    const textfield = screen.getByPlaceholderText(/Escribe un mensaje.../i)

    expect(textfield).toBeInTheDocument()
  })

})