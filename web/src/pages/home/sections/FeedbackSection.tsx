import Container from "@/components/common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import 'swiper/css/navigation';
import FeedbackCard from "@/components/ui/FeedbackCard";
import { testimonialsData } from "@/constants/testimonialsData";


const FeedbackSection = () => {
    return (
        <section className="py-10 bg-[#f9faff] text-center">
            <Container>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
                    Student's Career Success Feedback
                </h2>
                <p className="text-gray-500 text-lg mb-12">
                    Learning communicate to global world and build a bright future and career
                    development, increase your skill with our CareerGrow.
                </p>

                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="!py-5"
                >
                    {testimonialsData.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <FeedbackCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default FeedbackSection;
