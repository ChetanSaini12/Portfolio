import cpmaina from '../helper/cpmania.png'
import cphub from '../helper/cphub.png'
import todo from '../helper/todo.png'
import countdown from '../helper/countdown.png'
import cfleaderboard from '../helper/leaderboard.png'

export const data = {
  projects: [
    {
      title: "CP HUB : DCC NITA",
      githubLink: "https://github.com/ChetanSaini12/A2OJ",
      deployedLink: "https://cphub.dccnita.tech/",
      description: "CP-HUB is a dedicated competitive programming website designed for coding enthusiasts. It serves as a centralized hub for all things related to competitive programming, offering features such as a Learning Path and Resource Guide, a Timeline-based Learning Roadmap, Direct Access to Codeforces A2OJ Ladder, an Integrated Code Editor and Execution tool, and a Leaderboard and Ranking system. This platform provides a streamlined and professional environment for individuals to enhance their coding skills and engage in a community of like-minded programmers.",
      img: {cphub},
      tools: {
        frontend: ["CSS", "JavaScript", "ReactJs", "React Icons", "React Router DOM", "Tailwind CSS", "ParticleJs", "Local Storage"],
        backend: ["Node.js", "Express"],
        database: ["MongoDB", "Mongoose"],
      },
    },
    {
      title: "CP Mania : DCC",
      githubLink: "https://github.com/ChetanSaini12/dcc-cpmania",
      deployedLink: "https://dcc-cpmania.vercel.app/",
      description: "CP Mania is a sophisticated web application designed for efficiently tracking coding contests across premier platforms such as Codeforces, AtCoder, LeetCode, and CodeChef. Tailored to streamline the experience for coders, CP Mania facilitates seamless access to recent contests, ensuring users never miss a crucial event. The platform boasts robust features, including user profiles, friend-making functionalities, and standings viewing for supported coding platforms.",
      img: {cpmaina},
      tools: {
        frontend: ["ReactJs", "Redux", "CSS", "NextJs", "Tailwind CSS", "Local Storage"],
        backend: ["Node.js", "Express", "Web Scrapping", "JWT", "Bcrypt"],
        database: ["MongoDB", "Mongoose"],
      },
    },
    {
      title: "NITA Rankers",
      githubLink: "https://github.com/ChetanSaini12/NITA-Leaderboard",
      deployedLink: "https://nita-leaderboard.vercel.app/",
      description: "NITA Rankers is a sophisticated web application designed to showcase the standings of NIT Agartala students based on their Codeforces rating, providing comprehensive insights into their current rating, maximum rating achieved, and their rank on Codeforces. This platform serves as a valuable tool for the NIT Agartala community, offering a streamlined and professional interface to track and compare the coding prowess of its students, fostering a competitive and dynamic environment within the realm of programming excellence.",
      img: {cfleaderboard},
      tools: {
        frontend: ["HTML", "CSS", "JavaScript", "ReactJs", "DaisyUI", "Tailwind CSS"]
      },
    },
    {
      title: "Countdown",
      githubLink: "https://github.com/ChetanSaini12/Countdown",
      deployedLink: "https://chetansaini12.github.io/Countdown",
      description: "Countdown is a ReactJS application enabling users to set, start, stop, and reset timers with precision. Its user-friendly interface and robust functionalities make it a professional tool for efficient time management.",
      img: {countdown},
      tools: {
        frontend: ["HTML", "CSS", "JavaScript", "ReactJs", "DaisyUI"]
      },
    },    
    {
      title: "ToDo App",
      githubLink: "https://github.com/ChetanSaini12/TODO-LIST",
      deployedLink: "https://chetansaini12.github.io/TODO-LIST/",
      description: "Todo is a sophisticated React application designed for efficient task management. It enables users to meticulously record and categorize their vital daily tasks, offering features such as marking tasks as done or undone, prioritizing based on urgency, and seamless deletion. The intuitive interface and robust functionality make Todo an indispensable tool for streamlined organization and productivity.",
      img: {todo},
      tools: {
        frontend: ["HTML", "CSS", "JavaScript", "ReactJs", "DaisyUI"]
      },
    },
    
  ],
};
