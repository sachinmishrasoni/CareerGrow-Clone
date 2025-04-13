import { Avatar } from 'antd'

const Logo = ({bgColor = '!bg-white'}) => {
    return (
        <div className="flex items-center gap-0">
            <Avatar size={50} src='/images/logo.png' className={`${bgColor}`} />
            <div>
                <p className='font-bold text-2xl text-primary leading-7'>CareerGrow</p>
                <p className='text-xs text-orange-300 font-[500] leading-3'>Elevate Your Career</p>
            </div>
        </div>
    )
}

export default Logo;