import { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";

//react-icons
import {
  FaGithubAlt,
  FaXTwitter,
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Navbar = () => {
  const navbarData = [
    {
      name: "Github",
      icon: <FaGithubAlt />,
      path: "https://github.com/Bhagyadeep0",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      path: "https://twitter.com/bhagyadeepghosh",
    },
    {
      name: "Behance",
      icon: <FaBehance />,
      path: "https://www.behance.net/bhagyadeep_ghosh",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/bghosh0",
    },
    {
      name: "Insatgram",
      icon: <FaInstagram />,
      path: "https://www.instagram.com/b_g030/",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    window.scrollY > 50 ? setIsVisible(true) : setIsVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <header
      className={`fixed w-screen top-0 z-[999] transition-all duration-500 ease-in ${
        isVisible
          ? "bg-primary/80 backdrop-blur-[6px] text-white"
          : "bg-transparent text-primary"
      } `}
    >
      <Sidebar />
      <div className="container flex items-center justify-center md:justify-between h-[100px]  mx-auto">
        <div className="font-[600] text-xl hidden md:flex">Bhagyadeep</div>
        <div className="flex gap-5 text-2xl">
          {navbarData.map((item, index) => (
            <a
              href={item.path}
              target="_blank"
              key={index}
              className="flex flex-col items-center group"
            >
              <span>{item.icon}</span>
              {/* tooltip */}
              <div className=" pointer-events-none relative hidden md:flex  opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <span
                  className={`${
                    isVisible ? "bg-value5/50" : "bg-primary/10"
                  } absolute -bottom-[40px] -left-5  text-lg font-bold leading-none px-2 py-1 rounded-full `}
                >
                  {item.name}
                </span>
                {/* tooltip triangle */}
                <span
                  className={` ${
                    isVisible ? "border-value5/50" : "border-l-primary/10"
                  } border-solid border-l-8 -rotate-90 border-y-transparent border-y-[6px] border-r-transparent border-r-8 absolute -left-2`}
                ></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
