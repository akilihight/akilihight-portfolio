import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcosystemSection from "@/components/EcosystemSection";

const Ecosystem = () => (
  <>
    <Helmet>
      <title>Ecosystem | Akili Hight</title>
      <meta name="description" content="Explore the ventures, products, media, and creative projects Akili Hight has built around technology, decision-making, learning, and imagination." />
      <link rel="canonical" href="https://akilihight.com/ecosystem" />
      <meta property="og:title" content="Ecosystem | Akili Hight" />
      <meta property="og:description" content="Ventures, products, media, and creative projects built around technology, decision-making, learning, and imagination." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://akilihight.com/ecosystem" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <Header />
    <main>
      <EcosystemSection />
    </main>
    <Footer />
  </>
);

export default Ecosystem;
