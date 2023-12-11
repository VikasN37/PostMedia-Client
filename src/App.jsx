import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/Signup";
import { NotFoundPage } from "./pages/NotFound/NotFound";
import LoginPage from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/Landing";
import Homepage from "./pages/Homepage/Home";
import SideBar from "./containers/SideBar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sidebar" element={<SideBar />} />
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
