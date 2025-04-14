import { Avatar, Button, Divider, List, Tabs, Typography } from 'antd';
import { useState } from 'react';
import { coursesData, ICourse } from '@/constants/courses'; // ← import
import { useNavigate } from 'react-router-dom';

const CoursePopoverContent = () => {
    const navigate = useNavigate();
    const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);

    const renderTab = (category: string) => {
        const filtered = coursesData.filter(course => course.category === category);
        return (
            <div className="min-w-[400px]">
                <p className="text-base font-medium mb-2">{category}</p>
                <List
                    size="small"
                    dataSource={filtered}
                    renderItem={(item) => (
                        <List.Item
                            onClick={() => setSelectedCourse(item)}
                            className="hover:bg-gray-100 rounded-md px-2 cursor-pointer transition"
                        >
                            {/* <Badge offset={[-100, 0]} count={'New'} size='small'> */}
                            <Typography.Text className='!text-base !text-gray-600'>{item.name}</Typography.Text>
                            {item.placementGuarantee && (
                                <p className='text-xs text-green-500 font-medium animate-blink'>🎯Placement Guarantee</p>
                            )}
                            {/* </Badge> */}
                        </List.Item>
                    )}
                />
            </div>
        );
    };

    return (
        <div className='flex flex-col gap-0'>
            <p className='font-semibold text-lg text-gray-500'>Explore the Courses We Offer</p>
            <Divider className='!my-1.5' />

            <div className='flex flex-col md:flex-col lg:flex-row gap-3'>
                <Tabs
                    className="custom-tabs"
                    defaultActiveKey="1"
                    tabPosition='left'
                    items={[
                        { key: '1', label: 'Under Graduate Courses', children: renderTab('Under Graduate Courses') },
                        { key: '2', label: 'Post Graduate Courses', children: renderTab('Post Graduate Courses') },
                        { key: '3', label: 'Diploma Courses', children: renderTab('Diploma Courses') },
                        { key: '4', label: 'Certificate Courses', children: renderTab('Certificate Courses') },
                    ]}
                />

                {selectedCourse ? (
                    <div className='w-[400px] p-3 rounded-xl space-y-3'>
                        <Typography.Title level={5}>Partners for {selectedCourse.name}</Typography.Title>
                        <div className='flex flex-col gap-2'>
                            {selectedCourse.partners.map((partnerInfo, index) => (
                                <div key={index} className='p-1 rounded-md flex gap-2 items-center shadow-md cursor-pointer border border-gray-200'
                                    onClick={() => navigate(`/courses/${selectedCourse.name}`)}
                                >
                                    <Avatar shape='square' size={75} src='https://about.coursera.org/static/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg' />
                                    <div>
                                        <p><strong>Partner:</strong> {partnerInfo.partner}</p>
                                        <p><strong>Course:</strong> {selectedCourse.name}</p>
                                        <p><strong>Fees:</strong> {partnerInfo.fees}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='w-[400px] p-3 rounded-xl space-y-1 flex flex-col items-center justify-center'>
                        {/* <p className='font-semibold text-lg'>No Course Selected</p>
                        <p className='text-gray-500 text-lg'>Select a course to see its Partners</p> */}
                    </div>
                )}
            </div>

            <Divider className='!my-1.5' />
            <Button type="text" shape='round' className='w-full'
                onClick={() => navigate('/courses')}
            >View More Courses</Button>
        </div>
    );
};

export default CoursePopoverContent;
