import React, {useContext} from 'react';
import {Context} from "../utils/context";
import ErrorSearch from "./ErrorSearch";
import Table from "./Table";

const Search = () => {

    const {cars, keyword, search} = useContext(Context);
    const inputKeyword = cars.filter(key => key.mark.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
        || key.model.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase()))
    // || key.tariffs.Стандарт.year.includes(Number(keyword)))

// const arr = cars.filter(key)


    if (search) {
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