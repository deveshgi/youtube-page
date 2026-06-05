const SubscribeButton = ({
  isSubscribed,
  onToggle
}) => {
  return (
    <button
      onClick={onToggle}
      className={`px-5 py-2 rounded-full text-white
      ${
        isSubscribed
          ? "bg-gray-500"
          : "bg-red-600"
      }`}
    >
      {isSubscribed
        ? "Subscribed"
        : "Subscribe"}
    </button>
  );
};

export default SubscribeButton;