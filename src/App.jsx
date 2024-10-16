import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/Dashboard";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import QuizPage from "./components/Quiz";
import { AuthProvider } from "./context/AuthContext";

import ChunkedNotesDisplay from "./pages/ChunkedNotesDisplayPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/notes" element={<ChunkedNotesDisplay />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
