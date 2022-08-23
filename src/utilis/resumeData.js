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
      title: "Esenyurt Anatolian High School",
      date: "09/2009 – 06/2014",
      description: "High School - 68,06%",
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
      description: ["C","C++", "Raspberry Pi", "Arduino"],
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
      description: ["English", "Turkish"],
    },
  ],

  certifications: [
    {
      side: "left",
      title: "Modern JavaScript: ES6 Basics",
      date: "Apr 2021",
      link: "https://www.coursera.org/account/accomplishments/verify/9JSVPQLF37HH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=project",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Google Developer Communities Turkey",
      date: "Mar 2021",
      link: "https://disk.yandex.com.tr/d/ItC1LXSaANr8GA",
      organization: "gdg.community.dev",
    },
    {
      side: "left",
      title: "First Aid Training",
      date: "Feb 2021",
      link: "https://www.kizilay.org.tr/what-we-do/first-aid",
      organization: "kizilay.org",
    },
    
  ],

  projects: [
    
    {
      tag: "React",
      images: [
        "https://github.com/BarisKarapelit/CV-React-Project/blob/main/src/assets/images/project1.png?raw=true",
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
