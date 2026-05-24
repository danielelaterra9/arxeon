import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Servizi from "./pages/Servizi";
import Valutazione from "./pages/Valutazione";
import ValutazioneConferma from "./pages/ValutazioneConferma";
import Metodo from "./pages/Metodo";
import Contatti from "./pages/Contatti";
import Elite from "./pages/Elite";

const Layout = ({ children }) => {
  const location = useLocation();
  const isElite = location.pathname === '/elite';
  return (
    <>
      <Header />
      {children}
      {!isElite && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/valutazione" element={<Valutazione />} />
            <Route path="/valutazione/conferma" element={<ValutazioneConferma />} />
            <Route path="/metodo" element={<Metodo />} />
            <Route path="/elite" element={<Elite />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster 
        position="top-right" 
        richColors 
        toastOptions={{
          style: {
            background: '#302f2c',
            color: '#ffffff',
            border: '1px solid #3f4816',
          },
        }}
      />
    </div>
  );
}

export default App;
