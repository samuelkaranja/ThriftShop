import React from "react";
import Container from "../layout/Container";
import { Clock } from "lucide-react";

const Details: React.FC = () => {
  const dates = [
    {
      id: 1,
      day: "Monday - Friday",
      time: "9:00 AM - 7:00 PM",
    },
    {
      id: 2,
      day: "Saturday",
      time: "10:00 AM - 6:00 PM",
    },
    {
      id: 3,
      day: "Sunday",
      time: "12:00 PM - 5:00 PM",
    },
  ];

  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex gap-4">
              <div className="bg-gray-950 rounded-full p-5">
                <Clock size={30} color="white" />
              </div>

              <div>
                <h1 className="text-[22px] text-gray-900 font-extrabold">
                  Visit Our Store
                </h1>
                <p className="mt-1 text-[16px] text-gray-500">
                  Come see our collection in person and try items before you
                  buy.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg text-gray-900 mb-2">ThriftHub Store</h3>
              <p className="mb-2">Kimathi Street, Nairobi CBD</p>
              <p className="mb-3">2nd Floor, Next to Java House</p>
              <p className="text-gray-600">
                *Exact location shared via WhatsApp upon request
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex gap-4">
              <div className="bg-gray-950 rounded-full p-5">
                <Clock size={30} color="white" />
              </div>

              <div>
                <h1 className="text-[22px] text-gray-900 font-extrabold">
                  Business Hours
                </h1>
                <p className="mt-1 text-[16px] text-gray-500">
                  We're here to serve you during these hours.
                </p>
              </div>
            </div>
            <div className="mt-10">
              {dates.map((dt) => (
                <div className="flex justify-between" key={dt.id}>
                  <span className="text-[17px] text-gray-500 mb-2">
                    {dt.day}
                  </span>
                  <span className="text-[17px] text-gray-800 font-medium">
                    {dt.time}
                  </span>
                </div>
              ))}

              <p className="text-gray-600 mt-1">
                *WhatsApp is available 24/7 for inquiries
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Details;
