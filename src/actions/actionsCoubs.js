

const tubeServer = 'https://tube.eurodir.ru';
// const tubeServer = 'http://tube-serv';

// 1.
//  Получить коруб по id
const getCurrentCoub = (getCurrentCoub) => {
    return {
        type: 'GET_CURRENT_COUB',
        getCurrentCoub
    }
}

export const getCurrentCoubFetch = (params) => {

    return (dispatch) =>
        fetch(`${tubeServer}/api/v1/coub/get-current-coub/?slug=${params.slug}`)
            .then(response => response.json())
            .then(json => {
                dispatch(getCurrentCoub(json));
            });
}
