import { Linkedin, Github, Youtube } from "lucide-react";
import akiliAbout from "@/assets/akili-about.jpg";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akilihight", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/AkiliHight", Icon: Github },
  { label: "YouTube", href: "https://youtube.com/@lucidfuturism", Icon: Youtube },
];

const AboutSection = () => (
  <section id="about" className="scroll-mt-24 py-20">
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
              I'm Akili Hight, a technology and program leader, consultant, author, and builder with more than 20 years of experience across healthcare, enterprise technology, public-sector, nonprofit, and consulting environments.
            </p>
            <p>
              My work focuses on helping people and organizations make sense of emerging technology, structure complex initiatives, and move from uncertainty to practical action.
            </p>
            <p>
              Today, that work spans AI readiness, technology strategy, digital products, education, media, and speculative storytelling.
            </p>
          </div>
          <p className="inline-flex flex-wrap rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground">
            PMP® | Certified ScrumMaster® | Master of Information Technology
          </p>
          <div className="flex flex-wrap gap-3">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border/70 px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground/70 leading-relaxed">
            Available for select advisory, fractional leadership, speaking, and technology leadership opportunities.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
