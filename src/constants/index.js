import {
  docker,
  kubernetes,
  aws,
  jenkins,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  //nodejs,
  //git,
  //edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  //sketcher,
  //mathwork,
  CompileVortex,
  //eduskill,
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

export const services = [
  { title: "Docker", icon: docker },
  { title: "Jenkins", icon: jenkins },
  { title: "Kubernetes", icon: kubernetes },
  { title: "AWS", icon: aws },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  //{ name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  //{ name: "git", icon: git },
];

export const experiences = [
  {
    title: "Education",
    company_name: "Balbhim Collage | BCA |",
    iconBg: "#161329",
    date: "Jun 2022 - May 2025",
    points: [
      "Gained strong foundation in computer science, Programming,software devlopment and Hands-on Experience with languages like C, C++, Python, and Java",
      "Developed intrest in DevOps and Cloud Computing through during my course",
    ],
  },
  {
    title: "Extra Curricular Activities",
    company_name: "Symbiosis | ELTIS- Pune",
    iconBg: "#161329",
    date: "Jun 2025",
    points: [
      "Improved communication skills by practicing group discussions, debetes, and public speaking",
      "Gained confisence in interviews and learned to work effectively in teams",
      "Focused on overall personality development",
    ],
  },
  ];

export const projects = [
  {
    name: "online_shop_app",
    description:
      "responsive e-commerce website deployed on AWS using EC2 using jenkins CI/CD pipeline ",
    tags: [
      { name: "jenkins", color: "blue-text-gradient" },
      { name: "CI/CD", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
      { name: "EC2", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/abhihkX8/online_shop_app/tree/dev",
  },
  {
    name: "springboot-banking-app",
    description:
      "A simple banking application using Spring Boot needed to be deployed with DevSecOps. create a CI/CD pipeline integrated SonarQube, Trivy, and OWASP Dependency-Check for security ",
    tags: [
      { name: "DecSecOps", color: "blue-text-gradient" },
      { name: "CI/CD", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/abhihkX8/Springboot-BankApp/tree/dev",
  },
  {
    name: "Wanderlust",
    description:
      "wanderlust is a travel website deployed with DevSecOps uasing jenkins CI/CD pipeline integrated SonarQube, Trivy and OWASP Dependency-check for security",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/abhihkX8/Wanderlust/tree/dev",
  },
  {
    name: "A-swiggy-clone",
    description:
      "A food delevery app clone deployed on kind cluster using docker and kubernetes on AWS EC2 instance",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/abhihkX8/a-swiggy-clone",
  },
  {
    name: "Three-tier-app",
    description:
      "A three-tier application scaled using k8s and docker, deployed on AWS EC2 instance",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/abhihkX8/ThreeTierApp/tree/my-branch",
  },
  {
    name: "portfolio-website",
    description:
      "simple portfolio website to showcase my skills and project using html and css in my college days",
    tags: [
      { name: "portfolio", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],

    //image: sketcher,
    source_code_link: "https://github.com/abhihkX8/resume",
  },
];
