import React from 'react';

const TeamItem = ({ id, name, title, description, imageFormal, imageFun, github, city }) => {
  return (
    <div className='member-container'>
      <div className='image-container'>
        <img
          className={`img-team ${id}`}
          src={imageFormal}
          onMouseOver={(e) => (e.currentTarget.src = `${imageFun}`)}
          onMouseOut={(e) => (e.currentTarget.src = `${imageFormal}`)}
          alt='team photo'
        />
      </div>
      <div className='team-text'>
        <h4 className='display-4'>
          <strong>{name}</strong>
          <a className='githubLogo' href={github}>
            <i class='fab fa-github fa-xs' />
          </a>
        </h4>
        <p>{title} | {city}</p>
        <p>{description}</p>
        {/* <p>Nairobi</p> */}
      </div>
    </div>
  );
};

export default TeamItem;
