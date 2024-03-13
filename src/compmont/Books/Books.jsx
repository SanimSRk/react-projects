const Books = ({ books }) => {
  console.log(books);
  return (
    <div className=" bg-white p-5 rounded-lg mb-5">
      <h2 className="font-semibold">{books.title}</h2>
    </div>
  );
};

export default Books;
