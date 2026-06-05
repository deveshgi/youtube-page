import Avatar from "./Avatar";

const TweetCard = ({ tweet }) => {
  return (
    <div className="border rounded-xl p-4">

      <div className="flex gap-3">

        <Avatar
          src={tweet.owner.avatar}
          alt={tweet.owner.username}
          className="w-10 h-10"
        />

        <div>

          <h2 className="font-semibold">
            {tweet.owner.username}
          </h2>

          <p className="mt-2">
            {tweet.content}
          </p>

        </div>

      </div>

    </div>
  );
};

export default TweetCard;