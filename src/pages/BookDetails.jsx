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
    <div style={{ padding: "20px", maxHeight: "100vh", overflowY: "auto" }}>
      <h2>{book.title}</h2>

      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Published Date:</strong> {book.publishedDate}</p>
      <p><strong>Email:</strong> {book.email}</p>
      <p><strong>Age:</strong> {book.age}</p>

      <h4>Overview</h4>
      <p>{book.overview}</p>

      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
};

export default BookDetails;
