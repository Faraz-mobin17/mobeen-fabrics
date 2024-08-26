import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <h2 className="text-center text-3xl text-slate-900 font-bold mb-8">
        Follow Us on Social Media
      </h2>
      <div className="flex justify-center space-x-6 mt-8 p-4">
        <a
          href="https://www.facebook.com/mmdot24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.instagram.com/_mmdot_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.youtube.com/@mmdot_24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 transition-colors duration-200"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://in.pinterest.com/mmdot_24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-700 transition-colors duration-200"
        >
          <FaPinterestP size={24} />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
