import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { MethodTimeline } from './components/MethodTimeline';
import { SalesArgumentSection } from './components/SalesArgumentSection';
import { TrackRecordSection } from './components/TrackRecordSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { StrategicModal } from './components/StrategicModal';
import { Toast } from './components/Toast';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSuccessModal = () => {
    setModalOpen(false);
    setToastOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F9FAFB] font-sans selection:bg-[#6B21D8] selection:text-white relative">
      {/* Fixed Executive Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Single Page Sections Flow */}
      <main>
        {/* 1. HERO SECTION (Above the Fold) */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. OS 4 PILARES DA VAREON */}
        <PillarsSection onOpenModal={handleOpenModal} />

        {/* 3. O MÉTODO VAREON (Roadmap / Timeline) */}
        <MethodTimeline onOpenModal={handleOpenModal} />

        {/* 4. O ARGUMENTO DE VENDAS (Por que a Vareon?) */}
        <SalesArgumentSection />

        {/* 5. TRACK RECORD (Quem Somos & Nicholas Morizono) */}
        <TrackRecordSection onOpenModal={handleOpenModal} />

        {/* 6. FINAL CTA (Urgency Section) */}
        <FinalCTASection onOpenModal={handleOpenModal} />
      </main>

      {/* Corporate Brutalist Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Strategic Diagnostic Intake Modal */}
      <StrategicModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        onSuccess={handleSuccessModal} 
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Global Toast Notification */}
      <Toast 
        isOpen={toastOpen} 
        onClose={() => setToastOpen(false)} 
      />
    </div>
  );
}

