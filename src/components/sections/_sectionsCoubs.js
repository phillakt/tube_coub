import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// import Preloader from '../preloader/preloader';
// import BtnDefault from '../../ui/buttons/btnDefault';
// import { getAsyncPosts } from '../../actions/actions';
// import { getStatePopoverViewCoubGenre } from '../../actions/actionsCoubs';
// import DescriptionBrief from '../description-brief/descriptionBrief';

import "./_sections.scss";

class SectionsCoubs extends React.Component {

    getTitle() {
        return (
            <h1 className="
            uk-heading-line 
            uk-heading-medium 
            uk-padding 
            uk-padding-remove-left
            uk-padding-remove-top
            tb-title__h1
            ">
                <span>{this.props.title}</span>
            </h1>
        )
    }

    toUpWindow() {
        window.scroll({ top: 0, left: 0 });
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    viewPopoverHandlerPremiere(popoverViewCoubGenre) {
        this.props.coubs.popoverViewCoubGenre = popoverViewCoubGenre;
        this.props.setStatePopoverViewCoubGenre(this.props.coubs.popoverViewCoubGenre);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <div className="uk-section">
                    <div className="uk-container">

                        {this.props.title ? this.getTitle() : null}

                        <div uk-grid="true" className="uk-grid-match">

                            {
                                this.props.coubsGenres.coubs_to_genres ?

                                    this.props.coubsGenres.coubs_to_genres.map((item, i) => {

                                        return (

                                            <div
                                                className="uk-width-1-6@m popover-wrap"
                                                key={item.id}>
                                                <Link onClick={() => (this.toUpWindow())}
                                                    to={`/vc/${this.props.coubsGenres.id}/${this.props.coubsGenres.slug}/${item.id}/${item.slug}`}
                                                    className="uk-card uk-card-default uk-card-film"
                                                    style={{
                                                        backgroundImage: `url(http://tube.eurodir.ru${item.poster_img})`,
                                                        backgroundSize: 'cover'
                                                    }}>
                                            
                                                </Link>

                                            </div>


                                        )
                                    })
                                    :
                                    <div className="uk-text-secondary">
                                        <p>На стадии заполнения...</p>
                                    </div>

                            }

                        </div>

                        <div className="uk-flex-center" uk-grid="true">

                            {
                                this.props.viewBtnLoader ?
                                    <BtnDefault name="Показать все"
                                    // genres={this.props}
                                    // getAll={this.props.getAsyncPostsHandler}
                                    />
                                    :
                                    null
                            }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = props => {
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStatePopoverViewCoubGenre: (popoverViewCoubGenre) => {
            dispatch(getStatePopoverViewCoubGenre(popoverViewCoubGenre));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsCoubs);
