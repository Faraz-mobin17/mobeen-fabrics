// src/components/FeatureBar.js
import { FaTruck, FaUndoAlt, FaGlobe, FaGift } from "react-icons/fa";

const FeatureBar = () => {
  return (
    <div className="bg-slate-900 py-6 flex justify-around text-center text-white">
      <div className="flex items-center space-x-2">
        <FaTruck size={24} />
        <span>Free Shipping within India</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaUndoAlt size={24} />
        <span>5 day Return Policy</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaGlobe size={24} />
        <span>Worldwide Shipping</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaGift size={24} />
        <span>Gift Wrap for someone special</span>
      </div>
    </div>
  );
};

export default FeatureBar;
