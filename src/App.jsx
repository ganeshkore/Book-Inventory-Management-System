import './App.css'
import AddBook from './pages/AddBook'
import BookDetails from './pages/BookDetails'
import EditBook from './pages/EditBook'
import Home from './pages/Home'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
