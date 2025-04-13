import Container from '@/components/common/Container'
import { Collapse } from 'antd'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import CoursePricingCard from './CoursePricingCard';

const collapseItems = [
    {
        key: '1',
        label: (
            <p className="text-base md:text-lg font-semibold text-heading m-0">
                CORE BANKING
            </p>
        ),
        children: (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Introduction to BFSI</li>
                <li>Negotiable Instruments</li>
                <li>Retail banking</li>
                <li>Banking Operations</li>
                <li>Financial Product and Services</li>
                <li>Customer Relationship Managements</li>
                <li>Ethics and Professional Standards</li>
                <li>Corporate Finance</li>
            </ul>
        ),
    },
    {
        key: '2',
        label: (
            <p className="text-base md:text-lg font-semibold text-heading m-0">
                PERSONALITY DEVELOPMENT
            </p>
        ),
        children: (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Life Skills</li>
                <li>Time Management</li>
                <li>Leadership Skills</li>
                <li>Cross Selling Skills</li>
                <li>Communication Skills</li>
                <li>Customer Service Orientation</li>
            </ul>
        ),
    },
    {
        key: '3',
        label: (
            <p className="text-base md:text-lg font-semibold text-heading m-0">
                INTERVIEW PREPARATIONS
            </p>
        ),
        children: (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Soft Skill Sessions</li>
                <li>Spoken English</li>
                <li>Resume Building</li>
                <li>Mock & Domain Round</li>
                <li>Practice Common Interview Questions</li>
                <li>Job Readiness</li>
            </ul>
        ),
    },
];

const CourseDetailsSection = () => {
    
    return (
        <section className='course-details-section py-10'>
            <Container className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                <div className='md:col-span-4'><CoursePricingCard /></div>
                <div className='md:col-span-8'>
                    <div className='bg-white p-5 rounded-xl shadow-md border border-gray-200'>
                        <p className='text-lg text-heading font-semibold'>Shape your career with a Specialized Diploma in Advance Banking!</p>
                        <div className='h-[0.5px] bg-gray-200 my-2' />
                        <div className='space-y-2 text-gray-600'>
                            <p>The Postgraduate Certificate in Professional Banking and Finance is a course made for graduates and professionals. Those who pursue this course learn about the principles and practices of the financial services industry.</p>
                            <p>The Post Graduate Certificate in Professional Banking and Finance, provides participants with a comprehensive understanding of the principles and practices in the financial services industry.This course covers essential concepts in banking, investment, risk management, and insurance. Participants will gain insights into effective financial management strategies and learn how to navigate the complex landscape of financial institutions and insurance markets.</p>
                            <p>The Post Graduate certificate in Professional Banking and Finance, offered by BCCM Global, equips students with important knowledge associated with finance, banking, and investment.</p>
                        </div>

                        <div className='flex items-end gap-2'>
                            <h3 className='text-2xl text-heading font-semibold mt-3'>Course Structure & Syllabus</h3>
                            <div className='flex-1 h-[1px] bg-gray-200 my-2 -translate-y-1' />
                        </div>

                        <div className='mt-5'>
                            <Collapse
                                className="course-collapse"
                                accordion
                                defaultActiveKey={['1']}
                                // bordered={false}
                                expandIcon={({ isActive }) => isActive ? <FiMinus size={16} /> : <FiPlus size={16} />}
                                expandIconPosition='right'
                                items={collapseItems}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CourseDetailsSection