import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const ServicePageRewrite = () => {
  const words = `Is your current website struggling with slow performance, poor responsiveness, or outdated design? Our App Rewrite service is designed to breathe new life into your existing web application. We specialize in transforming old, inefficient websites into modern, high-performance applications that look great and work seamlessly on all devices.`
  return (
    <>
      <section className="pt-30 h-auto dark:bg-black bg-white">
  <div className="h-auto lg:h-[40rem] w-full rounded-md dark:bg-black bg-white relative flex flex-col justify-center antialiased">
    <div className="flex flex-col lg:flex-row relative">
      <div className="relative flex flex-col max-w-c-1016">
        <h1 className="relative mt-10 md:mt-28 max-w-c-1016 ml-5 md:ml-21 z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          App Re-Write Services
        </h1>
        <TextGenerateEffect className="ml-4 md:ml-20 text-sm" words={words} />
      </div>
      <div className="max-h-full left-0 lg:left-48 max-w-c-1154 relative 2xl:-mr-7.5 mt-10 lg:mt-0">
        <Image
          src="/images/services/apprewrite.svg"
          alt="App Rewrite"
          width={46}
          height={246}
          className="w-full h-[10rem] md:h-[20rem] lg:h-[30rem] left-0 lg:left-30 bottom-0 z-999"
        />
      </div>
    </div>
    <BackgroundBeams />
  </div>
  
  {/* cards */}
  <div className="flex flex-col lg:flex-row flex-wrap gap-4">
    {/* card -1 */}
    <CardContainer className="inter-var mx-4 lg:mx-18">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Performance Optimization
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Improve loading times and overall speed. Optimize backend processes for faster data handling.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/services/performanceOpt.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4 lg:mt-20">
          <CardItem translateZ={20} as={Link} href="/support" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    {/* card -2 */}
    <CardContainer className="inter-var mx-4 lg:mx-18">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Responsive Design
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Ensure compatibility across all devices (desktops, tablets, and smartphones). Implement modern, user-friendly interfaces.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/services/responsiveDesign.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4 lg:mt-20">
          <CardItem translateZ={20} as={Link} href="/support" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    {/* card -3 */}
    <CardContainer className="inter-var mx-4 lg:mx-18">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Modernization
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Update outdated code to current standards. Integrate the latest technologies and frameworks.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/services/enhanceUserExp.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4 lg:mt-20">
          <CardItem translateZ={20} as={Link} href="/support" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    {/* card -4 */}
    <CardContainer className="inter-var mx-4 lg:mx-18">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          User Experience Enhancement
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Redesign the user interface for better navigation and usability. Ensure accessibility compliance for all users.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/services/userExperience.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4 lg:mt-20">
          <CardItem translateZ={20} as={Link} href="/support" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    {/* card -5 */}
    <CardContainer className="inter-var mx-4 lg:mx-18">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Security Improvements
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Enhance security measures to protect against modern threats. Regular updates and maintenance for continued protection.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/services/securityImp.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4 lg:mt-20">
          <CardItem translateZ={20} as={Link} href="/support" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    {/* card -6 */}
    <CardContainer className="inter-var mx-4 lg:mx-18">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Search Engine Optimization
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Conduct keyword research to target the right audience and optimize on-page elements like meta tags and headers. Improve site architecture and internal linking for better crawlability.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/services/seo.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4 lg:mt-20">
          <CardItem translateZ={20} as={Link} href="/support" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </div>
</section>

    </>
  )
}

export default ServicePageRewrite;