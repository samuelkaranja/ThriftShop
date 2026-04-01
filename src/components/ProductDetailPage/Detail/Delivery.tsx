import { ShieldCheck, Truck } from "lucide-react";

const Delivery: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="bg-[#f9fafb] flex p-3 mb-5 rounded-xl">
        <Truck className="mr-3" color="gray" />
        <div>
          <h4 className="text-black text-[15px] font-medium pb-1">
            Fast Delivery
          </h4>
          <p className="text-gray-500 text-[14px] font-normal">
            Same-day delivery in Nairobi and surronding areas.
          </p>
        </div>
      </div>
      <div className="bg-[#f9fafb] flex p-3 mb-5 rounded-xl">
        <ShieldCheck className="mr-3" color="gray" />
        <div>
          <h4 className="text-black text-[15px] font-medium pb-1">
            Quality Guarantee
          </h4>
          <p className="text-gray-500 text-[14px] font-normal">
            All items are cleaned and quality-checked before dispatch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
