import { MessageCircle } from "lucide-react";
import React from "react";
import Container from "../layout/Container";

const WhatsAppCard: React.FC = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="bg-green-50 rounded-2xl p-10 text-center">
          <MessageCircle className="mx-auto mb-5" color="#00a63e" size={40} />
          <h2 className="text-4xl font-semibold mb-3">
            Chat with Us on WhatsApp
          </h2>
          <p className="text-gray-600 mb-7">
            Get instant responses to your questions and place orders directly
            through WhatsApp
          </p>
          <button className="bg-green-600 flex items-center text-white text-lg mx-auto px-8 py-3 rounded-lg">
            <MessageCircle className="mr-2" />
            Open WhatsApp
          </button>
        </div>
      </Container>
    </div>
  );
};

export default WhatsAppCard;
