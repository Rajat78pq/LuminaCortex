"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProductHighlights = () => {
    
    return(
        <>
        <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
              currently launching a new product
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                 
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                MailMotion
                </span>
              </h2>
              <p>
              Introducing MailMotion, the revolutionary AI-based solution that transforms your written email text into personalized video messages featuring your voice and lip-syncing. Say goodbye to impersonal emails and hello to a more engaging way to communicate with your clients. MailMotion converts your email content into dynamic video messages by replicating your voice and synchronizing it with a digital representation of your face. This advanced AI technology ensures a natural lip-sync experience, creating professional and personalized video messages that feel like face-to-face conversations. With easy integration into major email platforms, MailMotion enhances engagement, saves time on video production, and strengthens client relationships. Ideal for sales professionals, customer support, marketing teams, and executives, MailMotion makes your communications more compelling and memorable. Transform your written words into powerful video messages with MailMotion and elevate your client interactions to a whole new level!
              </p>
              <div>
                <a
                  href="https://rejo-sales-inc.vercel.app/"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
        </>
    )
}

export default ProductHighlights;