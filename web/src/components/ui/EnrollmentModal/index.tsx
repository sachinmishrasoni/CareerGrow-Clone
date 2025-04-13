'use client';

import { useEffect, useState } from 'react';
import { Modal, Form, Input, message } from 'antd';
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
            title={<p className='text-center text-2xl font-semibold'>🎓 Enroll in a Course</p>}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            centered
        >
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                    className='!mb-2'
                >
                    {/* <Input placeholder="John Doe" /> */}
                    <Input
                        className="h-12"
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
                        className="h-12"
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
                        className="h-12"
                        placeholder="123-456-7890" size="large"
                        variant="filled"
                    />
                </Form.Item>

                <Form.Item>
                    {/* <Button type="primary" htmlType="submit" block>
                        Enroll Now
                    </Button> */}
                    <GradientButton className='w-full !py-3'>Enroll Now</GradientButton>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EnrollmentModal;
