import React from 'react';

export const Cookie = () => (
    <div className='cookie-banner'>
        <p className='cookie-text'>
            <img src="assets/images/cookie.png" width="16" className='cookie-image'/>
            This website uses cookies to ensure you get the best experience. More information: 
            <a href="/privacy" target="_blank"> Privacy Policy</a> 
        </p>
        <button className="btn btn-sm btn-primary display-6 accept" onClick={acceptCookies}>Accept</button>
        <button className="btn btn-sm btn-primary display-6 accept" onClick={declineCookies}>Decline</button>
    </div>
)

function acceptCookies() {
    if (localStorage.getItem('cookieSeen') != 'shown') {
      $('.cookie-banner').delay(2000).fadeIn();
      localStorage.setItem('cookieSeen','shown')
    };
    $('.cookie-banner').hide({duration: 1000});
}

function declineCookies() {
    if (localStorage.getItem('cookieSeen') == 'shown') {
      $('.cookie-banner').delay(2000).fadeIn();
      localStorage.removeItem('cookieSeen')
    };
    $('.cookie-banner').hide({duration: 1000});
}

export default Cookie