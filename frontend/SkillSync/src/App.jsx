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
import PreviewCourse from "./components/Courses/PreviewCourse";
import PurchaseDone from "./components/Courses/PurchaseDone";
import Invoices from "./components/UserInfo/Invoices";
function App() {
  const {isloggedIn , role} = useContext(AuthContext)
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<OutletRouter />}>
            {/* Default Route */}
            <Route index element={<HomePage />} />
            <Route path="/login" element={!isloggedIn ? <LoginPage /> : <HomePage/>} />
            <Route path="/signup" element={!isloggedIn ? <SignUpPage /> : <HomePage/>} />
            <Route path="/explore" element={isloggedIn ? role=== "student" ? <ExplorePage/> : <HomePage/> : <LoginPage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={isloggedIn ? <ProfilePage /> : <LoginPage/>} />
            <Route path="/course/:id" element={ isloggedIn ? role === "student" ? <CourseContentPage /> : <HomePage/> : <LoginPage/>} />
            <Route path="/dashboard" element={isloggedIn ? role ==="student" ? <StudentDashboard/> : <InstructorDashboard/> : <LoginPage/>} />
            <Route path="/createCourse" element={isloggedIn ? role === "instructor" ? <CourseCreateForm /> : <HomePage/>: <LoginPage/>} />
            <Route path="/previewCourse/:id" element={ isloggedIn ? role === "instructor" ? <PreviewCourse /> : <HomePage/> : <LoginPage/>} />
            <Route path="/paymentDone" element={ isloggedIn ? role === "student" ? <PurchaseDone /> : <HomePage/> : <LoginPage/>} />
            <Route path="/invoice" element={isloggedIn ? role === "student" ? <Invoices /> : <HomePage/> : <LoginPage/>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
