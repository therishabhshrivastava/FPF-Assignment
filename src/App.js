import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import ReactMemoInfo from "./components/ReactMemo/ReactMemoInfo";
import SignupForm from "./components/SignupForm/SignupForm";
import './App.css';

function App() {

  return (
  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<InfiniteScroll />} />
        <Route path="/react-memo" element={<ReactMemoInfo />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  )

}

export default App;
