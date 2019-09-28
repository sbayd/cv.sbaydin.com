
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
      content: 'I am a curios man. I\'m coding all kind of things in multiple languages, for multiple platforms since I was 14. In the beginning I was creating game servers for popular games, after that I started with php and created some basic apps for small-sized companies. Then I decided to train myself. I have successfully finished a good many projects you can see the project details below. I am the Team Leader and Lead Front-End developer at JotForm now.',
      icon: 'usertie',
    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Computer Education and Instructional Technologies (BS)',
          authority: 'Hacettepe University',
          authorityWebSite: 'https://hacettepe.edu.tr',
          rightSide: '2013 - Present',
        },
        {
          title: 'Management Information Systems (BS)',
          authority: 'Anadolu University',
          authorityWebSite: 'https://anadolu.edu.tr',
          rightSide: '2017 - Present',
        },
      ],
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      description: 'Optional',
      icon: 'archive',
      items: [
        {
          title: 'Lead Software Developer',
          company: 'JotForm',
          description: 'I\'m working as a lead developer at JotForm Source team. We are creating some amazing features for JotForm!',
          companyWebSite: 'http://jotform.com',
          companyMeta: '',
          datesBetween: '2017.10 - Present',
          descriptionTags: ['Javascript', 'React', 'Team Management'],
        },
        {
          title: 'Software Developer',
          company: 'JotForm',
          description: 'I\'m using ReactJS and working as a front-end developer to develop new features for JotForm.',
          companyWebSite: 'http://jotform.com',
          companyMeta: '',
          datesBetween: '2016.8 - 2017.10',
        },
        {
          title: 'Full-Stack Developer',
          company: 'YD Software',
          description: 'I was using ASP.Net MVC Framework with N Tier Architecture to develop management systems, learning management systems & big data projects. And i was developing Android / IOS applications using Xamarin or NDK.',
          companyWebSite: 'http://ydyazilim.com',
          companyMeta: 'ANKARA METU Technopolis(ODTU Teknokent)',
          datesBetween: '2012 - 2016.8',
        },
        {
          title: 'Intern',
          company: 'YD Software',
          description: 'I was warming up with a Learning Management System including desktop and web apps.',
          companyWebSite: 'http://ydyazilim.com',
          companyMeta: 'ANKARA METU Technopolis(ODTU Teknokent)',
          datesBetween: '2012.06 - 2012.10',
        },
      ],
    },
    {
      type: 'projects-list',
      title: 'Projects',
      description: 'Projects that I have been worked in.',
      icon: 'tasks',
      groups: [
        // JotForm
        {
          sectionHeader: 'JotForm',
          description: 'Easiest Form Builder / 5 Million Users',
          items: [
            {
              title: 'JotForm Mobile Forms',
              projectUrl: 'https://www.jotform.com/products/mobile-forms/',
              description: 'A mobile app which lets you create forms and collect submissions. it has 100.000 downloads, I was the Team Lead and Lead Developer / React Native, Redux and lots of cool tech.',
            },
            {
              title: 'PDF Editor',
              projectUrl: 'https://www.jotform.com/products/pdf-editor/',
              description: 'A PDF Editor which lets you create customized pdfs or fillable forms. I was Lead Javascript Developer / React, Redux',
            },
            {
              title: 'JotForm Cards',
              projectUrl: 'https://www.jotform.com/cards/',
              description: 'Next generation form type. 1 Million usage / Javascript Developer / React, SSR, Vanilla JS, Webpack',
            },
            {
              title: 'Easiest Online Form Builder',
              projectUrl: 'https://www.jotform.com/meet-jotform-4/',
              description: 'Most powerful WYSWYG form builder in the world. / Javascript Developer / React, Redux, Socket.io',
            },
          ],
        },
        // YD Begins
        {
          sectionHeader: 'YD Software (YD Yazilim)',
          description: 'Tailor-made Software Development Company',
          items: [
            {
              title: 'Mavi Masa',
              description: 'Ankara Metropolitan Municipality - Mavi Masa Project - Mobile Applications (C# / Oracle / Android SDK - Java / iOS SDK/ Web Services)',
            },
            {
              title: 'TKBS',
              projectUrl: 'http:////giris.odtuteknokent.com.tr',
              description: 'METU Technopolis Information System ( C# / SQL Server / Xamarin / MongoDB / Web Services)',
            },
            {
              title: 'YFYI',
              projectUrl: 'http:////yfyi2.odtuteknokent.com.tr',
              description: 'New Business New Ideas(YFYİ) Entrepreneurship Acceleration Program Management System ( C# / SQL Server / Web Services)',
            },
            {
              title: 'Global Game Jam',
              projectUrl: 'http:////ggj.odtuteknokent.com.tr',
              description: 'Global Game Jam (METU Technopolis) Management System ( C# / SQL Server / Web Services)',
            },
            {
              title: 'ATOM in Games',
              projectUrl: 'http:////atom.odtuteknokent.com.tr',
              description: 'ATOM Pre-Incubation Center (METU Technopolis) Management System ( C# / SQL Server / Web Services)',
            },
            {
              title: 'Sanayi Politikalari Portali',
              projectUrl: 'http:////sanayipolitikalari.sanayi.gov.tr',
              description: 'T.C. Industry Ministry Industrial Policies Portal ( C# / SQL Server / Web Services)',
            },
            {
              title: 'TeknoJUMP',
              projectUrl: 'http:////teknojump2.odtuteknokent.com.tr',
              description: 'TeknoJUMP Entrepreneurship Acceleration Program Management System ( C# / SQL Server / Web Services)',
            },
            {
              title: 'TUBITAK BIGG / 1512',
              projectUrl: 'http:////bigg.odtuteknokent.com.tr',
              description: 'TUBITAK Invidual Young Enterprise(BİGG/1512) Program Management System - METU ( C# / SQL Server / Web Services )',
            }, {
              title: 'AOSB',
              projectUrl: 'http:////aosb.org.tr',
              description: 'Ankara Chamber of Industry 1st Organized Industrial Zone Web Portal - Mobile Applications (C#, SQL Server, Android SDK - Java / iOS SDK / Web Services)',
            },
            {
              title: 'AMS App',
              projectUrl: '',
              description: 'Central Bank of the Republic of Turkey (TCMB) Mobile Archive Management System ( Android SDK / Xamarin / Urovo SDK)',
            },
            {
              title: 'YEE Z-BOOK',
              projectUrl: 'http:////yee.org.tr',
              description: 'Yunus Emre Institute Z-Book Education Platform (C#/ MongoDB/ SQLite, Web Services)',
            },
            {
              title: 'Evdeki Ögretmen(Teacher at Home)',
              projectUrl: 'http:////evdekiogretmen.bilfen.com',
              description: 'Bilfen Evdeki Ogretmen Online Education System (C# / SQL Server / Web Services)',
            }],
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
          title: 'NodeConfEU 2017 / Kilkeny, Ireland',
          authority: 'NodeConf',
          authorityWebSite: 'https://www.nodeconf.eu/',
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
          title: 'Principal Developer Training (Certificate)',
          authority: 'Eduard Sizovs',
          authorityWebSite: 'https://principal.dev/',
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
      items: ['Javascript', 'React', 'Redux', 'React Native', 'NPM', 'Git', 'Webpack', 'Software Craftmanship', 'SOLID Principles', 'Team Leading', 'Front-end Development', 'Web Development', 'C#', 'SOA Architecture', 'N-Tier Architecture', 'Xamarin', 'LINQ', 'SQL', 'PHP'],
    },
    {
      type: 'tag-list',
      title: 'Hobies & Interests',
      icon: 'cubes',
      items: ['Pipes', 'Analog Photography', 'Cooking', 'Literature History'],
    },
  ],
};

export const x = 3;
