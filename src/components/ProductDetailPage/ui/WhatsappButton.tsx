import { MessageCircle } from "lucide-react";

const WhatsappButton: React.FC = () => {
  return (
    <div className="mt-7">
      <button className="bg-green-600 flex items-center justify-center text-white text-lg font-medium min-w-full py-4 rounded-xl hover:cursor-pointer">
        <MessageCircle color="white" size={20} className="mr-3" />
        Order via WhatsApp
      </button>
    </div>
  );
};

export default WhatsappButton;
