import { motion } from "framer-motion";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen((event) => !event)}
      className=" p-5 rounded-ee-full absolute -left-1 top-1 z-[999] outline-none border-none"
    >
      <div
        className={`${
          !open ? "rotate-0" : "rotate-45 translate-x-[1px] translate-y-[0px]"
        } w-[18px] h-1 bg-primary mb-1 transition-all duration-300 ease-in`}
      ></div>
      <div
        className={`${
          !open ? "rotate-0" : "-rotate-45 translate-x-[1px] translate-y-[3px]"
        } w-[18px] h-1 bg-primary mb-1 transition-all duration-300 ease-in`}
      ></div>
      <div
        className={`${
          !open
            ? "rotate-0"
            : "-rotate-45 translate-x-[-10px] translate-y-[-15px]"
        } w-[18px] h-1 bg-primary mb- transition-all duration-300 ease-in`}
      ></div>
      <div
        className={`${
          !open
            ? "rotate-0 opacity-0"
            : "rotate-45 translate-x-[-10px] translate-y-[-9px] "
        } w-[18px] h-1 bg-primary mb-1 transition-all duration-300 ease-in`}
      ></div>
    </button>
  );
};

export default ToggleButton;
