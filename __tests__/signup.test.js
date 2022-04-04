import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Signup from '../pages/signup/index'

beforeEach(() => {
  render(<Signup/>)
})
describe('Signup', () => {

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Registrate!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the form', () => {

    const name = screen.getAllByPlaceholderText(/Nombre/i)
    const lastname = screen.getAllByPlaceholderText(/Apellido/i)
    const username = screen.getAllByPlaceholderText(/Nombre de usuario/i)
    const email = screen.getAllByPlaceholderText(/Email/i)
    const password = screen.getAllByPlaceholderText(/Contraseña/i)
    const button = screen.getByText(/Registrarme/i)

    expect(name[0]).toBeInTheDocument()
    expect(lastname[0]).toBeInTheDocument()
    expect(username[0]).toBeInTheDocument()
    expect(email[0]).toBeInTheDocument()
    expect(password[0]).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  }),

  it('give option to login', () => {

    const login = screen.getByText(/Inicia sesión/i)

    expect(login).toBeInTheDocument()
  })

  it('allows user to type in the form', () => {
    const name = screen.getAllByPlaceholderText(/Nombre/i)
    const lastname = screen.getAllByPlaceholderText(/Apellido/i)
    const username = screen.getAllByPlaceholderText(/Nombre de usuario/i)
    const email = screen.getAllByPlaceholderText(/Email/i)
    const password = screen.getAllByPlaceholderText(/Contraseña/i)

    userEvent.type(name[0], 'cristian')
    userEvent.type(lastname[0], 'lasso')
    userEvent.type(username[0], 'cristian')
    userEvent.type(email[0], 'example@gmail.com')
    userEvent.type(password[0], '123456')
  })

  it('allows user to click the button', () => {
    const button = screen.getByText(/Registrarme/i)
    userEvent.click(button)
  });
})