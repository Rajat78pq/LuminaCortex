"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <>
            {/* <!-- ===== About Start ===== --> */}
            <section className="overflow-hidden pb-10 lg:pb-25 xl:pb-10">
                <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                    <div className="flex items-center gap-8 lg:gap-32.5 mt-20">
                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: -20,
                                },

                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
                        >
                            <Image
                                src="/images/about/about-light-01.png"
                                alt="About"
                                className="dark:hidden"
                                fill
                            />
                            <Image
                                src="/images/about/about-dark-01.png"
                                alt="About"
                                className="hidden dark:block"
                                fill
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: 20,
                                },

                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_right md:w-1/2"
                        >
                            {/* <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                SaaS Boilerplate for Next.js
              </span> */}
                            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                                Our
                                {" "} <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                                    Approaches
                                </span>
                            </h2>
                            <p className="mb-20">
                                We combine strategic consulting with advanced engineering expertise, backed by our deep knowledge in AI, Machine Learning, and the Modern Data Stack, to deliver unparalleled project solutions. Our specialized development accelerators, innovative frameworks, and unique methodology ensure rapid, efficient, and high-quality project completion, all centered on enhancing your competitive edge and market leadership.
                            </p>

                            {/* <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    React 18, Next.js 13 and TypeScript
                  </h3>
                  <p>Ut ultricies lacus non fermentum ultrices.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Fully Customizable
                  </h3>
                  <p>consectetur adipiscing elit fermentum ultricies.</p>
                </div>
              </div> */}
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== About End ===== --> */}
        </>
    );
};

export default About;