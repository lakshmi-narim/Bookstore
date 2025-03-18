import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(response => setBooks(response.data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
