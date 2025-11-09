import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import LandingPage from './components/LandingPage.tsx';
import LoginPage from './components/LoginPage.tsx';
import ApplicantDashboard from './components/applicant/ApplicantDashboard.tsx';
import HRDashboard from './components/hr/HRDashboard.tsx';
import SystemAdminDashboard from './components/admin/SystemAdminDashboard.tsx';
import { UserRole } from './types.ts';

type View = 'landing' | 'login' | 'dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  useEffect(() => {
    // Set default theme for HR view to light as per the image
    if (userRole === 'hr') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [userRole]);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setView('dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setView('landing');
  };
  
  const handleLogoClick = () => {
    if (userRole) {
      handleLogout();
    }
    setView('landing');
  };


  const renderDashboard = () => {
    switch (userRole) {
      case 'applicant':
        return <ApplicantDashboard />;
      case 'hr':
        return <HRDashboard />;
      case 'admin':
        return <SystemAdminDashboard />;
      default:
        // This case should ideally not be reached if view is 'dashboard'
        return <LandingPage onLoginClick={() => setView('login')} />;
    }
  };

  const isHrView = view === 'dashboard' && userRole === 'hr';

  return (
    <div className={`min-h-screen flex flex-col ${isHrView ? 'bg-gray-100 dark:bg-dark-primary' : 'bg-light-secondary dark:bg-dark-primary'} text-gray-900 dark:text-gray-100 font-sans`}>
      <Header 
        userRole={userRole} 
        onLogout={handleLogout} 
        onLoginClick={() => setView('login')}
        onLogoClick={handleLogoClick}
      />
      <main className={`flex-grow ${isHrView ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8 py-8'}`}>
        {view === 'landing' && <LandingPage onLoginClick={() => setView('login')} />}
        {view === 'login' && <LoginPage onLogin={handleLogin} />}
        {view === 'dashboard' && renderDashboard()}
      </main>
      { !isHrView && <Footer /> }
    </div>
  );
};

export default App;