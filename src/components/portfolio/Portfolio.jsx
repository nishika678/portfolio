import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
import { useRef } from "react";

const objects=[
    {
        id:1,
        title:"React Commerce",
        img:"/react_project.png",
        desc:"Clothify is a e-commerce platform developed using React, CSS, and JavaScript.It offers a seamless shopping experience for users looking to purchase trendy and fashionable clothing items. The application features a clean and intuitive user interface, making it easy for customers to browse products, view detailed descriptions.",
        link:"https://github.com/nishika678/E-Commerce"
    },
    {
        id:2,
        title:"Online Electronic brand",
        img:"/html_project.png",
        desc:"I developed an user-friendly electronics e-commerce website utilizing HTML, CSS, and JavaScript. The site features a sleek design that prioritizes a seamless user experience. For the styling, I implemented a layout using CSS Flexbox and Grid.To add improve navigation, I incorporated JavaScript for dynamic content updates and form validation. A key feature of the website is the smooth scrolling functionality. ",
        link:"https://github.com/nishika678/ECommerce2"
    },
    {
        id:3,
        title:"My Portfolio",
        img:"/react2.png",
        desc:"I designed and developed my portfolio website using React, incorporating the parallax technique to create a dynamic and visually engaging experience. The site is styled with SCSS, which allows for modular and maintainable CSS that enhances the design and responsiveness across all devices. The parallax scrolling effect adds depth and interactivity, making the browsing experience captivating and modern. This project highlights my proficiency in React, advanced CSS techniques, and my ability to create aesthetically pleasing, responsive, and functional web applications.",
        link:"https://github.com/nishika678/portfolio"
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolores recusandae dolorem. Quaerat sunt assumenda explicabo, reiciendis dicta tempora iure.",
    },

];

const Single=({object})=>{
    const por=useRef();

    const {scrollYProgress}=useScroll({
        target:por,
        // offset:["start start","end start"]
    });

    const y=useTransform(scrollYProgress,[0,1],[-400,400])

    return(
<section>
    <div className="container">
        <div className="content">
            <div className="image1" ref={por}>
        <img src={object.img} alt="" />
        </div>
        <motion.div className="text" style={{y}}>
            <h2 >{object.title}</h2>
            <p>{object.desc}</p>
            <a href={object.link} target="_blank"><button>See Demo</button></a>
        </motion.div>
        </div>
    </div>
</section>
    )
};


const Portfolio=() =>{

    const por=useRef()


    const {scrollYProgress}=useScroll({
        target:por,
        offset:["end end","start start"],
    });

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className="portfolio" ref={por}>
        <div className="port1">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}}className="portBar"></motion.div>
        </div>
        {objects.map((object)=>(
            <Single object={object} key={object.id}/>
        ))}
    </div>
  )
}

export default Portfolio
