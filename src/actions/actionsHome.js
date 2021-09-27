// import _ from 'lodash';

const tubeServer = 'https://tube.eurodir.ru';
// const tubeServer = 'http://tube-serv';

// 1. GET_ALL_GENRES - Получить жанры для главной в слайдер
const getAllGenres = (getAllGenres) => {
    return {
        type: 'GET_ALL_GENRES',
        getAllGenres
    }
}

export const getAllGenresFetch = () => {

    return (dispatch) => {
        fetch(`${tubeServer}/api/v1/coub/get-all-genres`) 
            .then(response => response.json())
            .then(json => {
                // console.log("GET_ALL_GENRES: ", json);

                const getAllGenresJson = json;
                
                dispatch(getAllGenres(getAllGenresJson));

            }).catch((e) => {
                console.log(new Error(e));
            })
    }
}


// 2. GET_COUBS_CURRENT_GENRE_FILTER - Получить коубы из выбранного жанра для фильтра 36(штук)
const getCoubsCurrentGenreFilter = (getCoubsCurrentGenreFilter) => {
    return {
        type: 'GET_COUBS_CURRENT_GENRE_FILTER',
        getCoubsCurrentGenreFilter
    }
}

export const getCoubsCurrentGenreFilterFetch = (idGenre) => {
    
    return (dispatch) => {
        fetch(`${tubeServer}/api/v1/coub/get-coubs-current-genre-filter?idGenre=${idGenre}`)
            .then(response => response.json())
            .then(json => {
                // console.log("GET_ALL_GENRES: ", json);
                
                const getCoubsCurrentGenreFilterJson = json;
                
                // Получить коубы из выбранного жанра 36(штук)
                dispatch(getCoubsCurrentGenreFilter(getCoubsCurrentGenreFilterJson));

                let stepMoreCoubsFilter = {
                    idGenre,
                    step: 1,
                    bntMoreCoubView: true
                }

                // Запомнить выбраный жанр
                dispatch(getMoreCoubsCurrentGenreFilter(stepMoreCoubsFilter));

            }).catch((e) => {
                console.log(new Error(e));
            })
    }
}

// 3. GET_MORE_COUBS_CURRENT_GENRE_FILTER - Получить коубы из текущего жанра для фильтра по 18(штук) * count к текущему выведеному количеству
const getMoreCoubsCurrentGenreFilter = (getMoreCoubsCurrentGenreFilter) => {
    return {
        type: 'GET_MORE_COUBS_CURRENT_GENRE_FILTER',
        getMoreCoubsCurrentGenreFilter
    }
}

export const getMoreCoubsCurrentGenreFilterFetch = (idGenre, step) => {
    step++
    return (dispatch) => {
        fetch(`${tubeServer}/api/v1/coub/get-more-coubs-current-genre-filter?idGenre=${idGenre}&stepMore=${step}`)
            .then(response => response.json())
            .then(json => {

                const getCoubsCurrentGenreFilterJson = json;

                // Получить коубы из выбранного жанра 18(штук) * step
                dispatch(getCoubsCurrentGenreFilter(getCoubsCurrentGenreFilterJson));

                let stepMoreCoubsFilter = {
                    idGenre,
                    step,
                    countCoubs: step * 18,
                    bntMoreCoubView: (step * 18) <= json.length ? true : false 
                }

                // Запомнить выбраный жанр
                dispatch(getMoreCoubsCurrentGenreFilter(stepMoreCoubsFilter));

            }).catch((e) => {
                console.log(new Error(e));
            })
    }
}

// 5. GET_RANDOM_COUBS - Получить случайные коубы для слайдера на главной
const getRandomCoubs = (getRandomCoubs) => {
    return {
        type: 'GET_RANDOM_COUBS',
        getRandomCoubs
    }
}

export const getRandomCoubsFetch = () => {

    return (dispatch) => {
        fetch(`${tubeServer}/api/v1/coub/get-random-coubs`)
            .then(response => response.json())
            .then(json => {
                dispatch(getRandomCoubs(json));
            }).catch((e) => {
                console.log(new Error(e));
            })
    }
}


