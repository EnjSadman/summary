import React from 'react';
import './App.scss';
import  { Heading } from './components/heading/Heading.tsx';
import { ProfessionalSummary } from './components/ProfessinalSummary/ProfessionalSummary.tsx';
import { ProfessionalExperince } from './components/ProfessionalExperince/ProfessionalExperince.tsx';
import { Experince } from './components/Experience/Experience.tsx';
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>      
      <div className="App">
        <Heading />
        <ProfessionalSummary />
        <ProfessionalExperince />
        <Experince />
      </div>
    </>
  );
}

export default App;
