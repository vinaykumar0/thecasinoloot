import { Routes, Route } from "react-router-dom";
import "./App.css";
import NJavbar from "./components/Common/NJavbar";
// import Hero from './components/Home/Hero/Hero'
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";
import Footer from "./components/Common/Footer";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/Home/Contact/ContactUs";
import BlogDetail from "./components/Blog/BlogDetail";
import SignUp from "./components/Home/Signup/SignUp";
import Datas from "./Datas";
import DetailPage from "./components/Country/Detail/DetailPage";
import About from "./components/Aboutus/About";

function App() {
  return (
    <>
      <NJavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Datas />} />
<Route path="/about" element={<About/>}/>
        <Route path="/country/:id" element={<Country />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/country/:name/:id" element={<DetailPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
