import { useState } from "react";
function PasswordInput({ label, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      {" "}
      <label className="block mb-2 text-gray-700 font-medium">
        {" "}
        {label}{" "}
      </label>{" "}
      <div className="relative">
        {" "}
        <input
          type={showPassword ? "text" : "password"}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />{" "}
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {" "}
          {showPassword ? "Hide" : "Show"}{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
export default PasswordInput;
