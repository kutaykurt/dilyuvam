// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Homepage from "./pages/Homepage/Homepage.jsx";
import DynamicVocabulary from "./pages/DynamicVocabulary/DynamicVocabulary.jsx";
import MyVocabulary from "./pages/MyVocabulary/MyVocabulary.jsx";
import MyExams from "./pages/MyExams/MyExams.jsx";
import ExamPage from "./pages/ExamPage/ExamPage.jsx";
import TestPage from "./pages/Grammar/TestPage/TestPage.jsx";

import GrammarLayout from "./pages/Grammar/GrammarLayout.jsx";
import SectionPage from "./pages/Grammar/SectionPage.jsx";
import GrammarQuizPage from "./pages/Grammar/QuizPage.jsx";

import A1Conversations from "./pages/Grammar/GrammarEnA1/A1EnConversations.jsx";

import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className="body" id="main">
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Grammar-Hub */}
          <Route path="/grammar" element={<GrammarLayout />}>
            {/* Relativer Redirect innerhalb von /grammar */}
            <Route index element={<Navigate to="en/a1" replace />} />

            {/* WICHTIG: alle Kinder relativ, kein führender Slash */}
            <Route path=":lang/:level" element={<SectionPage />} />
            <Route path=":lang/:level/:slug" element={<SectionPage />} />
            {/* Statische Segmente vor Parametern – zur Klarheit zuerst /quiz */}
            <Route
              path=":lang/:level/:slug/quiz"
              element={<GrammarQuizPage />}
            />
            <Route path=":lang/:level/:slug/:sub" element={<SectionPage />} />
          </Route>

          <Route path="/a1-conversations" element={<A1Conversations />} />

          <Route path="/vocabulary" element={<DynamicVocabulary />} />
          <Route path="/myvocabularies" element={<MyVocabulary />} />
          <Route path="/myexams" element={<MyExams />} />
          <Route path="/exam" element={<ExamPage />} />

          <Route path="/test/:testId" element={<TestPage />} />

          {/* Fallback */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
