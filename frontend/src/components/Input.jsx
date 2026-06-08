function Input({ label, className = "", ...props }) {
  return (
    <div>
      {" "}
      <label className="block mb-2 text-gray-700 font-medium">
        {" "}
        {label}{" "}
      </label>{" "}
      <input
        className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />{" "}
    </div>
  );
}
export default Input;
