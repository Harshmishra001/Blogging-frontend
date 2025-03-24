import React from "react";

const Middle = () => {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex flex-col lg:flex-row flex-1 justify-between bg-black">
      <div className="flex-1 px-8">
        <h1 className="text-7xl font-serif text-slate-50 pt-10">𝗣𝗲𝗼𝗽𝗹𝗲'𝘀</h1>
        <h1 className="text-7xl font-serif text-slate-50"> 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲𝘀 & 𝗶𝗻𝘀𝗶𝗴𝗵𝘁𝘀</h1>
        <p className="text-2xl text-orange-600 font-serif pt-6">       
        A platform for reading, writing, and enriching your insights.
        </p>
        <br />
        <div className="relative">
          <button
            className="bg-orange-600 text-white font-serif py-3 px-6 rounded-full mb-8 lg:mb-0 text-lg hover:bg-yellow-500"
            onClick={toggleDropdown}
          >
            Start your journey
          </button>
          {isDropdownVisible && (
            <ul className="border border-gray-300 mt-2 rounded-md shadow-lg w-48">
              <a href="/signup">
                <li className="py-2 px-4 bg-orange-600 text-white font-mono hover:bg-yellow-500 hover:text-slate-50 cursor-pointer">
                  Signup
                </li>
              </a>
              <a href="signin">
                <li className="py-2 px-4 bg-orange-600 text-white font-mono hover:bg-yellow-500 hover:text-slate-50 cursor-pointer">
                  Signin
                </li>
              </a>
            </ul>
          )}
        </div>
      </div>
      <div className="flex-1">
        <img
          src="https://img.freepik.com/premium-photo/rocket-launch-from-laptop-start-up-business-concept-generative-ai_170984-9301.jpg"
          alt="Blog related"
          className="max-w-full h-auto lg:h-full"
        />
      </div>
    </div>
  );
};

export default Middle;