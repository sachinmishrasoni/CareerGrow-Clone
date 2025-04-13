import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { FloatButton } from 'antd'
import { RiRobot2Fill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Outlet />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Footer />

      <FloatButton.BackTop
        className='float-top-btn'
        icon={<IoIosArrowUp size={25} />}
        style={{ 
          width: '50px', height: '50px', right: '20px', bottom: '85px' 
        }}
      />
      <FloatButton
        className='float-bot-btn'
        icon={<RiRobot2Fill size={22} />}
        style={{
          width: '50px', height: '50px', bottom: '20px', right: '20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white',
        }}
      />
    </>
  )
}

export default Layout