import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import "./App.css";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/Aboutus";
import Cart from "./pages/cart/Cart";
import LogIn from "./pages/login/LogIn"
import SignUp from "./pages/signup/SignUp"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='landingpage' element={<LandingPage/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='explore' element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='account' element={<Home/>}/>
        <Route path='contactus' element={<Contact/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='login' element={<LogIn/>}/>
        <Route path='signin' element={<SignUp/>}/>
        <Route path='ordernow' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
