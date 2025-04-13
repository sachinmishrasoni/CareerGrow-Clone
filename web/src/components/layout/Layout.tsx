import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useState } from 'react'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Outlet />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Footer />
    </>
  )
}

export default Layout