import { IoCut, IoHomeOutline } from "react-icons/io5";
import {
  MdHistory,
  MdOutlineFeedback,
  MdOutlinePlaylistPlay,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiSolidVideos } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaFlag } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";

export const filters = [
  { text: "All", href: "/" },
  { text: "Music", href: "/" },
  { text: "Gaming", href: "/" },
  { text: "Web Development", href: "/" },
  { text: "AI", href: "/" },
  { text: "Podcasts", href: "/" },
  { text: "Live", href: "/" },
  { text: "JavaScript", href: "/" },
  { text: "React", href: "/" },
  { text: "Computer Science", href: "/" },
  { text: "Comedy", href: "/" },
  { text: "News", href: "/" },
  { text: "Recently uploaded", href: "/" },
  { text: "New to you", href: "/" },
  { text: "Watched", href: "/" },
  { text: "Cooking", href: "/" },
  { text: "Fitness", href: "/" },
  { text: "Travel", href: "/" },
  { text: "Sports", href: "/" },
  { text: "Fashion", href: "/" },
  { text: "Technology", href: "/" },
  { text: "Education", href: "/" },
  { text: "Animation", href: "/" },
  { text: "Movies", href: "/" },
];
export const videos = [
  {
    id: 1,
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "Never Gonna Give You Up - Rick Astley (Official Music Video)",
    channel: "Rick Astley",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZSJMFa9cxOPbxNKWmvRjgYbMmQvAAdPsH9PT2Kp=s176-c-k-c0x00ffffff-no-rj",
    views: "1.3B",
    time: new Date(2009, 9, 24),
    duration: "3:33",
    verified: true,
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/vi/YfTiw3UhhMU/maxresdefault.jpg",
    title:
      "Build a YouTube Clone with React JS | Full Stack YouTube Clone Tutorial",
    channel: "JavaScript Mastery",
    channelLogo:
      "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",
    views: "245K",
    time: new Date(2023, 2, 15),
    duration: "2:45:21",
    verified: true,
  },
  {
    id: 3,
    thumbnail: "https://i.ytimg.com/vi/FHTbsZEJspU/maxresdefault.jpg",
    title: "How to Use Tailwind CSS with React | Complete Tutorial",
    channel: "Traversy Media",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZQTjLzJ0CSO0-oPvIZ8AxlJBjQw-5kSF9OKG4Hv=s176-c-k-c0x00ffffff-no-rj",
    views: "587K",
    time: new Date(2022, 5, 10),
    duration: "38:22",
    verified: true,
  },
  {
    id: 4,
    thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
    title: "React JS Crash Course 2023 | Learn React in 2 Hours",
    channel: "Traversy Media",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZQTjLzJ0CSO0-oPvIZ8AxlJBjQw-5kSF9OKG4Hv=s176-c-k-c0x00ffffff-no-rj",
    views: "3.2M",
    time: new Date(2021, 2, 11),
    duration: "1:48:47",
    verified: true,
  },
  {
    id: 5,
    thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
    title: "React Course - Beginner's Tutorial for React JavaScript Library",
    channel: "freeCodeCamp.org",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZSCFUwVXZYQTGRYzjbpHNNqIzY7VZ0FbH-B_0VQ=s176-c-k-c0x00ffffff-no-rj",
    views: "5.1M",
    time: new Date(2022, 0, 10),
    duration: "11:55:27",
    verified: true,
  },
  {
    id: 6,
    thumbnail: "https://i.ytimg.com/vi/jx5hdo50a2M/maxresdefault.jpg",
    title: "Next.js 14 Crash Course | App Router, Server Actions, and More",
    channel: "Coding in Flow",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZRJlLwTVVcVQ5G-qkKcVvKGZmwNqcTsXcxEQVrh=s176-c-k-c0x00ffffff-no-rj",
    views: "125K",
    time: new Date(2023, 10, 5),
    duration: "1:21:43",
    verified: false,
  },
  {
    id: 7,
    thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
    title: "Learn JavaScript - Full Course for Beginners",
    channel: "freeCodeCamp.org",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZSCFUwVXZYQTGRYzjbpHNNqIzY7VZ0FbH-B_0VQ=s176-c-k-c0x00ffffff-no-rj",
    views: "12M",
    time: new Date(2018, 11, 10),
    duration: "3:26:43",
    verified: true,
  },
  {
    id: 8,
    thumbnail: "https://i.ytimg.com/vi/3PHXvlpOkf4/maxresdefault.jpg",
    title: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
    channel: "freeCodeCamp.org",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZSCFUwVXZYQTGRYzjbpHNNqIzY7VZ0FbH-B_0VQ=s176-c-k-c0x00ffffff-no-rj",
    views: "1.8M",
    time: new Date(2020, 6, 15),
    duration: "8:25:36",
    verified: true,
  },
  {
    id: 9,
    thumbnail: "https://i.ytimg.com/vi/gieEQFIfgYc/maxresdefault.jpg",
    title: "The Complete 2023 Web Development Bootcamp",
    channel: "Dr. Angela Yu",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZSZQgGYSK7u5FVlsGzG_rGGRpGLSJYv5W6QCnO4=s176-c-k-c0x00ffffff-no-rj",
    views: "2.4M",
    time: new Date(2023, 0, 1),
    duration: "22:45:36",
    verified: true,
  },
  {
    id: 10,
    thumbnail: "https://i.ytimg.com/vi/0fYi8SGA20k/maxresdefault.jpg",
    title: "JavaScript DOM Manipulation – Full Course for Beginners",
    channel: "freeCodeCamp.org",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZSCFUwVXZYQTGRYzjbpHNNqIzY7VZ0FbH-B_0VQ=s176-c-k-c0x00ffffff-no-rj",
    views: "456K",
    time: new Date(2022, 3, 22),
    duration: "7:15:05",
    verified: true,
  },
  {
    id: 11,
    thumbnail: "https://i.ytimg.com/vi/RVFAyFWO4go/maxresdefault.jpg",
    title: "React Native Crash Course 2023",
    channel: "Academind",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZQHv8ZiZ5zxQpZrAFHRfCUzlYZZWRVLNpnXaCJl=s176-c-k-c0x00ffffff-no-rj",
    views: "328K",
    time: new Date(2023, 5, 18),
    duration: "3:56:21",
    verified: true,
  },
  {
    id: 12,
    thumbnail: "https://i.ytimg.com/vi/CXa0f4-dWi4/maxresdefault.jpg",
    title: "Build a Complete App with GraphQL, Node.js, MongoDB and React.js",
    channel: "Academind",
    channelLogo:
      "https://yt3.googleusercontent.com/ytc/AIf8zZQHv8ZiZ5zxQpZrAFHRfCUzlYZZWRVLNpnXaCJl=s176-c-k-c0x00ffffff-no-rj",
    views: "521K",
    time: new Date(2021, 8, 5),
    duration: "6:32:18",
    verified: true,
  },
];

export const mainNavLinks = [
  {
    icon: IoHomeOutline,
    href: "/",
    text: "Home",
  },
  {
    icon: "/shorts.svg", // This will be rendered as an <img />
    href: "/shorts",
    text: "Shorts",
    isImage: true,
  },
  {
    icon: MdOutlineSubscriptions,
    href: "/subscription",
    text: "Subscriptions",
  },
  {
    icon: CgProfile,
    href: "/you",
    text: "You",
  },
];

export const youNavLinks = [
  {
    icon: MdHistory,
    href: "/",
    text: "History",
  },
  {
    icon: MdOutlinePlaylistPlay,
    href: "/",
    text: "Playlists",
  },
  {
    icon: BiSolidVideos,
    href: "/",
    text: "Your videos",
  },
  {
    icon: MdOutlineWatchLater,
    href: "/",
    text: "Watch Later",
  },
  {
    icon: AiFillLike,
    href: "/",
    text: "Liked",
  },
  {
    icon: IoCut,
    href: "/",
    text: "Your Clips",
  },
];

export const EndNavLinks = [
  {
    icon: CiSettings,
    href: "/",
    text: "Settings",
  },
  {
    icon: FaFlag,
    href: "/",
    text: "Your history",
  },
  {
    icon: FiHelpCircle,
    href: "/",
    text: "Help",
  },
  {
    icon: MdOutlineFeedback,
    href: "/",
    text: "Send feedback",
  },
];
