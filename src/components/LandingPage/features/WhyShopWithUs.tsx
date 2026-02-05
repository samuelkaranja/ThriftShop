import Container from "../../layout/Container";
import { CheckCircle, Sparkles, Truck } from "lucide-react";

const features = [
  {
    title: "Affordable Prices",
    description:
      "Quality fashion that doesn't break the bank. Perfect for student budgets.",
    icon: CheckCircle,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Hand-Picked & Cleaned",
    description:
      "Every item is carefully selected, cleaned, and quality-checked before listing.",
    icon: Sparkles,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick delivery within Nairobi and surrounding areas. Same-day pickup available.",
    icon: Truck,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

const WhyShopWithUs = () => {
  return (
    <section className="bg-[#f9fafb] py-20">
      <Container>
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
          Why Shop With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${feature.bg}`}
                >
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                <h3 className="font-semibold mb-2">{feature.title}</h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyShopWithUs;
