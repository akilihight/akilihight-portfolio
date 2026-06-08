import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import HowIHelpSection from "@/components/HowIHelpSection";
import FeaturedWorkshopSection from "@/components/FeaturedWorkshopSection";
import OffersSection from "@/components/OffersSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import HowItAllComesTogetherSection from "@/components/HowItAllComesTogetherSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import EcosystemSection from "@/components/EcosystemSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";

const Index = () => (
  <>
    <Helmet>
      <title>Akili Hight | Clarity, AI Readiness & Execution</title>
      <meta name="description" content="I help people, founders, and teams get clear, align priorities, and move forward with practical next steps and AI readiness." />
      <link rel="canonical" href="https://akilihight.com/" />
      <meta property="og:title" content="Get Clear and Move Forward | Akili Hight" />
      <meta property="og:description" content="If things feel unclear or stuck, I help you break it down, get aligned, and figure out what to do next." />
      <meta property="og:url" content="https://akilihight.com/" />
    </Helmet>
    <Header />
    <main>
      <HeroSection />
      <WhatIDoSection />
      <HowIHelpSection />
      <FeaturedWorkshopSection />
      <OffersSection />
      <HowIWorkSection />
      <HowItAllComesTogetherSection />
      <FeaturedInSection />
      <EcosystemSection />
      <AboutSection />
      <CtaSection />
    </main>
  </>
);

export default Index;
