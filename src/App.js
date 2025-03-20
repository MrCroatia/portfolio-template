import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Customization from './components/Customization';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Customization />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
