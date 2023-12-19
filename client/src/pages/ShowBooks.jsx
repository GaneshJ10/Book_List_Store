import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full border-4 border-purple-700 hover:border-pink-500 transition duration-400">
        <BackButton />
        <h1 className="text-5xl font-extrabold text-purple-500 mb-6 text-center hover:text-purple-700 hover:saturate-125 transition-transform ease-in-out duration-500 hover:scale-110">
          Show Book
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <div className="mb-4 transition-transform duration-500 transform hover:scale-105 hover:translate-x-2">
              <span className="font-bold text-xl text-gray-700 ">Id: </span>
              <span className="text-gray-800">{book._id}</span>
            </div>
            <div className="mb-4 transition-transform duration-500 transform hover:scale-105 hover:translate-x-2">
              <span className="font-bold text-xl text-gray-700 ">Title: </span>
              <span className="text-gray-800">{book.title}</span>
            </div>
            <div className="mb-4 transition-transform duration-500 transform hover:scale-105 hover:translate-x-2">
              <span className="font-bold text-xl text-gray-700 ">Author: </span>
              <span className="text-gray-800">{book.author}</span>
            </div>
            <div className="mb-4 transition-transform duration-500 transform hover:scale-105 hover:translate-x-2">
              <span className="font-bold text-xl text-gray-700 ">
                Publish Year:{" "}
              </span>
              <span className="text-gray-800">{book.publishYear}</span>
            </div>
            <div className="mb-4 transition-transform duration-500 transform hover:scale-105 hover:translate-x-2">
              <span className="font-bold text-xl text-gray-700 ">
                Create Time:{" "}
              </span>
              <span className="text-gray-800">
                {new Date(book.createdAt).toLocaleString()}
              </span>
            </div>
            <div className="mb-4 transition-transform duration-500 transform hover:scale-105 hover:translate-x-2">
              <span className="font-bold text-xl text-gray-700 ">
                Last Update Time:{" "}
              </span>
              <span className="text-gray-800">
                {new Date(book.updatedAt).toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
