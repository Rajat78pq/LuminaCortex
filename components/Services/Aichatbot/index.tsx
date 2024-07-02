"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
// import { text } from "stream/consumers";
import Image from "next/image";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projectData } from "./projectData";
import { motion } from "framer-motion";


const Aichatbot = () => {
  const words = [
    {
      text: "Make"
    },
    {
      text: "your"
    },
    {
      text: "Personal",
    },
    {
      text: "Ai-ChatBot",
    },
    {
      text: "to",
    },
    {
      text: "Enhance",
    },
    {
      text: "Business",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section className="py-20">
      <div className="xl:h-[30rem] h-[10rem] mt-20 flex justify-center items-center">
        <TypewriterEffect className="text-3xl xl:text-[4rem] xl:w-[60%]" words={words} />
      </div>
      <div className="h-[30rem] flex justify-center items-center xl:h-[50rem]">
        <Image
          src="/images/services/Aichatbot.svg"
          alt="Aichatbot"
          width={46}
          height={146}
          className="h-[45rem] w-[45rem]"
        />
      </div>
      <div className="h-[80rem] xl:h-[50rem]">
        <div className="h-[10rem] pt-10 text-3xl flex justify-center items-center xl:h-[10rem]">
          <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-black font-bold dark:text-white px-2 xl:text-[3rem]"> Discover the wide range of <span className="text-blue-500">Ai ChatBot</span></h3>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
          <HoverEffect className="xl:h-[30rem] xl:mx-10 xl:text-[1.5rem]" items={projectData} />
        </motion.div>
      </div>
      <div className="h-auto">
        {/* first section  */}
        <div className="h-auto flex flex-col xl:flex-row xl:justify-center xl:items-center">
          <div className="h-[20rem] flex-col flex justify-center items-center xl:mt-20 xl:h-[40rem]">
            <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
              <Image
                src="/images/services/aichatimg2nd.svg"
                alt="Aichatbot"
                width={46}
                height={46}
                className="h-[15rem] w-[15rem] xl:h-[30rem] xl:w-[30rem]"
              />
            </motion.div>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
              <div className="font-bold mt-5 text-[1.4rem] text-black dark:text-white text-center xl:pt-10 xl:text-2xl ">
                AI Chatbot Services for Business
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
              <div className="h-[55rem] xl:h-[45rem] flex justify-center mt-10">
                <div className="w-[90%] xl:h-[40rem] h-[50rem] bg-white dark:bg-black text-black dark:text-white rounded-3xl border-2 border-solid border-slate-800 my-5">
                  <h3 className="px-5 pt-8 text-2xl font-bold">Customer Support</h3>
                  <Image
                    src="/images/services/customerSupport.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[17rem] -top-[2rem]"
                  />
                  <div className="px-5">
                    <p>24/7 Support: Always-on assistance to resolve customer queries.</p>
                    <p>Multi-language Support: Communicate with customers globally.</p>
                    <p>CRM Integration: Seamless tracking and management of customer interactions.</p>
                  </div>
                  <h3 className="px-5 pt-8 text-2xl font-bold">Sales and Marketing</h3>
                  <Image
                    src="/images/services/salesMarkting.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[18rem] -top-[2rem]"
                  />
                  <div className="px-5">
                    <p>Lead Generation: Identify and engage potential customers.</p>
                    <p>Product Recommendations: Personalized suggestions to boost sales.</p>
                    <p>Automated Campaigns: Efficiently run marketing campaigns across platforms.</p>
                  </div>
                  <h3 className="px-5 pt-8 text-2xl font-bold">Internal Operations</h3>
                  <Image
                    src="/images/services/InternalOperation.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[17rem] -top-[2rem]"
                  />
                  <div className="px-5">
                    <p>HR and Onboarding: Streamline employee onboarding and HR processes.</p>
                    <p>IT Support: Immediate assistance for common IT issues.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* second section  */}
        
        <div className="h-auto flex flex-col xl:flex-row xl:justify-center xl:items-center xl:mt-[15rem]">
          <div>
            <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
              <div className="font-bold mt-5 text-[1.4rem] text-black dark:text-white text-center ">
                AI Chatbot Services for Personal Use
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
              <div className="h-[50rem] xl:h-[45rem] flex justify-center mt-10">
                <div className="w-[90%] h-[46rem] xl:h-[35rem] bg-white dark:bg-black text-black dark:text-white rounded-3xl border-2 border-solid border-slate-800 my-5">
                  <h3 className="px-5 pt-8 text-2xl font-bold">Personal Assistant</h3>
                  <Image
                    src="/images/services/personalAssi.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[17rem] -top-[2rem]"
                  />
                  <div className="px-5">
                    <p>Task Management: Manage daily tasks, reminders, and appointments.</p>
                    <p>Information Retrieval: Quick answers to everyday questions.</p>
                    <p>Personalized Recommendations: Tailored suggestions for shopping, dining, and entertainment.</p>
                  </div>
                  <h3 className="px-5 pt-8 text-2xl font-bold">Health and Wellness</h3>
                  <Image
                    src="/images/services/healthandwealth.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[18rem] -top-[2rem]"
                  />
                  <div className="px-5">
                    <p>Fitness Coaching: Personalized workout plans and progress tracking.</p>
                    <p>Mental Health Support: Resources and tips for mental well-being.</p></div>
                  <h3 className="px-5 pt-8 text-2xl font-bold">Education and Learning</h3>
                  <Image
                    src="/images/services/education.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[19rem] -top-[2rem]"
                  />
                  <div className="px-5">
                    <p>Tutoring: Help with homework and complex topics.</p>
                    <p>Language Learning: Practice new languages through interactive conversations.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
            <div className="h-[20rem] flex-col flex justify-center items-center xl:h-[40rem]">
              <Image
                src="/images/services/personalChatbot.svg"
                alt="Aichatbot"
                width={46}
                height={46}
                className="h-[15rem] w-[15rem] xl:h-[30rem] xl:w-[30rem]"
              />
            </div>
          </motion.div>
        </div>

        {/* third section  */}

        <div className="h-auto flex flex-col xl:flex-row xl:justify-center xl:items-center xl:mt-[15rem]">
          <div className="h-[20rem] flex-col flex justify-center items-center xl:h-[40rem]">
            <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
              <Image
                src="/images/services/selfDrive.svg"
                alt="Aichatbot"
                width={46}
                height={46}
                className="h-[15rem] w-[15rem] xl:h-[30rem] xl:w-[30rem]"
              />
            </motion.div>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
              <div className="font-bold mt-5 text-[1.4rem] text-black dark:text-white text-center xl:pt-10 xl:text-2xl ">
                AI Chatbot Services for Self-Driving Vehicles
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}>
              <div className="h-[55rem] xl:h-[45rem] flex justify-center mt-10">
                <div className="w-[90%] xl:h-[33rem] h-[50rem] bg-white dark:bg-black text-black dark:text-white rounded-3xl border-2 border-solid border-slate-800 my-5">
                  <h3 className="px-5 pt-8 text-2xl font-bold">In-Vehicle Assistance</h3>
                  <Image
                    src="/images/services/vehicleassi.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[18rem] -top-[2.5rem]"
                  />
                  <div className="px-5">
                    <p>Navigation: Real-time traffic updates and optimized routes.</p>
                    <p>Vehicle Control: Voice commands to control vehicle functions.</p>
                  </div>
                  <h3 className="px-5 pt-8 text-2xl font-bold">Safety and Maintenance</h3>
                  <Image
                    src="/images/services/Safety.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[20rem] -top-[2rem]"
                  />
                  <div className="px-5">
                    <p>Safety Alerts: Notifications about potential hazards and maintenance needs.</p>
                    <p>Emergency Assistance: Immediate contact with emergency services in critical situations.</p>
                  </div>
                  <h3 className="px-5 pt-8 text-2xl font-bold">Passenger Experience</h3>
                  <Image
                    src="/images/services/passenger.svg"
                    width={33}
                    height={33}
                    alt=""
                    className="relative -right-[19rem] -top-[2rem]"
                  />
                  <div className="px-5">
                    <p>Entertainment: Access to music, movies, and games.</p>
                    <p>Travel Information: Details about destinations and points of interest.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};


export default Aichatbot;