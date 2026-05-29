import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import CompanyProfile from "./pages/CompanyProfile";

import ManagementStructure from "./pages/ManagementStructure";

import CompanyProposition from "./pages/CompanyProposition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/company-profile" element={<CompanyProfile />} />

        <Route path="/management-structure" element={<ManagementStructure />} />

        <Route path="/company-proposition" element={<CompanyProposition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
