import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#f9fafb] border-t border-gray-300 py-12 text-md text-gray-600">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">ThriftHub</h3>
            <p>Affordable thrift fashion for students and young adults.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Shop</li>
              <li>How It Works</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <p>WhatsApp</p>
            <p>Instagram</p>
            <p>Email: hello@thrifthub.co.ke</p>
          </div>
        </div>

        <p className="text-center mt-10 text-sm border-t border-gray-300 pt-5">
          © 2026 ThriftHub. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
