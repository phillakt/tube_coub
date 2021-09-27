import React from 'react';

import './_btnDefault.scss';

const btnDefault = (props) => {

    // const genres = props.genres.dataPosts.genres[0].slug;

    return (
        <button className="uk-button uk-button-default tb-uk-button-default" 
        // onClick={() => ( props.getAll(genres, 1000))}
        >
            <span className="
            uk-padding-small
            uk-padding-remove-top
            uk-padding-remove-bottom
            uk-padding-remove-left
            uk-padding-remove-left
            uk-padding-remove-right
            ">{props.name}</span>
        </button>
    )
}

export default btnDefault;