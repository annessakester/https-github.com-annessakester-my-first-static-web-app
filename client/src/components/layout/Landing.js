import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeroImage from "../../img/hero-img-pn.png";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="hero">
        <div className="landing">
          <div className="landing-content">
            <small className="small text-primary strong">
              Crafting Digital Masterpieces
            </small>
            <h1 className="x-large">
              Explore the Portfolio of <span className="span">Web Design</span> Maestro's
            </h1>
            <p>
              Welcome to the digital atelier where innovation meets creativity!
              Dive into a captivating showcase of meticulously crafted websites
              that seamlessly blend aesthetics with functionality. From sleek
              minimalism to vibrant user experiences, each project in our
              portfolio is a testament to our passion for exceptional web
              design.
            </p>
            <Link className="btn btn-primary" to="/login">
              Get Started
            </Link>
          </div>
          <div className="landing-img">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </section>

      {/* <section className="block container">
        <h1>How to get started</h1>

        <p>
          <strong>1 </strong>
          Customize your profile. Click your profile image in the top right
          corner, then select the gear icon to make your profile uniquely yours.
        </p>
        <p>
          <strong>2 </strong>
          Explore fellow developers and posts.
        </p>
        <p>
          <strong>3 </strong>
          Like the posts you like to share the love and start getting to know
          the community.
        </p>
        <p>
          <strong>4 </strong>
          Reply to a question in an existing thread or ask a question by
          creating a new topic
        </p>
      </section>

      <section className="container">
        <h1 className="large">What is DevBook?</h1>

        <p>DevBook is a community for growing developers.</p>
      </section> */}
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
