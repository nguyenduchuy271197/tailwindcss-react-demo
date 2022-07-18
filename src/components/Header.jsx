const Header = () => {
  return (
    <div className="flex items-center justify-center md:justify-end gap-4 px-6 h-20">
      <button className="border-2 border-slate-800 rounded-md px-6 py-2 uppercase transition-all font-semibold hover:bg-blue-500 hover:text-white hover:border-transparent">
        Login
      </button>
      <button className="border-2 border-slate-800 rounded-md min-w- px-6 py-2 uppercase transition-all font-semibold hover:bg-blue-500 hover:text-white hover:border-transparent">
        Register
      </button>
    </div>
  );
};

export default Header;
