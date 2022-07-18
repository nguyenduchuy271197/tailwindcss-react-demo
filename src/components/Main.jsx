import Movie from "./Movie";
import { data } from "../data";

const Main = () => {
  return (
    <div className="py-3 px-5 md:py-6 md:px-10">
      <h1 className="font-bold text-3xl text-blue-900 mb-6 capitalize">
        #1 Free Online Movie Streaming Site in VietNam
      </h1>
      <h2 className="font-light text-xl pb-2 border-b border-slate-300 mb-10">
        Trending
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
        {data.map((movie) => (
          <Movie key={movie.title} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Main;
