import Avatar from "./Avatar";

const CommentCard = ({ comment }) => {
  return (
    <div className="flex gap-3">

      <Avatar
        src={comment.owner.avatar}
        alt={comment.owner.username}
        className="w-10 h-10"
      />

      <div>

        <h3 className="font-medium">
          {comment.owner.username}
        </h3>

        <p className="text-gray-700">
          {comment.content}
        </p>

      </div>

    </div>
  );
};

export default CommentCard;