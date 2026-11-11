import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "../Banner/banner.css";

const Banner = () => {
    const [movie, setMovie] = useState({});
    const [trailerId, setTrailerId] = useState("");
    const [trailerMessage, setTrailerMessage] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                // Only pick titles that have a backdrop image, so the banner is never blank
                const withBackdrop = request.data.results.filter((m) => m.backdrop_path);
                setMovie(withBackdrop[Math.floor(Math.random() * withBackdrop.length)] || {});
            } catch (error) {
                console.log("Error fetching banner data:", error);
            }
        })();
    }, []);

    const truncate = (str, n) => (str?.length > n ? str.substr(0, n - 1) + "..." : str);

    const title = movie?.title || movie?.name || movie?.original_name;

    const handlePlay = () => {
        if (trailerId) {
            setTrailerId("");
            return;
        }
        setTrailerMessage("");
        movieTrailer(title)
            .then((url) => {
                if (url) {
                    setTrailerId(new URLSearchParams(new URL(url).search).get("v"));
                } else {
                    setTrailerMessage("No trailer found for this title.");
                }
            })
            .catch(() => setTrailerMessage("No trailer found for this title."));
    };

    return (
        <>
            <div
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: movie?.backdrop_path
                        ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                        : "none",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="banner_contents">
                    <h1 className="banner_title">{title}</h1>
                    <div className="banner_buttons">
                        <button className="banner_button play" onClick={handlePlay}>
                            {trailerId ? "Close" : "Play Trailer"}
                        </button>
                    </div>
                    <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
                    {trailerMessage && <p className="banner_message">{trailerMessage}</p>}
                </div>
                <div className="banner_fadebottom" />
            </div>
            {trailerId && (
                <div className="banner_trailer">
                    <YouTube
                        videoId={trailerId}
                        opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }}
                    />
                </div>
            )}
        </>
    );
};

export default Banner;
