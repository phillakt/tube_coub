import React from "react";
import { connect } from "react-redux";

import _ from "lodash";

import {
  getAllGenresFetch,
  getCoubsCurrentGenreFilterFetch,
  getMoreCoubsCurrentGenreFilterFetch,
  getRandomCoubsFetch,
} from "../actions/actionsHome";

import AllGenres from "../components/sections/home/allGenres/allGenres";
import Filter from "../components/sections/home/filter/filter";
import RandomSlider from "../components/sections/home/randomSlider/randomSlider";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Masonry from "react-masonry-css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.random = _.random(1, 20);

    this.breakpointColumnsObj = {
      default: 5,
      1100: 3,
      700: 3,
      500: 2,
    };
  }

  componentDidMount() {
    // 1. Получить жанры для главной в слайдере категорий
    this.props.getAllGenresDispatch();

    // 2. Выводим случайную категорию под "Фильтр"
    this.props.getCoubsCurrentGenreFilterDispatch(this.random);

    // 3. Выводим случайные коубы в слайдере "Случайные"
    this.props.getRandomCoubsDispatch();
  }

  render() {
    return (
      <section>
        {/* Слайдер с категориями */}
        <div className="home home--static">
          {this.props.coubs.getAllGenres ? (
            <OwlCarousel
              className="owl-carousel"
              smartSpeed={600}
              mouseDrag={true}
              touchDrag={true}
              dots={false}
              loop={true}
              autoplay={true}
              nav={true}
              center={true}
              slideBy={4}
              autoplayHoverPause={true}
              navText={["", ""]}
              navClass={[
                "home__nav home__nav--prev",
                "home__nav home__nav--next",
              ]}
              responsive={{
                300: {
                  items: 1,
                },
                576: {
                  items: 2,
                },
                768: {
                  items: 2,
                },
                1200: {
                  items: 4,
                },
                1800: {
                  items: 4,
                },
              }}
            >
              {this.props.coubs.getAllGenres.map((item, i) => {
                return <AllGenres key={item.slug} coubsAllItems={item} />;
              })}
            </OwlCarousel>
          ) : null}
        </div>
        {/* Слайдер с категориями end */}

        {/* Фильтр с категориями */}



        <div className="catalog">
          
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="catalog__nav">
                  <div className="slider-radio">
                    {/* Список жанров */}
                    {this.props.coubs.getAllGenres
                      ? this.props.coubs.getAllGenres.map((item, i) => {
                          return (
                            <React.Fragment key={item.slug}>
                              <input
                                type="radio"
                                name="grade"
                                id={item.slug}
                                onChange={() => {
                                  this.props.getCoubsCurrentGenreFilterDispatch(
                                    item.id
                                  );
                                }}
                              />
                              <label htmlFor={item.slug}>{item.title}</label>
                            </React.Fragment>
                          );
                        })
                      : null}
                  </div>
                </div>

                <Masonry
                  breakpointCols={this.breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {this.props.coubs.getCoubsCurrentGenreFilter
                    ? this.props.coubs.getCoubsCurrentGenreFilter.map(
                        (item, i) => {
                          const genre = {
                            id: item.parent_id,
                            slug: item.slug,
                          };

                          return (
                            <div key={item.slug}>
                              <Filter
                                filterCoubFromGenres={item}
                                genre={genre}
                              />
                            </div>
                          );
                        }
                      )
                    : null}
                </Masonry>
              </div>
            </div>

            {this.props.coubs.getMoreCoubsCurrentGenreFilter.bntMoreCoubView ? (
              <div className="row">
                <div className="col-12">
                  <button
                    className="catalog__more"
                    type="button"
                    onClick={() => {
                      let idGenre =
                        this.props.coubs.getMoreCoubsCurrentGenreFilter.idGenre;
                      let step =
                        this.props.coubs.getMoreCoubsCurrentGenreFilter.step;
                      this.props.getMoreCoubsCurrentGenreFilterDispatch(
                        idGenre,
                        step ? step : 1
                      );
                    }}
                  >
                    Dобавки
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        
        </div>
        {/* Фильтр с категориями end */}

        {/* Случайные коубы из всех категорий  */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="section__title">Rандом</h2>
              </div>
              <div className="col-12">
                <div className="section__carousel-wrap">
                  {this.props.coubs.getRandomCoubs ? (
                    <OwlCarousel
                      className="owl-carousel"
                      margin={30}
                      smartSpeed={600}
                      mouseDrag={true}
                      touchDrag={true}
                      dots={false}
                      loop={true}
                      autoplay={true}
                      nav={true}
                      center={true}
                      slideBy={5}
                      autoplayHoverPause={true}
                      navText={[
                        '<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 7.72559L16.25 7.72559" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                        '<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 7.72559L0.75 7.72559" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                      ]}
                      navClass={[
                        "section__nav section__nav--cards section__nav--prev",
                        "section__nav section__nav--cards section__nav--next",
                      ]}
                      responsive={{
                        300: {
                          items: 2,
                        },
                        576: {
                          items: 4,
                        },
                        768: {
                          items: 4,
                        },
                        1200: {
                          items: 5,
                        },
                        1800: {
                          items: 5,
                        },
                      }}
                    >
                      {this.props.coubs.getRandomCoubs.map((item, i) => {
                        return (
                          <RandomSlider key={item.slug} randomItems={item} />
                        );
                      })}
                    </OwlCarousel>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Случайные коубы из всех категорий end  */}
      </section>
    );
  }
}

const mapStateToProps = (props) => {
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllGenresDispatch: () => {
      dispatch(getAllGenresFetch());
    },
    getCoubsCurrentGenreFilterDispatch: (idGenre) => {
      dispatch(getCoubsCurrentGenreFilterFetch(idGenre));
    },
    getMoreCoubsCurrentGenreFilterDispatch: (idGenre, step) => {
      dispatch(getMoreCoubsCurrentGenreFilterFetch(idGenre, step));
    },
    getRandomCoubsDispatch: () => {
      dispatch(getRandomCoubsFetch());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
