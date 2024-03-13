import { useState } from 'react';
import './App.css';
import Blogs from './compmont/Blogs/Blogs';
import Bookmark from './compmont/Bookmarks/Bookmark';
import Header from './compmont/header/Header';

function App() {
  const [bookMark, setbookMark] = useState([]);
  const [addTime, setAddTime] = useState(0);
  const bookMarkHandile = blog => {
    const newBookMark = [...bookMark, blog];
    setbookMark(newBookMark);
  };

  const addToAllTime = blog => {
    const newTime = addTime + blog;
    setAddTime(newTime);
  };

  return (
    <>
      <Header></Header>
      <div className=" lg:flex justify-between w-[85%] mx-auto gap-5">
        <div className=" lg:w-2/3">
          <Blogs
            bookMarkHandile={bookMarkHandile}
            addToAllTime={addToAllTime}
          ></Blogs>
        </div>

        <div className="lg:w-[35%] ">
          <Bookmark bookMark={bookMark} addTime={addTime}></Bookmark>
        </div>
      </div>
    </>
  );
}

export default App;
