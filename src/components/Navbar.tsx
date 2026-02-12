import { Menu, X } from "lucide-react";

export const  Navbar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  return (
    <div className={`h-12 bg-white flex items-center px-5 border-b border-gray-200 transition-transform duration-300 ease-in-out ${isOpen? "translate-x-60" : "translate-x-0"}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <h3>BentoVeda</h3>
    </div>
  );
}
