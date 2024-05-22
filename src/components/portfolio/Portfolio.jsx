import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
import { useRef } from "react";

const objects=[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/10295057/pexels-photo-10295057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolores recusandae dolorem. Quaerat sunt assumenda explicabo, reiciendis dicta tempora iure.",
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/23709323/pexels-photo-23709323/free-photo-of-shot-with-oldroll-classic-m.jpeg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolores recusandae dolorem. Quaerat sunt assumenda explicabo, reiciendis dicta tempora iure.",
    },
    {
        id:3,
        title:"vanilla JS App",
        img:"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolores recusandae dolorem. Quaerat sunt assumenda explicabo, reiciendis dicta tempora iure.",
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
            <button>See Demo</button>
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
