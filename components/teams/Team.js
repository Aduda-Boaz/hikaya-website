import React from 'react';
import TeamItem from './TeamItem';

export const Team = () => {
  const teamMembers = [
    {
      name: 'Amos Njoroge',
      title: 'QA engineer',
      description: 'Keeps our apps healthy and bug free 🐛',
      imageFormal: '/assets/images/team_photos/amos_formal.JPG',
      imageFun: '/assets/images/team_photos/amos_fun.JPG'
    },
    {
      name: 'Andrew Pham',
      title: 'Co-founder and CEO',
      description: 'Chief dreamer helping to tame our products',
      imageFormal: '/assets/images/team_photos/andrew_formal.JPG',
      imageFun: '/assets/images/team_photos/andrew_fun.JPG'
    },
    {
      name: 'Henry Ohanga',
      title: 'Engineer',
      description: 'Backend engineer/dev ops ninja who keeps our apps in shape',
      imageFormal: '/assets/images/team_photos/henry_formal.JPG',
      imageFun: '/assets/images/team_photos/henry_fun.JPG'
    },
    {
      name: 'Ivy Mutiso',
      title: 'Engineer',
      description:
        'Frontend engineer with a curiosity for design and helping to keep our apps happy',
      imageFormal: '/assets/images/team_photos/ivy_formal.JPG',
      imageFun: '/assets/images/team_photos/ivy_fun.JPG'
    },
    {
      name: 'Ninette Adhikari',
      title: 'Product manager',
      description: 'Product lead gone developer helping to bridge the gap',
      imageFormal: '/assets/images/team_photos/ninette_formal.JPG',
      imageFun: '/assets/images/team_photos/ninette_fun.JPG'
    },
    {
      name: 'Peter Odeny',
      title: 'Lead Engineer',
      description:
        'Lead engineer with a talent for working across the stack and making sure the engineers are well caffeinated',
      imageFormal: '/assets/images/team_photos/peter_formal.JPG',
      imageFun: '/assets/images/team_photos/peter_fun.JPG'
    },
    {
      name: 'William Muli',
      title: 'Engineer',
      description: 'Frontend engineer helping to make our apps speak wonders',
      imageFormal: '/assets/images/team_photos/william_formal.JPG',
      imageFun: '/assets/images/team_photos/william_fun.JPG'
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
