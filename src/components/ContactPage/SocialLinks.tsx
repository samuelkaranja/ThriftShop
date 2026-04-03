import { Instagram, Mail, Phone } from "lucide-react";
import React, { type JSX } from "react";
import Container from "../layout/Container";
import SocialCard from "./SocialCard";

export interface Social {
  id: number;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  href: string;
  color: string;
  background: string;
}

const SocialLinks: React.FC = () => {
  const Socials: Social[] = [
    {
      id: 1,
      icon: <Instagram color="red" size={19} />,
      title: "Instagram",
      subtitle: "Follow us for daily and style inspiration",
      href: "@thrifthub",
      color: "text-red-600",
      background: "bg-red-100",
    },
    {
      id: 2,
      icon: <Phone color="blue" size={19} />,
      title: "Phone",
      subtitle: "Call us during business hours",
      href: "+254 700 000 000",
      color: "text-blue-600",
      background: "bg-blue-100",
    },
    {
      id: 3,
      icon: <Mail color="purple" size={19} />,
      title: "Email",
      subtitle: "Send us an email anytime",
      href: "hello@thrifthub.co.ke",
      color: "text-purple-600",
      background: "bg-purple-100",
    },
  ];

  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Socials.map((sc) => (
            <SocialCard key={sc.id} sc={sc} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialLinks;
