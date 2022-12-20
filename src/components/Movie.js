// import React from 'react';
import PropTypes from "prop-types"
 // 새로 고침 없이, 링크 이동
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";


const Movie = ({id, title, url, year, summary, genres, coverImg}) => {
    // 매개변수를 왜 객체로 넣지? {} -> 구조분해 할당. props.title -> {title}
    return (
      <div>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        {/* <p>{url}</p> */}
        <h3 className={styles.movie__year}>{year}</h3>
        <p>
          {summary.length < 1
            ? `설명이 없네: ${summary.length}`
            : `${summary.slice(0, 300)} ...(더보기:::summary.slice(0,300))`}
        </p>
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