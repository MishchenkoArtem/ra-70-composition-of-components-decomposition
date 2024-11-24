import './Ether.css';

const iconLiveS = require('../../images/icon-live-s.png');

export default function Ether() {
    return (
        <section className="ether">
            <h2 className="ether__title">
                <a className="ether__link" href="#0">
                    Эфир
                </a>
            </h2>
            <ul className="page__list">
                <li className="ether__item">
                    <span
                        className="ether__icon"
                        style={{ backgroundImage: `url(${iconLiveS})` }}
                    ></span>
                    <p className="ether__text">Управление как исскуство</p>
                    <p className="ether__text">Успех</p>
                </li>
                <li className="ether__item">
                    <span
                        className="ether__icon"
                        style={{ backgroundImage: `url(${iconLiveS})` }}
                    ></span>
                    <p className="ether__text">Ночь. Мир в это время</p>
                    <p className="ether__text">earth.TV</p>
                </li>
                <li className="ether__item">
                    <span
                        className="ether__icon"
                        style={{ backgroundImage: `url(${iconLiveS})` }}
                    ></span>
                    <p className="ether__text">Андрей Возн...</p>
                    <p className="ether__text">Совершенно секретно</p>
                </li>
            </ul>
        </section>
    );
}
