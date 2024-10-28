
import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu} from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
const NavBar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:userId", name: "Profile" }
      ];
    return (
        <nav className="bg-blue-500 text-white py-4 px-9">
            <div onClick={()=>setOpen(!open)} className="text-2xl md:hidden">
                {
                    open?<FaXmark />:<IoIosMenu />
            }
            </div>
            <ul className={` ${open?'left-6':'-left-60'} md:flex md:static duration-1000 absolute  bg-blue-500`}>
           
            {
                routes.map(route => (
                       <Link key={route.id} route={route}></Link>
                   
                ))
            }
            </ul>
        </nav>
    );
};

export default NavBar;