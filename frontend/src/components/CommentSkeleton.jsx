const CommentSkeleton = () => {
  return (
    <div className="animate-pulse flex gap-3">

      <div className="w-10 h-10 rounded-full bg-gray-300"></div>

      <div className="flex-1">

        <div className="h-4 bg-gray-300 rounded w-1/4"></div>

        <div className="h-3 bg-gray-200 rounded mt-3"></div>

      </div>

    </div>
  );
};

export default CommentSkeleton;