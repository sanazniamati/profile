// styles
import "./App.css";
// component
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
// import CvDemo from "./component/CvDemo/CvDemo";
// library
// import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CvDemo" element={<CvDemo />} />
      </Routes> */}
    </>
  );
}
