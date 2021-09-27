
// 1. Выпадающее меню 
export const dropDownGenres = (dropDownGenreState) => ({
  type: "DROP_DOWN_GENRES",
  dropDownGenres: dropDownGenreState ? false : true,
});

// 2. Мобильное меню
export const mobileMenu = (mobileMenuState) => ({
  type: "MOBILE_MENU",
  mobileMenu: mobileMenuState ? false : true,
});
