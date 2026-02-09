import Container from "../layout/Container";

const ReturnPolicy: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="bg-gray-100 rounded-2xl p-8 mx-auto">
          <h2 className="text-lg font-semibold mb-4">Return Policy</h2>
          <p className="text-sm text-gray-700 mb-4">
            We want you to love your purchase! If an item doesn’t fit or doesn’t
            match the description, you can return it within 24 hours of
            delivery.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Items must be unworn and in original condition</li>
            <li>Contact us via WhatsApp to initiate a return</li>
            <li>Full refund or exchange within 24 hours</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ReturnPolicy;
