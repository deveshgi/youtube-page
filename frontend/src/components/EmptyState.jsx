const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display."
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-semibold text-gray-700">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;