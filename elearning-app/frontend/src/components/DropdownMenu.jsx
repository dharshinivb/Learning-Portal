import { useState } from "react";

export function DropdownMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-gray-700 rounded">
        {children[0]} {/* Button */}
      </button>
      {isOpen && <div className="absolute right-0 mt-2 w-48 bg-gray-800 p-2 rounded shadow-lg">{children.slice(1)}</div>}
    </div>
  );
}

export function DropdownItem({ children, onClick }) {
  return (
    <div className="px-4 py-2 text-gray-200 hover:bg-gray-700 cursor-pointer rounded" onClick={onClick}>
      {children}
    </div>
  );
}
