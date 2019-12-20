import React from 'react';

const Partners = () => {
  return (
    <div>
      <h2 className='align-center pb-3 mbr-fonts-style display-5 partner-title'>
        Our partners
      </h2>
      <div className='partner-container'>
        <img
          className='img-partner'
          src='/assets/images/DO_Hatch_grey.png'
          alt='digital ocean hatch logo'
        />
        <img
          className='img-partner'
          src='/assets/images/github-grey.png'
          alt='github sponsors logo'
        />
        <img
          className='img-partner segment'
          src='/assets/images/segment_grey.png'
          alt='segment logo'
        />
        <img
          className='img-partner'
          src='/assets/images/startup_school_grey.png'
          alt='startup school logo'
        />
      </div>
    </div>
  );
};

export default Partners;
