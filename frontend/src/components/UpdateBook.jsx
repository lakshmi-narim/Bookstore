import { useState } from "react";
import axios from "axios";

const UpdateBook = ({ book }) => {
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/books/${book._id}`, updatedBook);
    alert("Book updated!");
  };

  return (
    <div>
      <input type="text" name="title" value={updatedBook.title} onChange={handleChange} />
      <input type="text" name="author" value={updatedBook.author} onChange={handleChange} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateBook;
