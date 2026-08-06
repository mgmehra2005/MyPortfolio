import ClientFeedback from "@/components/sections/clientFeedback";
import CommonQuestions from "@/components/sections/commonQuestions";
import GetQuote from "@/components/sections/getQuote";
import OurApproach from "@/components/sections/ourApproach";
import RelatedServices from "@/components/sections/relatedServices";
import WhatIncluded from "@/components/sections/whatIncluded";
import WhyWorkWithUs from "@/components/sections/whyWorkWithUs";
import React from "react";
import Overview from "@/components/sections/overview";

export default function Home() {
  return (
    <>
      <Overview />
      <WhatIncluded />
      <OurApproach />
      <WhyWorkWithUs />
      {/* <RelatedServices/> */}
      {/* <ClientFeedback /> */}
      <GetQuote />
      <CommonQuestions />
    </>
  );
}
