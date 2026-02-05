import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/DailyDripLogo2.png";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-green-600 font-medium transition-colors"
  >
    {children}
  </Link>
);

type MobileLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
};

const MobileLink: React.FC<MobileLinkProps> = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-green-600 font-medium"
  >
    {children}
  </Link>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="h-10 lg:h-16" />
            {/* <span className="text-2xl font-bold text-gray-900">
              Daily<span className="text-green-600">Drip</span>
            </span> */}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/how-it-works">How It Works</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t">
          <MobileLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileLink>
          <MobileLink to="/shop" onClick={() => setIsOpen(false)}>
            Shop
          </MobileLink>
          <MobileLink to="/how-it-works" onClick={() => setIsOpen(false)}>
            How It Works
          </MobileLink>
          <MobileLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
