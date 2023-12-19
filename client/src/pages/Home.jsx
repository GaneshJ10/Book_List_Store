import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-100 shadow-lg">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className=" text-white bg-purple-700 hover:bg-pink-500 px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className=" text-white bg-purple-700 hover:bg-pink-500 px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700 animate__animated animate__fadeIn animate__delay-1s hover:scale-110 transition-transform duration-300 hover:text-pink-500">
          Books List
        </h1>

        <Link
          to="/books/create"
          className="text-purple-700 text-xl hover:text-pink-500 transition duration-300 ml-auto"
        >
          <MdOutlineAddBox className="text-5xl transform hover:scale-110 motion-reduce:transform-none" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
