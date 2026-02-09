import Container from "../layout/Container";

const CTASection: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="text-center space-y-6">
          <h2 className="text-xl font-semibold">Ready to Start Shopping?</h2>
          <p className="text-gray-600 text-sm">
            Browse our collection and find your perfect thrift piece today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Browse Collection
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
