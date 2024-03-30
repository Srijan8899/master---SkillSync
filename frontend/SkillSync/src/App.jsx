import React from "react";
import ExplorePage from "./components/Explore/ExplorePage";
import OutletRouter from "./components/Home/OutletRouter";
import { Route, Routes } from "react-router";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/SignUp/SignupPage";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<OutletRouter />}>
            {/* Default Route */}
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/explore" element={<ExplorePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
