import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import Courses from '@/pages/courses';
import PageNotFound from '@/pages/pagenotfound';
import Layout from '@/components/layout/Layout';
import About from '@/pages/about';
import CourseDetails from '@/pages/courseDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='upcoming-batches' element={<div>Upcoming Batches</div>} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<div>Contact</div>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
