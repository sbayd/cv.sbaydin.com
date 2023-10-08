import Profile from './profile.jpeg';

export const CVData = {
  personalData: {
    name: 'S.Berkay Aydın',
    title: 'Senior Software Developer',
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
      content: "I'm an Engineering Director and Frontend Architect at Jotform with a lifelong passion for coding that began at the age of 13.\n\nIn my role, I'm known for a 'Get things done' attitude. I lead technical discussions, create solutions, manage hiring, and mentor teams. I've successfully led web and mobile app development projects, each reaching millions of users. Additionally, I manage a complex monorepo with 400+ packages, emphasizing system efficiency and automation.\n\nBeyond work, I actively engage in side projects like 'Tefez,' an online appointment scheduler, and 'Dream Atlas Mobile' built with React Native. My commitment to innovation drives me to continually explore new technologies and methodologies.\n\nI'm also dedicated to mentorship, offering guidance both in the workplace and through non-profit organizations and paid lessons.",
      icon: 'usertie',
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      description: '',
      icon: 'archive',
      items: [
        {
          title: 'Engineering Director / Frontend Architect',
          company: 'JotForm',
          description: "In my role as Engineering Director and Frontend Architect at Jotform, I lead technical discussions, create common solutions, manage hiring processes, and mentor teams. I've successfully led web and mobile app development projects, each reaching millions of users. My responsibilities include managing a complex monorepo with 400+ packages, emphasizing system efficiency and automation.",
          companyWebSite: 'http://jotform.com',
          companyMeta: '',
          datesBetween: '2022.10 - Present',
          descriptionTags: ['Engineering Management', 'Technical Leadership', 'System Efficiency'],
        },
        {
          title: 'Front-end Architect',
          company: 'JotForm',
          description: "As a member of the Front-end Architecture team at Jotform, I am committed to enhancing developer efficiency and job satisfaction. My primary responsibilities include creating shared solutions/components for development teams, mentoring junior developers, transitioning our polyrepo stack to a monorepo, and maintaining and updating our development environments.",
          companyWebSite: 'http://jotform.com',
          companyMeta: '',
          datesBetween: '2021.10 - Present',
          descriptionTags: ['Javascript', 'React', 'Architect', 'Mentorship'],
        },
        {
          title: 'Team Lead / Senior Front-end Developer',
          company: 'JotForm',
          description: 'In my capacity as the Team Lead & Senior Front-end Developer within JotForm Source Team, I managed a cross-functional production team, mentored junior developers, created clean and shareable common components, and predominantly worked on the product itself, catering to an extensive user base of over 10 million users.',
          companyWebSite: 'http://jotform.com',
          companyMeta: '',
          datesBetween: '2017.10 - 2021.10',
          descriptionTags: ['Javascript', 'React', 'Team Management'],
        },
        {
          title: 'Front-end Developer',
          company: 'JotForm',
          description: 'At JotForm, I utilized Javascript, predominantly with ReactJS, and functioned as a front-end developer, contributing to the development of new features.',
          companyWebSite: 'http://jotform.com',
          companyMeta: '',
          datesBetween: '2016.8 - 2017.10',
        },
        {
          title: 'Full-Stack Developer',
          company: 'YD Software',
          description: 'During my tenure at YD Software, I employed the ASP.Net MVC Framework with N-Tier Architecture to develop management systems, learning management systems, and big data projects. Additionally, I engaged in Android and iOS application development using Xamarin and NDK.',
          companyWebSite: 'http://ydyazilim.com',
          companyMeta: 'ANKARA METU Technopolis (ODTU Teknokent)',
          datesBetween: '2012 - 2016.8',
        },
        {
          title: 'Intern',
          company: 'YD Software',
          description: 'As an intern, I gained practical experience working on a Learning Management System, encompassing both desktop and web applications.',
          companyWebSite: 'http://ydyazilim.com',
          companyMeta: 'ANKARA METU Technopolis (ODTU Teknokent)',
          datesBetween: '2012.06 - 2012.10',
        },
      ],
    },
    {
      type: 'projects-list',
      title: 'Projects',
      description: 'Below, you will find a selection of featured projects. For more detailed information, please do not hesitate to contact me.',
      icon: 'tasks',
      groups: [
        {
          sectionHeader: 'JotForm',
          description: 'Easiest Form Builder / 10+ Million Users',
          items: [
            {
              title: 'JotForm Approvals / JotForm Workflow',
              projectUrl: 'https://www.jotform.com/products/approvals/',
              description: 'A canvas-based drag & drop process builder, this project represents one of my latest and most challenging endeavors. It is constructed using React, Redux, Redux-Saga, and incorporates numerous sophisticated patterns and technologies.',
            },
            {
              title: 'JotForm Mobile Forms',
              projectUrl: 'https://www.jotform.com/products/mobile-forms/',
              description: 'A mobile app enabling users to create forms and collect submissions. With over 1 million downloads, I assumed the roles of Team Lead and Lead Developer, utilizing React Native, Redux, and other cutting-edge technologies.',
            },
            {
              title: 'PDF Editor',
              projectUrl: 'https://www.jotform.com/products/pdf-editor/',
              description: 'A PDF Editor empowering users to create customized PDFs or fillable forms. I served as the Lead Javascript Developer, employing React and Redux.',
            },
            {
              title: 'JotForm Cards',
              projectUrl: 'https://www.jotform.com/cards/',
              description: 'Introducing the next-generation form type, JotForm Cards boasts over 1 million users. My role as a Javascript Developer involved working with React, Server-Side Rendering (SSR), Vanilla JS, and Webpack.',
            },
            {
              title: 'Easiest Online Form Builder',
              projectUrl: 'https://www.jotform.com/meet-jotform-4/',
              description: 'Renowned as the world\'s most powerful WYSWYG form builder, this project challenged me as a Javascript Developer, utilizing React, Redux, and Socket.io.',
            },
          ],
        },
        {
          sectionHeader: 'YD Software (YD Yazilim)',
          description: 'Tailor-made Software Development Company',
          items: [
            {
              title: 'Odtu Teknokent Internal Systems (TKBS - YFYI - GGJ - BIGG - ATOM - TeknoJump)',
              projectUrl: 'http:////giris.odtuteknokent.com.tr',
              description: 'I have worked on multiple projects for ODTU Teknokent\'s (METU Technopolis) internal workflow. ( C# / ASP.NET MVC / SQL Server / Xamarin / MongoDB / Web Services)',
            },
          ]
        },
        {
          sectionHeader: 'Side Projects',
          description: 'Explore some of my recent side projects below.',
          items: [
            {
              title: 'Tefez - Online Appointment Scheduler',
              projectUrl: 'https://tefez.com',
              description: 'Tefez simplifies the process of scheduling appointments, streamlining and enhancing booking experiences.',
            },
            {
              title: 'Dream Atlas Mobile - Dream Journal App',
              projectUrl: 'https://play.google.com/store/apps/details?id=com.sbayd.dreamatlas',
              description: 'Dream Atlas Mobile serves as a dream journal app, designed for Android devices and available on Google Play.',
            },
            {
              title: 'Soldd - Online Marketplace (Mobile APP)',
              projectUrl: 'https://play.google.com/store/apps/details?id=com.soldd.app',
              description: 'Soldd is an online marketplace for Turkish users, available on both iOS and Android. I utilized React Native, React, and GraphQL to bring this project to life.',
            },
            {
              title: 'React-CV - Open Source',
              projectUrl: 'https://github.com/sbayd/react-cv',
              description: 'As a fervent supporter of open source, I contributed to the community by creating React-CV, a tool that enables the creation of CV websites similar to this one!',
            },
            {
              title: 'React-Flippy - Open Source',
              projectUrl: 'https://github.com/sbayd/react-flippy',
              description: 'React-Flippy, an open-source project, introduces a React component for flipping cards. Despite its age, it remains a popular choice among developers.',
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
          title: 'Entrepreneurship & Innovation (MS)',
          authority: 'Anadolu University',
          authorityWebSite: 'https://anadolu.edu.tr',
          rightSide: '2021 - Present',
        },
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
      description: '',
      icon: 'comments',
      items: [
        {
          title: 'O\'Reilly Software Architecture Conference 2019 (SACON) / Berlin, Germany',
          authority: 'O\'Reilly',
          authorityMeta: 'Attendee',
          authorityWebSite: 'https://www.oreilly.com/conferences/software-architecture.html',
        },
        {
          title: 'Principal Developer Training (Certificate) 2019',
          authority: 'Eduard Sizovs',
          authorityWebSite: 'https://principal.dev/',
        },
        {
          title: 'FullStackFest 2018 / Barcelona, Spain',
          authority: 'FullStackFest',
          authorityMeta: 'Attendee / Lightning talk speaker',
          authorityWebSite: 'https://fullstackfest.com',
        },
        {
          title: 'Frontend Istanbul / Istanbul, Turkey',
          authority: 'Frontend Istanbul',
          authorityWebSite: 'https://frontend.istanbul/',
        },
        {
          title: 'Informatics Day 2018 / M.E.T.U C Club',
          authority: 'METU C Club',
          authorityMeta: 'Speaker',
          authorityWebSite: 'https://cclub.metu.edu.tr/',
        },
        {
          title: 'NodeConfEU 2017 / Kilkeny, Ireland',
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
      title: 'Skills Proficiency',
      icon: 'rocket',
      items: ['Javascript', 'React', 'Redux', 'React Native', 'NPM', 'PNPM', 'YARN', 'Git', 'Webpack', 'GraphQL', 'C#', 'Entity Framework', 'SQL', 'PHP', 'Software Craftmanship', 'SOLID Principles', 'Team Leading', 'Front-end Development', 'Web Development'],
    },
    {
      type: 'tag-list',
      title: 'Hobies & Interests',
      icon: 'cubes',
      items: ['Pipes', 'Analog Photography', 'Cooking', 'Literature History'],
    },
  ],
};
