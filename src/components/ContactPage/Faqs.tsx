import React from "react";
import Container from "../layout/Container";

const Faqs: React.FC = () => {
  const questions = [
    {
      id: 1,
      title: "How do I know if an item is available?",
      subtitle:
        "All items on the website are in stock. For the latest availability, message us on WhatsApp with the item name.",
    },
    {
      id: 2,
      title: "Can I try an item before buying?",
      subtitle:
        "Yes! Visit our store during business hours to try items. You can also request additional photos via WhatsApp.",
    },
    {
      id: 3,
      title: "Do you offer student discounts?",
      subtitle:
        "We occasionally run student promotions. Follow us on Instagram and WhatsApp for exclusive deals and discount codes.",
    },
    {
      id: 4,
      title: "What is the item doesn't fit?",
      subtitle:
        "You can return or exchange items within 24 hours if they don't fit or match the description. See our return policy for details.",
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl shadow-lg px-8 py-7">
          <h2 className="text-2xl md:text-3xl text-center font-extrabold">
            Frequently Asked Questions
          </h2>
          {questions.map((question) => (
            <div className="mt-6 py-1" key={question.id}>
              <h2 className="text-lg md:text-xl text-black font-bold">
                {question.title}
              </h2>
              <p className="text-sm md:text-[17px] text-gray-500 mt-1">
                {question.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faqs;
