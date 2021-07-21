import React from 'react';
import car from '../img/car.png'

const ErrorSearch = () => {
    return (
        <div className='error d-flex justify-content-center align-items-center flex-column'>
            <h3>По Вашему запросу ничего не нашлось :(</h3>
            <img src={car} alt='car' width='250'/>
        </div>
    );
}

export default ErrorSearch;