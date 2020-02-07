import React from 'react';

const TeamItem = ({ id, name, title, description, imageFormal, imageFun }) => {
  return (
    <div className='member-container'>
      <div className='image-container'>
        <img
          className={`img-team ${id}`}
          src={imageFormal}
          onMouseOver={e => (e.currentTarget.src = `${imageFun}`)}
          onMouseOut={e => (e.currentTarget.src = `${imageFormal}`)}
          alt='team photo'
        />
      </div>
      <div className='team-text'>
        <h4 className='display-4'>
          <strong>{name}</strong>
        </h4>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamItem;
