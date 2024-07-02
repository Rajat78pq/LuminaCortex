import React from "react";
import Contactus from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contactus />
    </div>
  );
};

export default SupportPage;
