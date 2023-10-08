import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

const BlogPost = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-5 mt-5 mb-10 ">
      <h4 className="text-2xl text-center text-orange-500 font-medium">
        OUR BLOGS
      </h4>
      <h2 className="text-5xl text-white text-center font-bold">
        LATEST BLOG POST
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 m-4 xl:m-0 ">
        {/* First card */}
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img src={blog1} alt="ui/ux review check" />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Gain Your Muscle
            </h4>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              Because its about motivating the doers. Because I am here to
              follow my dreams and inspire others.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              <img
                alt="natali craig"
                src={blog1}
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                data-tooltip-target="author-1"
              />
              <div
                data-tooltip="author-1"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
              ></div>
              <img
                alt="tania andrew"
                src={blog2}
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                data-tooltip-target="author-2"
              />
              <div
                data-tooltip="author-2"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
              ></div>
            </div>
            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              October 10
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img src={blog2} alt="ui/ux review check" />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Gain Your Muscle
            </h4>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              Because it is about motivating the doers. Because I am here to
              follow my dreams and inspire others.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              <img
                alt="natali craig"
                src={blog2}
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                data-tooltip-target="author-1"
              />
              <div
                data-tooltip="author-1"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
              ></div>
              <img
                alt="tania andrew"
                src={blog3}
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                data-tooltip-target="author-2"
              />
              <div
                data-tooltip="author-2"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
              ></div>
            </div>
            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              October 10
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img src={blog3} alt="ui/ux review check" />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Gain Your Muscle
            </h4>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              Because it is about motivating the doers. Because I am here to
              follow my dreams and inspire others.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              <img
                alt="natali craig"
                src={blog3}
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                data-tooltip-target="author-1"
              />
              <div
                data-tooltip="author-1"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
              ></div>
              <img
                alt="tania andrew"
                src={blog2}
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                data-tooltip-target="author-2"
              />
              <div
                data-tooltip="author-2"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
              ></div>
            </div>
            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              October 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
