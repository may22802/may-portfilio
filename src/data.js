const education_items = [
  {
    id: 1,
    edu_sub: "Computer Science (Top-up)",
    edu_school: "University of Roehampton",
    edu_duration: "2025- Present",
    edu_status: "online"
  },
  {
    id: 2,
    edu_sub: "Diploma in Computing",
    edu_school: "EduClaas",
    edu_duration: "2024- 2025",
    edu_status: "online"
  },
  {
    id: 3,
    edu_sub: "Foundation Diploma in Computing",
    edu_school: "EduClaas",
    edu_duration: "2022-2023",
    edu_status: "online"
  },
  {
    id: 4,
    edu_sub: "Computer Engineering & IT",
    edu_school: "MTU Myanmar",
    edu_duration: "2018-2019",
    edu_status: "Mandalay"
  },
  {
    id: 5,
    edu_sub: "High School",
    edu_school: "San Pyin Nyar",
    edu_duration: "2018",
    edu_status: "Mandalay"
  }
]

const skills = [
  {
    id: 1,
    skill: "HTML",
    skill_class: "fa-brands fa-html5"
  },
  {
    id: 2,
    skill: "CSS",
    skill_class: "fa-brands fa-css3-alt"
  },
  {
    id: 3,
    skill: "JavaScript",
    skill_class: "fa-brands fa-js"
  },
  {
    id: 4,
    skill: "React",
    skill_class: "fa-brands fa-react"
  },
  {
    id: 5,
    skill: "Git",
    skill_class: "fa-brands fa-git-alt"
  },
  {
    id: 6,
    skill: "Laravel",
    skill_class: "fa-brands fa-laravel"
  },
]

const projects = [
  {
    project_id: 1,
    project_icon: "fa-solid fa-bowl-rice",
    project_title: "Merry Meal - A Charity Organization Webiste",
    project_description: "A charitable organization website with clean UI&UX. A school project made by group of 5 members and was responsible for front-end part ",
    github_link: "https://github.com/may22802/new-merry-meal.git",
    web_link: "https://github.com/may22802/new-merry-meal.git",
    project_feature: [
      "Role-based Authentication",
      "User Management",
      "Meal Management",
      "Volunteer Assignment",
      "Meal Delivery Tracking"
    ],
    project_techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "PHP",
      "Laravel"
    ],
    style: {
      background: "#020024",
      background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 100%, rgba(0, 212, 255, 1) 100%)"
    }
  },
  {
    project_id: 2,
    project_icon: "fa-solid fa-car",
    project_title: "ABC Cars - Used Cars Sale Website",
    project_description: "A web app where user can sell, buy and book for test drive.",
    github_link: "https://github.com/may22802/used-cars-sales.git",
    web_link: "https://github.com/may22802/used-cars-sales.git",
    project_feature: [
      "User Authentication & Authorization",
      "User Dashboard",
      "Admin Dashboard",
      "Test Drive Managment",
      "Bid Managment"
    ],
    project_techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "PHP",
      "Laravel"
    ],
    style: {
      background: "#020024",
      background: "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(104, 9, 121, 1) 100%, rgba(0, 212, 255, 1) 100%)"
    }
  },
  {
    project_id: 3,
    project_icon: "fa-solid fa-bag-shopping",
    project_title: "SmartShop Inc.",
    project_description: "A Shopify development store with a chabot using voiceflow agent for checking order status and answering general Q&A ",
    github_link: "https://smartshopnc.myshopify.com ",
    web_link: "https://smartshopnc.myshopify.com",
    project_feature: [
      "24/7 Chatbot",
      "AI powered genral Q&A",
      "Order status checking",
      "Test Password: yailoh"
    ],
    project_techStack: [
      "Shopify",
      "Shopify API",
      "VocieFlow Agent",
      "Gemini AI API"
    ],
    style: {
      background: "#60d930",
      background: "linear - gradient(90deg, rgba(96, 217, 48, 1) 0 %, rgba(71, 179, 93, 1) 35 %, rgba(0, 212, 255, 1) 100 %)"
    }
  },
  {
    project_id: 4,
    project_icon: "fa-solid fa-bahai",
    project_title: "Meme Generator",
    project_description: "A lightweight React app to browse popular meme templates, pick one, and type top/bottom text that updates on every keystroke. Great for practicing React state, controlled inputs, and simple API usage.",
    github_link: "https://github.com/may22802/meme-generator",
    web_link: "https://memegeneratorbymay.netlify.app/",
    project_feature: [
      "Meme Template fetched from API",
      "Selectable Image Grid",
      "Live Image Editing",
      "Test Password: yailoh"
    ],
    project_techStack: [
      "React",
      "Imageflip API",
      "HTML",
      "CSS"
    ],
    style: {
      background: "#f7b720",
      background: "linear-gradient(90deg, rgba(247, 183, 32, 1) 0%, rgba(230, 169, 71, 1) 35%, rgba(255, 77, 0, 1) 100%)"
    }
  }
]

export const myData = { skills, education_items, projects }