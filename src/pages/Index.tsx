import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
import ProgramLeadershipSection from "@/components/ProgramLeadershipSection";
import HowIHelpSection from "@/components/HowIHelpSection";
import FeaturedWorkshopSection from "@/components/FeaturedWorkshopSection";
import HowItAllComesTogetherSection from "@/components/HowItAllComesTogetherSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Helmet>
      <title>Akili Hight | AI Strategy, Technology Leadership & Innovation</title>
      <meta name="description" content="Akili Hight brings AI strategy, technology leadership, program leadership, and enterprise transformation experience to complex work." />
      <link rel="canonical" href="https://akilihight.com/" />
      <meta property="og:title" content="Akili Hight | AI Strategy, Technology Leadership & Innovation" />
      <meta property="og:description" content="AI strategy, technology leadership, program leadership, and enterprise transformation experience for complex work." />
      <meta property="og:url" content="https://akilihight.com/" />
    </Helmet>
    <Header />
    <main>
      <HeroSection />
      <HowIHelpSection />
      <CredibilitySection />
      <ProgramLeadershipSection />
      <FeaturedWorkshopSection />
      <HowIWorkSection />
      <HowItAllComesTogetherSection />
      <FeaturedInSection />
      <AboutSection />
      <CtaSection />
      <NewsletterSection />
    </main>
    <Footer />
  </>

);

export default Index;
