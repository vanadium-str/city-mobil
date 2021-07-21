export const Year = (array, key) => {
    if(array[key].tariffs.Эконом){
        return array[key].tariffs.Эконом.year;
    }
    if(array[key].tariffs.Комфорт){
        return array[key].tariffs.Комфорт.year;
    }
    if(array[key].tariffs.КомфортПлюс){
        return array[key].tariffs.КомфортПлюс.year;
    }
    if(array[key].tariffs.Минивен){
        return array[key].tariffs.Минивен.year;
    }
    if(array[key].tariffs.Бизнес){
        return array[key].tariffs.Бизнес.year;
    }
    else{
        return null;
    }
}