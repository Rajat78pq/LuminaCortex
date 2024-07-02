"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";


const Aiintegration = () => {
    const [tab, setTab] = useState<number>(1)

    const words = [
        {
            text: "Generative"
        },
        {
            text: "Ai-",
            className: "text-blue-500 dark:text-blue-500"
        },
        {
            text: "Integrations",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <>
            <section className="py-20 xl:py-35">
                <div className="flex flex-col justify-center items-center xl:flex-row">
                    <div className="flex flex-col justify-center items-center">
                        <TypewriterEffect className="mt-10 text-4xl" words={words} />
                        <p className="mt-5 w-[90%] text-center ">
                            At LuminaCortex, we specialize in seamlessly integrating advanced AI technologies into your existing systems, transforming the way you operate and making your business smarter, faster, and more competitive.
                        </p>
                    </div>
                    <div className="mt-20 px-10 xl:w-[50%]">
                        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
                            <Image src="/images/services/aiIntegration.svg" alt="Ai-Integration" width={400} height={400} />
                        </motion.div>
                    </div>
                </div>
                <div className=" xl:flex flex-col justify-center items-center">
                    <div className="xl:w-[80%] xl:px-[10%]">
                    <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
                        <div className="mt-25 font-bold text-4xl text-center">Our <span className="text-blue-500">Services</span></div>
                    </motion.div>
                    <div className="mt-5 px-3 bg-white dark:bg-black xl:w-[100%]">
                        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
                            <Accordion selectionMode="multiple">
                                <AccordionItem key="1" aria-label="Custom AI Solutions" title="Custom AI Solutions">
                                    <p> Custom AI solutions refer to tailored artificial intelligence applications designed to meet specific needs or solve particular problems for a business, organization, or individual. These solutions can leverage various AI technologies, such as machine learning, natural language processing, computer vision, and more.</p>
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Data Analysis and Predictive Analytics" title="Data Analysis and Predictive Analytics">
                                    <p>Data Analysis and Predictive Analytics are crucial in transforming raw data into actionable insights, enabling informed decision-making across various industries. Data Analysis involves systematically evaluating data to identify patterns, trends, and relationships, which helps organizations understand past performance and optimize current operations. Predictive Analytics extends this by using statistical models and machine learning techniques to forecast future events, behaviors, and outcomes. Together, they enhance strategic planning, improve efficiency, reduce risks, and uncover new opportunities, ultimately driving better business outcomes and competitive advantage.</p>
                                </AccordionItem>
                                <AccordionItem key="3" aria-label="Automation and Process Optimization" title="Automation and Process Optimization">
                                    <p>Automation and Process Optimization are crucial for boosting organizational efficiency and productivity. Automation uses technology to perform tasks with minimal human intervention, reducing errors and increasing speed. Process Optimization streamlines workflows, eliminating bottlenecks and waste to improve performance. Together, they help companies save costs, improve quality, speed up time-to-market, and gain a competitive edge by maximizing resource utilization and operational excellence.</p>
                                </AccordionItem>
                                <AccordionItem key="4" aria-label="Natural Language Processing (NLP)" title="Natural Language Processing (NLP)">
                                    <p>
                                        Natural Language Processing (NLP) is an AI field that enables computers to understand and respond to human language. Combining computational linguistics and machine learning, NLP processes and analyzes large volumes of natural language data. Its applications include speech recognition, sentiment analysis, language translation, and chatbots. By facilitating machine comprehension of human language, NLP enhances user experiences, automates communication tasks, and provides valuable text data insights, advancing fields like customer service, healthcare, and data analytics.</p>
                                </AccordionItem>
                                <AccordionItem key="5" aria-label="AI Consulting" title="AI Consulting">
                                    <p>AI Consulting involves providing expert advice and solutions to organizations on how to leverage artificial intelligence to meet their business goals. Consultants assess a company's needs, identify potential AI applications, and develop strategies for implementing AI technologies. This includes data analysis, model development, and integration of AI systems into existing workflows. AI Consulting helps businesses optimize operations, improve decision-making, innovate products and services, and gain a competitive advantage by harnessing the power of AI effectively and efficiently.</p>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Aiintegration;