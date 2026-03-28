import akiliAbout from "@/assets/akili-about.jpg";

const AboutSection = () => (
  <section id="about" className="py-32">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="bg-secondary/50 rounded-2xl p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
            <img
              src={akiliAbout}
              alt="Akili Hight"
              className="rounded-xl w-full max-w-sm object-cover"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">About</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I've spent over 20 years helping organizations navigate complex systems,
              transformations, and decisions.
            </p>
            <p>
              I've also spent just as much time thinking about how people actually move
              forward when things feel unclear.
            </p>
            <p>This work sits at the intersection of both.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
