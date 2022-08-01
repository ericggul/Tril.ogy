import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroTest from "./pages/IntroTest/IntroTest";
import MainTest from "./pages/MainTest/MainTest";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import P2 from "./pages/P2/P2";
import P3 from "./pages/P3/P3";
import P35 from "./pages/P35/P35";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/main" element={<MainTest />} />
        <Route exact path="/" element={<IntroTest />} />
        <Route exact path="/intro" element={<IntroTest />} />
        <Route exact path="/summary/:id" element={<SummaryPage />} />
        <Route exact path="/P2" element={<P2 />} />
        <Route exact path="/P3" element={<P3 />} />
        <Route exact path="/P35" element={<P35 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
