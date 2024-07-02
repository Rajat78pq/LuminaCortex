import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import ProductHighlights from "@/components/productHighlights";
import HomeAbout from "@/components/HomeAbout";

export const metadata: Metadata = {
  title: "LuminaCortexLuminaCortex - Pioneering Advanced AI Solutions for Tomorrow's Challenges",
  description: "LuminaCortex is a leading AI service provider dedicated to delivering innovative and cutting-edge artificial intelligence solutions. Our services span machine learning, natural language processing, and predictive analytics, empowering businesses to achieve unparalleled efficiency and success. Discover the future of AI with LuminaCortex.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      {/* <Feature /> */}
      <HomeAbout />
      <FeaturesTab />
      <FunFact />
      <ProductHighlights />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
