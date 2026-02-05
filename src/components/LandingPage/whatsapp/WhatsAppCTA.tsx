import { MessageCircle } from "lucide-react";
import Container from "../../layout/Container";

const WhatsAppCTA = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-green-50 rounded-2xl p-10 text-center">
          <MessageCircle className="mx-auto mb-5" color="#00a63e" size={40} />
          <h2 className="text-4xl font-semibold mb-3">
            Shop Directly via WhatsApp
          </h2>
          <p className="text-gray-600 mb-7">
            Prefer to order via WhatsApp? Chat with us and we’ll help you find
            the perfect outfit.
          </p>
          <button className="bg-green-600 flex items-center text-white text-lg mx-auto px-8 py-3 rounded-lg">
            <MessageCircle className="mr-2" />
            Chat on WhatsApp
          </button>
        </div>
      </Container>
    </section>
  );
};

export default WhatsAppCTA;
