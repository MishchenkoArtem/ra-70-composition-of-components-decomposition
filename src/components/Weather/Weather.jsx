import './Weather.css';
const iconRain = require('../../images/rain.png');

export default function Weather() {
    return (
        <section className="weather">
            <h2 className="weather__title">
                <a className="weather__link weather__link_title" href="#0">
                    Погода
                </a>
            </h2>
            <div className="weather__wrapper">
                <span
                    className="weather__rain-icon"
                    style={{ backgroundImage: `url(${iconRain})` }}
                ></span>
                <div>
                    <p className="weather__text">Утром +17,</p>
                    <p className="weather__text">днем +20</p>
                </div>
            </div>
            <div className="weather__wrapper weather__wrapper_column">
                <h3 className="weather__title">
                    <a className="weather__link weather__link_title" href="#0">
                        Посещаемое
                    </a>
                </h3>
                <ul className="page__list">
                    <li className="weather__item">
                        <a
                            className="weather__link weather__link_text"
                            href="#0"
                        >
                            <span className="weather__accent-bold">
                                Недвижимость
                            </span>{' '}
                            - о сталинках
                        </a>
                    </li>
                    <li className="weather__item">
                        <a
                            className="weather__link weather__link_text"
                            href="#0"
                        >
                            <span className="weather__accent-bold">Маркет</span>{' '}
                            - люстры и светильники
                        </a>
                    </li>
                    <li className="weather__item">
                        <a
                            className="weather__link weather__link_text"
                            href="#0"
                        >
                            <span className="weather__accent-bold">
                                Авто.ру
                            </span>{' '}
                            - привод 4х4 до 500.000
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
