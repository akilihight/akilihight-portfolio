import akiliAbout from "@/assets/akili-about.jpg";

const AboutSection = () => (
  <section id="about" className="py-28">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="bg-secondary/50 rounded-2xl p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
            <img
              src={akiliAbout}
              alt="Akili Hight"
              className="rounded-xl w-full max-w-lg object-cover"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
        </div>
        <div className="space-y-5 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">About</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Akili Hight is a technology consultant, author, speaker, and educator with more than 20 years of experience helping people and organizations navigate technology, digital transformation, and emerging technology.
            </p>
            <p>
              Through AkiliHight.com, he helps everyday learners, founders, builders, and professionals build clarity and confidence in the AI era.
            </p>
            <p className="text-foreground font-medium pt-2">
              PMP® | Certified ScrumMaster® | Master of Information Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
