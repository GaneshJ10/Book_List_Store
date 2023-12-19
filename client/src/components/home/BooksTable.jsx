import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto bg-gray-200 rounded-lg p-4">
      <table className="w-full border-separate border-spacing-2 border-purple-600">
        <thead className="bg-purple-700 text-white">
          <tr className=" hover:bg-pink-500">
            <th className="py-2 px-4 text-left border-b border-purple-600">
              No
            </th>
            <th className="py-2 px-4 text-left border-b border-purple-600">
              Title
            </th>
            <th className="py-2 px-4 text-left border-b border-purple-600 max-md:hidden">
              Author
            </th>
            <th className="py-2 px-4 text-left border-b border-purple-600 max-md:hidden">
              Publish Year
            </th>
            <th className="py-2 px-4 text-left border-b border-purple-600">
              Operations
            </th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="h-8 hover:bg-pink-300 transition duration-500"
            >
              <td className="py-2 px-4 border-b border-purple-600">
                {index + 1}
              </td>
              <td className="py-2 px-4 border-b border-purple-600">
                {book.title}
              </td>
              <td className="py-2 px-4 max-md:hidden border-b border-purple-600">
                {book.author}
              </td>
              <td className="py-2 px-4 max-md:hidden border-b border-purple-600">
                {book.publishYear}
              </td>
              <td className="py-2 px-4 border-b border-purple-600">
                <div className="flex justify-center gap-x-4">
                  <div className="flex justify-center gap-x-4">
                    <Link
                      to={`/books/details/${book._id}`}
                      className="text-green-800 hover:text-green-600 transition duration-300 p-2 bg-green-100 hover:bg-green-200 rounded-full glow transform hover:scale-110 motion-reduce:transform-none"
                    >
                      <BsInfoCircle />
                    </Link>
                    <Link
                      to={`/books/edit/${book._id}`}
                      className="text-yellow-600 hover:text-yellow-400 transition duration-300 p-2 bg-yellow-100 hover:bg-yellow-200 rounded-full glow transform hover:scale-110 motion-reduce:transform-none"
                    >
                      <AiOutlineEdit />
                    </Link>
                    <Link
                      to={`/books/delete/${book._id}`}
                      className="text-red-600 hover:text-red-400 transition duration-300 p-2 bg-red-100 hover:bg-red-200 rounded-full glow transform hover:scale-110 motion-reduce:transform-none"
                    >
                      <MdOutlineDelete />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
