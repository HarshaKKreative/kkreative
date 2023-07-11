import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import CareerPage from "../CareerPage/CareerPage";
import HomePage from "../HomePage/HomePage";
import Automotive from "../Industries/Automotive/Automotive";
import Banking from "../Industries/Banking/Banking";
import ApplicationDevelopment from "../ServicesPage/ApplicationDevelopment/ApplicationDevelopment";
import CloudManagement from "../ServicesPage/CloudManagement/CloudManagement";
import ECommerce from "../ServicesPage/ECommercePage/ECommerce";
import MobileApplicationDevelopment from "../ServicesPage/MobileApplicationDevelopment/MobileApplicationDevelopment";
import QualityAssurance from "../ServicesPage/QualityAssurance/QualityAssurance";
import ConsumerGoods from "../Industries/ConsumerGoods/ConsumerGoods";
import HealthCare from "../Industries/HealthCare/HealthCare";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route
        path="/services-application-development"
        element={<ApplicationDevelopment />}
      />
      <Route path="/services-cloud-management" element={<CloudManagement />} />
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
      <Route path="/automotive" element={<Automotive />} />
      <Route path="/banking" element={<Banking />} />
      <Route path="/consumer-goods" element={<ConsumerGoods />} />
      <Route path="/healthcare" element={<HealthCare/>} />
    </Routes>
  );
}

export default AppRoutes;
