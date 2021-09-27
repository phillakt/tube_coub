import React from "react";
import { connect } from "react-redux";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section--head">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-6">
                <h1 className="section__title section__title--head">FlixTV</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--pb0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="section__text section__text--small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="section__text section__text--small">
                  Exercitationem, accusamus? Veniam quam repellat laborum
                  tempora.
                </p>
              </div>
            </div>

            <div className="row row--grid">
              <div className="col-12 col-lg-4">
                <div className="step">
                  <span className="step__number">01</span>
                  <h3 className="step__title">Lorem, ipsum dolor.</h3>
                  <p className="step__text">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="step">
                  <span className="step__number">02</span>
                  <h3 className="step__title">Lorem, ipsum dolor.</h3>
                  <p className="step__text">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="step">
                  <span className="step__number">03</span>
                  <h3 className="step__title">Lorem, ipsum dolor.</h3>
                  <p className="step__text">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (props) => props;

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
