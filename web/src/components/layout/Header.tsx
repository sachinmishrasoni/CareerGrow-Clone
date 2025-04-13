import { Button, Layout, Menu, Popover, theme } from 'antd';
import CoursePopoverContent from './CoursePopoverContent';
import '@/styles/header.css'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import GradientButton from '../ui/GradientButton';
import OutlineGradientButton from '../ui/OutlineGradientButton';
import Logo from '../common/logo';

const { Header: AntdHeader } = Layout;

const Header = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const navigate = useNavigate();
    return (
        <AntdHeader style={{ background: colorBgContainer }}
            className='flex justify-between md:justify-center items-center shadow sticky top-0 z-50 !px-5'
        >
            <Logo />
            <div className="hidden md:flex flex-1 items-center">
                <Menu
                    mode="horizontal"
                    className="flex-1 header-menu !text-base !text-gray-700"
                    items={[
                        { key: '1', label: 'Home', onClick: () => navigate('/') },
                        {
                            key: '2', label: (
                                <Popover content={<CoursePopoverContent />} >
                                    Our Courses <IoIosArrowDown className='mt-0.5' />
                                </Popover>
                            ),
                            onClick: () => navigate('/courses')
                        },
                        { key: '3', label: 'Upcoming Batches', onClick: () => navigate('/upcoming-batches') },
                        { key: '4', label: 'About Us', extra: <IoIosArrowDown />, onClick: () => navigate('/about-us') },
                    ]}
                />
            </div>
            {/* <Menu
                mode="horizontal"
                className="header-menu flex-1 !text-base !text-gray-700"
                defaultActiveFirst
            >
                <Menu.Item key="home" onClick={() => navigate('/')}>Home</Menu.Item>

                <Popover
                    content={<CoursePopoverContent />}
                    trigger="hover"
                    overlayClassName="custom-popover"
                // classNames={{
                //     root: {
                //         position: 'relative'
                //     }
                // }}
                >
                    <Menu.Item key="courses" onClick={() => navigate('/courses')}>Our Courses<IoIosArrowDown /></Menu.Item>
                </Popover>
                <Menu.Item key='upcoming-batches' onClick={() => navigate('/upcoming-batches')}>Upcoming Batches</Menu.Item>
                <Menu.Item key="about" onClick={() => navigate('/about')}>About Us</Menu.Item>
            </Menu> */}

            <div className='items-center gap-2 hidden md:flex'>
                {/* <Button type="primary" shape='round'>Login/Signup</Button> */}
                <OutlineGradientButton >Enroll Now &gt;</OutlineGradientButton>
                <GradientButton className='!py-2 shadow-lg'>Login/Signup</GradientButton>
            </div>

            <div className='block md:hidden'>
                <Button shape='circle' type='text' size='large'><HiMenuAlt3 fontSize={25} /></Button>
            </div>
        </AntdHeader>
    )
}

export default Header