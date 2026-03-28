import akiliAbout from "@/assets/akili-about.jpg";

const AboutSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src={akiliAbout}
            alt="Akili Hight"
            className="rounded-lg w-full max-w-sm object-cover shadow-sm"
            loading="lazy"
            width={800}
            height={1024}
          />
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
