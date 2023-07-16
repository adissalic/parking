import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Auth from "./pages/Auth";
import { AuthContext } from "./context/auth-context";

import { useAuth } from "./hooks/auth-hook";

import MainPage from "./pages/MainPage";
import FastPay from "./pages/FastPay";
import Tuzla from "./pages/Tuzla";
import Footer from "./components/Footer";
import BackDrop from "./components/BackDrop";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  let routes;
  if (token) {
    routes = (
      <>
        <Route path="/" exact element={0} />
        <Route path="/:userId/places" exact element={1} />
        <Route path="/places/new" exact element={1} />
        <Route path="/places/:placeId" exact element={1} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/fastpay" exact element={<FastPay />} />
        <Route path="/tuzla" exact element={<Tuzla />} />
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <main className="App">
          <BackDrop />
          <Routes>{routes}</Routes>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
