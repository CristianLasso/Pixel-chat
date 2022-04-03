import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../components/SearchBar'


beforeEach(() => {
    render(<SearchBar/>)
  })
  describe('SearchBar', () => {
  
    it('renders the textfield', () => {
  
      const textfield = screen.getByPlaceholderText(/Buscar o empezar un nuevo chat/i)
  
      expect(textfield).toBeInTheDocument()
    })
  
  })