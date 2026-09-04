import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
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
      <meta name="description" content="Akili Hight helps leaders, professionals, and communities navigate AI, technology, digital transformation, and complex change with clarity and practical action." />
      <link rel="canonical" href="https://akilihight.com/" />
      <meta property="og:title" content="Akili Hight | AI Strategy, Technology Leadership & Innovation" />
      <meta property="og:description" content="Akili Hight helps leaders, professionals, and communities navigate AI, technology, digital transformation, and complex change with clarity and practical action." />
      <meta property="og:url" content="https://akilihight.com/" />
    </Helmet>
    <Header />
    <main>
      <HeroSection />
      <HowIHelpSection />
      <CredibilitySection />
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
