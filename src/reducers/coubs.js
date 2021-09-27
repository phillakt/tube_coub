const stateInit = {
  // Home page
  getAllGenres: [], // 1. GET_ALL_GENRES - Получить жанры для главной в слайдер
  getCoubsCurrentGenreFilter: [], // 2. GET_COUBS_CURRENT_GENRE_FILTER - Получить коубы из выбранного жанра для фильтра 36(штук)
  getMoreCoubsCurrentGenreFilter: {}, // 3. GET_MORE_COUBS_CURRENT_GENRE_FILTER - Получить коубы из текущего жанра для фильтра по +36(штук) к текущему выведеному количеству
  getCurrentCoub: {}, // 4. GET_CURRENT_COUB - Получить выбранный коуб
  getRandomCoubs: [], // 5. GET_RANDOM_COUBS - Получить случайные коубы для слайдера на главной
  // Home page end

  // Genres page
  getCoubsCurrentGenre: [], // 6. GET_COUBS_CURRENT_GENRE - Получить коубы из выбранного жанра 36(штук)
  getMoreCoubsCurrentGenre: {}, // 7. GET_MORE_COUBS_CURRENT_GENRE - Получить коубы из текущего жанра для фильтра по +36(штук) к текущему выведеному количеству
  getDataGenre: {}, // 8. GET_DATA_GENRE - Получить данные по жанру
  // Genres page end 
};

const coubs = (state = stateInit, action) => {
  switch (action.type) {
    case "GET_ALL_GENRES": // 1
      const getAllGenres = action.getAllGenres;

      return {
        ...state,
        getAllGenres,
      };

    case "GET_COUBS_CURRENT_GENRE_FILTER": // 2
      const getCoubsCurrentGenreFilter = action.getCoubsCurrentGenreFilter;

      return {
        ...state,
        getCoubsCurrentGenreFilter,
      };

    case "GET_MORE_COUBS_CURRENT_GENRE_FILTER": // 3
      const getMoreCoubsCurrentGenreFilter =
        action.getMoreCoubsCurrentGenreFilter;

      return {
        ...state,
        getMoreCoubsCurrentGenreFilter,
      };

    case "GET_CURRENT_COUB": // 4
      const getCurrentCoub = action.getCurrentCoub;

      return {
        ...state,
        getCurrentCoub,
      };

    case "GET_RANDOM_COUBS": // 5
      const getRandomCoubs = action.getRandomCoubs;

      return {
        ...state,
        getRandomCoubs,
      };

    case "GET_COUBS_CURRENT_GENRE": // 6
      const getCoubsCurrentGenre = action.getCoubsCurrentGenre;

      return {
        ...state,
        getCoubsCurrentGenre,
      };

    case "GET_MORE_COUBS_CURRENT_GENRE": // 7
      const getMoreCoubsCurrentGenre = action.getMoreCoubsCurrentGenre;

      return {
        ...state,
        getMoreCoubsCurrentGenre,
      };

    case "GET_DATA_GENRE": // 8
      const getDataGenre = action.getDataGenre;

      return {
        ...state,
        getDataGenre,
      };

    default:
      return {
        ...state,
      };
  }
};

export default coubs;
