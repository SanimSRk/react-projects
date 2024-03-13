import Books from '../Books/Books';

const Bookmark = ({ bookMark, addTime }) => {
  return (
    <div className="mt-6">
      <div className="bg-[#6047EC1A] text-center py-5">
        <h2 className="text-2xl font-bold text-[#6047EC] ">
          Spent time on read :<span>{addTime}</span> min
        </h2>
      </div>
      <div className="bg-[#6047EC1A] mt-5 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Bookmarked Blogs:{bookMark.length}
        </h2>

        <div>
          {bookMark.map(books => (
            <Books key={books.id} books={books}></Books>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
