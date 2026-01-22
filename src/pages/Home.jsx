import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((res) => setBooks(res.data));
  }, []);

  return (
    <div style={{ padding: "20px", maxHeight: "100vh", overflowY: "auto" }}>
      <h2>Book Inventory</h2>

      <Link to="/add">
        <button>Add Book</button>
      </Link>

      <table border="1" width="100%" cellPadding="10" style={{ marginTop: "15px" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>
                <Link to={`/book/${book.id}`}>View</Link>{" | "}
                <Link to={`/edit/${book.id}`}>Edit</Link>{" | "}
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
