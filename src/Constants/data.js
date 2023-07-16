const candidates = [
  {
    name: 'John Doe',
    location: 'New York',
    jobRole: 'Software Engineer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-1',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Jane Smith',
    location: 'San Francisco',
    jobRole: 'UX Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-2',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Alex Johnson',
    location: 'London',
    jobRole: 'Project Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?face-3',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Sarah Williams',
    location: 'Toronto',
    jobRole: 'Data Scientist',
    photoUrl: 'https://source.unsplash.com/400x400/?face-30',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'David Lee',
    location: 'Berlin',
    jobRole: 'Front-end Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-4',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Emily Wilson',
    location: 'Sydney',
    jobRole: 'Marketing Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?face-5',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Michael Anderson',
    location: 'Chicago',
    jobRole: 'Product Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?face-6',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Jessica Martin',
    location: 'Los Angeles',
    jobRole: 'Graphic Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-7',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Matthew Thompson',
    location: 'Houston',
    jobRole: 'Data Analyst',
    photoUrl: 'https://source.unsplash.com/400x400/?face-8',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Sophia Davis',
    location: 'Paris',
    jobRole: 'UX/UI Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-9',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Daniel Rodriguez',
    location: 'Mexico City',
    jobRole: 'Software Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-10',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Olivia Harris',
    location: 'Melbourne',
    jobRole: 'HR Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?face-11',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'William Martinez',
    location: 'Madrid',
    jobRole: 'Full-stack Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-12',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Ava Thompson',
    location: 'Tokyo',
    jobRole: 'Digital Marketing Specialist',
    photoUrl: 'https://source.unsplash.com/400x400/?face-13',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'James Clark',
    location: 'Vancouver',
    jobRole: 'Business Analyst',
    photoUrl: 'https://source.unsplash.com/400x400/?face-14',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Sofia Lewis',
    location: 'Rome',
    jobRole: 'Web Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-15',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Benjamin Wright',
    location: 'Seattle',
    jobRole: 'Data Engineer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-16',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Charlotte King',
    location: 'Mumbai',
    jobRole: 'Content Writer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-17',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Henry Green',
    location: 'Dubai',
    jobRole: 'Software Architect',
    photoUrl: 'https://source.unsplash.com/400x400/?face-18',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Lily Turner',
    location: 'Hong Kong',
    jobRole: 'UX Researcher',
    photoUrl: 'https://source.unsplash.com/400x400/?face-19',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Jackson Walker',
    location: 'São Paulo',
    jobRole: 'Product Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-20',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Chloe Adams',
    location: 'Moscow',
    jobRole: 'Digital Strategist',
    photoUrl: 'https://source.unsplash.com/400x400/?face-21',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Ethan Scott',
    location: 'Stockholm',
    jobRole: 'Mobile App Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-22',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Mia Roberts',
    location: 'Seoul',
    jobRole: 'UI Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-23',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Mason Turner',
    location: 'Amsterdam',
    jobRole: 'Software Tester',
    photoUrl: 'https://source.unsplash.com/400x400/?face-24',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Harper Mitchell',
    location: 'Singapore',
    jobRole: 'Marketing Analyst',
    photoUrl: 'https://source.unsplash.com/400x400/?face-25',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Evelyn Wright',
    location: 'Zurich',
    jobRole: 'Front-end Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-26',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Logan Johnson',
    location: 'Barcelona',
    jobRole: 'Project Coordinator',
    photoUrl: 'https://source.unsplash.com/400x400/?face-27',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Avery Baker',
    location: 'Buenos Aires',
    jobRole: 'Data Scientist',
    photoUrl: 'https://source.unsplash.com/400x400/?face-28',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  {
    name: 'Scarlett Hall',
    location: 'Cape Town',
    jobRole: 'UX Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-29',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic teams.'
  },
  //creating more data with same jobe role and location with different name and profile url as above to test the filter functionality
  {
    name: 'John smith',
    location: 'New York',
    jobRole: 'Software Engineer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-30',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningful impact within dynamic team.'
  },
  {
    name: 'Loral Smith',
    location: 'San Francisco',
    jobRole: 'UX Designer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-31',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningfu impact within dynamic teams.'
  },
  {
    name: 'Sam Johnson',
    location: 'London',
    jobRole: 'Project Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?face-32',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningfu impact within dynamic teams.'
  },
  {
    name: 'Sarah Williams',
    location: 'Toronto',
    jobRole: 'Data Scientist',
    photoUrl: 'https://source.unsplash.com/400x400/?face-33',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningfu impact within dynamic teams.'
  },
  {
    name: 'David Lee',
    location: 'Berlin',
    jobRole: 'Front-end Developer',
    photoUrl: 'https://source.unsplash.com/400x400/?face-34',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningfu impact within dynamic teams.'
  },
  {
    name: 'Emily Wilson',
    location: 'Sydney',
    jobRole: 'Marketing Manager',
    photoUrl: 'https://source.unsplash.com/400x400/?face-35',
    description: 'Experienced and driven professional with a proven track record in delivering exceptional results. Passionate about contributing my skills and expertise to make a meaningfu impact within dynamic teams.'
  },
];

const HowItWorksData = [
  {   
      id: 1,
      desc: "Utilize our advanced search functionality to find the perfect candidates for your job openings.",
      color: "bg-secondary-s1"
  },
  {
    id: 2,
    desc: "Narrow down your candidate search based on specific locations or regions to ensure a good fit for your company's geographic requirements.",
    color: "bg-secondary-s2"
  },
  {
    id: 3,
    desc: "Filter candidates based on desired job roles and required skills to quickly identify those who possess the qualifications you're seeking.",
    color: "bg-secondary-s3"
  },
  {
    id: 4,
    desc: "Gain access to detailed candidate profiles that include essential information such as work experience, education, skills, and additional qualifications.",
    color: "bg-secondary-s4"
  },
  {
    id: 5,
    desc: "Easily rank and evaluate candidates using our intuitive system. Save and compare top candidates side by side to make informed hiring decisions.",
    color: "bg-secondary-s5"
  },
  {
    id: 6,
    desc: "Streamline your evaluation process by utilizing our platform to track and manage candidate evaluations, making it easier to collaborate with your team and keep everyone on the same page",
    color: "bg-secondary-s6"
  }
]

export {candidates, HowItWorksData};