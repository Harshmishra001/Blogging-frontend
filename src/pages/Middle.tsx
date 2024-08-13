import React from "react";

const Middle =()=>{
    const [isDropdownVisible, setDropdownVisible] = React.useState(false);
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
    return (
        <div className="flex flex-1 justify-between ">
        <div className="flex-1 bg-zinc-200 px-8">
          <h1 className="text-7xl font-serif text-sky-950 pt-10">
            Human
          </h1>
          <h1 className="text-7xl font-serif text-sky-950">
            stories & ideas
          </h1>
          <p className="text-2xl text-gray-700 font-serif pt-6">
            A place to read, write, and deepen your understanding
          </p><br></br>
          <div className="relative">
            <button
              className="bg-sky-950 text-white font-serif py-3 px-6 rounded-full text-lg hover:bg-sky-800"
              onClick={toggleDropdown}
            >
              Start your journey
            </button>
            {isDropdownVisible && (
              <ul className="border border-gray-300 mt-2 rounded-md shadow-lg w-48">
                <a href="/signup">
                <li
                  className="py-2 px-4 text-sky-950 font-mono hover:bg-sky-950 hover:text-slate-50 cursor-pointer" 
                >
                  Signup
                </li>
                </a>
                <a href="signin">
                <li
                  className="py-2 px-4 text-sky-950 font-mono hover:bg-sky-950 hover:text-slate-50 cursor-pointer"
                >
                  Signin
                </li>
                </a>
              </ul>
            )}
          </div>
        </div>
        <div className="flex-1 bg-zinc-200">
          <img
            src="https://cdn.imgbin.com/3/21/1/imgbin-laptop-coffee-paper-notebook-writing-laptop-ySpH1urY8VP8Ya2unJaQ7jVfZ.jpg"
            alt="Blog related"
            className="max-w-full h-full"
          />
        </div>
      </div>
    )
}

export default Middle
