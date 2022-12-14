import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNav from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import DashboardGroup from "./pages/DashboardGroupPage";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import TestPage from "./pages/TestPage";
import TestSheet from "./pages/TestSheet";
import Thanks from "./pages/utils/ThanksPage";
import SendCode from "./pages/utils/SendCodePage";
import NotFoundPage from "./pages/utils/404Page";
import ShowResultPage from "./pages/utils/ShowResultPage";
import SlowInetPage from "./pages/utils/SlowInternetPage";
import Footer from "./components/Footer";
import EmailPage from "./pages/utils/EmailPage";

export default function ColorApp() {
  return (
    <div className="color-app">
      <header className="color-app_header">
        <div className="color-app_header-item">
          <h2>WhatColors?</h2>
          <AppNav />
        </div>
      </header>
      <main>
        <Routes>
          */Main Route/*
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/test/test-sheet" element={<TestSheet />} />
          <Route path="/result/:id" element={<ResultPage />} />
          <Route
            path="/dashboard/:roomInitial/admin"
            element={<DashboardGroup />}
          />
          */Util Route/*
          <Route path="/email" element={<EmailPage />} />
          <Route path="/code-sended" element={<SendCode />} />
          <Route path="/show-result" element={<ShowResultPage />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/slow-inet" element={<SlowInetPage />} />
          <Route path="/notFound" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
