import { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", price: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   try{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/books/", book);
    alert("Book added!");
   }
   catch(error)
   {
    alert("the error is",error);
   }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
