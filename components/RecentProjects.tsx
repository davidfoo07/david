"use client";
import React, { useRef } from "react";
import { projects } from "./data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { fadeIn } from "./ui/Variants";

const RecentProjects = () => {
    const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["0 1", "0.75 1"],
    // });
    const isInView = useInView(ref, { once: false });
    return (
        <div className="py-20" id="projects">
            <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="heading"
            >
                A small selection of <span className="text-purple">recent projects</span>
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <motion.div
                        variants={fadeIn(`${id % 2 === 0 ? "left" : "right"}`, 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        key={id}
                        ref={ref}
                        className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                    >
                        <PinContainer title={title} href={link}>
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d">
                                    <img src="/bg/png" alt="bg-img" />
                                </div>
                                <img src={img} alt={title} className="z-10 absolute bottom-0" />
                            </div>
                            {isInView && (
                                <>
                                    <TextGenerateEffect
                                        className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                                        words={title}
                                        duration={0.25}
                                    />
                                    <TextGenerateEffect
                                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                        words={des}
                                        duration={0.25}
                                    />
                                </>
                            )}
                            <div className="flex items-center justify-between mt-7 mb-3 ">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={icon}
                                            className="border borer-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{ transform: `translateX(-${5 * index * 2} px)` }}
                                        >
                                            <img src={icon} alt={icon} className="p-2" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className=" flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
