import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-6">

      {comments.map(comment => (
        <CommentCard
          key={comment._id}
          comment={comment}
        />
      ))}

    </div>
  );
};

export default CommentList;