import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';

import './index.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { Button } from 'antd';
import Container from '@/components/common/Container';
import GradientButton from '@/components/ui/GradientButton';
import Marquee from '@/components/animation/Marquee';
import FeatureSection from './sections/FeatureSection';
import CoursesSection from './sections/CoursesSection';
import HiringProspects from './sections/HiringProspects';
import ContactSection from './sections/ContactSection';
import FeedbackSection from './sections/FeedbackSection';
import EnrollmentModal from "@/components/ui/EnrollmentModal";


const slides = [
  {
    title: "Gain in-demand Skills & Accelerate Your Career With CareerGrow's Expert-Led Training Programs",
    subtitle: '🎓 Your Future Starts Here',
    image: 'https://www.careergrow.org/assets/images/banner1.jpg',
    buttonText: 'More About CareerGrow',
  },
  {
    title: 'Boost Your Career With Industry-Relevant Training Designed For Student Success',
    subtitle: '📚 Learn Today, Lead Tomorrow',
    image: 'https://www.careergrow.org/assets/images/banner2.jpg',
    buttonText: 'Apply Now',
  },
  {
    title: "Join CareerGrow & Gain The Expertise To Stand Out in Today's Competitive Job Market",
    subtitle: '🚀 Upgrade Your Skills, Unlock Opportunities!',
    image: 'https://www.careergrow.org/assets/images/banner3.jpg',
    buttonText: 'Connect With Us',
  },
];

const banners = [
  "https://www.careergrow.org/assets/images/university/bccmglobal-u.png",
  "https://www.careergrow.org/assets/images/university/bccm-u.png",
  "https://www.careergrow.org/assets/images/university/lingaya-u.webp",
  "https://www.careergrow.org/assets/images/university/mangalayatan-u.png",
  "https://www.careergrow.org/assets/images/university/sh-u.webp",
  "https://www.careergrow.org/assets/images/university/bccmswiss.png",
  "https://www.careergrow.org/assets/images/university/bccmglobal-u.png",
  "https://www.careergrow.org/assets/images/university/bccm-u.png",
  "https://www.careergrow.org/assets/images/university/lingaya-u.webp",
  "https://www.careergrow.org/assets/images/university/mangalayatan-u.png"
]


const Home = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <div className='home-page'>
      <div className='swiper-container h-[70vh] relative'>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(_swiper) => {
            // swiper.params.navigation.prevEl = prevRef.current;
            // swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-[90deg] from-[#054676] to-[#000000] opacity-50"></div>

                {/* Content */}
                <Container className='h-full'>
                  <div className="relative z-10 flex flex-col gap-3 items-center justify-center h-full px-6 md:px-12 text-white">
                    <div className='subtitle bg-white/20 p-2 px-8 rounded-4xl backdrop-blur-xs'>
                      <p className='leading-6 uppercase text-lg font-medium text-center'>{slide.subtitle}</p>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">{slide.title}</h2>
                    {/* <p className="text-lg md:text-xl mb-6 max-w-xl">{slide.description}</p> */}
                    {/* <button className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600 transition">
                      Explore Now
                    </button> */}
                    <GradientButton className='py-3.5 px-6'>{slide.buttonText}</GradientButton>
                  </div>
                </Container>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="navi-btns absolute top-1/2 left-0 transform -translate-y-1/2 z-10 px-2">
          <Button
            ref={prevRef} type="primary" size="large" shape='circle'
            className='!bg-white !text-gray-800 !shadow-md hover:!bg-gray-100 '
          >
            <IoIosArrowBack size={22} />
          </Button>
        </div>

        <div className="navi-btns absolute top-1/2 right-0 transform -translate-y-1/2 z-10 px-2">
          <Button
            ref={nextRef} type="primary" size="large" shape='circle'
            className='!bg-white !text-gray-800 !shadow-md hover:!bg-gray-100'
          >
            <IoIosArrowForward size={22} />
          </Button>
        </div>
      </div>

      {/* Patners Banner */}
      <div className='bg-gray-50'>
        <Marquee className='gap-5 py-10'>
          {
            banners.map((banner, index) => (
              <div key={index} className='w-[250px] h-[130px] bg-white rounded-2xl shadow-md border border-gray-200 flex items-center justify-center'>
                <img src={banner} alt="" width={200} className='rounded-2xl' />
              </div>
            ))
          }
        </Marquee>
      </div>

      <FeatureSection />
      <CoursesSection />
      <HiringProspects />
      <FeedbackSection />
      <ContactSection />

      <EnrollmentModal />
    </div>
  )
}

export default Home;