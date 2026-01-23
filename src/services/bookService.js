import axios from "axios";

const API_URL = "https://69731aa4b5f46f8b58262635.mockapi.io/books";

export const getBooks = () => axios.get(API_URL);
export const getBookById = (id) => axios.get(`${API_URL}/${id}`);
export const addBook = (book) => axios.post(API_URL, book);
export const updateBook = (id, book) => axios.put(`${API_URL}/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);
