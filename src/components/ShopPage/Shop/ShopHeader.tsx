import Container from "../../layout/Container";

const ShopHeader: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="mt-3 mb-10">
          <h1 className="text-5xl font-bold mb-2">Shop Collections</h1>
          <p className="text-gray-600">
            Browse our hand-picked selection of thrift clothing
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ShopHeader;
