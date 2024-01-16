import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { ROUTES } from "./constants";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  const token = useSelector((state) => state.root.auth.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to={"/home/all"} /> : <LandingPage />}
        />

        {!token && (
          <>
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.RESETPASSWORD} element={<ResetPassword />} />
          </>
        )}

        <Route path="/home" element={<Homepage />}>
          <Route index path={ROUTES.ALLPOSTS} element={<AllPosts />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.ADDPOST} element={<AddPosts />} />
          <Route path={ROUTES.LIKEDPOSTS} element={<LikedPosts />} />
          <Route path={ROUTES.EDITPROFILE} element={<EditProfile />} />
          <Route path={ROUTES.CHANGEPASSWORD} element={<ChangePassword />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
