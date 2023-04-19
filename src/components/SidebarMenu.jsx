import { useState } from "react";
import { NavLink } from "react-router-dom";

// Icons
import {
  BiHomeAlt,
  BiInfoCircle,
  BiMailSend,
  BiLogIn
} from "react-icons/bi"
import { BsClockHistory } from "react-icons/bs"
import {GrTextWrap} from "react-icons/gr"
import { MdOutlineWorkOutline } from "react-icons/md"
import { VscPinned } from "react-icons/vsc"
import {CiCircleChevLeft} from "react-icons/ci"
import {RiHandCoinLine} from "react-icons/ri"

const App = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Home", src: "/", icon: <BiHomeAlt className="text-xl"/> },
    { title: "About Me", src: "/about", icon: <BiInfoCircle className="text-xl"/> },
    { title: "Portfolio", src: "/portfolio", icon: <MdOutlineWorkOutline className="text-xl"/> },
    { title: "Services", src: "/services", icon: <RiHandCoinLine className="text-xl"/> },
    { title: "Contact ", src: "/contact",  icon: <BiMailSend className="text-xl"/> },
    { title: "Blog Home", src: "/blog", gap: true, icon: <GrTextWrap className="text-xl"/> },
    { title: "New Uploads", src: "/blog/new", icon: <BsClockHistory className="text-xl" /> },
    { title: "Pinned ", src: "/blog/pinned",  icon: <VscPinned className="text-xl"/> },
    { title: "Login", src: "/login", gap: true, icon: <BiLogIn className="text-xl"/> },
  ];

  return (
    <div className="flex fixed left-0 top-0">
      <div className={` ${open ? "w-72 mobile:p-5" : "w-20 mobile:w-[.5px]"} bg-white h-screen desktop:p-5 pt-8 relative duration-300 border-r`} >

        <CiCircleChevLeft className={`absolute cursor-pointer -right-3 top-9 mobile:-right-14 w-8 h-8 text-lg bg-black text-white rounded-full ${open ? "mobile:-right-3" : "rotate-180"}`}
        onClick={() => setOpen(!open)} />

        <div className="flex gap-x-3 items-center">
          <img src="images/logoblack.png" alt="NavbarLogo" className={`cursor-pointer duration-500 w-16 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-black origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
            PAVSEVER.COM
          </h1>
        </div>

        <nav className="pt-6">
          {Menus.map((Menu, index) => (
            <NavLink
              to={Menu.src}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-zinc-200 text-zinc-900 font-medium text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
              onClick={() => setOpen(false)}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </NavLink>
          ))}
        </nav>

      </div>

    </div>
  );
};
export default App;