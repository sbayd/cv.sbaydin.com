import Profile from './profile.jpeg';

const CVData = {
  personalData: {
    name: 'S.Berkay Aydın',
    title: 'Engineering Director & Innovator in Tech',
    image: Profile,
    contacts: [
      { type: 'email', value: 'sbaydin06@gmail.com' },
      { type: 'phone', value: '+90 (507) 808 41 30' },
      { type: 'website', value: 'sbaydin.com' },
      { type: 'linkedin', value: 'linkedin.com/in/sbaydin' },
      { type: 'twitter', value: 'twitter.com/sbayd' },
      { type: 'github', value: 'github.com/sbayd' },
    ],
    languages: [
      { value: 'Turkish', level: 'Native' },
      { value: 'English', level: 'Professional' },
      { value: 'Spanish', level: 'Beginner' },
    ],
    interests: [
      'Pipes',
      'Analog Photography',
      'Cooking',
      'Archery',
      'Poems',
      'Drums',
    ],
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: '**Engineering Director and Frontend Architect at Jotform**, my journey in technology began at 13. Known for a decisive **"Get things done"** approach, I have led significant web and mobile app projects, each reaching millions. Experienced in **backend, frontend, desktop, and mobile development**, I\'ve consistently pushed innovation\'s boundaries. Evolving from hands-on developer to visionary leader, I remain deeply engaged in product creation.\n\n&nbsp;\n\nAt Jotform, along with leading technical discussions, creating innovative solutions, overseeing hiring, and mentoring teams, I manage a complex monorepo of **400+ packages**, focusing on system efficiency and scalability.\n\n&nbsp;\n\nBeyond Jotform, I offer **consulting services** and mentorship, and have launched AI powered projects like [**Tefez**](tefez.com) and [**Dream Atlas**](https://apps.apple.com/th/app/dream-atlas-analyze-dreams/id6470039596). My career is a testament to continuous learning and leadership in the fast-paced tech industry.',
      icon: 'usertie',
    },
    {
      type: 'experiences-list',
      title: 'Career Journey',
      description: '',
      icon: 'archive',
      items: [

        {
          title: 'Engineering Director / Frontend Architect',
          company: 'JotForm',
          description: "In my dual role at Jotform, I lead technical discussions, devise innovative solutions, and oversee hiring and team mentorship. I've spearheaded major web and mobile app projects, reaching millions of users, and manage a monorepo with 400+ packages, focusing on system efficiency and automation.",
          companyWebSite: 'http://jotform.com',
          datesBetween: '2022.10 - Present',
        },
        {
          title: 'Front-end Architect',
          company: 'JotForm',
          description: 'As part of the Front-end Architecture team, I focus on enhancing developer efficiency and satisfaction. Responsibilities include creating shared solutions for teams, mentoring, transitioning to a monorepo, and maintaining development environments.',
          companyWebSite: 'http://jotform.com',
          datesBetween: '2021.10 - Present',
        },
        {
          title: 'Team Lead / Senior Front-end Developer',
          company: 'JotForm',
          description: 'Managed a cross-functional team, mentored junior developers, and developed common components, significantly contributing to products used by over 10 million users.',
          companyWebSite: 'http://jotform.com',
          datesBetween: '2017.10 - 2021.10',
        },
        {
          title: 'Front-end Developer',
          company: 'JotForm',
          description: "Focused on Javascript, mainly with ReactJS, contributing to the development of new features and enhancements in JotForm's offerings.",
          companyWebSite: 'http://jotform.com',
          datesBetween: '2016.8 - 2017.10',
        },
        {
          title: 'Co-founder',
          company: 'Tefez',
          description: 'Co-founded and developed Tefez, an AI-powered online appointment scheduling tool, contributing to its growth and technological advancement.',
          companyWebSite: 'http://tefez.com',
          datesBetween: '2021 - Present',
        },
        {
          title: 'Creator',
          company: 'Dream Atlas',
          description: 'Developed Dream Atlas, an innovative AI-based dream analysis app available on App Store and Google Play, showcasing my skills in mobile app development and AI integration.',
          companyWebSite: 'https://apps.apple.com/th/app/dream-atlas-analyze-dreams/id6470039596',
          datesBetween: '2023 - Present',
        },
        {
          title: 'Full-Stack Developer',
          company: 'YD Software',
          description: 'Employed ASP.Net MVC and N-Tier Architecture for system development, including management and learning systems, and engaged in Android and iOS app development using Xamarin and NDK.',
          companyWebSite: 'http://ydyazilim.com',
          companyMeta: 'ANKARA METU Technopolis (ODTU Teknokent)',
          datesBetween: '2012 - 2016.8',
        },
        {
          title: 'Intern',
          company: 'YD Software',
          description: 'Gained hands-on experience in Learning Management System development, working on both desktop and web applications.',
          companyWebSite: 'http://ydyazilim.com',
          companyMeta: 'ANKARA METU Technopolis (ODTU Teknokent)',
          datesBetween: '2012.06 - 2012.10',
        },
      ],
    },
    {
      type: 'projects-list',
      title: 'Featured Projects',
      description: 'Discover my selection of key projects that highlight innovation and technical skill. For more details, please contact me.',
      icon: 'tasks',

      groups: [
        {
          sectionHeader: 'JotForm',
          description: 'Easiest Form Builder / 10+ Million Users',
          items: [
            {
              title: 'JotForm Approvals / JotForm Workflow',
              projectUrl: 'https://www.jotform.com/products/approvals/',
              description: 'A sophisticated drag & drop process builder using React, Redux, Redux-Saga. This project is a testament to my commitment to creating innovative, user-centric solutions.',
            },
            {
              title: 'JotForm Mobile Forms',
              projectUrl: 'https://www.jotform.com/products/mobile-forms/',
              description: 'A pivotal mobile application enabling form creation and submission, boasting over 1 million downloads, highlighting my role in its development with React Native and Redux.',
            },
            {
              title: 'Jotform PDF Editor',
              projectUrl: 'https://www.jotform.com/products/pdf-editor/',
              description: 'Leading the development of a user-friendly PDF Editor, I utilized React & NodeJS to empower users with customized PDF creation capabilities.',
            },
            {
              title: 'JotForm Cards',
              projectUrl: 'https://www.jotform.com/cards/',
              description: 'A next-gen form solution with over a million users, where I contributed as a Javascript Developer, enhancing the user experience with React and SSR.',
            },
            {
              title: 'Easiest Online Form Builder',
              projectUrl: 'https://www.jotform.com/meet-jotform-4/',
              description: 'As a Javascript Developer, I played a crucial role in developing this powerful WYSWYG form builder, integrating React, Redux, and Socket.io.',
            },
          ],
        },
        {
          sectionHeader: 'YD Software (YD Yazilim)',
          description: 'Tailor-made Software Development Company',
          items: [
            {
              title: 'Odtu Teknokent Internal Systems (TKBS - YFYI - GGJ - BIGG - ATOM - TeknoJump)',
              projectUrl: 'http://giris.odtuteknokent.com.tr',
              description: "Contributed to ODTU Teknokent's internal systems, employing diverse technologies like C#, ASP.NET MVC, and Xamarin to enhance operational efficiency.",
            },
          ],
        },
        {
          sectionHeader: 'Side Projects',
          description: 'Explore some of my innovative side projects below.',
          items: [
            {
              title: 'Tefez - Online Appointment Scheduler',
              projectUrl: 'https://tefez.com',
              description: 'Co-founded Tefez, an AI-powered tool revolutionizing appointment scheduling, exemplifying my ability to merge technology with practical solutions.',
            },
            {
              title: 'Dream Atlas - Analyze Dreams (Mobile APP)',
              projectUrl: 'https://apps.apple.com/th/app/dream-atlas-analyze-dreams/id6470039596',
              description: 'Developed an AI-based dream analysis app for Android and iOS, showcasing my skill in integrating advanced technology with user-friendly app design.',
            },
            {
              title: 'Soldd - Online Marketplace (Mobile APP)',
              projectUrl: 'https://play.google.com/store/apps/details?id=com.soldd.app',
              description: 'Created Soldd, a versatile marketplace app for Turkish users, leveraging React Native and GraphQL for an optimal user experience.',
            },
            {
              title: 'React-CV - Open Source',
              projectUrl: 'https://github.com/sbayd/react-cv',
              description: 'Developed React-CV, an open-source tool for building CV websites, contributing to the developer community with my expertise.',
            },
            {
              title: 'React-Flippy - Open Source',
              projectUrl: 'https://github.com/sbayd/react-flippy',
              description: 'React-Flippy, a popular open-source React component for flipping cards, showcases my commitment to sharing innovative solutions.',
            },
          ],
        },
      ],

    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Management Information Systems (BS)',
          authority: 'Anadolu University',
          authorityWebSite: 'https://anadolu.edu.tr',
          rightSide: '2017 - 2021',
        },
      ],
    },
    {
      type: 'common-list',
      title: 'Conferences & Certificates',
      description: 'My engagement in key conferences and pursuit of certifications underscores my commitment to continual learning and staying current in the IT field. These experiences have enriched my professional journey, providing opportunities for knowledge expansion, networking, and sharing insights.',
      icon: 'comments',
      items: [
        {
          title: "O'Reilly Software Architecture Conference",
          authority: "O'Reilly",
          rightSide: 'Berlin, Germany - 2019',
          authorityMeta: 'Attendee',
          authorityWebSite: 'https://www.oreilly.com/conferences/software-architecture.html',
        },
        {
          title: 'Principal Developer Training',
          rightSide: 'Istanbul, Turkey - 2019',
          authority: 'Eduard Sizovs',
          authorityWebSite: 'https://principal.dev/',
        },
        {
          title: 'FullStackFest',
          rightSide: 'Barcelona, Spain - 2018',
          authority: 'FullStackFest',
          authorityMeta: 'Attendee / Lightning talk speaker',
          authorityWebSite: 'https://fullstackfest.com',
        },
        {
          title: 'Frontend Istanbul',
          rightSide: 'Istanbul, Turkey - 2018',
          authority: 'Frontend Istanbul',
          authorityWebSite: 'https://frontend.istanbul/',
        },
        {
          title: 'Informatics Day',
          rightSide: 'Ankara, Turkey - 2018',
          authority: 'METU C Club',
          authorityMeta: 'Speaker',
          authorityWebSite: 'https://cclub.metu.edu.tr/',
        },
        {
          title: 'NodeConfEU',
          rightSide: 'Kilkenny, Ireland - 2017',
          authority: 'NodeConf',
          authorityWebSite: 'https://www.nodeconf.eu/',
        },
      ],
    },
    {
      type: 'common-list',
      title: 'Languages',
      icon: 'language',
      items: [
        {
          authority: 'Turkish',
          authorityMeta: 'Native',
        },
        {
          authority: 'English',
          authorityMeta: 'Professional',
        },
        {
          authority: 'Spanish',
          authorityMeta: 'Beginner',
        },
      ],
    },
    {
      type: 'tag-list',
      title: 'Core Competencies',
      icon: 'rocket',
      items: [
        'Strategic Technology Leadership',
        'Advanced JavaScript & React Development',
        'Scalable System Architecture',
        'Efficient Project Management',
        'Innovative Product Development',
        'Cross-Platform Solutions (Web & Mobile)',
        'AI Fundamentals & Application',
        'DevOps & Automation Strategies',
        'Mentorship & Team Building',
      ],
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: [
        'Technology Innovation & Trends',
        'Open-Source Contributions',
        'Exploring AI Applications',
        'Digital & Analog Photography',
        'Culinary Arts & Experimentation',
        'Historical & Tech Literature',
        'Outdoor Activities & Nature Exploration',
      ],
    },
  ],
};

export default CVData;
