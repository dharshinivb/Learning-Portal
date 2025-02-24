export function Button({ children, variant = "default", ...props }) {
    const variants = {
      default: "bg-blue-500 hover:bg-blue-600 text-white",
      outline: "border border-gray-500 text-gray-300 hover:bg-gray-800",
      destructive: "bg-red-500 hover:bg-red-600 text-white",
    };
  
    return (
      <button className={`px-4 py-2 rounded ${variants[variant]}`} {...props}>
        {children}
      </button>
    );
  }
  