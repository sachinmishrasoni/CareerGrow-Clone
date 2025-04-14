import Container from '@/components/common/Container'
import { Segmented } from 'antd'
import { useState } from 'react';

const courses = {
    pg: [
        { title: 'MBA', description: 'Online MBA From Shoolini University', color: 'bg-yellow-100' },
        { title: 'MBA - Powered by KPMG', description: 'Online MBA From Shoolini University', color: 'bg-pink-100' },
        { title: 'MCA', description: 'Online MCA From Shoolini University', color: 'bg-rose-100' },
    ],
    ug: [
        { title: 'BBA', description: 'Online BBA From Shoolini University', color: 'bg-blue-100' },
        { title: 'BCA', description: 'Online BCA From Shoolini University', color: 'bg-green-100' },
        { title: 'BCom', description: 'Online BCom From Shoolini University', color: 'bg-lime-100' },
    ],
    diploma: [
        { title: 'Diploma in Business', description: 'CareerGrow Business Diploma', color: 'bg-indigo-100' },
        { title: 'Diploma in Computer', description: 'CareerGrow Computer Diploma', color: 'bg-cyan-100' },
        { title: 'Diploma in Commerce', description: 'CareerGrow Commerce Diploma', color: 'bg-sky-100' },
    ],
};

const TabBox = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className='tab-box p-3 px-5 space-y-1 flex flex-col justify-center items-center'>
            <p className='title text-lg font-semibold'>{title.split(' ')[0]}<span className='hidden md:inline'>{' ' + title.split(' ')[1]}</span></p>
            <p className='subtitle hidden md:block text-xs text-gray-400 tracking-[1.5px] px-2 rounded-full leading-4'>{subtitle}</p>
        </div>
    )
};

const CoursesSection = () => {
    const [activeTab, setActiveTab] = useState<'pg' | 'ug' | 'diploma'>('ug');
    return (
        <section className='courses-section bg-blue-50'>
            <Container className='py-10 flex flex-col items-center'>
                <span className="inline-block bg-pink-100 text-pink-400 font-semibold px-4 py-1 rounded-full mb-4">
                    CAREERGROW COURSES
                </span>
                <h2 className="text-3xl md:text-3xl font-bold mb-10 text-center">
                    Explore High-Ranking Courses for Your Future
                </h2>

                {/* Tabs */}
                <Segmented
                    className='course-tabs'
                    // defaultValue='ug'
                    value={activeTab}
                    block
                    onChange={(val) => setActiveTab(val as 'pg' | 'ug' | 'diploma')}
                    options={[
                        {
                            label: <TabBox title='PG Courses' subtitle='After Graduation' />,
                            value: 'pg'
                        },
                        {
                            label: <TabBox title='UG Courses' subtitle='After 12th Pass' />,
                            value: 'ug'
                        },
                        {
                            label: <TabBox title='Diploma Courses' subtitle='Working Professional' />,
                            value: 'diploma'
                        },
                    ]}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {courses[activeTab].map((course, index) => (
                        <div
                            key={index}
                            className={`rounded-lg p-6 text-left ${course.color}`}
                        >
                            <h4 className="font-bold text-lg mb-2 text-gray-900">{course.title}</h4>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <a href="#" className="text-sm font-medium text-black hover:underline inline-flex items-center">
                                Learn More <span className="ml-2">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default CoursesSection