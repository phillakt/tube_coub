import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AllGenres = (props) => {

  return (
    <React.Fragment>
      <div className="item">
        <Link to={`/genre/${props.coubsAllItems.id}/${props.coubsAllItems.slug}`} >
          <div
            className="home__card">
            <img src={props.coubsAllItems.img} alt={props.coubsAllItems.slug} />

            <div>
              <h2>{props.coubsAllItems.title}</h2>
              {/* <ul>
                <li>Free</li>
                <li>Action</li>
                <li>2021</li>
              </ul> */}
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (props) => {
  return props;
};


export default connect(mapStateToProps, null)(AllGenres);
