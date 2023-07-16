import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
// import LoginPage from "./Pages/LoginPage";
// import SignPage from "./Pages/SignUpPage";
import LoginSignPage from "./Pages/LoginSignPage";
import Footer from "./Components/Footer";
import CandidateSearchPage from "./Pages/CandidateSearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/:auth" element={<LoginSignPage />}/>
        <Route path="/candidate-search" element={<CandidateSearchPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
