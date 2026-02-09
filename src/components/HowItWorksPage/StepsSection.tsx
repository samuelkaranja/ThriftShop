import { Search, MessageCircle, Truck, CreditCard } from "lucide-react";
import Container from "../layout/Container";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Browse & Choose",
    desc: "Explore our collection of hand-picked thrift clothing. Filter by category, size, or condition to find your perfect item.",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Place Your Order",
    desc: "Order directly through our website or chat with us on WhatsApp. We'll confirm availability and delivery details.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Fast Delivery",
    desc: "Get your items delivered within Nairobi and surrounding areas. Same-day pickup available at our location.",
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Flexible Payment",
    desc: "Pay via M-Pesa, cash on delivery, or bank transfer. Choose the payment method that works best for you.",
  },
];

const StepsSection: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                <div className="w-16 h-16 mx-auto bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-white w-6 h-6" />
                </div>

                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-md w-8 h-8 flex items-center justify-center rounded-full">
                  {step.id}
                </span>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-md text-gray-600">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StepsSection;
