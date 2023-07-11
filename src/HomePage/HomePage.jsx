import React from "react";
import Footer from "../Footer/Footer";
import Header from "./Header/Header";
import HeaderCards from "./HeaderCards/HeaderCards";
import ProjectSlider from "./OurProjects/ProjectSlider";
import Services from "./OurServices/Services";
import OurTeamSection from "./OurTeam/OurTeamSection";
import Testimonials from "./Testimonials/Testimonials";
import "./HomePage.css"

function HomePage() {
  return (
    <main className="home">
      <Header />
      <HeaderCards />
      <OurTeamSection />
      <Services />
      <ProjectSlider />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default HomePage;
