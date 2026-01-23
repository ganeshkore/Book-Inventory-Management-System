import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById } from "../services/bookService";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then((res) => setBook(res.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-gray-800 animate-fadeIn">
      <h1 className="text-3xl font-semibold mb-4">{book.title}</h1>

      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <p><span className="text-gray-400">Author:</span> {book.author}</p>
        <p><span className="text-gray-400">Publisher:</span> {book.publisher}</p>
        <p><span className="text-gray-400">Published:</span> {book.publishedDate}</p>
        <p><span className="text-gray-400">Email:</span> {book.email}</p>
        <p><span className="text-gray-400">Age:</span> {book.age}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg mb-2">Overview</h3>
        <p className="text-gray-300 leading-relaxed">{book.overview}</p>
      </div>

      <Link
        to="/"
        className="inline-block mt-6 text-indigo-400 hover:underline"
      >
        ← Back
      </Link>
    </div>
  </div>
);

};

export default BookDetails;
