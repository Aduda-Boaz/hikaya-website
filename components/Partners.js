import React from 'react';

const Partners = () => {
  return (
    <div>
      <h2 className='align-center pb-3 display-5 partner-title'>
        Our partners
      </h2>
      <div className='partner-container'>
        <a href='https://www.digitalocean.com/hatch/' target='_blank'>
          <img
            className='img-partner'
            src='assets/images/DO_Hatch_grey.png'
            alt='digital ocean hatch logo'
          />
        </a>
        <a href='https://github.com/sponsors/hikaya-io' target='_blank'>
          <img
            className='img-partner'
            src='assets/images/github-grey.png'
            alt='github sponsors logo'
          />
        </a>
        <a href='https://segment.com/' target='_blank'>
          <img
            className='img-partner segment'
            src='assets/images/segment_grey.png'
            alt='segment logo'
          />
        </a>
        <a href='https://www.startupschool.org/' target='_blank'>
          <img
            className='img-partner'
            src='assets/images/startup_school_grey.png'
            alt='startup school logo'
          />
        </a>
      </div>
    </div>
  );
};

export default Partners;
