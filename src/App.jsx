import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import SectorsPage from './pages/sectors/SectorsPage'
// import ContactPage from './pages/contact/ContactPage'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
            <Route path='/sectors' element={<SectorsPage />} />
          {/* <Route path='/contact' element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}