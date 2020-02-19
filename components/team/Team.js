import React from 'react';
import TeamItem from './TeamItem';

export const Team = () => {
  const teamMembers = [
    {
      id: 'amos',
      name: 'Amos Njoroge',
      title: 'QA Engineer',
      description: 'Keeps our apps healthy and bug free 🐛',
      imageFormal: 'assets/images/team_photos/amos_formal.JPG',
      imageFun: 'assets/images/team_photos/amos_fun.JPG'
    },
    {
      id: 'andrew',
      name: 'Andrew Pham',
      title: 'Co-Founder and Head of Product',
      description: 'Chief dreamer helping to tame our products',
      imageFormal: 'assets/images/team_photos/andrew_formal.JPG',
      imageFun: 'assets/images/team_photos/andrew_fun.JPG'
    },
    {
      id: 'ivy',
      name: 'Ivy Mutiso',
      title: 'Software Engineer',
      description:
        'Frontend engineer with a curiosity for design and helping to keep our apps happy',
      imageFormal: 'assets/images/team_photos/ivy_formal.JPG',
      imageFun: 'assets/images/team_photos/ivy_fun.jpg'
    },
    {
      id: 'ninette',
      name: 'Ninette Adhikari',
      title: 'Co-Founder and CEO',
      description: 'Product lead gone developer helping to bridge the gap',
      imageFormal: 'assets/images/team_photos/ninette_formal.JPG',
      imageFun: 'assets/images/team_photos/ninette_fun.JPG'
    },
    {
      id: 'peter',
      name: 'Peter Odeny',
      title: 'Lead Software Engineer',
      description:
        'Lead engineer working across the stack and making sure the engineers are well caffeinated',
      imageFormal: 'assets/images/team_photos/peter_formal.JPG',
      imageFun: 'assets/images/team_photos/peter_fun.JPG'
    }
  ];
  return (
    <div className='team-page'>
      <h1 className='display-5'>Our Storytellers</h1>
      <div className='team-container'>
        {teamMembers.map(member => {
          return <TeamItem key={member.name} {...member} />;
        })}
      </div>
    </div>
  );
};

export default Team;
