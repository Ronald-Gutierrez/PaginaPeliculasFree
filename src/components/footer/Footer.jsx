import React from 'react';

import './Footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
        // Función para hacer scroll hacia arriba
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">tPelículas</Link> {/* Cambiado a tPelículas */}
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/" onClick={scrollToTop} >Inicio</Link> {/* Cambiado a Inicio */}
                        <Link to="/">Contáctanos</Link> {/* Cambiado a Contáctanos */}
                        <Link to="/">Términos de servicio</Link> {/* Cambiado a Términos de servicio */}
                        <Link to="/">Acerca de nosotros</Link> {/* Cambiado a Acerca de nosotros */}
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">En vivo</Link> {/* Cambiado a En vivo */}
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Política de privacidad</Link> {/* Cambiado a Política de privacidad */}
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Debes ver</Link> {/* Cambiado a Debes ver */}
                        <Link to="/">Estrenos recientes</Link> {/* Cambiado a Estrenos recientes */}
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
