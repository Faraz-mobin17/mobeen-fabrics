// src/components/SareeCard.js

import Image from "next/image";

const SareeCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      <div className="rounded overflow-hidden bg-transparent cursor-pointer hover:shadow-lg hover:transition-shadow">
        <Image
          src={image}
          alt={title}
          className="w-full h-72 object-cover"
          width={500}
          height={500}
        />
        <div className="p-2 bg-transparent">
          <h5 className="text-xs text-slate-900 text-center">{title}</h5>
          <div className="flex items-center justify-between mt-2">
            {/* <span className="text-xs text-slate-600">{`₹ ${price}`}</span> */}
            {/* <span className="text-sm line-through text-red-500">{`₹ ${oldPrice}`}</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SareeCard;
