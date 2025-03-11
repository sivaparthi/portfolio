/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Siva P",
  title: "Hi all, I'm Siva",
  subTitle: emoji(
    "Innovative Software Engineer 🚀 with expertise in Python, Backend Development, and Cloud Infrastructure. Passionate about automating workflows, optimizing performance, and integrating AI-driven solutions to solve real-world challenges."
  ),  
  resumeLink:
    "https://drive.google.com/file/d/1aNRGswLj7KTQX8Pdknx8lUBNSSSMBmnN/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/siva-sundara-krishna-p-19b642218/",
  gmail: "sivaparthi1989@gmail.com",
  // leetcode: "https://leetcode.com/sivaparthi1989/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://leetcode.com/sivaparthi1989/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crafting Scalable Solutions, Automating Everything, and Exploring the Future of Tech",
  skills: [
    emoji(
      "⚡ Develop tools to solve real-world business problems efficiently"
    ),
    emoji(
      "⚡ Automate infrastructure deployment using Ansible and Kubernetes"
    ),
    emoji(
      "⚡ Implement CI/CD pipelines to streamline application deployment"
    ),
    emoji(
      "⚡ Build scalable and containerized applications using Docker & Kubernetes"
    ),
    emoji(
      "⚡ Design and integrate Large Language Models (LLMs) for AI-driven solutions"
    ),
    emoji(
      "⚡ Enhance database performance using connection pooling and async processing"
    ),
    emoji(
      "⚡ Integrate third-party cloud services such as AWS, Firebase, and IBM Cloud"
    ),
    emoji(
      "⚡ Develop backend services using Django, Flask, and PostgreSQL"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fa-brands fa-linux"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "neo4j",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "ci/cd",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "celery",
      fontAwesomeClassname: "fas fa-seedling"
    },
    {
      skillName: "kafka",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "github-actions",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Coimbatore Institute of Technology",
      logo: require("./assets/images/cit_logo.png"),
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      duration: "August 2019 - May 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Operating Systems, Data Structures and Algorithms, Computer Networks and Databases.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Docker / Kubernetes",
      progressPercentage: "80%"
    },
    {
      Stack: "CI / CD",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Navriti Technologies",
      companylogo: require("./assets/images/navriti_logo.png"),
      date: "Sep 2024 – Present",
      desc: "At Navriti Technologies, I focus on automating infrastructure, enhancing deployment efficiency, and ensuring system reliability through cloud and DevOps solutions.",
      descBullets: [
        "Built CI/CD pipelines using GitHub Actions, eliminating manual deployments and accelerating the release cycle.",
        "Automated the movement of development code to the QA environment using cron jobs, ensuring smooth code transitions.",
        "Set up Kubernetes clusters with auto-healing and auto-scaling for UAT and Production environments, achieving 99.9% uptime.",
        "Implemented Ansible-based automation for server configuration and management, reducing manual effort by 80%."
      ]
    },
    {
      role: "Software Developer",
      company: "IBM",
      companylogo: require("./assets/images/ibm-ss.PNG"),
      date: "July 2023 – July 2024",
      desc: "As a software developer, I was responsible for designing and implementing solutions to address critical business challenges.",
      descBullets: [
        "Developed a robust document validation pipeline, ensuring seamless business operations by automating document integrity checks.",
        "Optimized database interactions using connection pooling, improving query response times by 30%.",
        "Integrated large language models like LLAMA 3 and Mistral into IBM’s chatbot, enhancing AI-driven interactions.",
        "Enhanced deployment efficiency by up to 40% through Docker containerization for scalable application deployment."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "IBM",
      companylogo: require("./assets/images/ibm-ss.PNG"),
      date: "Jan 2023 – Jun 2023",
      desc: "Developed a tool to translate Electronic Data Interchange (EDI) formats into human-readable English using NLP and Language Models."
    },
    {
      role: "Research Intern",
      company: "National Institute of Technology, Trichy",
      companylogo: require("./assets/images/NITT_logo.png"),
      date: "May 2022 – Aug 2022",
      desc: "Conducted research on AI-driven language models for legal text classification and synthetic data generation.",
      descBullets: [
        "Developed a robust NLP model using Hugging Face transformers for legal text classification.",
        "Generated high-quality synthetic legal data using GPT-3, open-sourcing 47,000+ data points for further research.",
        "Fine-tuned open-source language models and benchmarked them against OpenAI’s state-of-the-art models."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Supervised Machine Learning: Regression and Classification ",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle:
  //   "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "sivaparthi1989@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
