// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from '/src/pages/dashboard/Dashboard.jsx';
import Contrat from '/src/pages/contrat/Contrat.jsx';
import NotifBar from './components/layout/NotifBar';
import Movement from './pages/movement/Movement';

function App() {
  const [notifOn, setNotifOn] = React.useState(false);

  return (
    <Router>
      <div className="bg-background flex h-screen">
        <Sidebar />

        <div className="w-full flex flex-col">
          <Header notifOn={notifOn} setNotifOn={setNotifOn} />

          <main className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/mouvement" element={<Movement />} />
              <Route path="/contrat" element={<Contrat />} />
            </Routes>
          </main>
        </div>

        {notifOn && <NotifBar />}
      </div>
    </Router>
  );
}

export default App;
