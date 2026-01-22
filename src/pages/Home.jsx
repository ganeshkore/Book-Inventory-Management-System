import React, { useEffect } from 'react'
import { getBooks } from '../services/bookService';

const Home = () => {

  useEffect(() => {
    getBooks().then((res) => console.log(res.data));
  }, []);

  return (
    <div>book detail</div>
  )
}

export default Home