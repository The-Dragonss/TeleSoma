import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./components/Quiz";

import ChunkedNotesDisplayPage from "./pages/ChunkedNotesDisplayPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/chunkednotesdisplayPage" element={< ChunkedNotesDisplayPage />} />
        <Route path="/quizpage" element={<QuizPage />} />

      </Routes>
    </BrowserRouter>
  )
}