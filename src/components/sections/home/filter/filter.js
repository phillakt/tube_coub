import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const tubeServer = 'https://tube.eurodir.ru';
// const tubeServer = 'http://tube-serv';

class Filter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <Link
            className="card__cover"
            to={`/view/${this.props.genre.id}/${this.props.filterCoubFromGenres.slug}`}
          >
            <img
              src={
                tubeServer + this.props.filterCoubFromGenres.poster_img
              }
              alt={this.props.filterCoubFromGenres.slug}
            />

            <svg
              version="1.1"
              width={512}
              height={512}
              x={0}
              y={0}
              viewBox="0 0 24 24"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
            >
              <g>
                <g
                  xmlns="http://www.w3.org/2000/svg"
                  clipRule="evenodd"
                  fill="rgb(0,0,0)"
                  fillRule="evenodd"
                >
                  <path
                    d="m9.765 6.576c-.15414-.09633-.34841-.10143-.50738-.01332-.15898.08811-.25762.25556-.25762.43732v10c0 .1818.09864.3492.25762.4373.15897.0881.35324.083.50738-.0133l8-5c.1462-.0914.235-.2516.235-.424s-.0888-.3326-.235-.424zm6.7916 5.424-6.5566 4.0979v-8.19578z"
                    fill="#ffffff"
                    data-original="#000000"
                    style={{}}
                  />
                  <path
                    d="m12 1.5c-5.79899 0-10.5 4.70101-10.5 10.5 0 5.799 4.70101 10.5 10.5 10.5 5.799 0 10.5-4.701 10.5-10.5 0-5.79899-4.701-10.5-10.5-10.5zm-9.5 10.5c0-5.24671 4.25329-9.5 9.5-9.5 5.2467 0 9.5 4.25329 9.5 9.5 0 5.2467-4.2533 9.5-9.5 9.5-5.24671 0-9.5-4.2533-9.5-9.5z"
                    fill="#ffffff"
                    data-original="#000000"
                    style={{}}
                  />
                </g>
              </g>
            </svg>
          
          </Link>

          <h3 className="card__title">
            <Link
              to={`/view/${this.props.genre.id}/${this.props.filterCoubFromGenres.slug}`}
            >
              {this.props.filterCoubFromGenres.title}
            </Link>
          </h3>
          {/* <ul className="card__list">
                    <li>Free</li>
                    <li>Action</li>
                    <li>2019</li>
                </ul> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = props => (props);

export default connect(mapStateToProps, null)(Filter);
