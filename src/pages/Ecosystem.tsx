import PageSeo from "@/components/PageSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcosystemSection from "@/components/EcosystemSection";

const Ecosystem = () => (
  <>
    <PageSeo path="/ecosystem" />
    <Header />
    <main id="main-content">
      <EcosystemSection />
    </main>
    <Footer />
  </>
);

export default Ecosystem;
