"use client";
import HoverImage from "./hoverImage";
import { delay, motion } from "framer-motion";
import Image from "next/image";

const ARandVR = () => {
    return (
        <div className="relative w-full overflow-x-hidden py-20">
            <div className="mt-20 xl:flex xl:flex-row justify-center items-center xl:relative">
                <div className="flex flex-col justify-center xl:w-[50%] px-10 xl:-mt-[15rem]">
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            y: -20,
                        },

                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }} >
                        <div className="text-3xl font-bold text-black dark:text-manatee xl:text-6xl">LuminaCortex AR & VR Hub</div>
                        <div className="mt-5">AR and VR technologies transform various fields by creating immersive experiences. AR overlays digital information onto the real world, enhancing education, healthcare, retail, and more. VR provides fully interactive virtual environments for gaming, training, and social interaction, offering multisensory engagement and realistic simulations.</div>
                    </motion.div>
                </div>
                <div className="flex justify-center items-center">
                    <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            y: -20,
                        },

                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }} >
                        <Image src="/images/services/arvrchat.svg" alt="arvr" width={600} height={600} className="h-[25rem] w-[25rem] xl:h-[50rem] xl:w-[50rem]" />
                    </motion.div>
                </div>
            </div>
            <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            y: -20,
                        },

                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }} >
            <div className="pt-20 flex flex-col justify-center items-center h-auto xl:justify-center xl:pt-2">
                    <h3 className=" text-center text-2xl px-5 font-semibold xl:text-3xl xl:w-[55%]">
                        Enhance Customer Experiences and Empower Business through Elite AR & VR Services
                    </h3>
                <div className="h-[80rem] xl:h-[20rem] gap-5 w-full px-5 flex flex-col justify-center gird xl:flex-row xl:mt-20">
                    
                        <HoverImage src={"/images/services/gaming.jpg"} alt="AR & VR" text="AR & VR Game Development 2D, 3D and Isometric games" />
                        <HoverImage src={"/images/services/education.jpg"} alt="AR & VR" text="Education 3D Visual Animations | Interactions & Clicks" />
                        <HoverImage src={"/images/services/furnitures.jpg"} alt="AR & VR" text="Experience luxury furniture using AR on your mobile | before purchase" />
                        <HoverImage src={"/images/services/travel2.jpg"} alt="AR & VR" text="Travel Interactive Experiences" />
                </div>
            </div>
            </motion.div>

            <div className="flex flex-col justify-center items-center gap-5 text-center px-5 xl:mt-20 ">
                <div className="text-2xl font-bold xl:text-4xl">Our Mission</div>
                <p className="xl:w-[60%]">AR and VR technologies create immersive experiences across fields like education, healthcare, and retail. Virtual reality offers unique opportunities, and LuminaCortex's mission is to make these technologies accessible to everyone.</p>
            </div>

        </div>
    );
};

export default ARandVR;
