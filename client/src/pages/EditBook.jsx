import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited successfully", { variant: "success" });
        navigate("/Home");
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
        <h1 className="text-4xl font-bold mb-4 text-center">Edit Book</h1>
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
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
