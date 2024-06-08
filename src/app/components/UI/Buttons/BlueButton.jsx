export const BlueButton = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} className="bg-blue text-gray-100 text-xl font-medium px-4 py-2 rounded-xl" style={style}>
      {children}
    </button>
  );
};
