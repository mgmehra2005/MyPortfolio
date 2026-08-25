import ClientFeedback from "@/components/sections/clientFeedback";
import CommonQuestions from "@/components/sections/commonQuestions";
import GetQuote from "@/components/sections/getQuote";
import MyWrittings from "@/components/sections/myWrittings";
import RelatedServices from "@/components/sections/relatedServices";
import ExperienceSection from "@/components/sections/experience";
import WhyWorkWithUs from "@/components/sections/whyWorkWithUs";
import React from "react";
import Overview from "@/components/sections/overview";

export default function Home() {
  return (
    <>
      <Overview />
      <ExperienceSection />
      <MyWrittings />
      <WhyWorkWithUs />
      {/* <RelatedServices/> */}
      {/* <ClientFeedback /> */}
      {/* <GetQuote /> */}
      {/* <CommonQuestions /> */}
    </>
  );
}
