import "./reset.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import Quiz from "./Pages/Quiz";
import Leaderboard from "./Pages/Leaderboard";
import SignUpPage from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Exit from "./Pages/Exit";
import Completed from "./Pages/Completed";
import Gameover from "./Pages/Gameover";

export default function App() {
  return (
    <main className="w-screen h-screen grid md:grid-rows-5 md:grid-cols-5 gap-5 sm:grid-cols-3">
      <div className="col-start-2 col-span-3">
        <NavBar />
      </div>
      <div className="row-start-2 col-start-2 col-span-3 sm:flex sm:flex-col row-span-3 sm:text-xs">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/exit" element={<Exit />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/gameover" element={<Gameover />} />
        </Routes>
      </div>
    </main>
  );
}



