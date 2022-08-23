import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkIcon from "@material-ui/icons/Link";

export default {
  name: "Barış Karapelit",
  title: "Software Engineer",

  email: "bkarapelit48@gmail.com",
  address: "Esenyurt, İstanbul",
  phone: "+905334357218",
  adress: "Esenyurt, İstanbul",
  downloadCv:
    "https://www.linkedin.com/dms/D4D06AQGuRoRUpeQ7Rg/messaging-attachmentFile/0/1659987548451?m=AQKO06jACusxvgAAAYLKiK-XOJLQfsx2O_w8gpedQ0GM3xBwZlVXXNqdVA&ne=1&v=beta&t=fB77IwVtZJPr625nMsJxCyrELq2a5yEN0GS1pBLpbg8&lipi=urn%3Ali%3Apage%3Amessaging_thread%3B9304ba77-bd73-4895-aa16-68f9712169d0",

  socials: {
    Linkedin: {
      link: "https://www.linkedin.com/in/bariskarapelit",
      icon: <LinkedInIcon />,
      text: "MyLinkedin",
    },

    Github: {
      link: "https://github.com/BarisKarapelit",
      icon: <GitHubIcon />,
      text: "MyGithub",
    },
  },

  about:
    "My career objective is to excel in the software development area and to be experienced in many different"+
    "projects and tasks. In addition, have professional knowledge in design, editing and use experience",

  experiences: [
    {
      title: "Software Engineer Intern",
      date: "08/2020 – 09/2020",
      description:
        "- Supporting Android programming projects"+
        "- Learning latest information and techniques on Android"+
        "Programming",
    },
    {
      title: "Office Support Specialist",
      date: "06/2016 – 07/2016 ",
      description: "- Supporting operational processes"+
      "- Administrating the office works"+
      "- Providing support to the shop manager",
    },
  ],

  education: [
    {
      title: "2.83, International Cyprus University",
      date: "07/2017 – 02/2021",
      description: "I received an honor certificate for 2 consecutive semesters in"+
      "the last year.",
    },
    {
      title: "3.2, Akdeniz University",
      date: "09/2014 – 06/2016 ",
      description: "I graduated from Akdeniz University Computer Programming"+
      "Department with 3rd place.",
    },
    {
      title: "Ibn Khaldon High School",
      date: "2011 – 2013",
      description: "High School - 91.66%",
    },
  ],

  skills: [
    {
      title: "Front-End",
      description: [
        "ReactJS",
        "JavaScript",
        "Python",
        "HTML5",
        "CSS3",
        "Material UI",
        "MySQL",
      ],
    },
    {
      title: "Electronic",
      description: ["C++", "Raspberry Pi", "Arduino"],
    },
    {
      title: "Programs",
      description: [
        "Altium Designer",
        "Proteus",
        "Fusion 360",
        "AutoCAD Electrical",
        "Excel, Word",
      ],
    },
    {
      title: "Languages",
      description: ["English", "Turkish", "Arabic"],
    },
  ],

  certifications: [
    {
      side: "left",
      title: "The Bits and Bytes of Computer Networking",
      date: "Apr 2021",
      link: "https://www.coursera.org/account/accomplishments/verify/T32AB2GZLWA3",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Technical Support Fundamentals",
      date: "Mar 2021",
      link: "https://www.coursera.org/account/accomplishments/verify/N7P6D2DSVPTD",
      organization: "coursera.org",
    },
    {
      side: "left",
      title: "Autodesk Fusion 360 Integrated CAD/CAM/CAE",
      date: "Feb 2021",
      link: "https://www.coursera.org/account/accomplishments/verify/AJ6QYJFUCFFT",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Excel Skills for Business: Intermediate II",
      date: "Sep 2020",
      link: "https://www.coursera.org/account/accomplishments/verify/T8AMABTB9NWH",
      organization: "coursera.org",
    },
    {
      side: "left",
      title: "Excel Skills for Business: Intermediate I",
      date: "Aug 2020",
      link: "https://coursera.org/share/d4fe67704c7d2b22e19c38abaf24dd2d",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Python for Data Science and AI",
      date: "Apr 2020",
      link: "https://coursera.org/share/ef38139e4b8108421a5d8f3230526b04",
      organization: "coursera.org",
    },
    {
      side: "left",
      title: "Python Data Structures",
      date: "Mar 2020",
      link: "https://coursera.org/share/ef38139e4b8108421a5d8f3230526b04",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Neural Networks and Deep Learning",
      date: "Jan 2020",
      link: "https://www.coursera.org/account/accomplishments/verify/NKKXJBHA9WCW",
      organization: "coursera.org",
    },
  ],

  projects: [
    {
      tag: "University Projects",
      images: [
        "https://i.ibb.co/F3mhZWM/photo-2020-12-29-15-48-10.jpg",
        "https://i.ibb.co/Ptc9gdx/photo-2020-12-28-21-18-32.jpg",
        "https://i.ibb.co/Nr8rQ62/photo-2020-12-27-14-27-10.jpg",
      ],
      title: "Self balancing robot",
      caption: "Arduino based self balancing robot",
      description: "Project of 4th Year University",
      links: [
        { link: "https://youtu.be/0bnQlZczCOw", icon: <YouTubeIcon /> },
        {
          link: "https://github.com/mahowik/BalancingWii",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "University Projects",
      images: [
        "https://i.ibb.co/944F3Fj/1.jpg",
        "https://i.ibb.co/F89wYQ4/2.jpg",
        "https://i.ibb.co/LSY1kNW/3.jpg",
      ],
      title: "IoT Garden",
      caption:
        "Remote monitoring of plants using Raspberry Pi and controlled by Telegram",
      description:
        "Remote monitoring of plants using Raspberry Pi and controlled by Telegram",
      links: [],
    },
    {
      tag: "University Projects",
      images: [
        "https://i.ibb.co/DffNyTs/Annotation-2021-08-22-224435.png",
        "https://i.ibb.co/f2Mbn1R/Annotation-2021-08-22-224614.png",
        "https://i.ibb.co/kJ2whfy/Annotation-2021-08-22-224631.png",
        "https://i.ibb.co/8ccjDCq/Annotation-2021-08-22-224648.png",
        "https://i.ibb.co/34yvQg5/Annotation-2021-08-22-224739.png",
      ],
      title: "Abnormal Heart Sounds Detector",
      caption:
        "Deep learning-based Classifiers for Detection Abnormal Heart Sounds.",
      description:
        "A research paper was considered about Deep learning-based Classifiers for Detection of Abnormal Heart Sounds.",
      links: [
        {
          link: "https://physionet.org/files/challenge-2016/1.0.0/papers/potes.pdf",
          icon: <LinkIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "https://i.ibb.co/FWr7QHk/Annotation-2021-08-22-231400.png",
      ],
      title: "Resume Web Page",
      caption: "Single Page Application",
      description: "Portfolio Single Page Application",
      links: [
        {
          link: "https://github.com/heisenberg550/react-resume-clone",
          icon: <LinkIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "https://i.ibb.co/zfM9Svx/Annotation-2021-08-22-234126.png",
        "https://i.ibb.co/2hb0sPV/Annotation-2021-08-22-234236.png",
      ],
      title: "Photo Gallery",
      caption: "Photo Gallery by React",
      description: "Photo Gallery to firebox by React",
      links: [
        {
          link: "https://github.com/heisenberg550/PhotoGallery",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "JavaScript",
      images: [
        "https://i.ibb.co/Gkw4JX5/Annotation-2021-08-22-232757.png",
      ],
      title: "CountDown Timer",
      caption: "CountDown Timer",
      description: "CountDown Timer",
      links: [
        {
          link: "https://github.com/heisenberg550/trainingProjects/tree/main/Countdown-Timer",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};
