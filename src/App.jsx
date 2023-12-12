import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFound/NotFound";
import LoginPage from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/Landing";
import Homepage from "./pages/Homepage/Home";
import AllPosts from "./containers/AllPosts/AllPosts";
import Settings from "./containers/SettingsSection/SettingsSection";
import AddPosts from "./containers/AddPosts/AddPosts";
import LikedPosts from "./containers/LikedPosts/LikedPosts";
import EditProfile from "./containers/EditProfile/EditProfile";
import ChangePassword from "./containers/ChangePassword/ChangePassword";
import SignupPage from "./pages/SignupPage/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="home" element={<Homepage />}>
          <Route index path="all" element={<AllPosts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add" element={<AddPosts />} />
          <Route path="liked" element={<LikedPosts />} />
          <Route path="settings/edit" element={<EditProfile />} />
          <Route path="settings/changePassword" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
