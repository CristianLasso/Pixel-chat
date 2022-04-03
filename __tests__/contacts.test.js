import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {AppContextWrapper} from '../context/AppContext'
import Contacts from '../components/Contacts'

beforeEach(() => {
  render(
  <AppContextWrapper>
    <Contacts/>
  </AppContextWrapper>)
})
describe('Contacts', () => {
    it('renders the contact list', () => {
  
      const contact1 = screen.getAllByText(/Galit/i)
      const contact2 = screen.getAllByText(/Sergio/i)
      const contact3 = screen.getAllByText(/Jose/i)
  
      expect(contact1[0]).toBeInTheDocument()
      expect(contact2[0]).toBeInTheDocument()
      expect(contact3[0]).toBeInTheDocument()
    })

    it('allows to click a contact', () => {
    
      const contact = screen.getByText(/Galit/i)
      userEvent.click(contact[0])

    })
})