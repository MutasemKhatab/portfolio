import Section from "./common/Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="text-center relative">
        {/* Vim command inspiration */}
        <div className="font-mono text-green-400/60 text-sm mb-6 text-left max-w-4xl mx-auto">
          :read about.md
        </div>

        {/* Vim-style content with line numbers */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-0 font-mono text-xs text-slate-600 space-y-6 mt-1">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
          </div>

          <div className="ml-12 text-left">
            <p className="text-xl text-slate-300 leading-relaxed">
              Software Engineering graduate from Jordan University of Science
              and Technology, quick to master new technologies and concepts.
              Skilled in software design patterns and passionate about clean,
              abstracted architectures. Experienced with Agile and Scrum
              methodologies, with a strong foundation in building maintainable,
              scalable solutions through both academic and hands-on projects.
            </p>
          </div>
        </div>

        {/* Vim status line */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded px-4 py-2 font-mono text-sm text-slate-400 mt-8 max-w-4xl mx-auto">
          <span className="text-blue-400">"about.md"</span>
          <span className="ml-4">5L, 387C</span>
          <span className="ml-4 text-green-400">written</span>
        </div>
      </div>
    </Section>
  );
}
