export default function Visitus() {
  return (
    <>
      <div className="mt-8 p-4 bg-slate-900 text-white">
        <h2 className="text-center text-3xl  font-bold">
          You can visit us here!
        </h2>
        <div className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-12 gap-4 place-items-center">
            <div className="col-span-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14426.785127430252!2d83.0099519!3d25.3144064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2fc847d003ad%3A0x29b1ea329342a6f7!2sMobeen%20Fabrics!5e0!3m2!1sen!2sin!4v1724684364516!5m2!1sen!2sin"
                width="1200"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-span-2 ">
              <h2 className="text-2xl  font-bold mb-3 text-pink-300">
                Our Hours
              </h2>
              <p className=" text-[16px]">
                <strong>Monday - Friday:</strong> 10am - 6pm
              </p>
              <p className=" text-[16px] mt-2">
                <strong>Saturday:</strong> 10am - 2pm
              </p>
              <p className=" text-[16px] mt-2">
                <strong>Sunday:</strong> Closed
              </p>
              <h2 className="text-2xl  font-bold mb-3 mt-3 text-pink-300">
                Our Location
              </h2>
              <address>
                <p className=" text-[16px]">
                  <strong>Address:</strong> Shop No. 218, 2nd Floor, Salfiah
                  Building, Govindpura, Varanasi, Uttar Pradesh 221001
                </p>
                <p className=" text-[16px]">
                  <strong>Phone:</strong> +91 7408991923
                </p>
                <p className=" text-[16px]">
                  <strong>Email:</strong> mobeen.fabrics@gmail.com
                </p>
              </address>
              <a
                href="https://www.google.com/maps/place/Mobeen+Fabrics/@25.3144064,83.0099519,15z/data=!4m6!3m5!1s0x398e2fc847d003ad:0x29b1ea329342a6f7!8m2!3d25.3144064!4d83.0099519!16s%2Fg%2F11qpt6t0rx?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <button className="bg-pink-100 p-2 text-slate-900 rounded mt-2 capitalize text-sm hover:bg-pink-200 transition-colors">
                  get direction
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
