import Container from '@/components/common/Container';
import { FaHeart, FaLaptop, FaChalkboardTeacher } from 'react-icons/fa';

const FeatureSection = () => {
    return (
        <section className='feature-section'>
            <Container className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div>
                    <img
                        src={"https://www.careergrow.org/assets/images/aboutUs.jpg"}
                        alt="Career Steps"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                </div>

                {/* Text + Features */}
                <div>
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
                        Build your Career Life with <span className="text-primary">CareerGrow</span>
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Join us at CareerGrow and take your career or organization to new heights—because when learning meets excellence, growth is inevitable.
                    </p>

                    {/* Feature Items */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="p-3 rounded-full bg-pink-100 text-pink-400">
                                <FaHeart size={20} />
                            </span>
                            <span className="text-lg font-medium text-gray-800">Flexible Classes</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="p-3 rounded-full bg-blue-100 text-blue-400">
                                <FaLaptop size={20} />
                            </span>
                            <span className="text-lg font-medium text-gray-800">Learn From Anywhere</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="p-3 rounded-full bg-orange-100 text-orange-400">
                                <FaChalkboardTeacher size={20} />
                            </span>
                            <span className="text-lg font-medium text-gray-800">Experienced Teacher's service.</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeatureSection;
