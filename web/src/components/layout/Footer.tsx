import { Layout, Tooltip } from 'antd';
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import AnimatedList from '../ui/AnimatedList';
import { courseCategories } from '@/constants/courseCategories';
import Container from '../common/Container';
import Logo from '../common/logo';

const { Footer: AntdFooter } = Layout;

const socialLinks = [
  { title: 'Facebook', icon: <LuFacebook fontSize={22} />, link: 'https://www.facebook.com/' },
  { title: 'Instagram', icon: <FaInstagram fontSize={22} />, link: 'https://www.instagram.com/' },
  { title: 'LinkedIn', icon: <LuLinkedin fontSize={22} />, link: 'https://www.linkedin.com/' },
];


const Footer = () => {
  return (
    <AntdFooter className='!bg-gray-800 !p-0 -translate-y-0'>
      <div className='min-h-[100px] bg-[#e2f2ff] rounded-t-[35px]'>
        {/* Top Section */}
        <Container className='min-h-[100px] py-10 bg-[#e2f2ff] rounded-t-[35px]'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Left Section */}
            <div>
              {/* <img src="/logo.png" alt="CareerGrow" className="w-36 mb-3" /> */}
              <Logo bgColor='bg-[!e2f2ff]' />
              <p className="text-sm mb-4 text-gray-500 mt-2">
                CareerGrow is a premier training and development platform dedicated to empowering individuals and organizations with cutting-edge, innovative, and customized learning solutions.
              </p>
              <div className="flex gap-2">
                <img src="https://www.careergrow.org/assets/images/iso-lg.png" alt="ISO" className="h-15" />
                <img src="https://www.careergrow.org/assets/images/msme-lg.png" alt="Govt" className="h-15" />
                <img src="https://www.careergrow.org/assets/images/uasl-lg.jpg" alt="UASL" className="h-15" />
              </div>
            </div>

            {/* Our Company */}
            <div>
              <h4 className="font-bold mb-2">Our Company</h4>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>Our University Partners</li>
                <li>Our Accreditation</li>
                <li>Mission & Vision</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-bold mb-2">Useful Links</h4>
              <ul className="space-y-1 text-sm">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Online Payment</li>
                <li>Partner With Us</li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="font-bold mb-2">Get In Touch</h4>
              <p className="text-sm mb-1">📍 3rd Floor, B-121, B Block, Sector 2, Noida, Uttar Pradesh 201301.</p>
              <p className="text-sm mb-1">📞 +91-971-114-3828</p>
              <p className="text-sm mb-3">✉️ info@careergrow.org</p>
              <div className="flex gap-2">
                {
                  socialLinks.map((link, index) => (
                    <Tooltip key={index} title={link.title}>
                      <div
                        className='bg-gray-200 p-2.5 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer'
                      >
                        {link.icon}
                      </div>
                    </Tooltip>
                  ))
                }
              </div>
            </div>
          </div>

          <hr className="my-3 border-gray-300" />

          {/* Courses Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {courseCategories.map((category, index) => (
              <div key={index}>
                <h5 className="font-bold mb-2 text-indigo-950">{category.title}</h5>
                <AnimatedList
                  items={category.courses.map((course) => ({
                    label: course,
                    // href: '#', // Replace with dynamic route if needed
                  }))}
                  direction="vertical"
                />
              </div>
            ))}
          </div>
        </Container>


      </div>

      {/* Bottom Section */}
      <div className='bg-gray-800 text-white p-5 flex justify-between'>
        <p className='text-sm'>Copyright © 2025 <a className='font-bold !text-yellow-300'>CareerGrow</a> All Rights Reserved</p>
        <div className='flex divide-x-1 space-x-2'>
          <p className='text-sm'>Privacy Policy</p>
          <p className='text-sm'>Terms & Conditions</p>
          <p className='text-sm'>Refund Policy</p>
        </div>
      </div>
    </AntdFooter>
  )
}

export default Footer