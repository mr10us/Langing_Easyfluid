export const TransparentButton = ({ children, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-gray-100 border text-gray-100 text-xl font-medium px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-gray-dark active:bg-opacity-70 transition-all duration-300"
      style={style}
    >
      {children}
    </button>
  );
};
