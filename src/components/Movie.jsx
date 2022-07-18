const Movie = ({ src, title, main, runtime }) => {
  return (
    <div className="relative rounded-md overflow-hidden bg-blue-900 transition-all cursor-pointer shadow-md shadow-slate-500 hover:shadow-xl hover:shadow-slate-700">
      <img src={src} alt="" className="w-full" />
      <div className="p-4 text-white">
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="font-thin">{main}</p>
      </div>
      <p className="absolute top-2 left-2 z-10 bg-slate-100 px-2 py-1 rounded text-sm">
        {runtime}m
      </p>
    </div>
  );
};

export default Movie;
