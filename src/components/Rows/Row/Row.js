import React, { useEffect, useState } from 'react'; 
import './row.css'; 
import axios from '../../../utils/axios'; 
import movieTrailer from 'movie-trailer'; 
import YouTube from 'react-youtube'; 

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            } catch (error) {
                console.log("Error fetching movies:", error);
            }
        })();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    if (url) {
                        console.log(url);
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get('v'));
                    } else {
                        console.log("No trailer found.");
                    }
                })
                .catch((error) => console.log("Error finding trailer:", error));
        }
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="row" id={`row-${title.toLowerCase().replace(/\s+/g, "-")}`}>
            <h1>{title}</h1>
            <div className="row_posters">
                {movies?.filter((movie) =>
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                ).map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id || movie.name}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name || movie.title}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
};

export default Row;