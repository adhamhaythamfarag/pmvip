import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Home from './pages/Home';
import TextToPdf from './pages/TextToPdf';
import UploadToPdf from './pages/UploadToPdf';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

export default function App() {
  return (
    <HelmetProvider>
      <PayPalScriptProvider options={{ 
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "ATdFE8CHmX4GbQy-kTcXojGVojJ3_BHLVrMKTJjvxauUBTitmZ9LUeM-a-0T0NVfIrPfHWNcAdnR5xPt",
        vault: true,
        intent: "subscription"
      }}>
        <AuthProvider>
          <ThemeProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/text-to-pdf" element={<TextToPdf />} />
                <Route path="/upload-to-pdf" element={<UploadToPdf />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-of-service" element={<Terms />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </AuthProvider>
      </PayPalScriptProvider>
    </HelmetProvider>
  );
}
