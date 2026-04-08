import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaDatabase,
    FaCloud,
    FaCode,
    FaBoxOpen,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiSpringboot, SiMysql, SiNetlify, SiRender, SiPostman, SiLeetcode, SiHackerrank, SiCodechef, SiCplusplus, SiC, SiArduino } from "react-icons/si";
import { TbBrandVscode, TbActivityHeartbeat } from "react-icons/tb";

export const SOCIAL_LINKS = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/fazil-s-ba20642b1/", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/s-fazil3", icon: FaGithub },
    { name: "Instagram", url: "https://www.instagram.com/faziil._16", icon: FaInstagram },
];

export const PROJECTS = [
    {
        id: 1,
        title: "SLAiGuard",
        description: "Full-stack AI-driven SLA monitoring platform collecting real-time system and API metrics to predict service-level breaches. Integrated Random Forest ML model, role-based dashboards, and dynamic alerts.",
        tech: ["React.js", "Node.js", "Machine Learning", "Full Stack"],
        github: "https://github.com/s-fazil3/SLAiGuard",
        live: "#",
        logo: TbActivityHeartbeat
    },
    {
        id: 2,
        title: "UPS Monitoring System",
        description: "End-to-end IoT-based UPS battery health monitoring system streaming real-time sensor data via ThingSpeak. Developed embedded firmware for proactive maintenance alerts.",
        tech: ["ESP32", "Arduino IDE", "IoT", "Full Stack"],
        github: "https://github.com/s-fazil3/upsmonitoring",
        live: "#",
        logo: SiArduino
    },
    {
        id: 3,
        title: "SilkConnect",
        description: "Full-stack MERN marketplace with secure authentication, direct farmer-to-consumer transactions, verified product listings, and order/invoice management.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        github: "https://github.com/s-fazil3/Silkconnect",
        live: "#",
        logo: FaBoxOpen
    }
];

export const SKILLS = [
    { category: "Programming Languages", items: [{ name: "Java", icon: FaJava }, { name: "Python", icon: FaPython }, { name: "C", icon: SiC }] },
    { category: "Core Concepts", items: [{ name: "Data Structures", icon: FaCode }, { name: "Algorithms", icon: FaCode }, { name: "DBMS", icon: FaDatabase }] },
    { category: "Frameworks", items: [{ name: "React.js", icon: FaReact }, { name: "Node.js", icon: FaNodeJs }, { name: "Spring Boot", icon: SiSpringboot }] },
    { category: "Cloud & Databases", items: [{ name: "MySQL", icon: SiMysql }, { name: "MongoDB", icon: SiMongodb }, { name: "Render", icon: SiRender }, { name: "Netlify", icon: SiNetlify }] },
    { category: "Developer Tools", items: [{ name: "VS Code", icon: TbBrandVscode }, { name: "Git", icon: FaGithub }, { name: "Postman", icon: SiPostman }] },
];

export const CERTIFICATES = [
    {
        id: 1,
        title: "Learn Java programming - Beginner to Master",
        issuer: "Udemy",
        date: "2025",
        link: "https://www.udemy.com/certificate/UC-697f2148-0a9c-4dd5-93f2-7ed84ea469a0/"
    },
    {
        id: 2,
        title: "Mastering Data Structures and Algorithms using C/C++",
        issuer: "Udemy",
        date: "2024",
        link: "https://www.udemy.com/certificate/UC-e405d017-2a73-400d-b949-b1f6c48ae9c4/"
    },
    {
        id: 3,
        title: "SQL (Basic)",
        issuer: "HackerRank",
        date: "2024",
        link: "https://www.hackerrank.com/certificates/a66a5b0b24c5"
    },
    {
        id: 4,
        title: "The Joy of Computing using Python",
        issuer: "NPTEL",
        date: "2025",
        link: "https://documentcloud.adobe.com/gsuiteintegration/index.html?state=%7B%22ids%22%3A%5B%221iFt7gmEwYYt6EtrqXsa5LB5x6O0xOQoZ%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22107016904128191881243%22%2C%22resourceKeys%22%3A%7B%7D%7D"
    }
];

export const CODING_PROFILES = [
    { platform: "LeetCode", username: "Fazil S", stats: "Solved 340+ | Max Rating: 1,634 | Rank: 361k", icon: SiLeetcode, link: "https://leetcode.com/u/user3661A/" },
    { platform: "HackerRank", username: "Fazil S", stats: "4★ C | 5★ Java | 2★ Python", icon: SiHackerrank, link: "https://www.hackerrank.com/profile/fazil_s" },
    { platform: "CodeChef", username: "Fazil S", stats: "Problem Solver - Bronze Badge", icon: SiCodechef, link: "https://www.codechef.com/users/fazils33" },
    { platform: "SkillRack", username: "Fazil S", stats: "Solved 680+ | 1 Certificate", icon: FaCode, link: "https://www.skillrack.com/faces/resume.xhtml?id=484380&key=d2824e5d4547b60f3c22facfbb579875344f705d" }
];
