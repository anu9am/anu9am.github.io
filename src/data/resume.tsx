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
      company: "Healthcare Technology Innovation Centre (HTIC)",
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
      title: "Maze Solver Bot", //[cite: 6]
      href: "#",
      dates: "Aug'25 - Mar'26", //[cite: 6]
      active: true,
      description:
        "Developed an FPGA-based autonomous maze-solving robot using Verilog HDL for post-harvest agricultural optimization. Achieved top 10 rank among over 680 teams in the e-Yantra Robotics Competition.", //[cite: 6]
      technologies: [
        "FPGA", //[cite: 6]
        "Verilog HDL", //[cite: 6]
        "Motor Control", //[cite: 6]
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Balancing Builder Bot", //[cite: 6]
      href: "#",
      dates: "Aug'24 - Mar'25", //[cite: 6]
      active: true,
      description:
        "Developed a two-wheeled self-balancing robot integrating inverted-pendulum dynamics and an autonomous pick-and-place mechanism. Secured 4th place internationally among 1008 teams.", //[cite: 6]
      technologies: [
        "PID Control", //[cite: 6]
        "LQR Control", //[cite: 6]
        "IMU Sensor", //[cite: 6]
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Fastest Line Follower", //[cite: 6]
      href: "#",
      dates: "Aug'25 - Sep'25", //[cite: 6]
      active: true,
      description:
        "Built a high-speed STM32-based line-follower robot using Pololu QTRX-16MD sensors for the Technoxian World Robotics Championship. Implemented PID-based tracking with yaw stabilization.", //[cite: 6]
      technologies: [
        "STM32", //[cite: 6]
        "PID", //[cite: 6]
        "Embedded C", //[cite: 6]
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Derma Scan", //[cite: 6]
      href: "#",
      dates: "Sep'24 - Oct'24", //[cite: 6]
      active: true,
      description:
        "Designed a portable dermatological screening device using Raspberry Pi. Deployed CNN-based image classification with optimized on-device inference.", //[cite: 6]
      technologies: [
        "Raspberry Pi", //[cite: 6]
        "CNN", //[cite: 6]
        "Python", //[cite: 6]
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "QUEST 2025 Innovation Challenge", //[cite: 6]
      dates: "Sep'25 - Nov'25", //[cite: 6]
      location: "HMEL", //[cite: 6]
      description: "Proposed a systems-level concept integrating offshore renewables and hydrogen production through Dynamic Floating Hydrogen Islands. Won 2nd position nationally.", //[cite: 6]
      image: "/Logos/HMEL.png",
      win: "2nd Position Nationally", //[cite: 6]
      links: [],
    },
    {
      title: "Medical Device Hackathon (MEDHA 2024)", //[cite: 6]
      dates: "Sep'24 - Oct'24", //[cite: 6]
      location: "BETIC Lab, IIT Bombay", //[cite: 6]
      description: "Won Best Prototype for building 'Derma Scan', a portable dermatological screening device using Raspberry Pi and CNN-based image classification.", //[cite: 6]
      image: "/Logos/BETIC.png",
      win: "Best Prototype", //[cite: 6]
      links: [],
    },
    {
      title: "Patent Published: A Dual-Module System for Skin Condition Detection", //[cite: 6]
      dates: "Jun'25", //[cite: 6]
      location: "Indian Patent Office", //[cite: 6]
      description: "Filed and published a patent (App No: 202511061177) for a skin condition detection system utilizing Machine Learning.", //[cite: 6]
      image: "/Logos/eYantra.png",
      links: [],
    },
  ],
} as const;
