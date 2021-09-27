import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 order-4 order-md-1 order-lg-4 order-xl-1">
              <div className="footer__flixtv">
                {/* <img src="img/logo.svg" alt /> */}
              </div>
              <p className="footer__tagline">
                Lorem ipsum dolor sit <br /> amet consectetur. &#128540;
              </p>
            </div>

            <div className="col-12 col-md-4 col-lg-3 col-xl-5 order-1 order-md-2 order-lg-1 order-xl-2 offset-md-2 offset-lg-0 offset-xl-3">
              <h6 className="footer__title">Kатегории</h6>
              <div className="footer__nav">
                {this.props.coubs.getAllGenres
                  ? this.props.coubs.getAllGenres.map((item, i) => {
                      return (
                        <div key={item.slug}>
                          <Link
                            to={`/genre/${item.id}/${item.slug}`}
                            onClick={() => {
                              window.scrollTo({ top: 0 });
                            }}
                          >
                            {item.title}
                          </Link>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer__content">
                <div className="footer__links">
                  {/* <a href="privacy.html">Privacy policy</a> */}
                  <small className="footer__copyright">
                    &#169; Lorem, ipsum dolor.
                  </small>
                </div>
                <small className="footer__copyright">
                  {new Date().getFullYear()}. Development by phillakt
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = (props) => {
  return props;
};

export default connect(mapStateToProps, null)(Footer);
