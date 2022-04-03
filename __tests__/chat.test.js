import { render, screen } from '@testing-library/react'
import {AuthProvider} from '../context/AuthContext'
import Chat from '../pages/chat/index'

beforeEach(() => {
  render(
  <AuthProvider>
    <Chat/>
  </AuthProvider>)
})
describe('Chat', () => {
  it('renders the error page', () => {

    const title = screen.getAllByText(/Parece que no has iniciado sesión, ve a autenticarte primero!/i)

    expect(title[0]).toBeInTheDocument()
    
  })
})