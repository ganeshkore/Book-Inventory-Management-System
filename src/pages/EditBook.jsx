import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../services/bookService";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    publishedDate: "",
    email: "",
    age: "",
    overview: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    getBookById(id).then((res) => {
      setBook(res.data);
    });
  }, [id]);

  const validate = () => {
    const newErrors = {};

    if (!book.title.trim()) newErrors.title = "Title is required";
    if (!book.author.trim()) newErrors.author = "Author is required";
    if (!book.publisher.trim()) newErrors.publisher = "Publisher is required";

    if (!/^\S+@\S+\.\S+$/.test(book.email))
      newErrors.email = "Invalid email";

    if (!Number.isInteger(Number(book.age)))
      newErrors.age = "Age must be a number";

    if (!book.overview.trim())
      newErrors.overview = "Overview is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    updateBook(id, {
      ...book,
      age: Number(book.age)
    }).then(() => navigate("/"));
  };

  return (
  <div className="max-w-3xl mx-auto p-4 md:p-8">
    <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-gray-800 animate-fadeIn">
      <h2 className="text-2xl mb-6 font-semibold">Edit Book</h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {["title", "author", "publisher", "publishedDate", "email", "age"].map(
          (field) => (
            <div key={field}>
              <input
                type={field === "age" ? "number" : field === "email" ? "email" : "text"}
                name={field}
                placeholder={field}
                value={book[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
              {errors[field] && (
                <p className="text-red-400 text-sm mt-1">
                  {errors[field]}
                </p>
              )}
            </div>
          )
        )}

        <textarea
          name="overview"
          placeholder="Overview"
          value={book.overview}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-indigo-500"
        />

        <button className="mt-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition">
          Save Book
        </button>
      </form>
    </div>
  </div>
);

};

export default EditBook;
