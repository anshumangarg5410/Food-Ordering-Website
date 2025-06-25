import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='home' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
