
//  Получить категории с фильмами
export const getSearchFilms = (searchFilms) => {
    return {
        type: 'GET_SEARCH_ALL_FILMS',
        searchFilms
    }
}

