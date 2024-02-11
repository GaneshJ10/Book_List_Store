import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        navigate("/Home");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-md p-8 shadow-md w-96 border border-gray-500">
        <h1 className="text-4xl font-bold mb-4 text-red-500 text-center">
          Delete Book
        </h1>
        {loading ? <Spinner /> : ""}
        <p className="text-gray-300 text-lg mb-6">
          Are you sure you want to delete this book?
        </p>
        <div className="flex justify-end space-x-5">
          <button
            className="text-white bg-gray-400 hover:bg-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-black hover:text-black hover:saturate-125 transition-transform ease-in-out duration-500 hover:scale-110 font-bold"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="text-white bg-red-400 hover:bg-red-700 py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-red-600 hover:saturate-125 transition-transform ease-in-out duration-500 hover:scale-110 font-bold"
            onClick={handleDeleteBook}
          >
            Yes, Delete it
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Deleting this book cannot be undone. Proceed with caution.
        </p>
      </div>
    </div>
  );
};

export default DeleteBook;
