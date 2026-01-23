# 📚 Book Inventory Management System

A modern, responsive **React-based web application** to manage a collection of books with full **CRUD (Create, Read, Update, Delete)** functionality. The application uses a clean **dark-themed UI**, supports **API-driven data**, and is deployed live using **Netlify**.

---

## 🚀 Live Demo

🔗 **Live Application:** [<inventory-management-books.netlify.app>](https://inventory-management-books.netlify.app)

🔗 **GitHub Repository:** <[https://github.com/ganeshkore/Book-Inventory-Management-System]>

---

## 🧠 Features

* 📖 View all books in a clean, responsive **table layout**
* ➕ Add new books with **proper form validation**
* ✏️ Edit existing book details
* 🗑️ Delete books with confirmation
* 🔍 View detailed information for each book
* 🌑 Elegant **dark theme UI** with icons and animations
* 📱 Fully **responsive** (mobile + desktop)
* 🔄 Real-time CRUD operations using a cloud API

---

## 🛠 Tech Stack

### Frontend

* **React** (Vite)
* **React Router DOM**
* **Tailwind CSS** (Dark Theme)
* **Lucide React** (Icons)
* **Axios** (API calls)

### Backend (API)

* **MockAPI.io** – REST API for persistent data storage

### Deployment

* **Netlify**

---

## 📂 Project Structure

```
src/
│── components/
│── pages/
│   ├── Home.jsx
│   ├── AddBook.jsx
│   ├── EditBook.jsx
│   └── BookDetails.jsx
│── services/
│   └── bookService.js
│── App.jsx
│── main.jsx
│── index.css
```

---

## 🧾 Book Data Model

```json
{
  "id": "string",
  "title": "string",
  "author": "string",
  "publisher": "string",
  "publishedDate": "string",
  "email": "string",
  "age": number,
  "overview": "string"
}
```

---

## ✅ Validation Rules

* **Title, Author, Publisher, Overview** → Required (non-empty strings)
* **Email** → Valid email format
* **Age** → Integer only

---

## 🧪 Running the Project Locally

```bash
# Clone the repository
git clone <GITHUB_REPOSITORY_LINK>

# Navigate into the project
cd book-inventory

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🌍 Deployment

The project is deployed using **Netlify**.

Netlify automatically:

* Installs dependencies
* Builds the project using `npm run build`
* Serves the `dist/` folder

---

## 📌 Key Highlights

* Clean and meaningful **Git commit history**
* Proper separation of concerns (API service layer)
* Production-style project structure
* UI focused on usability and accessibility

---

## 👨‍💻 Author

**Ganesh Kore**
Java Full Stack Developer | React Developer

---

## 📄 License

This project is created as part of a technical assignment and is free to use for learning purposes.
