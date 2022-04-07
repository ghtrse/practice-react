import React, { Fragment } from "react";
import Navbar from "./common/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Destination from "./components/Destination/Destination";
import SinglePage from "./SinglePage/SinglePage";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/singlepage/:id" element={<SinglePage/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsingle/:id" element={<BlogSingle />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
