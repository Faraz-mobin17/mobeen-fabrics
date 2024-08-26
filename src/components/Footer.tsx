const Footer = () => {
  return (
    <footer className="bg-pink-100 text-black py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Connect Section */}
        <div>
          <h3 className="font-semibold mb-4">CONNECT</h3>
          <p className="font-bold">Mobeen Fabrics</p>
          <p>
            <a href="https://www.google.com/maps/place/Mobeen+Fabrics/@25.3144064,83.0099519,15z/data=!4m6!3m5!1s0x398e2fc847d003ad:0x29b1ea329342a6f7!8m2!3d25.3144064!4d83.0099519!16s%2Fg%2F11qpt6t0rx?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
              Shop No. 218, 2nd Floor, Salfiah Building, Govindpura, Varanasi,
              Uttar Pradesh 221001
            </a>
          </p>
          <p>
            <strong>Store Phone Number:</strong>{" "}
            <a href="tel:+918887115543">+91 8887115543</a>
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:mobeen.fabrics@gmail.com">
              mobeen.fabrics@gmail.com
            </a>
          </p>
          <p>
            <strong>Timings:</strong> 10AM to 9PM - Mon to Sat
          </p>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="font-semibold mb-4">ABOUT US</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Stores
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Best Banarasi Saree Shop in Varanasi
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold mb-4">HELP</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery and Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns and Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ Page
              </a>
            </li>
          </ul>
        </div>

        {/* Join Our Newsletter Section */}
        <div>
          <h3 className="font-semibold mb-4">JOIN OUR NEWSLETTER</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Join our mailing list"
              className="p-2 flex-grow border border-gray-300"
            />
            <button className="bg-slate-900 text-white px-4 py-2">Join</button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto mt-8 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-600">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="#" className="hover:text-gray-600">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
