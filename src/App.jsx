import './App.css';
import Blogs from './compmont/Blogs/Blogs';
import Bookmark from './compmont/Bookmarks/Bookmark';
import Header from './compmont/header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <div className=" lg:flex justify-between w-[85%] mx-auto">
        <div className="w-2/3">
          <Blogs></Blogs>
        </div>

        <div>
          <Bookmark></Bookmark>
        </div>
      </div>
    </>
  );
}

export default App;
