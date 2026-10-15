/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { BlogSection } from './components/BlogSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { DonationSection } from './components/DonationSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { ResumeModal } from './components/ResumeModal';

function MainApp() {
  const { isAdmin } = useApp();
  const [currentView, setCurrentView] = useState<'public' | 'admin'>('public');
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 cyber-grid-pattern selection:bg-[#FF6B00] selection:text-black">
      {/* Top Navbar adhering strictly to Top Bar Contract */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenAdminLogin={() => {
          if (isAdmin) {
            setCurrentView(currentView === 'admin' ? 'public' : 'admin');
          } else {
            setAdminLoginOpen(true);
          }
        }}
      />

      {/* Main Content View Switcher */}
      {currentView === 'public' ? (
        <main>
          {/* Hero Section */}
          <Hero onOpenCvModal={() => setResumeModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Technical Skills & Certifications */}
          <SkillsSection />

          {/* Projects & Case Studies */}
          <ProjectsSection />

          {/* Career & Academic Timeline */}
          <TimelineSection />

          {/* Technical Blog & Insights */}
          <BlogSection />

          {/* Field Media Gallery */}
          <GallerySection />

          {/* Direct Contact & Newsletter */}
          <ContactSection />

          {/* Sponsorship & Support */}
          <DonationSection />

          {/* Footer */}
          <Footer
            onOpenAdminLogin={() => {
              if (isAdmin) {
                setCurrentView('admin');
              } else {
                setAdminLoginOpen(true);
              }
            }}
          />
        </main>
      ) : (
        <AdminDashboard />
      )}

      {/* Admin Login Passkey Modal */}
      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={() => setCurrentView('admin')}
      />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
