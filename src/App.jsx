import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Auth/Login';
import { Signup } from './pages/Auth/Signup';
import { IndividualWizard } from './pages/Verification/IndividualWizard';
import { CorporateWizard } from './pages/Verification/CorporateWizard';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Transactions } from './pages/Dashboard/Transactions';
import { Reports } from './pages/Dashboard/Reports';
import { Settings } from './pages/Dashboard/Settings';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-individual" element={<IndividualWizard />} />
          <Route path="/verify-corporate" element={<CorporateWizard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
