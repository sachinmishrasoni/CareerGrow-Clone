import Container from '@/components/common/Container';

const CourseCertificate = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-[#f0f4ff] to-[#fff5f7]">
            <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* Certificate Card */}
                <div className="bg-white border border-gray-200 rounded-3xl shadow-xl px-8 py-10 text-center hover:shadow-2xl transition-shadow duration-300">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                            Industry Recognized
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Get a Certificate</h2>
                    <p className="text-gray-500 mb-6">
                        Earn a professional certificate upon successful course completion.
                    </p>
                    <img
                        src="https://www.careergrow.org/assets/images/cg-sample-certificate.jpg"
                        alt="Certificate"
                        className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105 mx-auto"
                        width={400}
                    />
                </div>

                {/* Person Illustration */}
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-[#f9f9f9] p-5 rounded-3xl shadow-md">
                        <img
                            src="https://www.careergrow.org/assets/images/certi-dir.jpg"
                            alt="Smiling woman pointing"
                            className="rounded-2xl object-cover"
                            width={385}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CourseCertificate;
