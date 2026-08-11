import akiliAbout from "@/assets/akili-about.jpg";

const AboutSection = () => (
  <section id="about" className="scroll-mt-24 py-24">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="bg-secondary/50 rounded-2xl p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
            <img
              src={akiliAbout}
              alt="Akili Hight, technology and program leader, consultant, and author"
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
              Akili Hight is a technology and program leader, consultant, author, and builder with more than 20 years of experience across healthcare, enterprise technology, public-sector, nonprofit, and consulting environments.
            </p>
            <p>
              His work focuses on helping people and organizations make sense of emerging technology, structure complex initiatives, and move from uncertainty to practical action.
            </p>
            <p>
              Today, his work spans AI readiness, technology strategy, digital products, education, media, and speculative storytelling.
            </p>
            <p className="inline-flex flex-wrap rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground mt-2">
              PMP® | Certified ScrumMaster® | Master of Information Technology
            </p>
            <div className="flex flex-wrap gap-5 pt-1 text-sm">
              <a href="https://www.linkedin.com/in/akilihight" target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground">LinkedIn</a>
              <a href="https://github.com/AkiliHight" target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground">GitHub</a>
              <a href="https://youtube.com/@lucidfuturism" target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
