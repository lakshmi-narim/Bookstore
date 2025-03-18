import BookList from "../components/BookList";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-6">Welcome to My Bookstore</h1>
      <BookList />
    </div>
  );
};

export default Home;
