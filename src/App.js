import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import NoMandatePage from "pages/nomandatePage";
import ActivePage from "pages/ActivePage";
import PendingPage from "pages/PendingPage";


function App() {
  return (
    <Router>
      <ToastContainer position="top-right" limit={1} />
      <div className="max-w-[1540px] mx-auto">
        <Header />
        <div className="bg-white">
        <Routes>
          <Route path="/" element={<NoMandatePage />} />
          <Route path="/active" element={<ActivePage />} />
          <Route path="/pending" element={<PendingPage />} />
          <Route path="*" element={<NoMandatePage/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
