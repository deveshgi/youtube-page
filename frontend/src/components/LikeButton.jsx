import { ThumbsUp } from "lucide-react";

const LikeButton = ({
  likesCount,
  onLike
}) => {
  return (
    <button
      onClick={onLike}
      className="flex gap-2 items-center bg-gray-100 px-4 py-2 rounded-full"
    >
      <ThumbsUp size={18} />

      {likesCount}
    </button>
  );
};

export default LikeButton;