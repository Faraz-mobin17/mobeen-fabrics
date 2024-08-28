import { images } from "../utils/constants";

export default function ArtSilkSaree() {
  return (
    <div className="p-4">
      <h2 className="text-slate-900 text-center font-bold text-3xl mb-8">
        Sarees
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 h-full ">
        {images.map((image, index) => (
          <div
            key={index}
            className=" text-white p-4 rounded-lg cursor-pointer transition-transform hover:-translate-y-2"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          >
            <p className="bg-slate-900 p-2 rounded-lg">Sarees</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="https://www.instagram.com/_mmdot_/">
          <button
            type="button"
            className="text-center bg-slate-900 text-white p-2 rounded-lg shadow hover:bg-gray-800 d-block mx-auto w-1/5 transition-colors"
          >
            View more
          </button>
        </a>
      </div>
    </div>
  );
}
