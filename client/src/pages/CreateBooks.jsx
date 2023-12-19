import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-white rounded-md p-8 shadow-md w-96 border-4 border-purple-700 hover:border-pink-500 transition-all duration-400">
        <BackButton />
        <h1 className="text-4xl font-bold mb-4 text-center">Create Book</h1>
        {loading && <Spinner />}
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-800">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 hover:border-purple-700 transition-all duration-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-800">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 hover:border-purple-700 transition-all duration-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-800 font-bold">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500 hover:border-purple-700 transition-all duration-300"
          />
        </div>
        <button
          className="w-full bg-purple-700 text-white py-2 rounded-md hover:saturate-125 transition-transform ease-in-out duration-500 hover:scale-110 hover:bg-pink-500"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
