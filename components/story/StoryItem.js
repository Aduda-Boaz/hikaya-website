const StoryItem = ({ icon, name, description } = props) => (
  <div className='card col-12 col-md-12 col-lg-12 about-text'>
    <div className='card-img pb-3'>
      <img src={'assets/images/' + icon} alt={name} />
    </div>
    <div className='card-box'>
      <h4 className='card-title py-3 mbr-fonts-style display-4 story-card-title'>
        <strong>{name}</strong>
      </h4>
      <p className='mbr-text mbr-fonts-style display-7 story-card-text'>
        {description}
      </p>
    </div>
  </div>
);

export default StoryItem;
