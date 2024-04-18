// react router
import { NavLink } from "react-router-dom";

const Link = () => {
  // navigation data
  const navData = [
    { name: "home", path: "/" },
    { name: "products", path: "/products" },

  ];
  return (
      <ul className="flex gap-y-5 gap-x-8 items-center">
      {navData.map((item, index) => (
          <li className="text-[20px] capitalize" key={index}>
            <a href={item.path}>{item.name}</a>
        </li>
      ))}
      </ul>
  );
};

export default Link;
