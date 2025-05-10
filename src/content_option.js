import pongImage from './pong.png';
import orderly from './orderly.png';
import predictFooty from './predict-footy.png';
import calculator from './calculator.png';
import chess from './chess.png';
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
    description: "My name is Hossam Allam, I'm a 22-year old Egyptian computer science student, currently approaching my graduation",
    your_img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMFvmnxxwTL45R3qLVyu-MmMZFplDEzCmDg&s",
};

const dataabout = {
    title: "about my self",
    aboutme: "I'm a passionate computer science student, I enjoy making small projects in my free time and learning new concepts. When I'm not coding then I'm usually watching my favourite team play football",
};
const worktimeline = [{
        jobtitle: "Data structures and algorithms",
        where: "Sungkyunkwan University",
        date: "2023",
    },
    {
        jobtitle: "Object Oriented Programming",
        where: "RWTH",
        date: "2023",
    },
    {
        jobtitle: "Software Engineering",
        where: "RWTH",
        date: "2024",
    },
    {
        jobtitle: "Database Systems",
        where: "RWTH",
        date: "2024",
    },
    {
        jobtitle: "Machine Learning",
        where: "RWTH",
        date: "2025",
    },
    {
        jobtitle: "Evolutionary Algorithms",
        where: "RWTH",
        date: "2025",
    },
    {
        jobtitle: "Heuristic Optimization",
        where: "RWTH",
        date: "2025",
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

const dataportfolio = [
     {
        img: predictFooty,
        description: "Fullstack Ruby on rails project with API integration that allows users to compete against each other in predicting the results of football matches. ",
        link: "https://predict-footy-production.up.railway.app/",
    },
    {
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
        img: calculator,
        description: "Fun calculator project built with vaniilla JS, and CSS.",
        link: "https://github.com/Hossam-Allam/calculator",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XSZtPYc8kwGiDxiY58seQWMbV-s-0pjMag&s",
        description: "Backend integration built for the restaurant management system project using spring boot. mySQL is used for the database",
        link: "https://github.com/Hossam-Allam/Restaurant-management-system-backend",
    },
    {
        img: "https://cdn.prod.website-files.com/6097e0eca1e875de53031ff6/61b9d46d1a3d994fb3866c4c_php%20logo.png",
        description: "Fullstack PHP project that helps manage field reservations for both the field owner and the customers",
        link: "https://github.com/Hossam-Allam/Field-Reservation-System",
    },
    {
        img: chess,
        description: "Fully functional console chesss game built with Ruby",
        link: "https://github.com/Hossam-Allam/chess",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png",
        description: "You can find all the projects listed above and MORE on my GitHub page",
        link: "https://github.com/Hossam-Allam",
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