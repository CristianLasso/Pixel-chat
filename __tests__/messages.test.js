import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {AppContextWrapper} from '../context/AppContext'
import Messages from '../components/Messages'

beforeEach(() => {
  render(
  <AppContextWrapper>
    <Messages/>
  </AppContextWrapper>)
})
describe('Messages', () => {
    it('renders the messages list', () => {
  
      const message = screen.getAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./i)
  
      expect(message[0]).toBeInTheDocument()
    })

    it('allows to click a message', () => {
    
      const message = screen.getAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./i)
      userEvent.click(message[0])

    })
})