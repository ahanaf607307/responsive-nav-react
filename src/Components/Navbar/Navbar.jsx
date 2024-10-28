import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu5Fill } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";

function Navbar() {
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" }
  ];

  const [open, setOpen] = useState(false);
    const handleOpenBtn = () => {
      setOpen(!open)
    }

  return (
    <div className="flex justify-end mt-5 relative z-10">
    <div onClick={()=> handleOpenBtn()} className="flex justify-end mr-4 md:hidden cursor-pointer">
    {
        open ? 
          <MdOutlineRestaurantMenu className="text-2xl " />
          : <RiMenu5Fill className="text-2xl " /> 
    }
    
    </div>
      {/* map all route */}
    
     <ul className={`mt-9  md:mt-0 absolute md:flex duration-1000 md:duration-300 justify-end ${ open ? 'top-0 bg-teal-200 md:bg-transparent  p-2 rounded-xl font-bold ' : '-top-96 md:top-0'}`}>
        {routes.map(route => <Link key={route.id} route={route} />)}
      </ul>
    
      {/* end all route */}
     
    </div>
  );
}

export default Navbar;
