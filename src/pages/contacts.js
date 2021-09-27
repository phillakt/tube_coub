import React from "react";
import { connect } from "react-redux";

class Contacts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section--head">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-6">
                <h1 className="section__title section__title--head">
                  Contacts
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--pb0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5">
                <p className="section__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit quam ea repellat, possimus saepe cum?
                </p>
                <ul className="contacts__list">
                  <li>
                    <a href="mailto:video@gmail.com">video@gmail.com</a>
                  </li>
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
