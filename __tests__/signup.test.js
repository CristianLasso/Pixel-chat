import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Signup from '../pages/signup/index'

beforeEach(() => {
  render(<Signup/>)
})
describe('Signup', () => {

  it('renders the form', () => {

    const name = screen.getByPlaceholderText(/Nombre/i)
    const lastname = screen.getByPlaceholderText(/Apellido/i)
    const username = screen.getByPlaceholderText(/Nombre de usuario/i)
    const email = screen.getByPlaceholderText(/Email/i)
    const password = screen.getByPlaceholderText(/Contraseña/i)
    const button = screen.getByText(/Registrarme/i)

    expect(name).toBeInTheDocument()
    expect(lastname).toBeInTheDocument()
    expect(username).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  }),

  it('give option to login', () => {

    const login = screen.getByText(/Inicia sesión/i)

    expect(login).toBeInTheDocument()
  })

  it('allows user to type in the form', () => {
    const name = screen.getByPlaceholderText(/Nombre/i)
    const lastname = screen.getByPlaceholderText(/Apellido/i)
    const username = screen.getByPlaceholderText(/Nombre de usuario/i)
    const email = screen.getByPlaceholderText(/Email/i)
    const password = screen.getByPlaceholderText(/Contraseña/i)

    userEvent.type(name, 'cristian')
    userEvent.type(lastname, 'lasso')
    userEvent.type(username, 'cristian')
    userEvent.type(email, 'example@gmail.com')
    userEvent.type(password, '123456')
  })

  it('allows user to click the button', () => {
    const button = screen.getByText(/Registrarme/i)
    userEvent.click(button)
  });
})