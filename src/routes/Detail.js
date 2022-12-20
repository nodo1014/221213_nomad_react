import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// App.js  <Route path="/movie/:id"> <Detail />

const Detail = () => {
    // console.log(useParams()); // id : "44943"
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    // console.log(id);
    // fetch한 데이터를 json 에 담는 함수
    // const getMovie = async () => { const json = await (어웨이트 fetch()).json();};
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setMovie(json.data.movie);
        // console.log(json);
        // console.log(json.data.movie.id);
        // const movie = json.data.movie; // movie가 지역변수가 되므로, 전역 사용 위해, useState로
      
    };
    
    useEffect(()=>{
        getMovie();
        }, []);
    return (
      <div>
        <h1>Detail</h1>
        <h2>{movie.title}</h2>
        <h3>
          <a href={movie.url}>토렌트 다운</a>
        </h3>
        <img src={movie.large_cover_image} />
      </div>
    );
};

export default Detail;