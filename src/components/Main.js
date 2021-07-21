import React, {useContext, useEffect} from 'react';
import {Context} from "../utils/context";
import Search from "./Search";
import styled from "styled-components";

const StyledMain = styled.div`
  min-height: 65vh;
  background-color: beige;
  margin-left: 15rem;
`;

const Main = () => {
    const {
        setHead, setCars, setOnSort,
        setKeyword, setSearch, chooseCar, chooseYear
    } = useContext(Context);

    useEffect(() => {
        fetch('https://city-mobil.ru/api/cars')
            .then(response => response.json())
            .then(items => {
                    setHead(items.tariffs_list);
                    console.log(items.tariffs_list);
                }
            );

        fetch('https://city-mobil.ru/api/cars')
            .then(response => response.json())
            .then(items => {
                    setCars(items.cars);
                    console.log(items);
                }
            );
    }, []);

    return (
        <StyledMain>
            <div className='p-5'>
                <form className='mb-3' onSubmit={(event) => {
                    setSearch(true);
                    setOnSort([]);
                    event.preventDefault();
                }}>
                    <input type='search'
                           className='inputSearch'
                           placeholder='&#128269; Поиск'
                           onChange={(event) => {
                               setKeyword(event.target.value);
                               setSearch(false);
                           }}
                    />
                    <input type="submit"
                           className='w-25 inputSubmit'
                           value="Найти"
                    />
                </form>
                <div className='scroll'>
                    <Search/>
                </div>
                {chooseCar ?
                    <div className='mt-4 p-1 choose w-50'>
                        <p className='ms-3 mb-0'>Выбран автомобиль {chooseCar} {chooseYear} года выпуска</p>
                    </div>
                    : <></>}
            </div>
        </StyledMain>
    );
}

export default Main;