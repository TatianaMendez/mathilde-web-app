import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa los componentes remotos
const RemoteCampaignForm = lazy(() => import('appmathildeweb/CampaignForm'));
const RemoteLoginForm = lazy(() => import('appmathildeweb/LoginForm'));
const RemoteRegisterForm = lazy(() => import('appmathildeweb/RegisterForm'));
const RemoteResetPass = lazy(() => import('appmathildeweb/ResetPass'));
const RemoteValidation = lazy(() => import('appmathildeweb/ValidationPass'));
const RemoteDashboard = lazy(() => import('appmathildeweb/Dashboard'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<RemoteLoginForm />} />
        <Route path="/register" element={<RemoteRegisterForm />} />
        <Route path="/reset" element={<RemoteResetPass />} />
        <Route path="/form-social" element={<RemoteCampaignForm />} />
        <Route path="/validation" element={<RemoteValidation />} />
        <Route path="/dashboard" element={<RemoteDashboard />} />
      </Routes>
    </Suspense>
  );
};

export default App;
