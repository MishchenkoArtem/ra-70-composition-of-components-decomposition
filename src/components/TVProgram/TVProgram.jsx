import './TVProgram.css';

const iconLive = require('../../images/icon-live.png');

export default function TVProgram() {
    return (
        <section className="program">
            <div className="program__wrapper">
                <h2 className="program__title">
                    <a className="program__link" href="#0">
                        Телепрограмма
                    </a>
                </h2>
                <span
                    className="program__icon"
                    style={{ backgroundImage: `url(${iconLive})` }}
                ></span>
            </div>
            <div>
                <ul className="page__list">
                    <li className="program__item">
                        <time datetime="21:30">21:30</time>
                        <p className="program__text">ТНТ.Best</p>
                        <p className="program__text">ТНТ International</p>
                    </li>
                    <li className="program__item">
                        <time datetime="22:50">22:50</time>
                        <p className="program__text">Джинглики</p>
                        <p className="program__text">Карусель INT</p>
                    </li>
                    <li className="program__item">
                        <time datetime="01:20">01:20</time>
                        <p className="program__text">Наедине со всеми</p>
                        <p className="program__text">Первый</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
