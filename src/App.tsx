import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OperationTraining from './pages/ServicePages/OperationTraining';
import SafetyTraining from './pages/ServicePages/SafetyTraining';
import Workforce from './pages/ServicePages/Workforce';
import ProjectsReports from './pages/ServicePages/ProjectsReports';
import SpecialLifting from './pages/ServicePages/SpecialLifting';
import EquipmentRental from './pages/ServicePages/EquipmentRental';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { SmoothScrollProvider } from './providers/SmoothScrollProvider';
import { ReducedMotionProvider } from './providers/ReducedMotionProvider';
import ScrollProgressBar from './components/ScrollProgressBar';
export function App() {
  return <ReducedMotionProvider>
      <SmoothScrollProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white">
            <ScrollProgressBar />
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/treinamentos-de-operacao" element={<OperationTraining />} />
                <Route path="/treinamentos-de-seguranca" element={<SafetyTraining />} />
                <Route path="/fornecimento-de-mao-de-obra" element={<Workforce />} />
                <Route path="/projetos-e-laudos" element={<ProjectsReports />} />
                <Route path="/icamentos-especiais" element={<SpecialLifting />} />
                <Route path="/locacao-de-equipamentos" element={<EquipmentRental />} />
              </Routes>
            </main>
            <Footer />
            <FloatingButtons />
          </div>
        </Router>
      </SmoothScrollProvider>
    </ReducedMotionProvider>;
}