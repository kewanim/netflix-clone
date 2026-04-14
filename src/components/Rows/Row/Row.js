// import React, {useEffect, useState} from 'react'
// import './row.css';
// import axios from 'axios';
// import movieTrailer from 'movieTrailer';
// import youtube from 'react-youtube';

// const Row = ({ title, fetchUrl, isLargeRow}) => {
//     const [movieTrailer, setMovie] = useState ([]);
//     const [trailerUrl, setTrailerUrl] = useState("");

//     const base_url = "https://image.tdb.org/t/p/original";

//     useEffect(() =>{
//         (async () =>{
//             try{
//                 console.log(fetchUrl)
//                 const request = await axios.get(`http://localhost:4000/api/${fetchUrl}`);
//                 console.log(request)
//                 setMovie(request.data.results);
//             }catch(error) {
//                 console.log("error", error);
//             }
            
//         }) ()
//     }, [fetchUrl]);

//     const handleClick = (movie) =>{
//         if (trailerUrl){
//             setTrailerUrl('')
//         } else {
//             movieTrailer(movie?.title || movie?.name || movie?.original_name)
//             .then ((url) =>{
//                 console.log(url)
//                 const urlParams = new URLSearchParams(new URL(url).search)
//                 console.log(urlParams)
//                 console.log(urlParams.get('v'))
//                 setTrailerUrl(urlParams.get('v'));
//             })
//         }
//     }

//     const opts = {
//         height: '390',
//         width: "100%",
//         playerVars: {
//             autoplay: 1,
//         },
//     }
    
//     return (
//         <div className="row">
//             <h1>{title}</h1>
//             <div className="row_posters">
//                 {movies?.map((movie, index) =>(
//                     <img
//                         onClick={() => handleClick(movie)}
//                         key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}'} alt={movie.name} className={`row_poster $
//                         {isLargeRow && "row_posterLarge"}}
//                     />
//                 ))}
//             </div>
//             <div style = {{padding: `40px`}}>
//                 {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//             </div>
//     )
// }

// export default Row




// import React, { useEffect, useState } from 'react';
// import './row.css';
// import axios from '../../../utils/axios';
// import movieTrailer from 'movie-trailer';
// import YouTube from 'react-youtube';

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//     const [movies, setMovie] = useState([]);
//     const [trailerUrl, setTrailerUrl] = useState("");

//     const base_url = "https://image.tmdb.org/t/p/original";

//     useEffect(() => {
//         (async () => {
//             try {
//                 console.log(fetchUrl);
//                 const request = await axios.get(fetchUrl);
//                 console.log(request);
//                 setMovie(request.data.results);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         })();
//     }, [fetchUrl]);

//     const handleClick = (movie) => {
//         if (trailerUrl) {
//             setTrailerUrl('')
//         } else {
//             movieTrailer(movie?.title || movie?.name || movie?.original_name)
//                 .then((url) => {
//                     console.log(url);
//                     const urlParams = new URLSearchParams(new URL(url).search);
//                     console.log(urlParams);
//                     console.log(urlParams.get('v'));
//                     setTrailerUrl(urlParams.get('v'));
//                 });
//         }
//     };

    // const opts = {
    //     height: '390',
    //     width: '100%',
    //     playerVars: {
    //         autoplay: 1,
    //     },
    // };

    // return (
    //     <div className="row">
    //         <h1>{title}</h1>
    //         <div className="row_posters">
    //             {movies?.map((movie, index) => (
    //                 <img
    //                     onClick={() => handleClick(movie)}
    //                     key={index}
    //                     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
    //                     alt={movie.name}
    //                     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
    //                 />
    //             ))}
    //         </div>
            /* <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//             </div> */
//         </div>
//     );
// };

// export default Row;


import React, { useEffect, useState } from 'react'; // React import at the top
import './row.css'; // CSS import follows
import axios from '../../../utils/axios'; // Axios utility import
import movieTrailer from 'movie-trailer'; // Movie trailer library import
import YouTube from 'react-youtube'; // YouTube embed library import

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request);
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
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies?.map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id || movie.name}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
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