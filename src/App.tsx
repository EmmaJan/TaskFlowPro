// src/App.tsx
import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoadingPage } from './components/LoadingPage';

// Imports dynamiques des pages qui utilisent Supabase
const LoginPage = lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then(m => ({ default: m.DashboardPage })));
const ProjectSessionsPage = lazy(() => import('./pages/ProjectSessionsPage').then(m => ({ default: m.ProjectSessionsPage })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/project/:projectId" element={<ProjectSessionsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
