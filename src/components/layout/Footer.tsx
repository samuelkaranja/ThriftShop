import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "../../assets/DailyDripLogo2.png";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9fafb] py-12 text-md text-gray-600">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} className="h-10 lg:h-9" />
            </Link>
            <p className="text-[#333] my-3">
              Affordable thrift fashion for students and young adults.
            </p>
            <p className="flex items-center gap-2 text-[#333] text-sm mb-1">
              <MapPin size={16} /> Nairobi, Kenya
            </p>
            <p className="flex items-center gap-2 text-[#333] text-sm">
              <Mail size={16} /> hello@dailydrip.co.ke
            </p>
          </div>

          <div className="text-center space-y-3">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/shop"
                  className="hover:underline hover:text-emerald-500"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:underline hover:text-emerald-500"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:underline hover:text-emerald-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 mx-auto">
            <h4 className="font-semibold mb-2 text-center">Connect</h4>

            <div className="flex items-center gap-4">
              <a
                href="/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-br hover:from-[#6C2BD9] hover:to-[#F97316] flex items-center justify-center transition-all duration-200 group"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-br hover:from-[#6C2BD9] hover:to-[#F97316] flex items-center justify-center transition-all duration-200 group"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-br hover:from-[#6C2BD9] hover:to-[#F97316] flex items-center justify-center transition-all duration-200 group"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-sm border-t border-gray-300 pt-5">
          © 2026 DailyDrip. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
