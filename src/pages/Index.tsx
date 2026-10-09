import PageSeo from "@/components/PageSeo";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
import ProgramLeadershipSection from "@/components/ProgramLeadershipSection";
import HowIHelpSection from "@/components/HowIHelpSection";
import FeaturedWorkshopSection from "@/components/FeaturedWorkshopSection";
import HowItAllComesTogetherSection from "@/components/HowItAllComesTogetherSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { VisitorNeedsSection, FeaturedProductSection, FeaturedResourcesSection, FinalPathwaysSection } from "@/components/HomePlatformSections";

const Index = () => (
  <>
    <PageSeo path="/" />
    <Header />
    <main id="main-content">
      <HeroSection />
      <VisitorNeedsSection />
      <FeaturedProductSection />
      <NewsletterSection />
      <FeaturedResourcesSection />
      <FeaturedWorkshopSection />
      <HowIHelpSection />
      <CredibilitySection />
      <FeaturedInSection />
      <ProgramLeadershipSection />
      <HowItAllComesTogetherSection />
      <AboutSection />
      <FinalPathwaysSection />
      <CtaSection />
    </main>
    <Footer />
  </>

);

export default Index;
