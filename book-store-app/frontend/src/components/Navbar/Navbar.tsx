import { Link } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/">
            <HiOutlineBars3CenterLeft className="size-6" />
          </Link>
          <div>
            <IoSearchOutline />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div>Nav Items</div>
      </nav>
    </header>
  );
};

export default Navbar;
