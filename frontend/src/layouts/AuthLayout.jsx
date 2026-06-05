const RecentVideosTable = ({
  videos
}) => {
  return (
    <table className="w-full">

      <thead>
        <tr>
          <th>Title</th>
          <th>Views</th>
        </tr>
      </thead>

      <tbody>

        {videos.map(video => (
          <tr
            key={video._id}
          >
            <td>{video.title}</td>

            <td>{video.views}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
};

export default RecentVideosTable;