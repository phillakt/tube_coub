
const tubeServer = 'https://tube.eurodir.ru';
// const tubeServer = 'http://tube-serv';


// 6. GET_COUBS_CURRENT_GENRE - Получить коубы из выбранного жанра 36(штук)
const getCoubsCurrentGenre = (getCoubsCurrentGenre) => {
    return {
        type: 'GET_COUBS_CURRENT_GENRE',
        getCoubsCurrentGenre
    }
}

export const getCoubsCurrentGenreFetch = (idGenre) => {
    
    return (dispatch) => {
        fetch(`${tubeServer}/api/v1/coub/get-coubs-current-genre?idGenre=${idGenre}`)
            .then(response => response.json())
            .then(json => {

                const getCoubsCurrentGenreJson = json;
                
                // Получить коубы из выбранного жанра 36(штук)
                dispatch(getCoubsCurrentGenre(getCoubsCurrentGenreJson));

                let stepMoreCoubs = {
                    idGenre,
                    countCoubs: 36,
                    bntMoreCoubView: 36 <= json.length ? true : false 
                }

                // Запомнить выбраный жанр
                dispatch(getMoreCoubsCurrentGenre(stepMoreCoubs));

            }).catch((e) => {
                console.log(new Error(e));
            })
    }
}

// 7. GET_MORE_COUBS_CURRENT_GENRE - Получить коубы из текущего жанра по 18(штук) * count к текущему выведеному количеству
const getMoreCoubsCurrentGenre = (getMoreCoubsCurrentGenre) => {
    return {
        type: 'GET_MORE_COUBS_CURRENT_GENRE',
        getMoreCoubsCurrentGenre
    }
}

export const getMoreCoubsCurrentGenreFetch = (idGenre, step) => {
    step++
    return (dispatch) => {
        fetch(`${tubeServer}/api/v1/coub/get-more-coubs-current-genre?idGenre=${idGenre}&stepMore=${step}`)
            .then(response => response.json())
            .then(json => {

                const getCoubsCurrentGenreJson = json;

                // Получить коубы из выбранного жанра 108(штук) * step
                dispatch(getCoubsCurrentGenre(getCoubsCurrentGenreJson));

                let stepMoreCoubs = {
                    idGenre,
                    step,
                    countCoubs: step * 36,
                    bntMoreCoubView: (step * 36) <= json.length ? true : false 
                }

                // Запомнить выбраный жанр
                dispatch(getMoreCoubsCurrentGenre(stepMoreCoubs));

            }).catch((e) => {
                console.log(new Error(e));
            })
    }
}

// 8. GET_DATA_GENRE - Получить данные по жанру
const getDataGenre = (getDataGenre) => {
    return {
        type: 'GET_DATA_GENRE',
        getDataGenre
    }
}

export const getDataGenreFetch = (idGenre) => {

    return (dispatch) => {
        fetch(`${tubeServer}/api/v1/coub/get-data-genre?idGenre=${idGenre}`)
            .then(response => response.json())
            .then(json => {

                const getDataGenreJson = json;

                dispatch(getDataGenre(getDataGenreJson));

            }).catch((e) => {
                console.log(new Error(e));
            })
    }
}
