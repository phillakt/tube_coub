const stateInit = {
  dropDownGenres: false, // 1. Выпадающее меню 
  mobileMenu: false, // 2. Мобильное меню
};

const dom = (state = stateInit, action) => {
  switch (action.type) {
    case "DROP_DOWN_GENRES":
      const dropDownGenres = action.dropDownGenres;

      return {
        ...state,
        dropDownGenres,
      };

    case "MOBILE_MENU":

      const mobileMenu = action.mobileMenu;

      return {
        ...state,
        mobileMenu,
      };

    default:
      return {
        ...state,
      };
  }
};

export default dom;
