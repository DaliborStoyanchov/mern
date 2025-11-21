import { FiShoppingCart } from "react-icons/fi";

import getImgUrl from "../../utils/getImg";
import type { Book } from "../../models/Book";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = (book: Book) => {
    dispatch(addToCart(book));
  };

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt="book cover"
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {book.description.length > 80
              ? `${book.description.slice(0, 40)}...`
              : book.description}
          </p>
          <p className="font-medium mb-5">
            ${book.newPrice}
            <span className="line-through font-normal ml-2">
              ${book.oldPrice}
            </span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="bg-[#FFCE1A] px-12 py-2 rounded-md text-base font-[#0D0842] font-bold hover:bg-[#0D0842] hover:text-white transition-all duration-200 cursor-pointer space-x-1 flex items-center gap-1"
          >
            <FiShoppingCart />
            <span>Add to Card</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
