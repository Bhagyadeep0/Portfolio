import Link from "./Link";

const Header = () => {
  return (
    <header className="w-full h-[90px] flex items-center bg-yellow-300/50 backdrop-blur-[6px] fixed top-0 z-[999]">
      <div className="flex items-center justify-between container mx-auto">
        {/* links */}
        <Link />

        {/* logo */}
        <div>
          <img src="/Logo.svg" alt="Logo" />
        </div>
        {/* buttons */}
        <div>
          <button>Go</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
