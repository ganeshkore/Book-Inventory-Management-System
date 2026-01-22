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
    <div style={{ padding: "20px" }}>
      <h2>Edit Book</h2>

      <form onSubmit={handleSubmit}>
        {["title", "author", "publisher", "publishedDate", "email", "age"].map(
          (field) => (
            <div key={field}>
              <input
                type={field === "age" ? "number" : field === "email" ? "email" : "text"}
                name={field}
                value={book[field]}
                onChange={handleChange}
              />
              {errors[field] && <p style={{ color: "red" }}>{errors[field]}</p>}
            </div>
          )
        )}

        <textarea
          name="overview"
          value={book.overview}
          onChange={handleChange}
        />
        {errors.overview && <p style={{ color: "red" }}>{errors.overview}</p>}

        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
