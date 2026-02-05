const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary/50 mx-auto mb-12 rounded-full" />

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl" />
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Hey there! I'm <span className="text-foreground font-semibold">Noah Canter</span>, 
              an aspiring developer based in the Dallas-Fort Worth area. I'm passionate about 
              building things that live on the internet and constantly exploring new technologies 
              to expand my skillset.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Currently, I'm honing my programming skills through{" "}
              <span className="text-primary font-medium">Codecademy</span>, where I'm diving 
              deep into web development and Python. I believe in learning by doing, which is 
              why I'm always working on personal projects to apply what I learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
