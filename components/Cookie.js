import React, { Component } from 'react';

class Cookie extends Component {
  COOKIE_SEEN_KEY = 'cookieSeen';

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  acceptCookies = () => {
    const cookieBanner = $('.cookie-banner');
    if (localStorage.getItem(this.COOKIE_SEEN_KEY) !== 'shown') {
      cookieBanner.delay(2000).fadeIn();
      localStorage.setItem(this.COOKIE_SEEN_KEY, 'shown');
    }
    cookieBanner.hide({ duration: 1000 });
  };

  declineCookies = () => {
    $('.cookie-banner').hide({ duration: 1000 });
  };

  componentDidMount() {
    const show = localStorage.getItem(this.COOKIE_SEEN_KEY) !== 'shown';
    this.setState({ show });
  }

  render() {
    return this.state.show ? (
      <div className='cookie-banner'>
        <div className='cookie-contianer'>
          <p className='cookie-text'>
            This website uses cookies to ensure you get the best experience.
            Here's our
            <span>
              <a href='/privacy'> Privacy Policy.</a>
            </span>
          </p>
          <button
            className='btn btn-sm btn-primary display-6'
            onClick={this.acceptCookies}
          >
            Accept
          </button>
          {/* <div className='cookie-close'> */}
          <i class='fas fa-times cookie-close'></i>
          {/* </div> */}
          {/* <a
          href='/privacy'
          target='_blank'
          className='btn btn-sm btn-primary display-6'
          onClick={this.declineCookies}
        >
          Privacy Policy
        </a> */}
        </div>
      </div>
    ) : null;
  }
}

export default Cookie;
