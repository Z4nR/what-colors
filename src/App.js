import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNav from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";

function ColorApp() {
  return (
    <div className="color-app">
      <header className="color-app_header">
        <h2>What Colors?</h2>
        <AppNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

export default ColorApp;
