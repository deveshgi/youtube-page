import { useState } from "react";
import Button from "./Button";

const CommentForm = ({ onSubmit }) => {

  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(content);

    setContent("");
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
    >

      <textarea
        className="w-full border rounded-lg p-3"
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment..."
      />

      <Button>
        Comment
      </Button>

    </form>
  );
};

export default CommentForm;