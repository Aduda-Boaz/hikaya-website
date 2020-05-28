import React from 'react';
import TeamItem from './TeamItem';

export const Team = () => {
  const teamMembers = [
    {
      id: 'amos',
      name: 'Amos Njoroge',
      title: 'QA Engineer',
      description: 'Testing guru who keeps our apps healthy and bug free 🐛',
      imageFormal: 'assets/images/team_photos/amos_formal.JPG',
      imageFun: 'assets/images/team_photos/amos_fun.JPG',
      github:'https://github.com/sannleen',
      city: 'Nairobi'
    },
    {
      id: 'andrew',
      name: 'Andrew Pham',
      title: 'Co-Founder and Head of Product',
      description: 'Chief dreamer helping to tame our products',
      imageFormal: 'assets/images/team_photos/andrew_formal.JPG',
      imageFun: 'assets/images/team_photos/andrew_fun.JPG',
      github:'https://github.com/andrewtpham',
      city: 'Berlin'
    },
    {
      id: 'darius',
      name: 'Darius Ndubi',
      title: 'DevOps Engineer',
      description: 'DevOps master deploying and maintaining all the apps at the flick of a finger',
      imageFormal: 'assets/images/team_photos/darius.jpeg',
      imageFun: 'assets/images/team_photos/darius.jpeg',
      github:'https://github.com/Darius-Ndubi',
      city: 'Nairobi'
    },
    {
      id: 'isaac',
      name: 'Isaac Kimaiyo',
      title: 'Fullstack Engineer',
      description: 'Master of all, passionately building new features for our apps',
      imageFormal: 'https://avatars0.githubusercontent.com/u/40719885?s=400&u=92eaaef55646598cd6fe1aa2fbd24a89e2e27c79&v=4',
      imageFun: 'https://avatars0.githubusercontent.com/u/40719885?s=400&u=92eaaef55646598cd6fe1aa2fbd24a89e2e27c79&v=4',
      github:'https://github.com/Kimaiyo077',
      city: 'Nairobi'
    },
    {
      id: 'katherine',
      name: 'Katherine Ng',
      title: 'UX/UI Designer',
      description: 'Design superstar keeping our apps friendly and accessible',
      imageFormal: 'assets/images/team_photos/katherine.jpeg',
      imageFun: 'assets/images/team_photos/katherine.jpeg',
      github:'https://github.com/NgKatherineDesign',
      city: 'Toronto'
    },
    {
      id: 'michael',
      name: 'Michael Bukachi',
      title: 'Frontend Engineer',
      description: 'Frontend genius making our apps come to life',
      imageFormal: 'assets/images/team_photos/michael.jpeg',
      imageFun: 'assets/images/team_photos/michael.jpeg',
      github:'https://github.com/michaelbukachi',
      city: 'Nairobi'
    },
    {
      id: 'nasir',
      name: 'Nasir Hussain',
      title: 'Backend Engineer',
      description: 'Backend ninja who keeps our apps in shape',
      imageFormal: 'https://avatars3.githubusercontent.com/u/22004703?s=460&u=0f6d7119caa2ea87837c0e5814c6531136118294&v=4',
      imageFun: 'https://avatars3.githubusercontent.com/u/22004703?s=460&u=0f6d7119caa2ea87837c0e5814c6531136118294&v=4',
      github:'https://github.com/nasirhjafri',
      city: 'Lahore'
    },
    {
      id: 'ninette',
      name: 'Ninette Adhikari',
      title: 'Co-Founder and CEO',
      description: 'Product lead gone developer helping to bridge the gap',
      imageFormal: 'assets/images/team_photos/ninette_formal.JPG',
      imageFun: 'assets/images/team_photos/ninette_fun.JPG',
      github:'https://github.com/ninetteadhikari',
      city: 'Berlin'
    },
    {
      id: 'peter',
      name: 'Peter Odeny',
      title: 'Engineering Lead',
      description:
        'Lead engineer working across the stack and making sure the engineers are well caffeinated',
      imageFormal: 'assets/images/team_photos/peter_formal.JPG',
      imageFun: 'assets/images/team_photos/peter_fun.JPG',
      github:'https://github.com/odenypeter',
      city: 'Nairobi'
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
