import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/style.jpg";
import projectImage2 from "../assets/jewelery.jpg";
import projectImage3 from "../assets/cafe.jpg"
import projectImage4 from "../assets/fitness.jpg";
import projectImage5 from "../assets/educational.jpg";
import projectImage6 from "../assets/twowheeler.jpg";
import projectImage7 from "../assets/catering.jpg";
import projectImage8 from "../assets/automotive.jpg";


import { MdOutlinePhotoCameraFront } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaMeta } from "react-icons/fa6";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { LuMonitorCog } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "NILESH HABLANI",
  greet: "Hello there !",
  description:
    "I'm a visual storyteller with 2 years of photography experience, 1 year of crafting cinematic wonders in videography, and 6 months of rocking the social media scene. Armed with a camera, creativity, and a knack for making things pop, I turn ideas into experiences that stop the scroll",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Style & Wearables",
    description:
      "Showcasing creative social media videos that elevate wearable fashion brands and captivate audiences.",
    image: projectImage1,
    instagramLink: "https://www.instagram.com/reel/C8tkscuP2vh/",
  },
  {
    id: 2,
    name: "Fine Jewelry & Luxe Essentials",
    description:
      "Turning luxury jewelry into scroll-stopping stories that dazzle and demand attention.",
    image: projectImage2,
    instagramLink: "https://www.instagram.com/reel/C-HuHiURe_a/",
  },
  {
    id: 3,
    name: "Restaurants & Cafes",
    description:
      "Serving up crave-worthy social media videos that make cafes and restaurants irresistible.",
    image: projectImage3,
    instagramLink: "https://www.instagram.com/reel/DAED1U3NHdO/",
  },
  {
    id: 4,
    name: "Fitness & Wellness Hubs",
    description:
      "Flexing creative social media videos that energize gym and fitness brands to stand out.",
    image: projectImage4,
    instagramLink: "https://www.instagram.com/reel/DDZeieHSnx1/",
  },
  {
    id: 5,
    name: "Educational Institutions",
    description:
      "Crafting inspiring social media videos that highlight educational institutions and their vibrant campus life.",
    image: projectImage5,
    instagramLink: "https://www.instagram.com/reel/DCbeVV6PMA5/",
  },
  {
    id: 6,
    name: "Two-Wheeler Showrooms",
    description:
      "Revving up engaging social media videos that put two-wheeler dealerships in the fast lane.",
    image: projectImage6,
    instagramLink: "https://www.instagram.com/reel/DBYl6xdvPv7/",
  },
  {
    id: 7,
    name: "Catering Services",
    description:
      "Serving up flavorful social media videos that make catering services the talk of the town.",
    image: projectImage7,
    instagramLink: "https://www.instagram.com/reel/DAsWy-Ftfr2/",
  },
  {
    id: 8,
    name: "Automotive Showrooms",
    description:
      "Driving excitement with sleek social media videos that showcase automotive showrooms in style.",
    image: projectImage8,
    instagramLink: "https://www.instagram.com/reel/DEUu4qfS0hJ/",
  },
];

export const BIO = [
  "I completed my schooling at Adarsh Vidyalaya, Devendra Nagar, and earned my Bachelor’s degree from Maharaja Agrasen International College.",
  "During my studies, I discovered my passion for social media management—a spark that quickly grew into a vision to turn it into a thriving professional career.",
  "From casual scrolling to crafting scroll-stopping content, my journey is all about transforming curiosity into creativity!",
];

export const SKILLS = [
  {
    icon: (
      <MdOutlinePhotoCameraFront className="text-4xl text-[#C870E0] lg:text-5xl" />
    ),
    name: "Content Creation",
    experience: "1+ year",
  },
  {
    icon: <HiOutlineSpeakerphone className="text-4xl text-[#7BE276] lg:text-5xl" />,
    name: "Social Media Management",
    experience: "2+ years",
  },
  {
    icon: <FaMeta className="text-4xl text-[#5079F9] lg:text-5xl" />,
    name: "Meta (PPC) Advertising",
    experience: "1+ year",
  },
  {
    icon: (
      <BsFillEnvelopeAtFill className="text-4xl text-[#EBED68] lg:text-5xl" />
    ),
    name: "Email Marketing",
    experience: "1+ year",
  },
  {
    icon: <FaHandshake className="text-4xl text-[#6E5FD3] lg:text-5xl" />,
    name: "Influencer and Affiliate Marketing",
    experience: "1+ year",
  },
  {
    icon: <LuMonitorCog className="text-4xl text-[#F06976] lg:text-5xl" />,
    name: "Website Optimization",
    experience: "1+ year",
  },
  {
    icon: <TbTargetArrow className="text-4xl text-[#EBBA54] lg:text-5xl" />,
    name: "Video and Visual Marketing",
    experience: "2+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Social Media Manager",
    company: "Creative Nest",
    duration: "August 2024 - Present",
    description:
      "Driving digital strategies, and managing social media campaigns for diverse clients with measurable success for 6 months and ongoing.",
  },
  {
    title: "Social Media Manager",
    company: "Webonix Media",
    duration: "January 2023 - September 2023",
    description:
      "Managed social media, SEO, and paid campaigns, boosting engagement and ROI through creative strategies over 9 months.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Maharaja Agrasen International College, Raipur",
    duration: "August 2021 - April 2024",
    description:
      "A Bachelors in Commerce grad from Maharaja Agrasen International College, Raipur, turned social media maestro—crafting clicks and campaigns with finesse, blending freelancing flair and job-driven expertise like a creative cocktail!",
  },
  {
    degree: "Higher Secondary and Schooling",
    institution: "Adarsh Vidyalaya D.N., Raipur",
    duration: "July 2020 - April 2021",
    description:
      "Graduated Higher Secondary from Adarsh Vidyalaya, Raipur, with a knack for social media wizardry—balancing freelance gigs and job clients while sprinkling creativity like confetti!",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/nilesh.hablani.1",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/nilesh.hablani/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/nilesh-hablani-a27027278/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
