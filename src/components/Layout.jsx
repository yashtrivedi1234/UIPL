import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Outlet />  
      </main>
      <Footer />
    </div>
  )
}