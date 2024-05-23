import { useEffect, useState } from "react"
import "./cursor.scss"
import {motion} from "framer-motion"

function Cursor() {

    const [direction,setDirection]=useState({x:0,y:0})

useEffect(()=>{
    const mouseMove=(a)=>{
        setDirection({x:a.clientX,y:a.clientY})
    }

    window.addEventListener("mousemove",mouseMove)

    return ()=>{
        window.removeEventListener("mousemove",mouseMove)
    };
},[]);


  return (
    <motion.div className="cursor" animate={{x:direction.x+10,y:direction.y+10}}></motion.div>
  )
}

export default Cursor