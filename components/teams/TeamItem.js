import React from 'react';

const TeamItem = ({ name, title, description, imageFormal, imageFun }) => {
  return (
    <div className='member-container'>
      <img
        className='img-team'
        src={imageFormal}
        onMouseOver={e => (e.currentTarget.src = `${imageFun}`)}
        onMouseOut={e => (e.currentTarget.src = `${imageFormal}`)}
        alt='team photo'
      />
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
