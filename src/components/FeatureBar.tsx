// src/components/FeatureBar.js
import { FaTruck, FaUndoAlt, FaGlobe, FaGift } from "react-icons/fa";

const FeatureBar = () => {
  return (
    <>
      <section className=" bg-slate-900">
        <div className="md:container md:mx-auto md:px-4 md:py-8">
          <div className="grid md:grid-cols-4 gap-5 text-center text-white place-items-center">
            <div className="text-center">
              <div className="text-center w-full">
                <FaTruck size={24} className="w-full" />
              </div>
              <span>Free Shipping within India</span>
            </div>
            <div className="text-center">
              <div className="text-center">
                <FaUndoAlt size={24} className="w-full" />
              </div>
              <span>5 day Return Policy</span>
            </div>
            <div>
              <div className="text-center w-full">
                <FaGlobe size={24} className="w-full" />
              </div>
              <span>Worldwide Shipping</span>
            </div>
            <div>
              <div className="text-center w-full">
                <FaGift size={24} className="w-full" />
              </div>
              <span>Gift Wrap for someone special</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureBar;
