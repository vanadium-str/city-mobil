import React, {useContext} from 'react';
import {Context} from "../utils/context";
import ErrorSearch from "./ErrorSearch";
import Table from "./Table";

const Search = () => {

    const {cars, keyword, search} = useContext(Context);
    const SearchYear = (item, keyword) => {
        let foundCars = [];
        for (let i = 0; i < item.length; i++) {
            if (item[i].tariffs.Эконом) {
                if (item[i].tariffs.Эконом.year == keyword) {
                    foundCars.push(item[i]);
                }
            }
            if (item[i].tariffs.Комфорт) {
                if (item[i].tariffs.Комфорт.year == keyword) {
                    foundCars.push(item[i]);
                }
            }
            if (item[i].tariffs.КомфортПлюс) {
                if (item[i].tariffs.КомфортПлюс.year == keyword) {
                    foundCars.push(item[i]);
                }
            }
            if (item[i].tariffs.Минивен) {
                if (item[i].tariffs.Минивен.year == keyword) {
                    foundCars.push(item[i]);
                }
            }
            if (item[i].tariffs.Бизнес) {
                if (item[i].tariffs.Бизнес.year == keyword) {
                    foundCars.push(item[i]);
                }
            }
        }
        return foundCars;
    }

    if (search) {
        const inputKeyword = cars.filter((key) =>
            key.mark.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
            || key.model.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase()));
        const inputYear = SearchYear(cars, keyword);

        if (inputYear.length) {
            return (
                <Table data={inputYear}/>
            )
        }
        if (inputKeyword.length) {
            return (
                <Table data={inputKeyword}/>
            )
        } else {
            return (
                <ErrorSearch/>
            )
        }
    } else {
        return (
            <Table data={cars}/>
        );
    }
};

export default Search;