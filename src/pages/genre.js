import React from "react";
import { connect } from "react-redux";
import Filter from "../components/sections/home/filter/filter";

import {
  getCoubsCurrentGenreFetch,
  getMoreCoubsCurrentGenreFetch,
  getDataGenreFetch,
} from "../actions/actionsGenres";

import Masonry from "react-masonry-css";

class Genres extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      // 1. Получаем видео по id категории
      this.props.getCoubsCurrentGenreDispatch(nextProps.match.params.id);
      // 2. Получаем данные по жанру
      this.props.getDataGenreDispatch(nextProps.match.params.id);
    }
  }

  componentDidMount() {
    // 1. Получаем видео по id категории
    this.props.getCoubsCurrentGenreDispatch(this.props.match.params.id);

    // 2. Получаем данные по жанру
    this.props.getDataGenreDispatch(this.props.match.params.id);

    this.breakpointColumnsObj = {
      default: 5,
      1100: 4,
      700: 3,
      500: 2,
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section section--head">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-6">
                <h1 className="section__title section__title--head">
                {this.props.coubs.getDataGenre.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="genres">
            <div className="container">
              {/* <div className="row">
                <div className="col-12 col-xl-6">
                  <h1 className="section__title section__title--head">
                    {this.props.coubs.getDataGenre.title}
                  </h1>
                </div>
              </div> */}

              <Masonry
                breakpointCols={this.breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {/* Коубы по категории */}
                {this.props.coubs.getCoubsCurrentGenre
                  ? this.props.coubs.getCoubsCurrentGenre.map((item, i) => {
                      const genre = {
                        id: item.parent_id,
                        slug: item.slug,
                      };

                      return (
                        <Filter
                          key={item.slug}
                          filterCoubFromGenres={item}
                          genre={genre}
                        />
                      );
                    })
                  : null}
              </Masonry>

              <div className="row row--grid"></div>

              {this.props.coubs.getMoreCoubsCurrentGenre.bntMoreCoubView ? (
                <div className="row">
                  <div className="col-12">
                    <button
                      className="catalog__more"
                      type="button"
                      onClick={() => {
                        let idGenre =
                          this.props.coubs.getMoreCoubsCurrentGenre.idGenre;

                        let step =
                          this.props.coubs.getMoreCoubsCurrentGenre.step;

                        this.props.getMoreCoubsCurrentGenreDispatch(
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
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (props) => {
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoubsCurrentGenreDispatch: (idGenre) => {
      dispatch(getCoubsCurrentGenreFetch(idGenre));
    },
    getMoreCoubsCurrentGenreDispatch: (idGenre, step) => {
      dispatch(getMoreCoubsCurrentGenreFetch(idGenre, step));
    },
    getDataGenreDispatch: (idGenre) => {
      dispatch(getDataGenreFetch(idGenre));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
