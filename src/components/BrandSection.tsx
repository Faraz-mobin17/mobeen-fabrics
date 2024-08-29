// src/components/BrandSection.js
import Image from "next/image";
const BrandSection = (): JSX.Element => {
  return (
    <section className="bg-white">
      <h2 className="text-center text-3xl font-bold text-slate-900">
        About us
      </h2>
      <div className="bg-white p-10 flex flex-col md:flex-row items-center md:items-center ">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Pure Banarasi Silk Sarees - Mobeen Fabrics
          </h2>
          <p className="text-slate-900 mb-4">
            For generations, silk sarees have been a timeless symbol of elegance
            and self-expression for any occasion. At mobeen fabrics, we draw
            inspiration from this rich cultural heritage to craft unique and
            colorful sarees that celebrate masterful craftsmanship and intricate
            designs.
          </p>
          <p className="text-slate-900 mb-8">
            mobeen fabrics has been a Banarasi Saree Manufacturer and
            Wholesaler. We offer a wide variety of handloom Banarasi sarees,
            silk unstitched suits, pure Bandhej dupattas, and much more for
            every occasion and mood.
          </p>
          <div className="flex space-x-8">
            <a href="#about" className="text-slate-900 underline">
              About Us
            </a>
            <a href="tel:+918887115543" className="text-slate-900 underline">
              Call Us - +91 8887115543
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8">
          <Image
            src="/images/saree.webp"
            alt="Banarasi Saree"
            className="w-full h-auto rounded-lg shadow-md"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
