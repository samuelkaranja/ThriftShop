import type { Social } from "./SocialLinks";

interface Props {
  sc: Social;
}

const SocialCard = ({ sc }: Props) => {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 shadow hover:shadow-xl hover:cursor-pointer">
      <div className={`w-11 h-11 p-3 rounded-full ${sc.background}`}>
        <span>{sc.icon}</span>
      </div>

      <h2 className="mt-4 text-[19px] text-black font-extrabold">{sc.title}</h2>
      <p className="text-[16px] text-gray-700 mt-2">{sc.subtitle}</p>
      <p className={`mt-2 ${sc.color}`}>{sc.href}</p>
    </div>
  );
};

export default SocialCard;
