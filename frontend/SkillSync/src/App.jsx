import React, { useContext } from "react";
import ExplorePage from "./components/Explore/ExplorePage";
import OutletRouter from "./components/Home/OutletRouter";
import { Route, Routes } from "react-router";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/SignUp/SignupPage";
import AboutPage from "./components/StaticPages/AboutPage";
import StudentDashboard from "./components/UserInfo/StudentDashboard";
import ProfilePage from "./components/UserInfo/ProfilePage";
import CourseContentPage from "./components/Courses/CourseContentPage";
import InstructorDashboard from "./components/UserInfo/InstructorDashboard";
import CourseCreateForm from "./components/UserInfo/CourseCreateForm";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {isloggedIn} = useContext(AuthContext)
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<OutletRouter />}>
            {/* Default Route */}
            <Route index element={<HomePage />} />
            <Route path="/login" element={!isloggedIn ? <LoginPage /> : <HomePage/>} />
            <Route path="/signup" element={!isloggedIn ? <SignUpPage /> : <HomePage/>} />
            <Route path="/explore" element={<ExplorePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={isloggedIn ? <ProfilePage /> : <LoginPage/>} />
            <Route path="/course" element={<CourseContentPage />} />
            <Route path="/student" element={isloggedIn ? <StudentDashboard /> : <LoginPage/>} />
            <Route path="/instructor" element={isloggedIn ? <InstructorDashboard /> : <LoginPage/>} />
            <Route path="/createCourse" element={isloggedIn ? <CourseCreateForm /> : <LoginPage/>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
