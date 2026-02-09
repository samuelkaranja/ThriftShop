import { CreditCard, Truck, Landmark } from "lucide-react";
import Container from "../layout/Container";

const payments = [
  {
    icon: CreditCard,
    title: "M-Pesa",
    desc: "Pay instantly via M-Pesa after order confirmation",
  },
  {
    icon: Truck,
    title: "Cash on Delivery",
    desc: "Pay with cash when your order arrives",
  },
  {
    icon: Landmark,
    title: "Bank Transfer",
    desc: "Direct bank transfer option available",
  },
];

const PaymentSection: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="bg-linear-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-10">
          <h2 className="text-xl font-semibold text-center mb-10">
            Payment Options
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {payments.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index}>
                  <div className="w-14 h-14 mx-auto bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaymentSection;
