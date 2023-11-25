import { Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import ProyectPage from "./pages/ProyectPage"
import ContactsPage from "./pages/ContactsPage"
import HomePage from "./pages/HomePage"
import TeamPage from "./pages/TeamPage"

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/proyect' element={<ProyectPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
