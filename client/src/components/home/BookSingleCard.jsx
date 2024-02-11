import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({ book }) => {
  return (
    <div className="border-4 border-purple-700 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl transition-shadow duration-300 hover:border-pink-500 hover:bg-gray-200">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-pink-500 rounded-lg text-white">
        {book.publishYear}
      </h2>
      <br></br>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-pink-500 text-3xl transform hover:scale-110 transition-transform duration-300" />
        <h2 className="my-1 font-semibold">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-pink-500 text-3xl transform hover:scale-110 transition-transform duration-300" />
        <h2 className="my-1 font-semibold">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black  transition-transform duration-300 hover:bg-green-200 rounded-full glow transform hover:scale-110 motion-reduce:transform-none" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-green-500 transform hover:scale-110 transition-transform duration-300" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-black hover:text-red-600 transform hover:scale-110 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
