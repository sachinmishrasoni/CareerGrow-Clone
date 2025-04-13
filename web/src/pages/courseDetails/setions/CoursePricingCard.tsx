import { Button } from "antd";

const CoursePricingCard = () => {
    return (
        <div className="bg-primary rounded-2xl p-1 shadow-md sticky top-20">
            <p className="text-2xl font-bold text-white text-center pb-1.5">-: Pricing Details :-</p>
            <div className="h-[90%] w-[100%] bg-white rounded-xl p-5">
                {/* Price section */}
                <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-gray-900">
                        ₹60,000{' '}
                        <span className="line-through text-gray-400 text-xl ml-2">₹75,000/-</span>
                    </div>
                    <div className="mt-2">
                        <p className="bg-red-100 text-red-600 text-sm px-4 py-1 rounded-full inline-block font-semibold shadow">
                            ⏰ Hurry, Limited Time Offer!
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full inline-block font-medium shadow">
                            🎓 Scholarship Available
                        </p>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3 mt-5">
                    <button className="w-full text-white font-semibold py-2 rounded-md bg-gradient-to-r from-[#0f3057] via-[#00587a] to-[#ff8c00] shadow">
                        Download Brochure
                    </button>
                    <button className="w-full text-gray-800 font-semibold py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition">
                        Enroll Now
                    </button>
                </div>

                {/* Details */}
                <div className="mt-6 divide-y divide-gray-200 text-sm">
                    <div className="flex justify-between text-gray-600 py-3">
                        <span className="font-semibold">Duration</span>
                        <span className="font-semibold text-xs text-gray-800 bg-gray-100 px-2.5 py-1 rounded-full">90 Days</span>
                    </div>
                    <div className="flex justify-between text-gray-600 py-3">
                        <span>Class Mode</span>
                        <span className="font-semibold text-gray-800">Online</span>
                    </div>
                    <div className="flex justify-between text-gray-600 py-3">
                        <span>Lectures</span>
                        <span className="font-semibold text-gray-800">Weekends (Sat-Sun)</span>
                    </div>
                    <div className="flex justify-between text-gray-400 py-3">
                        <span>Eligibility</span>
                        <span>Graduation Degree</span>
                    </div>
                </div>

                {/* Show More */}
                {/* <div className="mt-4 text-center text-sm font-semibold text-[#2f3e46] cursor-pointer">
                    Show More <span className="inline-block">⌄</span>
                </div> */}

                <Button className="w-full !text-sm !font-semibold !rounded-full !text-heading" type="text">Show More</Button>

                {/* Footer call section */}
                <div className="mt-6 border-t pt-4 text-center">
                    <p className="text-sm text-gray-500 mb-2">For details about the course</p>
                    <div className="bg-[#e9d8fd] px-4 py-2 rounded-full inline-block shadow">
                        <span className="text-purple-800 font-semibold">
                            📞 Call Us: <a href="tel:+919711143828" className="text-blue-600">+91-971-114-3828</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePricingCard;
