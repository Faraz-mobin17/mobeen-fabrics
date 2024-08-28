// src/components/StoreSection.js

const StoreSection = () => {
  return (
    <div className="relative bg-slate-900 p-4  flex items-center justify-center">
      <div className="bg-opacity-50 p-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Banaras Store
        </h2>
        <p className="text-white mb-8">
          Visit mmdot to explore the finest collection of handcrafted Banarasi
          sarees and immerse yourself in the rich cultural heritage of Banaras.
          We look forward to seeing you soon!
        </p>
        <a
          href="https://www.instagram.com/_mmdot_/"
          target="_blank"
          className="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-200"
        >
          Visit Store
        </a>
      </div>
    </div>
  );
};

export default StoreSection;
