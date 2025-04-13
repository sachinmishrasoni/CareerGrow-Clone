import { Avatar } from 'antd'
import { FaStar } from 'react-icons/fa'

interface IFeedback {
    name: string,
    image: string,
    text: string
}
const FeedbackCard: React.FC<IFeedback> = ({ name, image, text }) => {
    return (
        <div className="bg-[#e9edfc] rounded-xl p-6 text-left shadow-lg">
            <div className="flex items-center gap-2 mb-4">
                <Avatar src={image} size={55} className="!border-3 !border-white" />
                <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
            </div>
            <p className="text-gray-600 mb-4 relative">
                <span className="text-[100px] text-gray-300 absolute -top-[100px] right-2">”</span>
                {text}
            </p>
            <div className="flex space-x-1 text-orange-400">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <FaStar key={i} size={16} />
                    ))}
            </div>
        </div>
    )
}

export default FeedbackCard