// import React from 'react';
import PropTypes from "prop-types"
 // 새로 고침 없이, 링크 이동
import { Link } from "react-router-dom";

const Movie = ({id, title, url, summary, genres, coverImg}) => {
    // 매개변수를 왜 객체로 넣지? {} -> 구조분해 할당. props.title -> {title}
    return (
      <div>
        <img src={coverImg} alt={title} />
        {/* <h2>
            <a href="/movie">
              {title}({id})(a href 새로고침)
            </a>
          </h2> */}
          {/* Link to 새로고침 없이 */}
          {/* <Link to="/movie"> {title}</Link> */}
          <h2>
            <Link to={`/movie/${id}`}>
            {title}
            </Link>
          </h2>
        {/* <p>{url}</p> */}
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    );
};

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;