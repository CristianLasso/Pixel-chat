import '../styles/globals.css'
import {AppContextWrapper} from '../context/AppContext'
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return(
    <AppContextWrapper>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AppContextWrapper>
  )
}

export default MyApp
