import React, {useContext, useEffect} from 'react';
import {Context} from "../utils/context";
import Search from "./Search";
import styled from "styled-components";

const StyledMain = styled.div`
  min-height: 65vh;
  background-color: beige;
`;

const Main = () => {
    const {setHead, setCars,
        setKeyword, setSearch, chooseCar, chooseYear} = useContext(Context);

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
                    console.log(items.cars);
                }
            );
    }, []);

    return (
        <StyledMain>
        <div className='mx-5 pt-5 pb-5'>
            <form className='mb-3' onSubmit={(event) => {
                setSearch(true);
                event.preventDefault();
            }}>
                <input type='search'
                       className='w-75'
                       onChange={(event) => {
                           setKeyword(event.target.value);
                           setSearch(false);
                       }}
                />
                <input type="submit"
                       className='w-25'
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