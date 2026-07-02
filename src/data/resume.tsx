import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Anupam Chatterjee", //[cite: 6]
  initials: "AC", //[cite: 6]
  url: "https://anu9am.github.io",
  location: "Uttar Pradesh, India", //[cite: 6]
  locationLink: "https://www.google.com/maps/place/Uttar+Pradesh",
  description:
    "Electronics and Communication Engineering student passionate about Robot Operating System (ROS2), Edge AI, and autonomous navigation.", //[cite: 6]
  summary:
    "I am an engineering student at Dr. A. P. J. Abdul Kalam Technical University specializing in robotics, embedded systems, and machine learning[cite: 6]. I have pursued research internships at EPFL, IIT Madras, and IIT Bombay, working on everything from smart actuator control systems to autonomous navigation and bioimpedance signal conditioning[cite: 6]. I also recently filed a patent for a Machine Learning-based skin condition detection system[cite: 6].",
  avatarUrl: "/me.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 0, enabled: false, heading: "About" },
    work: { order: 1, enabled: true, heading: "Research & Work Experience", presentLabel: "Present" },
    projects: {
      order: 2, enabled: true,
      label: "My Projects",
      heading: "Featured Robotics & Edge AI Projects",
      text: "From self-balancing robots to FPGA-based maze solvers, here are some of the hardware and software systems I have built.",
    },
    hackathons: {
      order: 3, enabled: true,
      label: "Competitions",
      heading: "Hackathons & Achievements",
      text: "I actively compete in national and international engineering challenges, building rapid prototypes that solve real-world problems.",
    },
    education: { order: 4, enabled: true, heading: "Education" },
    skills: { order: 5, enabled: true, heading: "Skills" },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 7, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Whether you have a question about my robotics projects, research, or just want to connect, feel free to send me an email!",
    },
  },
  photos: [],
  skills: [
    { name: "ROS 2", icon: Astro }, //[cite: 6]
    { name: "C / C++", icon: Typescript }, //[cite: 6]
    { name: "Python", icon: Python }, //[cite: 6]
    { name: "MATLAB", icon: ReactLight }, //[cite: 6]
    { name: "Verilog HDL", icon: Nodejs }, //[cite: 6]
    { name: "TensorFlow", icon: NextjsIconDark }, //[cite: 6]
    { name: "PyTorch", icon: Golang }, //[cite: 6]
    { name: "OpenCV", icon: Postgresql }, //[cite: 6]
    { name: "Git & GitHub", icon: Docker }, //[cite: 6]
    { name: "Embedded Systems", icon: Kubernetes }, //[cite: 6]
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "anupam.2327ec1095@kiet.edu", //[cite: 6]
    tel: "+91 7366049437", //[cite: 6]
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anu9am", //[cite: 6]
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anu9am", //[cite: 6]
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anupam.2327ec1095@kiet.edu", //[cite: 6]
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CREATE Lab",
      href: "/CREATEInternship",
      badges: ["Research Internship", "Remote"],
      location: "EPFL, Switzerland",
      title: "Research Intern",
      guide: "Prof. Josie Hughes", // Added new custom field
      logoUrl: "/Logos/EPFL.png",
      start: "Mar'26",
      end: "Jul'26",
      description:
        "Working on control and actuation systems for the Open Parametric Hand (OPH) in prosthetic applications. Designing feedback loops for smart actuators, tuning control parameters for stable movements, and integrating actuator systems with overall hardware architecture.",
    },
    {
      company: "Healthcare Technology Innovation Centre",
      href: "/HTICInternship",
      badges: ["Research Internship", "Onsite"],
      location: "IIT Madras, India",
      title: "Academic Research Intern",
      guide: "Prof. Jayaraj Joseph", // Added new custom field
      logoUrl: "/Logos/IIT_Madras.png",
      start: "Sep'25",
      end: "Nov'25",
      description:
        "Configured and characterized the MAX30009 Bioimpedance (BioZ) analog front-end. Tuned analog and digital signal-conditioning stages including high-pass/low-pass filters and baseline drift removal to improve signal integrity.",
    },
    {
      company: "e-Yantra Lab",
      href: "/eYantraInternship",
      badges: ["Research Internship", "Onsite"],
      location: "IIT Bombay, India",
      title: "Project Intern",
      guide: "Prof. Kavi Arya", // Added new custom field
      logoUrl: "/Logos/IIT_Bombay.png",
      start: "May'25",
      end: "Jul'25",
      description:
        "Designed and implemented dual autonomous navigation systems for a two-wheeled self-balancing robot. Integrated PID control for path tracking and LQR control for balance using differential motor actuation.",
    },
  ],
  education: [
    {
      school: "Dr. A. P. J. Abdul Kalam Technical University",
      degree: "Bachelor of Technology",
      department: "Electronics and Communication Engineering",
      logoUrl: "/Logos/AKTU.png", // Ensure you have an appropriate logo, or leave blank/remove this line
      start: "Oct'23",
      end: "Jul'27",
    },
  ],
  projects: [
    {
      title: "Open Parametric Hand",
      href: "/CREATEInternship",
      dates: "Mar'26 - Jul'26",
      active: true,
      description:
        "Developed control and actuation systems for a bionic hand using biomimetic tendon-driven actuation. Designed smart feedback loops to improve dexterity and responsiveness across different grasping tasks.",
      technologies: ["C++", "PID Control", "Teensy 4.1", "Voice Recognition"],
      links: [],
      image: "/Photos/CREATE_Lab/Demonstration.gif", // Add your project image here
      video: "",
    },
    {
      title: "Autonomous Self Balancing Bot",
      href: "/eYantraInternship",
      dates: "May'25 - Jul'25",
      active: true,
      description:
        "Designed and implemented dual autonomous navigation systems (Vision-based and Line-based) on a two-wheeled self-balancing robot utilizing MPU6050, motor encoders, and LQR/PID control loops.",
      technologies: ["Python", "C++", "OpenCV", "LQR & PID", "MPU6050"],
      links: [],
      image: "/Photos/eYantra/Photo_1.png", // Add your project image here
      video: "",
    },
    {
      title: "Maze Solver Bot",
      href: "#",
      dates: "Aug'25 - Mar'26",
      active: true,
      description:
        "Developed an FPGA-based autonomous maze-solving robot using Verilog HDL for post-harvest agricultural optimization. Implemented full hardware pipeline for real-time navigation and microclimate monitoring.",
      technologies: ["FPGA", "Verilog HDL", "Motor Control"],
      links: [],
      image: "/Photos/Projects/MazeSolver.png", // Add your project image here
      video: "",
    },
    {
      title: "Balancing Builder Bot",
      href: "#",
      dates: "Aug'24 - Mar'25",
      active: true,
      description:
        "Developed a two-wheeled self-balancing robot integrating inverted-pendulum dynamics, IMU-based state estimation, and an autonomous pick-and-place mechanism themed for smart-city infrastructure.",
      technologies: ["PID Control", "LQR Control", "IMU Sensor"],
      links: [],
      image: "/Photos/Projects/BuilderBot.png", // Add your project image here
      video: "",
    },
    {
      title: "Fast Line Follower",
      href: "#",
      dates: "Aug'25 - Sep'25",
      active: true,
      description:
        "Built a high-speed STM32-based line-follower robot using Pololu QTRX-16MD sensors and encoder-equipped micro metal-gear motors for precise and responsive navigation.",
      technologies: ["STM32", "PID", "Embedded C"],
      links: [],
      image: "/Photos/Projects/LineFollower.png", // Add your project image here
      video: "",
    },
    {
      title: "Derma Scan",
      href: "#",
      dates: "Sep'24 - Oct'24",
      active: true,
      description:
        "Designed and built a portable dermatological screening device using Raspberry Pi and a camera module. Deployed CNN-based image classification with optimized on-device inference.",
      technologies: ["Raspberry Pi", "CNN", "Python"],
      links: [],
      image: "/Photos/Projects/DermaScan.png", // Add your project image here
      video: "",
    },
  ],
  hackathons: [
    {
      title: "e-Yantra Robotics Competition",
      dates: "2024-25 and 2025-26",
      location: "IIT Bombay",
      description: "Participated twice: In 2024-25, built the Balancing Builder Bot and secured 4th place internationally. In 2025-26, built the Maze Solver Bot and achieved a top 10 rank among over 680 teams.",
      image: "/Logos/eYantra.png",
      win: "Multiple International & National Ranks",
      links: [],
    },
    {
      title: "QUEST 2025 Innovation Challenge",
      dates: "Sep'25 - Nov'25",
      location: "HMEL",
      description: "Proposed a systems-level concept integrating offshore renewables, desalination, and hydrogen production as Dynamic Floating Hydrogen Islands.",
      image: "/Logos/HMEL.png",
      win: "2nd Position Nationally",
      links: [],
    },
    {
      title: "Technoxian World Robotics Championship",
      dates: "Aug'25 - Sep'25",
      location: "AICRA",
      description: "Competed in the high-speed autonomous navigation challenge by building and programming a custom STM32-based Fast Line Follower robot with yaw stabilization.",
      image: "/Logos/Technoxian.png",
      win: "",
      links: [],
    },
    {
      title: "Medical Device Hackathon",
      dates: "Sep'24 - Oct'24",
      location: "BETIC Lab, IIT Bombay",
      description: "Designed and built the 'Derma Scan', a portable CNN-based dermatological screening device with optimized on-device inference.",
      image: "/Logos/BETIC.png", // Kept BETIC logo since MEDHA was held there, update if you have a specific MEDHA logo
      win: "Best Prototype",
      links: [],
    },
  ],
  patent: [
    {
      title: "A Dual-Module System for Skin Condition Detection Using Machine Learning",
      status: "Published",
      applicationNumber: "202511061177",
      date: "Filed on Jun'25",
      logoUrl: "/Logos/Patent.png",
    }
  ],
} as const;
