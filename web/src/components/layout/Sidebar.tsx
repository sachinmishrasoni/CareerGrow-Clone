import { Drawer } from 'antd';
import Logo from '../common/logo';

const Sidebar = ({ isOpen, setIsOpen }: any) => {
    return (
        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            placement="left"
            // headerStyle={}
            loading={false}
            styles={{
                header: {
                    padding: '10px 20px'
                },
                body: {
                    padding: '10px 20px'
                }
            }}
            className='sidebar'
            title={<Logo />}
            footer={<p className='text-center'>Copyright &copy; 2024 <span className='font-bold text-secondary'>CareerGrow</span></p>}
        >
            Sidebar Content
        </Drawer>
    )
}

export default Sidebar;