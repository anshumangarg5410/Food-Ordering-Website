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
        <Route path='landingpage' element={<LandingPage/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='explore' element={<Home/>}/>
        <Route path='cart' element={<Home/>}/>
        <Route path='account' element={<Home/>}/>
        <Route path='contactus' element={<Home/>}/>
        <Route path='aboutus' element={<Home/>}/>
        <Route path='login' element={<Home/>}/>
        <Route path='signin' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
