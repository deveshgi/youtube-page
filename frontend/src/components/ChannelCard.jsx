import Avatar from "./Avatar";

const ChannelCard = ({ channel }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 hover:shadow-lg transition">

      <Avatar
        src={channel.avatar}
        alt={channel.username}
        className="w-16 h-16"
      />

      <div className="flex-1">
        <h2 className="font-semibold text-lg">
          {channel.username}
        </h2>

        <p className="text-gray-500 text-sm">
          {channel.subscribersCount} subscribers
        </p>
      </div>

    </div>
  );
};

export default ChannelCard;