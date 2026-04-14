import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import GetStartedModal from './GetStartedModal'

export default function Layout() {
  return (
    <div className=" text-slate-900 antialiased">
      <GetStartedModal />
      <Navbar />
      <main>
        <Outlet />  
      </main>
      <Footer />
    </div>
  )
}