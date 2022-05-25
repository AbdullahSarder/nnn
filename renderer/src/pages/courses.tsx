import Footer from '@features/Footer/Footer';
import React from 'react';
import Navbar from '@features/Navbar/Navbar';
import CourseOutLine from '@features/courseOverView/courseOutline';
import HeroSection from '@features/heroSection/HeroSection';

const courses = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<CourseOutLine />
			<Footer />
		</>
	);
};

export default courses;
