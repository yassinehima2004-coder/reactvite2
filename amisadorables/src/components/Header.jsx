import { useState } from "react";
import { Link } from "react-router-dom";



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/"},
    { name: "About", path: "/about"},
    { name: "Contact", path: "/contact"},
  ];

  return (
    <header className="w-full bg-white/80 text-[#4B2E23] text-lg font-medium shadow-md relative">
        <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between border-b border-[#EAD8C4]">
            <img src="/logo.png" alt="Logo" className="h-auto w-[200px]"/>
        
            {/*desktop*/}
            <nav className="hidden lg:flex gap-[4vw] ">
                {menuItems.map((item) => (
                    <Link key={item.name} to={item.path} className="hover:text-[#F07C1F]  hover:underline">
                        {item.name}
                    </Link>
                ))}
            </nav>    
            {/*button mobile*/}
            <button onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col gap-1.5 z-50 cursor-pointer">
                    <span className={`block h-[3px] w-[30px] bg-[#4B2E23] hover:bg-[#F07C1F] transition-all duraction-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}/>
                    <span className={`block h-[3px] w-[30px] bg-[#4B2E23] hover:bg-[#F07C1F] transition-all duraction-300 ${isOpen ? "opacity-0" : ""}`}/>
                    <span className={`block h-[3px] w-[30px] bg-[#4B2E23] hover:bg-[#F07C1F] transition-all duraction-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
            </button> 
        </div>
        {/*overlay*/}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 lg:hidden bg-black/40 z-40 transition-opacity duraction-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
        </div>
        {/*menu mobile*/}
        <div 
           className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-orange-100 shadow-lg transition-transform duraction-300 z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <nav className="flex flex-col p-6 gap-6">
                {menuItems.map((item, index) => (
                    <div key={item.name}
                      className={`transition-all duraction-300 ${isOpen 
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-5"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <Link to={item.path} 
                            onClick={() => setIsOpen(false)}
                            className="text-lg hover:underline hover:text-[#F07C1F]"
                        >
                            {item.name}
                        </Link>
                    </div>
                ))}

                </nav>  
        </div>
    </header>
  );
}
export default Header;