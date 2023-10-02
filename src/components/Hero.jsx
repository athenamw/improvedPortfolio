import {motion} from "framer-motion";
import { styles} from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
     <section className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <section className="flex flex-col justify-center items-center mt-5">
          <section className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <section className="w-1 sm: h-80 h-40 violet-gradient"/>
        </section>
        <section>
          <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className="text-[#915eff]">Athena</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a dedicated UC Berkeley bootcamp student, on 
            a journey to turn my coding passion into a tech 
            career by acquiring the skills and knowledge for success.
          </p>
        </section>
      </section>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero