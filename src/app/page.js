import AiDevelopmentService from "@/components/sections/aiDevelopmentService";
import ClientFeedback from "@/components/sections/clientFeedback";
import CommonQuestions from "@/components/sections/commonQuestions";
import GetQuote from "@/components/sections/getQuote";
import OurApproach from "@/components/sections/ourApproach";
import RelatedServices from "@/components/sections/relatedServices";
import WhatIncluded from "@/components/sections/whatIncluded";
import WhyWorkWithUs from "@/components/sections/whyWorkWithUs";
import React from "react";

export default function Home() {
  return (
    <>
      <AiDevelopmentService />
      <WhatIncluded />
      <OurApproach />
      <WhyWorkWithUs />
      <CommonQuestions />
      <RelatedServices/>
      <ClientFeedback />
      <GetQuote />
    </>
  );
}