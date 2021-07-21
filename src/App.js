import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import {useState} from "react";
import {Context} from "./utils/context";

function App() {

    const [head, setHead] = useState([]);
    const [cars, setCars] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [search, setSearch] = useState(false);
    const [chooseCar, setChooseCar] = useState('');
    const [chooseYear, setChooseYear] = useState('');
    const [onSort, setOnSort] = useState([]);
    const [mark, setMark] = useState('');
    const [econom, setEconom] = useState('');
    const [comfort, setComfort] = useState('');
    const [comfortPlus, setComfortPlus] = useState('');
    const [miniVan, setMiniVan] = useState('');
    const [business, setBusiness] = useState('');

    return (
        <Context.Provider value={
            {
                head, setHead, keyword, setKeyword,
                search, setSearch, chooseCar, setChooseCar,
                chooseYear, setChooseYear, cars, setCars,
                onSort, setOnSort,
                mark, setMark, econom, setEconom,
                comfort, setComfort, comfortPlus, setComfortPlus,
                miniVan, setMiniVan, business, setBusiness
            }
        }>
            <Header/>
            <div className='position-relative'>
                <Sidebar/>
                <Main/>
            </div>
            <Footer/>
        </Context.Provider>
    );
}

export default App;
