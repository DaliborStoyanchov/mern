import { FiShoppingCart } from "react-icons/fi";
import getImgUrl from "../../utils/getImg";
import type { Book } from "../../models/Book";
interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <a href="/">
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt="book cover"
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </a>
        </div>
      </div>
      <div>
        <a href="/">
          <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
            Book Title
          </h3>
        </a>
        <p className="text-gray-600 mb-5">Book Description</p>
        <p className="font-medium mb-5">$100</p>
        <button className="bg-[#FFCE1A] px-12 py-2 rounded-md text-base font-[#0D0842] font-bold hover:bg-[#0D0842] hover:text-white transition-all duration-200 cursor-pointer space-x-1 flex items-center gap-1">
          <FiShoppingCart />
          <span>Add to Card</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
