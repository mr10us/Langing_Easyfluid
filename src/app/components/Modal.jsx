const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50" 
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-modal-gradient rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <div className="absolute top-0 right-0 flex justify-end p-2">
          <button onClick={onClose} className="text-gray-200 text-4xl font-light leading-[0.5] mr-4 mt-4 hover:text-white">
            &times;
          </button>
        </div>
        <div className="p-10 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
