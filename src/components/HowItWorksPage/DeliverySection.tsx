import Container from "../layout/Container";

const DeliverySection: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
          <h2 className="text-xl font-semibold text-center mb-10">
            Delivery & Coverage
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold mb-4">Delivery Areas</h3>
              <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Nairobi CBD and surrounding areas</li>
                <li>University campuses (UoN, USIU, KU, etc.)</li>
                <li>Westlands, Kilimani, Ngong Road</li>
                <li>Thika Road, Eastlands, South C/B</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Delivery Times</h3>
              <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Same-day delivery for orders before 2 PM</li>
                <li>Next-day delivery for later orders</li>
                <li>Free pickup at our location in Nairobi</li>
                <li>Delivery fee: Ksh 200 within Nairobi</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DeliverySection;
