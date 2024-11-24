import './SearchLine.css';

export default function SearchLine({nameBtn}) {
    return (
        <div className="search">
            <img
                className="search__logo"
                src={require('../../images/netology-logo.svg').default}
                alt="netology-logo"
            />
            <div className="search__container">
                {nameBtn.map((item) => {
                    return (
                        <button className="search__button" key={item.key}>
                            {item.title}
                        </button>
                    );
                })}
            </div>
            <form className="search__form">
                <fieldset className="search__fieldset">
                    <input className="search__input" type="text" />
                    <button className="search__button-form" type="button">
                        Найти
                    </button>
                </fieldset>
            </form>
        </div>
    );
}
