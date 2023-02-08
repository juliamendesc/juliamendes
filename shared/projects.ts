const projects = [
  {
    id: 1,
    title: 'Mansa, a fintech startup',
    // showInPage: true,
    icon: '/assets/project1.png',
    stack: ['Next.js', 'React', 'Typescript'],
    description:
      'Mansa is a fintech startup that facilitated loans for small entrepreneurs and independent professionals. I was in a team of 4 front-end developers and 5 back-end. With such a small team, besides being able to work in multiple project parts, I had the opportunity to work in tasks with different levels of difficulty.',
    learned:
      'Forms with react-hook-form / Form validation and safely-typed API responses with Zod / Design system with Radix and ChakraUI / Caching and data fetching with React Query',
    skills: ['Next.js', 'React', 'Typescript'],
    images: [
      '/assets/projectImages/mansa0.png',
      '/assets/projectImages/mansa1.png',
      '/assets/projectImages/mansa2.png',
    ],
    websiteLink: 'https://www.getmansa.com',
    githubLink: '',
  },
  {
    id: 2,
    title: 'Workmedia - Anteprojectos',
    // showInPage: true,
    icon: '/assets/project2.png',
    stack: ['Next.js', 'React', 'Typescript', 'Node.js', 'Strapi', 'MySQL'],
    description:
      'Workmedia is a media company that wished to rebuild its own products. I was in a team with one senior developer and one remote junior frontend developer. We were responsible for the development of the new version of the Anteprojectos product. The product is a web application that allows users to create and manage their projects. The application is divided into two parts: the front-end and the back-end. The front-end is a React application that consumes the back-end API. The back-end is a Node.js application that uses Strapi as a framework and MySQL as a database.',
    skills: [
      'Next.js',
      'React',
      'Typescript',
      'ANT Design',
      'Node.js',
      'Strapi',
      'MySQL',
    ],
    learned:
      'Usage of Strapi as a framework / Usage of MySQL as a database / Usage of Next.js, including server-side and static props / Usage of React, including hooks and context / Usage of Typescript ',
    images: [],
    websiteLink: 'https://workmedia.pt/',
    githubLink: '',
  },
  {
    id: 3,
    title: 'Julia Mendes Personal Website',
    // showInPage: true,
    icon: '/assets/project3.png',
    stack: [
      'Next.js',
      'React',
      'Typescript',
      'LESS',
      'Node.js',
      'GithubActions',
      'Husky',
    ],
    description:
      'To fill in the time in between jobs, I decided to start my own personal website. My main idea was to take advantage of the time to deepen my knowledge in some technologies I have already used but still had some blanks to fill in, and to explore some other paths I was curious about. I also wanted to have a place where I could show my work and my skills. I am quite please with the result.',
    skills: [
      'Next.js',
      'React',
      'Typescript',
      'LESS',
      'Node.js',
      'GithubActions',
      'Husky',
    ],
    learned:
      'Usage of LESS as preprocessor / Usage of GithubActions to automate certain aspects of the pipeline  / Usage of Husky to ensure lint certainty before commit / Usage of Next.js API to create a contact form submission script',
    images: [],
    websiteLink: 'https://juliamendes.vercel.app',
    githubLink: 'https://github.com/juliamendesc/juliamendes',
  },
];

export default projects;
