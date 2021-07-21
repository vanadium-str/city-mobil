import React, {useContext} from 'react';
import {Year} from "../utils/constants";
import {Context} from "../utils/context";
import {FaCaretDown, FaCaretUp} from "react-icons/all";

const Table = ({data}) => {

    const {head, setChooseCar, setChooseYear, onSort, setOnSort, search,setSearch} = useContext(Context);

    let sortData = [];
    const Sort = (event, sortKey) => {
        sortData = data.slice().sort((a, b) => b[sortKey].localeCompare(a[sortKey]));
        setOnSort(sortData);
    }
    return (

        <table className='table mt-3'>
            <thead>
            <tr>
                <th datatype='string'
                    onClick={(event) => {
                        onSort.length ? setOnSort([]) : Sort(event, 'mark');

                    }}>
                    Марка и модель
                    {onSort.length ? <FaCaretUp className='ms-1'/> : <FaCaretDown className='ms-1'/>}
                </th>
                <th datatype='number' onClick={(event) => {
                    // onSort.length ? setOnSort([]) : Sort(event, 'tariffs.Эконом.year');
                }}>{head[4]}</th>
                <th datatype='number'>{head[1]}</th>
                <th datatype='number'>{head[3]}</th>
                <th datatype='number'>{head[5]}</th>
                <th datatype='number'>{head[2]}</th>
            </tr>
            </thead>
            <tbody>
            {onSort.length ?
                onSort.map((item, key) => {
                    return (
                        Year(onSort,key) ?
                        <tr>
                            <td onClick={() => {
                                setChooseCar(`${onSort[key].mark} ${onSort[key].model}`);
                                setChooseYear(Year(onSort, key))
                            }}>
                                {onSort[key].mark} {onSort[key].model}
                            </td>
                            {onSort[key].tariffs.Эконом ?
                                <td>{onSort[key].tariffs.Эконом.year}</td>
                                : <td> - </td>}
                            {onSort[key].tariffs.Комфорт ?
                                <td>{onSort[key].tariffs.Комфорт.year}</td>
                                : <td> - </td>}
                            {onSort[key].tariffs.КомфортПлюс ?
                                <td>{onSort[key].tariffs.КомфортПлюс.year}</td>
                                : <td> - </td>}
                            {onSort[key].tariffs.Минивен ?
                                <td>{onSort[key].tariffs.Минивен.year}</td>
                                : <td> - </td>}
                            {onSort[key].tariffs.Бизнес ?
                                <td>{onSort[key].tariffs.Бизнес.year}</td>
                                : <td> - </td>}
                        </tr>
                            : null
                    )
                })
                :
                data.map((item, key) => {
                    return (
                        Year(data,key) ?
                            <tr>
                            <td onClick={() => {
                                setChooseCar(`${data[key].mark} ${data[key].model}`);
                                setChooseYear(Year(data, key))
                            }}>
                                {data[key].mark} {data[key].model}
                            </td>
                            {data[key].tariffs.Эконом ?
                                <td>{data[key].tariffs.Эконом.year}</td>
                                : <td> - </td>}
                            {data[key].tariffs.Комфорт ?
                                <td>{data[key].tariffs.Комфорт.year}</td>
                                : <td> - </td>}
                            {data[key].tariffs.КомфортПлюс ?
                                <td>{data[key].tariffs.КомфортПлюс.year}</td>
                                : <td> - </td>}
                            {data[key].tariffs.Минивен ?
                                <td>{data[key].tariffs.Минивен.year}</td>
                                : <td> - </td>}
                            {data[key].tariffs.Бизнес ?
                                <td>{data[key].tariffs.Бизнес.year}</td>
                                : <td> - </td>}
                        </tr>
                            : null
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table;