import React from "react";
import AboutSection from "@/components/aboutUs_components/AboutSection";
import InformationOfAboutUs from "@/components/aboutUs_components/InformationOfAboutUs";
import TitleOfAboutUs from "@/components/aboutUs_components/TitleOfAboutUs";
import HeaderOfAboutUs from "@/components/aboutUs_components/HeaderOfAboutUs";
export default function AboutUs() {
  return (
    <div>
      <TitleOfAboutUs />
      <HeaderOfAboutUs />
      <AboutSection />
      <InformationOfAboutUs />
    </div>
  );
}
