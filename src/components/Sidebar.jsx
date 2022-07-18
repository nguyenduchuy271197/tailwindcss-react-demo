import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineQuestionCircle,
  AiOutlineTable,
} from "react-icons/ai";

const navData = [
  {
    id: 1,
    path: "/",
    name: "Home",
    icon: AiOutlineHome,
    active: true,
  },
  {
    id: 2,
    path: "/movies",
    name: "Movies",
    icon: AiOutlineTable,
  },
  {
    id: 3,
    path: "/about",
    name: "About",
    icon: AiOutlineQuestionCircle,
  },
];

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="md:col-span-1 bg-blue-200 text-right px-4">
      <div className="border-b py-2 flex items-center justify-between md:justify-end">
        <p className="text-slate-600 font-bold uppercase text-2xl">
          phimmoi.net
        </p>

        <div className="cursor-pointer md:hidden" onClick={handleToggleNav}>
          <AiOutlineMenu size={"1.5rem"} />
        </div>
      </div>

      <ul className={`text-slate-800 my-4 ${isNavOpen && "hidden"} md:block`}>
        {navData.map(({ id, name, icon: Icon, active }) => {
          return (
            <li
              key={id}
              className={`text-lg py-3 px-2 flex items-center gap-3 font-medium justify-end ${
                active &&
                "bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
              }`}
            >
              {name}
              <Icon />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
