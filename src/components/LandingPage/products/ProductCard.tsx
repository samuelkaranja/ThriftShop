type Props = {
  image: string;
  title: string;
  size: string;
  price: string;
  tag?: string;
};

const ProductCard: React.FC<Props> = ({
  image,
  title,
  size,
  price,
  tag,
}: Props) => {
  return (
    <section>
      <div className="relative rounded-xl overflow-hidden bg-gray-100">
        {tag && (
          <span className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        )}
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>

      <div className="mt-3">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">Size: {size}</p>
        <p className="font-semibold mt-1">{price}</p>
      </div>
    </section>
  );
};

export default ProductCard;
