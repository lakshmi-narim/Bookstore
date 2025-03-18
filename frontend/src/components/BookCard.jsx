import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={book.image} alt={book.title} className="w-40 h-60 object-cover mx-auto" />
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-gray-700">by {book.author}</p>
      <p className="text-green-600 font-bold">${book.price}</p>
      <Link to={`/book/${book._id}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default BookCard;
