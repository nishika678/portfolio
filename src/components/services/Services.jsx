import { useRef } from "react";
import "./services.scss"
import {motion,useInView} from "framer-motion"

const s1={
initial:{
x:-500,
y:100,
opacity:0
},
animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
        duration:1,
        staggerChildren:0.1,
    },
},
};


const Services=()=> {


    const ser=useRef()

    const Viewis=useInView(ser,{margin:"-100px"})


  return (
    <motion.div className="services" 
    variants={s1} 
    initial="initial" 
    ref={ser}
    animate={"animate"}
>
        <motion.div className="text" variants={s1}>
            <p>I focus on helping your brand grow <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="head" variants={s1}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Buisness.</h1>
                <button>WHAT I DO?</button>
            </div>
        </motion.div>
        <motion.div className="list1" variants={s1}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>UI/UX Development</h2>
                <p>
                As a UI/UX Developer, I specialize in creating intuitive and visually appealing user interfaces that enhance user experience. My role involves conducting user research, wireframing, prototyping, and implementing designs using the latest technologies. I collaborate closely with cross-functional teams to ensure that the final product is both user-friendly and aligned with business goals. With a keen eye for detail and a passion for design, I strive to create seamless digital experiences that delight users.
                </p>
                <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>C++</h2>
                <p>
                I have a strong command of C++, a versatile programming language known for its efficiency and performance. My expertise includes understanding and applying core language features such as object-oriented programming, memory management, and standard library utilization. I am skilled in writing clean, efficient, and maintainable C++ code, leveraging the language's capabilities to develop robust and high-performance applications.

</p>

                <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Leadership skills</h2>
                <p>
                I excel in leadership roles, guiding teams with a clear vision and strategic direction. My strengths include effective communication, decision-making, and conflict resolution, ensuring that team objectives are met efficiently and collaboratively. I am adept at fostering a positive and productive work environment, motivating team members, and driving projects to successful completion. My leadership style is inclusive and supportive, focused on empowering individuals and optimizing team performance.
                </p>
                <button>Go</button>
                </motion.div>
                {/* <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi fuga est vel ea vitae illum error esse fugiat qui ullam quaerat harum eum laborum ducimus quae, a nihil deleniti, sint debitis maiores velit praesentium maxime ipsum. Expedita, eveniet asperiores.
                </p>
                <button>Go</button>
                </motion.div> */}

        </motion.div>
    </motion.div>
  )
}

export default Services