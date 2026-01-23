import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/bookService";
import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    getBooks().then((res) => setBooks(res.data));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = (id) => {
    if (confirm("Delete this book?")) {
      deleteBook(id).then(fetchBooks);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">
          📚 Book Inventory
        </h1>

        <Link
          to="/add"
          className="mt-3 md:mt-0 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition flex items-center gap-2"
        >
          <Plus size={18} />
          Add Book
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-800 backdrop-blur bg-white/5">
        <table className="w-full text-sm">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Author</th>
              <th className="p-4 text-left hidden md:table-cell">Publisher</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr
                key={book.id}
                className="border-t border-gray-800 hover:bg-white/5 transition"
              >
                <td className="p-4">{book.title}</td>
                <td className="p-4">{book.author}</td>
                <td className="p-4 hidden md:table-cell">{book.publisher}</td>
                <td className="p-4 flex gap-4 justify-center">
                  <Link
                    to={`/book/${book.id}`}
                    className="text-indigo-400 hover:text-indigo-300 transition"
                    title="View"
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    to={`/edit/${book.id}`}
                    className="text-yellow-400 hover:text-yellow-300 transition"
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => handleDelete(book.id)}
                    className="text-red-400 hover:text-red-300 transition"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
