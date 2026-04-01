import React from "react";
import Container from "../layout/Container";

const ContactHero: React.FC = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5">Get in Touch</h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Have questions? Want to check if an item is available? We're here to
            help! Reach out through any of the channels below.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
