const PlaylistCard = ({ playlist }) => {
  return (
    <div className="rounded-xl shadow p-4">

      <img
        src={playlist.thumbnail}
        alt={playlist.name}
        className="rounded-lg aspect-video object-cover"
      />

      <h2 className="font-semibold mt-3">
        {playlist.name}
      </h2>

      <p className="text-sm text-gray-500">
        {playlist.videos.length} videos
      </p>

    </div>
  );
};

export default PlaylistCard;