// src/components/SareeCard.js

const SareeCard = ({
  image,
  title,
  price,
  oldPrice,
}: {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
}) => {
  return (
    <>
      <div className="rounded overflow-hidden bg-transparent">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        <div className="p-2 bg-transparent">
          <h5 className="text-xs text-slate-900 text-center">{title}</h5>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-slate-600">{`₹ ${price}`}</span>
            <span className="text-sm line-through text-red-500">{`₹ ${oldPrice}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SareeCard;
