
const stateInit = {
    searchFilms: []
}

const search = (state = stateInit, action) => {

    switch (action.type) {
        case "GET_SEARCH_ALL_FILMS":

            const searchFilms = action.searchFilms;

            return {
                ...state,
                searchFilms
            }

        default:

            return {
                ...state
            };
    }

}

export default search;
