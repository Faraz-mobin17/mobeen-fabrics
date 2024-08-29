// src/components/SareeShowcase.js
import SareeCard from "./SareeCard";

const sarees = [
  {
    image: "/images/1.jpg", // Replace with your image URLs
    title: "Handwoven Golden Banarasi Tissue Silk Saree",
    price: "14,995.00",
    oldPrice: "18,745.00",
  },
  {
    image: "/images/2.jpg", // Replace with your image URLs
    title: "Handwoven Pantone Red Banarasi Katan Silk Saree",
    price: "13,995.00",
    oldPrice: "17,495.00",
  },
  {
    image: "/images/3.jpg", // Replace with your image URLs
    title: "Handwoven Banarasi Black Katan Silk Saree",
    price: "13,995.00",
    oldPrice: "17,495.00",
  },
  {
    image: "/images/4.jpg", // Replace with your image URLs
    title: "Handwoven Purple Banarasi Katan Soft Silk Saree",
    price: "21,750.00",
    oldPrice: "27,190.00",
  },
  {
    image: "/images/5.jpg", // Replace with your image URLs
    title: "Handwoven Purple Banarasi Katan Soft Silk Saree",
    price: "21,750.00",
    oldPrice: "27,190.00",
  },
  {
    image: "/images/6.jpg", // Replace with your image URLs
    title: "Handwoven Purple Banarasi Katan Soft Silk Saree",
    price: "21,750.00",
    oldPrice: "27,190.00",
  },
  {
    image: "/images/7.jpg", // Replace with your image URLs
    title: "Handwoven Purple Banarasi Katan Soft Silk Saree",
    price: "21,750.00",
    oldPrice: "27,190.00",
  },
  {
    image: "/images/8.jpg", // Replace with your image URLs
    title: "Handwoven Purple Banarasi Katan Soft Silk Saree",
    price: "21,750.00",
    oldPrice: "27,190.00",
  },
];

const SareeShowcase = () => {
  return (
    <>
      <section className="bg-white">
        <h2 className="text-center text-3xl font-bold text-slate-900 my-8">
          Sarees
        </h2>
        <div className="md:container md:mx-auto md:px-4 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4 ">
            {sarees.map((saree, index) => (
              <SareeCard
                key={index}
                image={saree.image}
                title={saree.title}
                price={saree.price}
                oldPrice={saree.oldPrice}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SareeShowcase;
