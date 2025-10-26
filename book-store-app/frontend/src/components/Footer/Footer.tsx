import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="footer logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#" className="hover:text-[#FFCE1A]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFCE1A]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFCE1A]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFCE1A]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news and
            offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-white border  border-gray-600"
            />
            <button className="bg-[#FFCE1A] px-12 py-2 rounded-md text-base text-[#0D0842] font-bold hover:bg-gray-900 hover:text-white transition-all duration-200 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-600 pt-6">
        <ul>
          <li>
            <a href="#" className="hover:text-[#FFCE1A]">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFCE1A]">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
