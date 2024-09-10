// src/components/SareeShowcase.js
import SareeCard from "./SareeCard";
import { sarees } from "@/utils/constants";
const SareeShowcase = () => {
  return (
    <>
      <section className="bg-white">
        <h1 className="text-center text-3xl font-bold text-slate-900 my-8">
          Pure Handloom Banarasi Jamewar Saree
        </h1>
        <div className="md:container md:mx-auto md:px-4 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4 ">
            {sarees.map((saree, index) => (
              <SareeCard key={index} image={saree.image} title={saree.title} />
            ))}
          </div>
          <div className="text-center mb-5 p-3">
            <a
              href="https://www.instagram.com/_mmdot_"
              target="_blank"
              className="bg-slate-900 text-white rounded p-3 hover:bg-slate-800"
            >
              View More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SareeShowcase;
