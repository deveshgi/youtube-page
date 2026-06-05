const ErrorState = ({
  message = "Something went wrong."
}) => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-red-600 text-xl font-semibold">
        {message}
      </h2>
    </div>
  );
};

export default ErrorState;