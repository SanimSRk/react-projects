import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
  const { cover, title, author, img, date, time, hashtag } = blog;
  console.log(blog);

  return (
    <div className="">
      <div className="border-2 p-4 my-6 ">
        <img src={cover} alt="image" />
        <div className=" lg:flex justify-between mt-8">
          <div className=" lg:flex gap-3">
            <div className="">
              <img className="w-14" src={img} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{author} </h2>
              <p>{date}</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <h2 className="text-xl text-[#11111199] font-medium">
              {time} min read
            </h2>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <h2 className="mt-5 leading-normal lg:text-3xl font-bold">{title}</h2>
          <h2 className="my-5">{hashtag}</h2>
          <button className="btn ">Mark is red </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
