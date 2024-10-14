import { Image } from 'antd'
import React from 'react'
import baner from '../../assets/baner.jpg'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import card4 from '../../assets/card4.png'
import card5 from '../../assets/card5.png'
import card6 from '../../assets/card6.png'
import { FaPencilRuler } from "react-icons/fa";
import { GiAwareness } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import Cards from './Cards'
import Tabs from './Tabs'
import Details from './Details'
import Carousal from './Carousal'
import Footer from './Footer'

function Dashboard() {
    const dataTab = [
        { title: "Completed", icon: <FaPencilRuler size={70} />, col: "red", fil: '#ffd5d5' },
        { title: "Reward", icon: <FaAward size={70} />, col: "green", fil: '#cbffc7' },
        { title: "Chellanges", icon: <GiAwareness size={70} />, col: "blue", fil: '#d8d5ff' },
        { title: "Live Classes", icon: <FaUserGraduate size={70} />, col: "#ffbc00", fil: '#f4ffb4' }
    ]
    const dataCard = [
        { title: "JavaScript Mastery", description: "Learn JavaScript from basics to advanced levels.", img: card1, lessons: 15 },
        { title: "HTML & CSS Basics", description: "Introduction to creating web pages using HTML and CSS.", img: card2, lessons: 10 },
        { title: "React Hooks Guide", description: "Master React hooks for efficient state management.", img: card3, lessons: 12 },
        { title: "Backend with Node.js", description: "Learn to build servers using Node.js and Express.", img: card4, lessons: 18 },
        { title: "Responsive Tailwind", description: "Build mobile-friendly websites using Tailwind CSS.", img: card5, lessons: 8 },
        { title: "SQL Database Design", description: "Understand database design and management with SQL.", img: card6, lessons: 20 },
    ]

    return (
        <div>
            <div className=' w-full'>
                <Image preview={false} src={baner} height={200} width={"100%"} />
                <Tabs dataTab={dataTab} />
                <Cards dataCard={dataCard} />
                <Details />
                <Carousal />
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard