function AuthCard({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {" "}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {" "}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          {" "}
          {title}{" "}
        </h1>{" "}
        <p className="text-center text-gray-500 mb-8"> {subtitle} </p>{" "}
        {children}{" "}
      </div>{" "}
    </div>
  );
}
export default AuthCard;
