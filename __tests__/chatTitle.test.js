import { render, screen } from '@testing-library/react'
import {AppContextWrapper} from '../context/AppContext'
import ChatTitle from '../components/ChatTitle'

beforeEach(() => {
  render(
  <AppContextWrapper>
    <ChatTitle/>
  </AppContextWrapper>)
})
describe('ChatTitle', () => {
    it('renders the contact name', () => {
  
      const contact = screen.getAllByText(/Pixelio/i)
  
      expect(contact[0]).toBeInTheDocument()
      
    })
})