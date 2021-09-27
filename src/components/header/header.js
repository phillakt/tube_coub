import React from "react";
import { connect } from "react-redux";

import { dropDownGenres, mobileMenu } from "../../actions/actionsDom";

import { getAllGenresFetch } from "../../actions/actionsHome";


import "./_header.scss";
import logo from "../../img/logo.svg";

import { Link } from "react-router-dom";

const tubeServer = 'https://tube.eurodir.ru';
// const tubeServer = 'http://tube-serv';

class Header extends React.Component {
  constructor(props){
      super(props);

      this.mobileWidth = 567;
  }

  componentDidMount() {
    // 1. Получить жанры для выпадающего меню в шапке
    this.props.getAllGenresDispatch();
  }

  render() {
    return (

        <header
          className={
            this.props.dom.mobileMenu
              ? "header header--static header--menu"
              : "header header--static"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__content">
                  <button
                    className={
                      this.props.dom.mobileMenu
                        ? "header__menu header__menu--active"
                        : "header__menu"
                    }
                    type="button"
                    onClick={() => {
                      this.props.mobileMenuDispatch(this.props.dom.mobileMenu);
                    }}
                  >
                    <span />
                    <span />
                    <span />
                  </button>

                  <Link className="header__logo" to="/">
                    <img src={`${logo}`} alt="logo" />
                  </Link>

                  <ul
                    className={
                      this.props.dom.mobileMenu
                        ? "header__nav header__nav--active"
                        : "header__nav"
                    }
                  >
                    <li className="header__nav-item"
                      onClick={() => {
                        
                        if(window.innerWidth <= this.mobileWidth){
                          this.props.mobileMenuDispatch(true);
                          window.scroll({ top: 0 })
                        }

                      }}
                    >
                      {/* link home */}
                      <Link className="header__nav-link" to="/">
                        Главная
                      </Link>
                    </li>

                    <li
                      className="header__nav-item category-nav-btn"
                      onMouseEnter={() => {
                        this.props.dropDownGenresDispatch(
                          this.props.dom.dropDownGenres
                        );
                      }}
                      onMouseLeave={() => {
                        this.props.dropDownGenresDispatch(true);
                      }}
                    >
                      <button className="header__nav-link header__nav-link--more">
                        Категории
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx={6}
                            cy={4}
                            r={4}
                            fill="#EB5757"
                            fillOpacity="0.5"
                          />
                          <g filter="url(#filter0_d)">
                            <circle cx={6} cy={4} r={2} fill="#EB5757" />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d"
                              x={0}
                              y={0}
                              width={12}
                              height={12}
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={2} />
                              <feGaussianBlur stdDeviation={2} />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </button>

                      <div
                        className={
                          this.props.dom.dropDownGenres
                            ? "dropdown-menu header__nav-menu header__nav-menu--scroll show"
                            : "dropdown-menu header__nav-menu header__nav-menu--scroll"
                        }
                      >
                        <ul className="dropdown-menu__list">
                          {this.props.coubs.getAllGenres
                            ? this.props.coubs.getAllGenres.map((item, i) => {
                                return (
                                  <li key={item.slug}>
                                    <Link
                                      onClick={() => {
                                        this.props.dropDownGenresDispatch(true);

                                        if(window.innerWidth <= this.mobileWidth){
                                          this.props.mobileMenuDispatch(true);
                                          window.scroll({ top: 0 })
                                        }
                                      }}
                                      to={`/genre/${item.id}/${item.slug}`}
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                );
                              })
                            : null}
                        </ul>
                      </div>
                    </li>

                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={() => {
                        
                          if(window.innerWidth <= this.mobileWidth){
                            this.props.mobileMenuDispatch(true);
                            window.scroll({ top: 0 })
                          }
  
                        }}
                        to="/about"
                      >
                        О проекте
                      </Link>
                    </li>

                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={() => {
                        
                          if(window.innerWidth <= this.mobileWidth){
                            this.props.mobileMenuDispatch(true);
                            window.scroll({ top: 0 })
                          }
  
                        }}
                        to="/contacts"
                      >
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

    );
  }
}

const mapStateToProps = (props) => {
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    dropDownGenresDispatch: (dropDownGenreState) => {
      dispatch(dropDownGenres(dropDownGenreState));
    },
    mobileMenuDispatch: (mobileMenuState) => {
      dispatch(mobileMenu(mobileMenuState));
    },
    getAllGenresDispatch: () => {
      dispatch(getAllGenresFetch());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
