import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]); // coins, setCoins

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  // console.log(movies); // 빈배열 출력 [] -> 데이터 받아와서 출력

  return (
    <div>
      <h1>무비앱 api</h1>
      {loading ? (
        <h1>로딩중...참아</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
            key = {movie.id} // Movie에서 안받아도 되네?
            id = {movie.id} // url 파라미터
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            url={movie.url}
            />
            ))}
        </div>
      )}
      {/* <ToDo />
      <Blog /> */}
    </div>
  );
}

export default Home;
