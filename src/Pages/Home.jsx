import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import ContactFormSuperAsia from "../Components/ContactFormSuperAsia";
import Footer from "../Components/Footer";


function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <ContactFormSuperAsia />
      <Footer />
    </div>
  );
}

export default Home;
