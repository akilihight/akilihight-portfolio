const videos = [
  { id: "xmGXEA-OtgQ", title: "Transforming Pain Into Power" },
  { id: "4kapkLrSklw", title: "Integrity Over Money" },
  { id: "g1uY10zEcLY", title: "Be Like Water | Embrace Change and Adaptability" },
];

const HowIThinkSection = () => (
  <section className="py-36 bg-background">
    <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">How I Think</h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
        Sometimes the fastest way to understand how I work is to hear how I think.
        <br /><br />
        Here are a few short examples.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((v) => (
          <div key={v.id} className="flex flex-col items-center gap-3">
            <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-sm border border-border/40">
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={`${v.title} — Akili Hight`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <span className="text-sm text-muted-foreground font-medium text-center">{v.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowIThinkSection;
