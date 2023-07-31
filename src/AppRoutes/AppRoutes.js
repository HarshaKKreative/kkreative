import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import CareerPage from "../CareerPage/CareerPage";
import HomePage from "../HomePage/HomePage";
import Banking from "../Industries/Banking/Banking";
import HealthCare from "../Industries/HealthCare/HealthCare";
import ApplicationDevelopment from "../ServicesPage/ApplicationDevelopment/ApplicationDevelopment";
import ECommerce from "../ServicesPage/ECommercePage/ECommerce";
import MobileApplicationDevelopment from "../ServicesPage/MobileApplicationDevelopment/MobileApplicationDevelopment";
import QualityAssurance from "../ServicesPage/QualityAssurance/QualityAssurance";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route
        path="/services-application-development"
        element={<ApplicationDevelopment />}
      />

      <Route path="/services-e-commerce" element={<ECommerce />} />

      <Route
        path="/services-mobile-application-development"
        element={<MobileApplicationDevelopment />}
      />
      <Route
        path="/services-quality-assurance"
        element={<QualityAssurance />}
      />
      <Route path="/careers" element={<CareerPage />} />

      <Route path="/banking" element={<Banking />} />

      <Route path="/healthcare" element={<HealthCare />} />
    </Routes>
  );
}

export default AppRoutes;
