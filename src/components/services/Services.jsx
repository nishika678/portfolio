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
    animate={Viewis&&"animate"}
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
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="list1" variants={s1}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi fuga est vel ea vitae illum error esse fugiat qui ullam quaerat harum eum laborum ducimus quae, a nihil deleniti, sint debitis maiores velit praesentium maxime ipsum. Expedita, eveniet asperiores.
                </p>
                <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi fuga est vel ea vitae illum error esse fugiat qui ullam quaerat harum eum laborum ducimus quae, a nihil deleniti, sint debitis maiores velit praesentium maxime ipsum. Expedita, eveniet asperiores.
                </p>
                <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi fuga est vel ea vitae illum error esse fugiat qui ullam quaerat harum eum laborum ducimus quae, a nihil deleniti, sint debitis maiores velit praesentium maxime ipsum. Expedita, eveniet asperiores.
                </p>
                <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi fuga est vel ea vitae illum error esse fugiat qui ullam quaerat harum eum laborum ducimus quae, a nihil deleniti, sint debitis maiores velit praesentium maxime ipsum. Expedita, eveniet asperiores.
                </p>
                <button>Go</button>
                </motion.div>

        </motion.div>
    </motion.div>
  )
}

export default Services