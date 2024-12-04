import React from "react";
import Header from "../../component/Header.jsx";
import HeroSection from "../../component/HeroSection.jsx";
import UpcomingExams from "../../component/UpcomingExams.jsx";
import CardsSection from "../../component/CardsSection.jsx";
import StatsSection from "../../component/StatsSection.jsx";
import Faq from "../../component/Faq.jsx";
import Subscribe from "../../component/Subscribe.jsx";
import Footer from "../../component/Footer.jsx";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <UpcomingExams />
      <CardsSection />
      <StatsSection />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
