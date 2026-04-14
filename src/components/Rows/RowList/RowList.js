import React from 'react';
import Row from '../Row/Row'
import requests from '../../../utils/requests';

const RowList = () => {
    return (
        <>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row
                title="TOP RATED MOVIES"
                fetchUrl={requests.fetchTopRatedMovies}
                isLargeRow={true}
            />
            <Row
                title="ACTION MOVIES"
                fetchUrl={requests.fetchActionMovies}
                isLargeRow={true}
            />
            <Row
                title="COMEDY MOVIES"
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow={true}
            />
            <Row
                title="HORROR MOVIES"
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow={true}
            />
            <Row
                title="ROMANCE MOVIES"
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow={true}
            />
            <Row
                title="DOCUMENTARIES"
                fetchUrl={requests.fetchDocumentaries}
                isLargeRow={true}
            />
            <Row
                title="TV SHOWS"
                fetchUrl={requests.fetchTvShow}
                isLargeRow={true}
            />            
        </>
    );
};

export default RowList;