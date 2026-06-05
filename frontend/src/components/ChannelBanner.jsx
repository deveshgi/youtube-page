import Avatar from "./Avatar";

const ChannelBanner = ({ channel }) => {
  return (
    <div>

      <img
        src={channel.coverImage}
        alt=""
        className="w-full h-52 object-cover rounded-xl"
      />

      <div className="flex gap-5 mt-5">

        <Avatar
          src={channel.avatar}
          alt={channel.username}
          className="w-28 h-28"
        />

        <div>

          <h1 className="text-3xl font-bold">
            {channel.username}
          </h1>

          <p className="text-gray-500">
            {channel.subscribersCount} subscribers
          </p>

        </div>

      </div>

    </div>
  );
};

export default ChannelBanner;