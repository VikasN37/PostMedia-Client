import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Home";
import SignUpPage from "./pages/Signup";
import { NotFoundPage } from "./pages/NotFound/NotFound";
import LoginPage from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="app" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
