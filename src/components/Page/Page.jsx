import './Page.css';
import { nameBtn, titleBtnNews, dataNews } from '../constans.jsx';
import News from '../News/News.jsx';
import SearchLine from '../SearchLine/SearchLine.jsx';
import Weather from '../Weather/Weather.jsx';
import Cards from '../Cards/Cards.jsx';
import TVProgram from '../TVProgram/TVProgram.jsx';
import Ether from '../Ether/Ether.jsx';

export default function Page() {
    return (
        <div className="page">
            <News titleBtnNews={titleBtnNews} dataNews={dataNews} />
            <SearchLine nameBtn={nameBtn} />
            <div className="page__wrapper">
                <Weather />
                <div className="page__container">
                    <Cards />
                    <TVProgram />
                </div>
                <Ether />
            </div>
        </div>
    );
}
