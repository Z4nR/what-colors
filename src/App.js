import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNav from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import CountDownPage from "./pages/CountDownPage";
import DashboardGroup from "./pages/DashboardGroupPage";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import TestPage from "./pages/TestPage";
import TestSheet from "./pages/TestSheet";
import Thanks from "./pages/ThanksPage";

export default function ColorApp() {
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
          <Route path="/test/test-sheet" element={<TestSheet />} />
          <Route path="/result/:id" element={<ResultPage />} />
          <Route path="/countdown" element={<CountDownPage />} />
          <Route
            path="/dashboard/:groupId/:role"
            element={<DashboardGroup />}
          />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </main>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}
