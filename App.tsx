
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValuePropsBar from './components/ValuePropsBar';
import Overview from './components/Overview';
import Comparison from './components/Comparison';
import Pillars from './components/Pillars';
import UseCases from './components/UseCases';
import Accelerator from './components/Accelerator';
import Resources from './components/Resources';
import ReadyToStart from './components/ReadyToStart';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValuePropsBar />
        <Overview />
        <Comparison />
        <Pillars />
        <Accelerator />
        <UseCases />
        <Resources />
        <ReadyToStart />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;