import Container from "@/components/common/Container"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Input, Select } from "antd";
import GradientButton from "@/components/ui/GradientButton";

const contactDetails = [
    {
        icon: <FaWhatsapp fontSize={22} />,
        title: 'WhatsApp',
        subtitle: '+91 9999999999',
        link: 'https://wa.me/9999999999'
    },
    {
        icon: <MdOutlineEmail fontSize={22} />,
        title: 'Email',
        subtitle: 'iOYKg@example.com',
        link: 'mailto:iOYKg@example.com'
    },
    {
        icon: <IoCallOutline fontSize={22} />,
        title: 'Call',
        subtitle: '+91 9999999999',
        link: 'tel:9999999999'
    },
]

const ContactSection = () => {
    return (
        <section
            className="contact-section min-h-[90vh] relative bg-gray-100 bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(https://www.careergrow.org/assets/images/bg/bg-image-5.jpg)`, }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800"></div>

            <Container className="relative z-10 p-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-7 space-y-4 flex flex-col justify-center items-start">
                    <p className="text-md uppercase font-semibold text-white bg-white/10 px-5 py-1 inline-block rounded-full backdrop-blur-md">Connect Us</p>
                    <p className="text-3xl md:text-5xl font-bold text-white">Learner Support</p>
                    <div className="text-lg font-medium text-gray-300 mt-3">
                        <p >Have questions or need assistance?</p>
                        <p>Our team is here to help you every step of the way. Reach out for personalized support.</p>
                    </div>

                    <div className="space-y-4">
                        {
                            contactDetails.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 cursor-pointer group"
                                >
                                    <div className="p-3 bg-white/10 text-white flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-white/20">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white">{item.title}</p>
                                        <p className="text-sm text-gray-300">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-5 relative">
                    <div className="min-h-[400px] p-5 bg-white rounded-lg">
                        <p className="text-md uppercase font-semibold text-blue-800 bg-blue-100 px-5 py-1 inline-block rounded-full backdrop-blur-md">EDUCATION FOR EVERYONE</p>
                        <p className="text-xl font-bold text-gray-800 mt-2">Quick Connect With <span className="text-primary">CareerGrow</span></p>

                        <div className="flex flex-col gap-5 mt-5">
                            <Input
                                className="h-13"
                                placeholder="Name" size="large"
                                variant="filled"
                            />
                            <Input
                                className="h-13"
                                placeholder="Email" size="large"
                                variant="filled"
                            />
                            <Input
                                className="h-13"
                                placeholder="Mobile" size="large"
                                variant="filled"
                            />
                            <Select
                                className="!h-13"
                                size="large"
                                placeholder="Select Course"
                                variant="filled"
                                options={[
                                    { value: 'pg-advanced-banking', label: 'Post Graduate Program in Advanced Banking' },
                                    { value: 'digital-marketing', label: 'Professional Certificate in Digital Marketing' },
                                    { value: 'data-analytics', label: 'Advanced Program in Data Analytics' },
                                    { value: 'hr-management', label: 'Diploma in Human Resource Management' },
                                    { value: 'financial-accounting', label: 'Certificate in Financial Accounting' },
                                    { value: 'fullstack-dev', label: 'Full Stack Web Development Program' },
                                    { value: 'business-analytics', label: 'Executive Program in Business Analytics' },
                                    { value: 'cybersecurity', label: 'Cybersecurity Essentials Certification' },
                                    { value: 'ux-ui-design', label: 'UX/UI Design Professional Program' },
                                    { value: 'banking-finance', label: 'Diploma in Banking and Finance' },
                                ]}
                            />
                            <GradientButton className="text-lg">Get Call Back</GradientButton>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContactSection