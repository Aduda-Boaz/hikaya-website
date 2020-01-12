import React from 'react';
import OurStory from './OurStory';
import StoryItem from './StoryItem';

const stories = {
  row1: [
    {
      icon: 'ecosystem.png',
      name: 'Data Ecosystem',
      description: `We believe the way to transform into a digital organization is
                  through utilizing a set of integrated tools that promote
                  sharing and consistency across the organization.`
    },
    {
      icon: 'standardization.png',
      name: 'Data Standardization',
      description: `By investing in upfront system design, we build tools and
								processes that help standardize data and keep it up-to-date.
								This helps us reap the benefits of our systems by making it
								easier to roll up data and answer common questions like “Where
								do we work”, “Who do we work with?”, and “What did we
								achieve?”`
    }
  ],
  row2: [
    {
      icon: 'data_collection.png',
      name: 'Data Collection',
      description: `Digitizing the way we collect and process data has never been
                  easier with access to affordable, rugged technology to operate
                  in low connectivity settings. We can eliminate manual entry
                  and data cleaning steps in record time while improving the
                  flow of data through real-time monitoring.`
    },
    {
      icon: 'storage.png',
      name: 'Data Storage',
      description: `By integrating data in a centralized and consistent manner, we
                  can reduce duplication and encourage organizations to access
                  more of their data for in depth analysis.`
    }
  ],
  row3: [
    {
      icon: 'visualization.png',
      name: 'Data Visualization',
      description: `Once data starts to work its way through our tools, it is
                  coupled with automated and self-service reports and dashboards
                  that give greater insight into all levels of the organization.
                  By utilizing modern business intelligence and easy-to-use
                  visualization tools, organizations can access relevant and
                  timely information for informed decision making.`
    },
    {
      icon: 'visualization.png',
      name: 'Commitment to Open Source',
      description: `Our team is committed to developing solutions using an
                  iterative, human-centered design approach and support the use
                  of open source software across the nonprofit community.`
    }
  ]
};

const renderStoryItems = rows => {
  return rows.map(row => (
    <section key={row} className='features1 cid-rGcC0zE5vw' id='features1-4'>
      <div className='container'>
        <div className='media-container-row products-approach__top'>
          {stories[row].map(story => (
            <StoryItem key={story.name} {...story} />
          ))}
        </div>
      </div>
    </section>
  ));
};

const Stories = () => {
  const rows = Object.keys(stories);
  return (
    <div className='products'>
      <OurStory />
      {renderStoryItems(rows)}
    </div>
  );
};

export default Stories;
