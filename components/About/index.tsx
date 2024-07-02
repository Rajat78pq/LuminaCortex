"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden py-20 lg:py-20 lg:pb-25 xl:pb-30 xl:pt-[20rem]">
        <div className="xl:flex xl:flex-row">
          <div>
            <div className="text-3xl font-semibold text-black dark:text-manatee mt-10 ml-8 xl:text-4xl xl:ml-[20rem]">
              Our Purpose
            </div>
            <p className="ml-5 mt-5 px-5 xl:ml-[19rem] xl:w-[40rem] xl:text-xl">Enhance your competitive edge with AI and Analytics through data-driven decision-making, operational optimization, personalized customer experiences, and market trend prediction.</p>
          </div>
          <div className="flex justify-center mt-20 xl:-mt-[4rem] xl:ml-[18rem]">
            <Image src="/images/about/aboutpic.svg" alt="about" width={600} height={600} className="h-[20rem] w-[20rem]" />
          </div>
        </div>

        <div className="xl:flex justify-center items-center">
        <div className="mt-20 flex flex-col gap-5 xl:mt-[15rem] xl:w-[60%]">
          <div className="h-auto bg-white dark:bg-black p-6 mx-6 border-1 rounded-lg border-manatee">
            <Image src="/images/about/wedeliver.png" alt="about" width={60} height={60} className="" />
            <h3 className="mt-3 text-2xl font-semibold text-black dark:text-manatee">We Deliver</h3>
            <div>a tangible business impact with data-driven insights powered by AI to drive revenue growth, increase profitability and improve operational efficiencies for your business.</div>
          </div>
          <div className="h-auto bg-white dark:bg-black p-6 mx-6 border-1 rounded-lg border-manatee">
            <Image src="/images/about/weare.png" alt="about" width={60} height={60} className="" />
            <h3 className="mt-3 text-2xl font-semibold text-black dark:text-manatee">We Are</h3>
            <div>technologists with keen business acumen – forever curious, always on the front lines of technological advancements. Applying our latest learnings, and tools to solve your everyday business challenges.</div>
          </div>
          <div className="h-auto bg-white dark:bg-black p-6 mx-6 border-1 rounded-lg border-manatee">
            <Image src="/images/about/webelive.png" alt="about" width={60} height={60} className="" />
            <h3 className="mt-3 text-2xl font-semibold text-black dark:text-manatee">We Believe</h3>
            <div>the power of AI should not be the exclusive preserve of the few. Every business, regardless of its size or sector, deserves the opportunity to harness the power of AI to make better decisions and drive business value.</div>
          </div>
          <div className="h-auto bg-white dark:bg-black p-6 mx-6 border-1 rounded-lg border-manatee">
            <Image src="/images/about/wesee.png" alt="about" width={60} height={60} className="" />
            <h3 className="mt-3 text-2xl font-semibold text-black dark:text-manatee">We See</h3>
            <div>a world where our AI and Analytics solutions democratize decision intelligence for all businesses. With LuminaCortex, our motto is ‘No business left behind’.</div>
          </div>
        </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
