import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../pages/index'


beforeEach(() => {
  render(<Login/>)
})
describe('Login', () => {

  it('renders the form', () => {

    const username = screen.getByPlaceholderText(/Nombre de usuario/i)
    const password = screen.getByPlaceholderText(/Contraseña/i)
    const button = screen.getByText(/Iniciar Sesión/i)

    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  }),

  it('give option to signup', () => {

    const signup = screen.getByText(/Registrate aquí/i)

    expect(signup).toBeInTheDocument()
  })

  it('allows user to type in the form', () => {
    const username = screen.getByPlaceholderText(/Nombre de usuario/i)
    const password = screen.getByPlaceholderText(/Contraseña/i)

    userEvent.type(username, 'cristian')
    userEvent.type(password, '123456')
  })

  it('allows user to click the button', () => {
    const button = screen.getByText(/Iniciar Sesión/i)
    userEvent.click(button)
  });
})