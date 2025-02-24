
export function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {children}
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
  