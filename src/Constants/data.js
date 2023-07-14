const candidates = [
  {
    name: 'John Doe',
    location: 'New York',
    jobRole: 'Software Engineer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Jane Smith',
    location: 'San Francisco',
    jobRole: 'UX Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Alex Johnson',
    location: 'London',
    jobRole: 'Project Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Sarah Williams',
    location: 'Toronto',
    jobRole: 'Data Scientist',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'David Lee',
    location: 'Berlin',
    jobRole: 'Front-end Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Emily Wilson',
    location: 'Sydney',
    jobRole: 'Marketing Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Michael Anderson',
    location: 'Chicago',
    jobRole: 'Product Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Jessica Martin',
    location: 'Los Angeles',
    jobRole: 'Graphic Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Matthew Thompson',
    location: 'Houston',
    jobRole: 'Data Analyst',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Sophia Davis',
    location: 'Paris',
    jobRole: 'UX/UI Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Daniel Rodriguez',
    location: 'Mexico City',
    jobRole: 'Software Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Olivia Harris',
    location: 'Melbourne',
    jobRole: 'HR Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'William Martinez',
    location: 'Madrid',
    jobRole: 'Full-stack Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Ava Thompson',
    location: 'Tokyo',
    jobRole: 'Digital Marketing Specialist',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'James Clark',
    location: 'Vancouver',
    jobRole: 'Business Analyst',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Sofia Lewis',
    location: 'Rome',
    jobRole: 'Web Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Benjamin Wright',
    location: 'Seattle',
    jobRole: 'Data Engineer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Charlotte King',
    location: 'Mumbai',
    jobRole: 'Content Writer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Henry Green',
    location: 'Dubai',
    jobRole: 'Software Architect',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Lily Turner',
    location: 'Hong Kong',
    jobRole: 'UX Researcher',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Jackson Walker',
    location: 'São Paulo',
    jobRole: 'Product Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Chloe Adams',
    location: 'Moscow',
    jobRole: 'Digital Strategist',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Ethan Scott',
    location: 'Stockholm',
    jobRole: 'Mobile App Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Mia Roberts',
    location: 'Seoul',
    jobRole: 'UI Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Mason Turner',
    location: 'Amsterdam',
    jobRole: 'Software Tester',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Harper Mitchell',
    location: 'Singapore',
    jobRole: 'Marketing Analyst',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Evelyn Wright',
    location: 'Zurich',
    jobRole: 'Front-end Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Logan Johnson',
    location: 'Barcelona',
    jobRole: 'Project Coordinator',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Avery Baker',
    location: 'Buenos Aires',
    jobRole: 'Data Scientist',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Scarlett Hall',
    location: 'Cape Town',
    jobRole: 'UX Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?people',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  }
];

export {candidates};