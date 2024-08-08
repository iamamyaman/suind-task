import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import DefaultLayout from "./Layouts/DefaultLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";

function App() {
  //checks if user data is present in local storage
  const userInLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    userInLocalStorage ? true : false
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <Login
              setIsUserAuthenticated={setIsUserAuthenticated}
              isUserAuthenticated={isUserAuthenticated}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              isUserAuthenticated={isUserAuthenticated}
              setIsUserAuthenticated={setIsUserAuthenticated}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
