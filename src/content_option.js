import pongImage from './pong.png';
import orderly from './orderly.png';
const logotext = "Hossam";
const meta = {
    title: "Hossam Refaie",
    description: "My name is Hossam Allam, a Computer Engineering student in Istanbul",
};

const introdata = {
    title: "I'm Hossam Refaie",
    animated: {
        first: "I love coding",
        second: "I graduate in 2025",
        third: "I support Arsenal :)",
    },
    description: "My name is Hossam Allam, I'm an Egyptian university student living in Istanbul, currently approaching my fourth and final year in Computer Engineering. ",
    your_img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMFvmnxxwTL45R3qLVyu-MmMZFplDEzCmDg&s",
};

const dataabout = {
    title: "about my self",
    aboutme: "I study at Kadir Has University and I have also attended a semester abroad at Sungkyunkwan University in south Korea as part of the student exchange program. I know C++, java, Javascript, SQL, React, and Spring Boot",
};
const worktimeline = [{
        jobtitle: "Data structures and algorithms",
        where: "Sungkyunkwan University",
        date: "2023",
    },
    {
        jobtitle: "Object Oriented Programming",
        where: "Kadir Has University",
        date: "2023",
    },
    {
        jobtitle: "Software Engineering",
        where: "Kadir Has University",
        date: "2024",
    },
    {
        jobtitle: "Database Systems",
        where: "Kadir Has University",
        date: "2024",
    },
];


const services = [{
        title: "Football",
        description: "Watching and playing football has been one of my favourite activities since I was born and remains that way till this day",
    },
    {
        title: "Video Games",
        description: "Mainly League of legends and FIFA. I play on EUNE (summoner name: blatherskite2#saka)",
    },
    {
        title: "Coding :)",
        description: "building small personal projects, learning new concepts online, Leetcode/codewars",
    },
];

const dataportfolio = [{
        img: pongImage,
        description: "Pong game, currently a basic pong game but expect some changes in the future",
        link: "https://github.com/Hossam-Allam/Pong-game",
    },
    {
        img: orderly,
        description: "A restaurant management website built with react that contains that encompasses user and worker experience. Comes with landing, customer, chef, and waiter interfaces",
        link: "https://github.com/Hossam-Allam/Restaurant-demo",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XSZtPYc8kwGiDxiY58seQWMbV-s-0pjMag&s",
        description: "Backend integration built for the restaurant management system project using spring boot. mySQL is used for the database",
        link: "https://github.com/Hossam-Allam/Restaurant-management-system-backend",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "hossamallam32@gmail.com",
    YOUR_FONE: "+905522756069",
    description: "Please reach out :D ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/hossam-allam",
    linkedin: "https://www.linkedin.com/in/hossam-hesham-allam-refaie-6674a9282/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};