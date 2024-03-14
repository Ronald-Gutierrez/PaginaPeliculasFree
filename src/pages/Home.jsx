import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Películas en Tendencia</h2> {/* Cambiado a Películas en Tendencia */}
                        <Link to="/movie">
                            <OutlineButton className="small">Ver más</OutlineButton> {/* Cambiado a Ver más */}
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Las Mejores Películas</h2> {/* Cambiado a Las Mejores Películas */}
                        <Link to="/movie">
                            <OutlineButton className="small">Ver más</OutlineButton> {/* Cambiado a Ver más */}
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Series en Tendencia</h2> {/* Cambiado a Series en Tendencia */}
                        <Link to="/tv">
                            <OutlineButton className="small">Ver más</OutlineButton> {/* Cambiado a Ver más */}
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Las Mejores Series</h2> {/* Cambiado a Las Mejores Series */}
                        <Link to="/tv">
                            <OutlineButton className="small">Ver más</OutlineButton> {/* Cambiado a Ver más */}
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;
