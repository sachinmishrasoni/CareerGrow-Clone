import CourseCertificate from './setions/CourseCertificate';
import CourseDetailsSection from './setions/CourseDetailsSection';
import CourseFeatures from './setions/CourseFeatures';
import './index.css';
import CourseBanner from './setions/CourseBanner';

const CourseDetails = () => {
  return (
    <main className='course-details-page'>
      <CourseBanner />
      <CourseDetailsSection />
      <CourseFeatures />
      <CourseCertificate />
    </main>
  )
}

export default CourseDetails