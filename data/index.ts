import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#Skills" },
  { name: "Resume", link: "#Resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Thats me!!! Alive and aware.",
    description: "",
    //className: "lg:col-span-3 md:col-span-6 md:row-span-5 lg:min-h-[60vh] ",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2",
    imgClassName: "w-full h-full right-50",
    titleClassName: "justify-end",
    img: "/selfme.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Tech enthusiast with a passion for building things.",
    description: "At your service",
    //className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Grows with time",
    //className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Words that keep me up at night.",
    description: "\“Any sufficiently advanced technology is indistinguishable from magic\” -Arthur C. Clarke",
    //className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "The Inside Scoop",
    description: "Currently working with pytorch library.",
    //className: "md:col-span-3 md:row-span-2",
    className: "md:col-span-1 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/grid.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Traveled to 20+ countries,",
    description: "embracing diverse cultures and experiences. Each journey broadens my perspective and fuels my passion for learning and growth, personally and professionally.",
    //className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "/grid.svg",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    des: "Have a look at my projects.",
    img: "/git.svg",
    iconLists: ["/Python.svg", "/panda.svg", "/numpy.svg", "/matplotlib.svg"],
    link: "https://github.com/mustafa0610/"
    //link: "https://github.com/renaissanc/PortfolioOpt/tree/master",
  },
  {
    id: 2,
    title: "Why you should hire me?",
    des: "",
    img: "/stock-movement.svg",
    iconLists: ["/matplotlib.svg"],
    link: "https://docs.google.com/presentation/d/14VQ0Exl0dvzf_Nzlr76Z_xtV7bq1ctEtlxTpu5ZQkYc/edit?usp=sharing",
  },
  /*
  {
    id: 1,
    title: "Portfolio Optimization",
    des: "Optimizing stock portfolio holdings using pandas and numpy",
    img: "/stock-movement.svg",
    iconLists: ["/Python.svg", "/panda.svg", "/numpy.svg", "/matplotlib.svg"],
    link: "https://github.com/renaissanc/PortfolioOpt/tree/master",
  },
  {
    id: 2,
    title: "Portfolio website",
    des: "using aceternity ui",
    img: "/html.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/renaissanc/WebsiteJS",
  },
  */
  /*
  {
    id: 2,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  */
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Docker",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/docker.svg",
  },
  {
    id: 2,
    title: "Apache Kafka",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/kafka.svg",
  },
  {
    id: 3,
    title: "Apache ZooKeeper",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/zookeeper.svg",
  },
  {
    id: 4,
    title: "Apache Spark",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/spark.svg",
  },
  {
    id: 5,
    title: "DBT",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/DBT.svg",
  },
  {
    id: 6,
    title: "AWS",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/aws.svg",
  },
  {
    id: 7,
    title: "Terraform",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/terraform.svg",
  },
  {
    id: 8,
    title: "Kubernetes",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/kubernets.svg",
  },
  {
    id: 9,
    title: "Airflow",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/Airflow.svg",
  },
  {
    id: 10,
    title: "Python",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/Python.svg",
  },
  {
    id: 11,
    title: "c++",
    desc: "",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/c++.svg",
  },
  {
    id: 12,
    title: "SAP",
    desc: "",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/SAP.svg",
  },
  {
    id: 13,
    title: "PowerBI",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/powerBI.svg",
  },
  {
    id: 14,
    title: "Java script",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/js.svg",
  },
  {
    id: 15,
    title: "Excel",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/Excel.svg",
  },
  {
    id: 16,
    title: "SQL",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/SQL.svg",
  },
  {
    id: 17,
    title: "Creo",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/Creo.svg",
  },
];

/*
export const workExperience2 = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
*/


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mustafa0610/"
    //link: "https://github.com/renaissanc"
  },
  /*
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/murtazml"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/murtaza-lakhani-b27b79164/"
  },
  {
    id: 4,
    img: "/instagram-white.svg",
    link: "https://www.instagram.com/murtaza_a1i_/?utm_source=qr&igsh=aHQ5OHo0YWU1dXVs"
  },
  */
];


