import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ bookMarkHandile, addToAllTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <Blog
          key={blog.id}
          bookMarkHandile={bookMarkHandile}
          addToAllTime={addToAllTime}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
