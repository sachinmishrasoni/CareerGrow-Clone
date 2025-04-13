import Container from '@/components/common/Container';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: 'https://www.careergrow.org/assets/images/diploma-crs/jobs.png',
    title: '100% Placement Assistance',
    description: 'Your Gateway to Success with 100% Placement Assistance!',
  },
  {
    icon: 'https://www.careergrow.org/assets/images/diploma-crs/industrysyllabus.png',
    title: 'Industry-Specific Curriculum',
    description: 'Tailored Industry-Specific Curriculum for Future-Ready Professionals!',
  },
  {
    icon: 'https://www.careergrow.org/assets/images/diploma-crs/afd-fee.png',
    title: 'Affordable Program Fee',
    description: 'Quality Education with an Affordable Program Fee!',
  },
  {
    icon: 'https://www.careergrow.org/assets/images/diploma-crs/handLearning.png',
    title: 'Engage in Hands-On Learning',
    description: 'Engage in Hands-On Learning for Real-World Expertise!',
  },
  {
    icon: 'https://www.careergrow.org/assets/images/diploma-crs/interviewPrep.png',
    title: 'Interview Readiness Assistance',
    description: 'Get Interview-Ready with Expert Guidance and Support!',
  },
  {
    icon: 'https://www.careergrow.org/assets/images/diploma-crs/faculty.png',
    title: 'Experienced Faculty',
    description: 'Learn from faculty who have years of experience in the hospitality sector.',
  },
];

const CourseFeatures = () => {
  return (
    <section className='feature-section py-10 '>
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-heading mb-10">
          Why Choose the 1-Year Diploma in Hotel Management Program?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 divide-x-2 divide-y rounded-xl bg-gradient-to-br from-[#A066EE] to-[#814FFF]">
          {features.map((item, index) => (
            <div
              key={index}
              className="feature-card p-6 text-white min-h-[220px] flex flex-col"
            >
              <img src={item.icon} alt={item.title} className="w-15 h-15 mb-4 bg-white rounded-2xl p-2" />
              <h3 className="title text-lg font-semibold">{item.title}</h3>
              <p className="description text-gray-200 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CourseFeatures;