import React from 'react';
import MainLayout from './components/layouts/MainLayout';
import Hero from './components/ui/Hero';
import Benefits from './components/ui/Benefits';
import BigPicture from './components/ui/BigPicture';
import SpecsGrid from './components/ui/SpecsGrid';
import Testimonial from './components/ui/Testimonial';
import HowTo from './components/ui/HowTo';
import FullWidthImage from './components/ui/FullWidthImage';
import Contact from './components/ui/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Benefits />
      <BigPicture />
      <SpecsGrid />
      <Testimonial />
      <HowTo />
      <FullWidthImage />
      <Contact />
    </MainLayout>
  );
}

export default App;