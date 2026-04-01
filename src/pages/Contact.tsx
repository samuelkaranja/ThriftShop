import React from "react";
import ContactHero from "../components/ContactPage/ContactHero";
import WhatsAppCard from "../components/ContactPage/WhatsAppCard";
import SocialLinks from "../components/ContactPage/SocialLinks";
import Details from "../components/ContactPage/Details";
import Faqs from "../components/ContactPage/Faqs";

const Contact: React.FC = () => {
  return (
    <section className="py-10">
      <ContactHero />
      <WhatsAppCard />
      <SocialLinks />
      <Details />
      <Faqs />
    </section>
  );
};

export default Contact;
