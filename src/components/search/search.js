import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import _ from 'lodash';
import * as JsSearch from 'js-search';
import { getSearchFilms } from '../../actions/actionsSearch';

import {
    getAsyncAllFilmsFromGenreAction,
    getAsyncFilmByIdFromSliderAction,
    getStateBntPlay,
} from '../../actions/actionsFilms';


import './_search.scss';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.RefSearchInput = React.createRef();
    }


    getFilmsForSearch(searchElLine) {

        let searchFilmsList = this.props.films.filmsAllFromAllGenres;
        let searchList = {};
        let searchListArr = [];

        searchFilmsList.forEach((itemGenres, i) => {

            // Массив фильмов по жанрам
            let filmsToGenres = itemGenres.films_to_genres;
            // let arrTitle = filmsToGenres;

            filmsToGenres.forEach((item, i) => {
                // console.log(filmsToGenres[i].title);
                item.genre = {
                    'id': itemGenres.id,
                    'slug': itemGenres.slug
                };
                // объект для исключения дублей в конечном массиве searchListArr
                searchList[item.id] = item;
            });

        });

        // Подготавливем массив searchListArr
        Object.keys(searchList).map((i) => {
            searchListArr.push(searchList[i]);
        });

        const search = new JsSearch.Search('id');
        // Индексируем поиск по Заголовкам
        search.addIndex('title');
        search.addDocuments(searchListArr);
        let searchResult = search.search(searchElLine);

        // Данные для экшена 
        this.props.setSearchFilms(searchResult);
    }

    render() {
        return (
            <div className="quickSearch-wrap">
                <div>
                    <input id="uk-input-search" ref={this.RefSearchInput} className="uk-input uk-form-width-large uk-margin-small-right"
                        type="text"
                        placeholder="Поиск по фильмам"

                        onChange={(e) => {

                            let searchElLine = e.target.value;
                            this.getFilmsForSearch(searchElLine);

                        }}
                    />

                    <button className="uk-button uk-button-default">Найти</button>
                </div>

                <div className="dropdown-menu search-menu search focus show">

                    <div className="nano search-results has-scrollbar">
                        <div className="search-results-content">
                            <div className="cards">
                                <div className="cards-list videos-list">

                                    {
                                        this.props.search.searchFilms ?
                                            this.props.search.searchFilms.map((item, i) => {
                                                return (
                                                    <div
                                                        key={item.title}
                                                        className="card uk-grid-small" uk-grid="true">

                                                        <div className="thumbnail">
                                                            <div className="thumb">
                                                                <Link
                                                                    onClick={() => {
                                                                        this.props.setAsyncFilmByIdFromSliderAction(item.id);
                                                                        this.props.setStateBntPlay(true);

                                                                        // Обновляем список фильмов в слайдере под фильмом
                                                                        let param = {
                                                                            id_genre: item.genre.id,
                                                                            genre: item.genre.slug,
                                                                            id_films: item.id,
                                                                            slug: item.slug
                                                                        };

                                                                        // Вывоводим фильмы по жанрам в слайдер в карточке 
                                                                        this.props.setAsyncAllFilmsFromGenreAction(param);
                                                                        // Очищаем состояние поиска
                                                                        this.getFilmsForSearch('');
                                                                        // Очищаем input поиска
                                                                        this.RefSearchInput.current.value = '';
                                                                    }}
                                                                    to={`/vf/${item.genre.id}/${item.genre.slug}/${item.id}/${item.slug}`}
                                                                >
                                                                    <img src={'http://tube-serv/' + item.poster_img} alt={item.slug} />
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="card-content video-content">
                                                            <Link
                                                                onClick={() => {
                                                                    this.props.setAsyncFilmByIdFromSliderAction(item.id);
                                                                    this.props.setStateBntPlay(true);

                                                                    // Обновляем список фильмов в слайдере под фильмом
                                                                    let param = {
                                                                        id_genre: item.genre.id,
                                                                        genre: item.genre.slug,
                                                                        id_films: item.id,
                                                                        slug: item.slug
                                                                    };

                                                                    // Вывоводим фильмы по жанрам в слайдер в карточке 
                                                                    this.props.setAsyncAllFilmsFromGenreAction(param);
                                                                    // Очищаем состояние поиска
                                                                    this.getFilmsForSearch('');
                                                                    // Очищаем input поиска
                                                                    this.RefSearchInput.current.value = '';
                                                                }}
                                                                to={`/vf/${item.genre.id}/${item.genre.slug}/${item.id}/${item.slug}`}
                                                            >
                                                                <h3 className="video-title">
                                                                    {item.title}
                                                                </h3>
                                                            </Link>

                                                            <div className="video-info">
                                                                <div>
                                                                    <span className="video-year">Премьера в мире: {item.year}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="video-country">Продолжительность: {item.duration}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            })
                                            :
                                            null
                                    }

                                </div>
                            </div>
                        </div>

                        {/* <div className="nano-pane" style={{ opacity: 1, visibility: 'visible' }}>
                            <div className="nano-slider" style={{ height: 51, transform: 'translate(0px, 0px)' }} />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (props) => {
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchFilms: (searchFilms) => {
            dispatch(getSearchFilms(searchFilms));
        },
        setStateBntPlay: (param) => {
            dispatch(getStateBntPlay(param))
        },
        setAsyncFilmByIdFromSliderAction: (param) => {
            dispatch(getAsyncFilmByIdFromSliderAction(param));
        },
        setAsyncAllFilmsFromGenreAction: (param) => {
            dispatch(getAsyncAllFilmsFromGenreAction(param));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);