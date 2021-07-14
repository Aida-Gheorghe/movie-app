import { useState, useEffect } from 'react'
import MainImage from './favorite/MainImage'
import GridCard from './favorite/GridCard'

const Home = () => {


    const [Movies, setMovies] = useState([])
    const [CurrentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        //get data from API
        const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=41d8d78e19b8b325638d9c751b0760e0&language=en-US&page=1`
        return fetchMovies(endpoint)


        // eslint-disable-next-line
    }, [])



    const fetchMovies = (path) => {
        fetch(path)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setMovies([...Movies, ...res.results])
                setCurrentPage(res.page)
            });
    }

    const handleClick = () => {
        const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=41d8d78e19b8b325638d9c751b0760e0&language=en-US&page=${CurrentPage + 1}`

        return fetchMovies(endpoint)
    }


    return (
        <div style={{ width: '100%', backgroundColor: '#fafafa' }}>

            {/* Movie Main Image */}

            {Movies[0] && <MainImage
                image={`https://image.tmdb.org/t/p/w1280${Movies[0].backdrop_path}`}
                title={Movies[0].original_title}
                text={Movies[0].overview}
                id={Movies[0].id}
            />
            }

            {/* Body */}

            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>Movies by latest</h2>
                <hr />

                {/* Grid Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, [col] 1fr)", gridGap: "10px" }}>
                    {Movies && Movies.map((movie, index) => (
                        <div key={index}>
                            <GridCard
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                movieId={movie.id}
                            />

                        </div>

                    ))}
                </div>

                {/* Load More Button */}
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleClick} style={{ height: '60px', borderRadius: '25px', outline: 'none', backgroundColor: 'purple', color: 'white', fontSize: '1.5rem' }}>Load More</button>
                </div>
            </div>

        </div >
    )
}

export default Home;