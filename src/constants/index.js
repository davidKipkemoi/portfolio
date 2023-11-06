import {
    mobile,
    chat,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Cloud Services",
      icon: backend,
    },
    {
      title: "IoT",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FullStack Developer ",
      company_name: "Blitz Kenya (Freelancer) Fulltime",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2018 - Present",
      points: [
        "Developing and maintaining web applications using React.js,Vuejs,Nodejs,Javascript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Working on Open source projects."
      ],
    },
    {
      title: "Electrical Engineer Intern",
      company_name: "Next Technologies",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2017 - Sept 2017",
      points: [
        "Lan design, setup, cabling and networking.",
        "Load calculation and termination at bus bars.",
        "Alarms, Server installation and configuration.",
        "Software installation and troubleshooting.",
        "Patch cords, optical fiber  termination and trucking."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Computer Revolution Africa Group",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2019 - Sep 2019",
      points: [
        "Development of applications using Microsoft Power Apps.",
        "Development of web applications using Laravel.",
        "Use of Cloud Computing.",
        "Bulk SMS integration.",
        "Big Data"
      ],
    },
    {
      title: " Electrical Engineer Intern.",
      company_name: "State Department of Public Works",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - March 2021",
      points: [
        "Electrical design using AutoCAD.",
        "Alarm systems, air-conditioning and fire detection.",
        "Preparation of bill of quantities..",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but David proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like David does.",
      name: "Dan Ochieng",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After David optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Safari Blog",
      description:
        "The Safari Blog using MERN Stack is a web application designed to connect nature enthusiasts and outdoor adventurers. This platform provides a space for users to share their love for nature and share their experiences. It's an ideal place for bloggers and  photographers to connect.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/davidKipkemoi/Blog",
      links:"https://worldsafariblog.netlify.app/"
    },
    {
      name: "Blitz Food/Chakula",
      description:
        "This is a Web application project crafted using Vuejs3, NuxtJs and Vuetify. It is a simple application where a user can order food and pay via credit card.",
      tags: [
        {
          name: "vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "nuxtjs",
          color: "green-text-gradient",
        },
        {
          name: "vuetify",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/davidKipkemoi/david_Restaurant",
      links:"https://blitzfood.netlify.app/"
    },
    {
      name: "Chat App",
      description:
        "A chat application using WebSockets is a real-time messaging platform that allows users to engage in conversations instantly over the internet. WebSockets provide a full-duplex communication channel between a web browser and a server, enabling continuous data exchange. The chats are stored in the firebase database",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "socketio",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/davidKipkemoi/tubonge-socketio",
      links:"https://chatapp-79qq.onrender.com/"
    },
    {
      name: "PayOnline - Daraja API",
      description:
        "The Daraja API Integration project is a web application that leverages the Daraja API, a mobile payment service provided by Safaricom in Kenya. This project aims to create a seamless and user-friendly interface for users to pay online using M-Pesa, a popular mobile money transfer service in Kenya.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/davidKipkemoi",
      links:"https://payonlineke.netlify.app/"
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };