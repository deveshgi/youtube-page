import SearchBar from "./SearchBar";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white border-b px-5 py-3 flex justify-between items-center z-50">

      <h1 className="text-red-600 font-bold text-2xl">
        YouTube
      </h1>

      <SearchBar />

      <Avatar
        src="https://i.pravatar.cc/150"
        alt="profile"
        className="w-10 h-10"
      />

    </header>
  );
};

export default Navbar;