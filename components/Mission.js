const Mission = () => (
  <section
    className="header1 mbr-fullscreen mbr-parallax-background"
    id="header1-2"
  >
    <div className="container d-flex justify-content-between header-image-container">
      <div className="mbr-white d-flex flex-column justify-content-start col-lg-4 col-md-12 col-sm-12 col-xs-12 header-content">
        <h1 className="mbr-section-title align-left mbr-bold pb-3 mbr-fonts-style display-1 tell-story-title">
          Tell your story
        </h1>
        <p className="mbr-text align-left pb-3 mbr-fonts-style display-5 header-text tell-story-text">
          We work with nonprofits to tell their story through data and
          technology.
        </p>
        <div className="mission-btn-container">
          <a
            className="btn btn-sm btn-primary display-4 btn-nav mission-btn"
            href="index#content4-8"
          >
            Join
          </a>
        </div>
      </div>
      <img
        src="./assets/images/header-image.png"
        alt=""
        className="col-md-7 header-image"
      />
    </div>
  </section>
);

export default Mission;
