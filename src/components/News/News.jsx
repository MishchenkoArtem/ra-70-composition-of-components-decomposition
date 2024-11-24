import './News.css';
export default function News({ titleBtnNews, dataNews }) {
    const date = new Date();
    const dateNow = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return (
        <section className="news">
            <ul className="news__list-btn">
                {titleBtnNews.map((item) => {
                    return (
                        <li>
                            <button className="news__button" key={item.id}>
                                {item.title}
                            </button>
                        </li>
                    );
                })}
                <time className="news__date" dateTime={dateNow}>
                    {dateNow}
                </time>
            </ul>
            <ul className='news__list'>
                {dataNews.map((item) => {
                    console.log(item.icon.default);
                    return (
                        <li className='news__item' key={item.key}>
                            <span
                                className="news__logo"
                                style={{
                                    backgroundImage: `url(${item.icon.default})`,
                                }}
                            ></span>
                            <a className='news__link' href="#0">
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
