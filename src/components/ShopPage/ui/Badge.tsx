interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  const styles =
    label === "Like New"
      ? "bg-blue-100 text-blue-600"
      : label === "New"
        ? "bg-green-100 text-green-600"
        : "bg-gray-100 text-gray-600";

  return (
    <span
      className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${styles}`}
    >
      {label}
    </span>
  );
};

export default Badge;
