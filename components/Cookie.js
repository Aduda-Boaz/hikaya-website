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
        <div className='cookie-container'>
          <p className='cookie-text'>
            Hikaya uses cookies to allow us to better understand how the site is
            used. By continuing to use this site, you consent to this policy.
            <span>
              <a href='/privacy' target='_blank'>
                {' '}
                Click to learn more.
              </a>
            </span>
          </p>
          {/* <button
            className='btn btn-sm btn-primary display-6'
            onClick={this.acceptCookies}
          >
            Accept
          </button> */}
          <div className='cookie-close-container'>
            <i
              class='fas fa-times cookie-close'
              onClick={this.declineCookies}
            ></i>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Cookie;
