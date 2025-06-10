import logo from "../assets/mf-logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white z-[999] pointer-events-none mb-8">
      <nav className="flex gap-5 flex-row justify-around items-center fixed top-5 left-1/2 transform -translate-x-1/2 p-8px rounded-xl shadow-lg w-[1000px]  z-[1000]">
        <img className="logo" src={logo} alt="Logo" />
        <input
          type="text"
          placeholder="Search book"
          className="border border-[rgb(216,211,211)] px-12px py-2 bg-white text-black"
        />
        <div className="flex items-center justify-center gap-5">
          <button className="bg-green-600 text-white text-sm pt-8 pb-8 ">
            Add New Book
          </button>
          <span>Contact</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
