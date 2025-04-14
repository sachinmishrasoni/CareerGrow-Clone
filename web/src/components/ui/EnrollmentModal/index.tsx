'use client';

import { useEffect, useState } from 'react';
import { Modal, Form, Input, message, Select } from 'antd';
import GradientButton from '../GradientButton';

const EnrollmentModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    // Show the modal only once per session
    useEffect(() => {
        const shown = localStorage.getItem('enrollModalShown');
        if (!shown) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
                localStorage.setItem('enrollModalShown', 'true');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values: any) => {
        console.log('Form Values:', values);
        message.success('Enrollment submitted!');
        form.resetFields();
        setIsModalOpen(false);
    };

    return (
        <Modal
            title={<p className='text-2xl text-heading font-semibold'>Enroll Now for Career Success</p>}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            centered
        >
            <p className='text-sm text-gray-600 pb-2'>Start your journey toward a successful and rewarding career today.</p>
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                    className='!mb-2'
                >
                    {/* <Input placeholder="John Doe" /> */}
                    <Input
                        // className="h-12"
                        placeholder="John Doe" size="large"
                        variant="filled"
                    />
                </Form.Item>

                <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Enter a valid email' },
                    ]}
                    className='!mb-2'
                >
                    {/* <Input placeholder="you@example.com" /> */}
                    <Input
                        // className="h-12"
                        placeholder="johndoe@example.com" size="large"
                        variant="filled"
                    />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                    className='!mb-2'
                >
                    {/* <Input placeholder="123-456-7890" /> */}

                    <Input
                        // className="h-12"
                        placeholder="123-456-7890" size="large"
                        variant="filled"
                    />
                </Form.Item>

                <Form.Item
                    label="Select a Course"
                    name="phone"
                    rules={[{ required: true, message: 'Please select a course' }]}
                    className='!mb-2'
                >

                    <Select
                        // className="!h-13"
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
                </Form.Item>

                <Form.Item className=''>
                    {/* <Button type="primary" htmlType="submit" block>
                        Enroll Now
                    </Button> */}
                    <GradientButton className='w-full !py-2.5 mt-2'>Enroll Now</GradientButton>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EnrollmentModal;
