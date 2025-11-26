import { X, Linkedin, Github, Mail, MessageSquare, Sparkles } from 'lucide-react';

function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
      style={{ fontFamily: "'Helvetica Neue'" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        <header className="text-center mb-20">
        <div className="-mx-6 mb-10 bg-slate-200 px-6 py-6 shadow-sm">
            <h1 className="text-6xl md:text-5xl font-bold text-slate-700 tracking-tight">
              CogniStark
            </h1>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-[#3c0c1d] px-8 py-10 shadow-2xl ring-1 ring-white/10">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.08),transparent_28%)]"
              aria-hidden
            />
            <div className="relative space-y-8 text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-normal tracking-[0.3em] text-slate-100 shadow-sm backdrop-blur-sm -mt-2 md:-mt-1 self-center text-center">
                <span className="h-2 w-2 rounded-full bg-[#fbde9c]" />
                Hi, I&apos;m Nicko. Welcome to CogniStark!
              </div>
              <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner backdrop-blur-sm text-left space-y-4">
                  <div className="relative pl-5">
                    <span className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-[#fbde9c]" aria-hidden />
                    <p className="text-2xl md:text-3xl font-[350] text-white leading-tight tracking-[0.03em] [word-spacing:0.02em] ">
                      Do you want to know how much inefficiency is costing you per month?
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#fbde9c]/90 p-6 text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl text-center">
                  <p className="text-sm font-normal uppercase tracking-[0.25em] text-slate-800">
                    {/* Quick diagnostic */}
                  </p>
                  <p className="mt-2 text-lg font-normal leading-snug">
                    Get an estimate in 2-3 minutes.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-normal uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-[#800020]"
                  >
                    QUICK DIAGNOSTIC
                  </a>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-800/80">
                    (coming soon...)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </header>

        <main className="space-y-16">
          <section className="rounded-2xl">
            
            <div className="flex flex-col items-center justify-center gap-1 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
              <p className="text-xl font-normal text-slate-900 mb-3">What I do At CogniStark</p>
              <p className="text-sm font-normal text-slate-600 tracking-[0.2em] uppercase">AI Opportunity assessment</p>
            </div>
            <div className="relative mt-2 overflow-hidden rounded-2xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-[#4a0012] p-6 md:p-8 text-slate-50 shadow-inner">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_82%_0%,rgba(255,255,255,0.1),transparent_30%)]"
                aria-hidden
              />
              <div className="relative space-y-6">
                <p className="text-sm md:text-base font-normal tracking-[0.18em] text-slate-100 text-center">
                  I help founders answer three questions
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f59f85]" aria-hidden />
                    <p className="text-sm md:text-base font-normal leading-snug">
                      Where&apos;s my time and money being wasted?
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#fbde9c]" aria-hidden />
                    <p className="text-sm md:text-base font-normal leading-snug">
                      Can my team do less manual repetitive work?
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#b2f5ea]" aria-hidden />
                    <p className="text-sm md:text-base font-normal leading-snug">
                      Is there a practical way to fix it, and does AI help?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base font-normal tracking-[0.18em] text-slate-100 text-center">
                  <span className="h-px flex-1 bg-white/10" />
                  then we turn this into a 2-step sprint
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 text-slate-50 shadow-inner">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_92%_24%,rgba(255,255,255,0.08),transparent_28%)]"
                    aria-hidden
                  />
                  <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:w-[42%] text-center md:items-center">
                      <span className="flex h-10 px-4 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[10px] font-normal uppercase tracking-[0.26em] text-slate-50 shadow-sm">
                        Discover
                      </span>
                      <p className="text-sm md:text-base font-normal text-slate-100/90 leading-snug text-center">
                        Identify AI-shaped gaps
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-center text-slate-100">
                      <span className="h-px w-10 bg-white/25 md:w-12" />
                      <span className="text-lg font-normal">→</span>
                      <span className="h-px w-10 bg-white/25 md:w-12" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:w-[42%] text-center md:items-center">
                      <span className="flex h-10 px-4 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[10px] font-normal uppercase tracking-[0.26em] text-slate-50 shadow-sm">
                        Build
                      </span>
                      <p className="text-sm md:text-base font-normal text-slate-100/90 leading-snug text-center">
                        Prototype → Deploy → Maintain
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl">
          
            <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
              <p className="text-xl font-normal text-slate-900 mb-6">What I Write in CogniStark</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-[#2a0a18] p-8 md:p-10 text-slate-50 shadow-inner">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(255,255,255,0.08),transparent_30%)]"
                aria-hidden
              />
              <div className="relative mx-auto max-w-2xl text-center space-y-5">
                <p className="text-2xl md:text-3xl font-normal leading-snug">
                  How we should think with AI, not through it.
                </p>
                <p className="text-base text-slate-200/90 leading-relaxed">
                  Bi-weekly breakdowns on AI, automation, and practical critical thinking.
                </p>
                <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] font-normal">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-slate-100 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#fbde9c]" />
                    Actionable
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-slate-100 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#b2f5ea]" />
                    2x a month
                  </span>
                </div>
                <div className="pt-4">
                  <a
                    href="https://nickostark.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#fbde9c] px-6 py-4 text-center text-sm font-normal uppercase tracking-[0.2em] text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-3xl border border-slate-900/15 bg-gradient-to-br from-slate-900 via-slate-800 to-[#2c1424] p-6 md:p-8 shadow-inner text-slate-50">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.06),transparent_30%)]"
              aria-hidden
            />
            <div className="relative space-y-5">
              <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.2em] text-slate-200">
                <p className="text-xl font-normal text-slate-50">Resources & Links</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-200 text-center md:text-left">Work with me</p>
                  <div className="grid gap-2 md:grid-cols-2">
                    <a href="https://calendly.com/cognistark/20min" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-slate-50 hover:border-white/30 hover:shadow-md transition">
                    <div className="text-sm font-normal">Free Intro Call</div> <span className="text-xs text-slate-200/80">(AI Opportunity assessment)</span>
                    </a>
                    <a href="https://senja.io/p/nickostark/y6CFdg" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-slate-50 hover:border-white/30 hover:shadow-md transition">
                      <MessageSquare className="w-4 h-4 text-slate-100" />
                      <div className="text-sm font-normal">Testimonials</div>
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-200 text-center md:text-left">Social - Writing - Code</p>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <a href="https://x.com/CogniStark" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-50 hover:border-white/30 hover:shadow transition">
                        <X className="w-4 h-4 text-slate-100" />
                        <span className="font-normal text-sm text-slate-50">𝕏/Twitter</span>
                      </a>
                      <a href="https://www.linkedin.com/in/nicko-stark-37a688394" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-50 hover:border-white/30 hover:shadow transition">
                        <Linkedin className="w-4 h-4 text-slate-100" />
                        <span className="font-normal text-sm text-slate-50">LinkedIn</span>
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a href="https://nickostark.substack.com" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-50 hover:border-white/30 hover:shadow transition">
                        <Mail className="w-4 h-4 text-slate-100" />
                        <span className="font-normal text-sm text-slate-50">Newsletter</span>
                      </a>
                      <a href="https://github.com/nickostark" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-50 hover:border-white/30 hover:shadow transition">
                        <Github className="w-4 h-4 text-slate-100" />
                        <span className="font-normal text-sm text-slate-50">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-200 text-center md:text-left">Apps</p>
                    <div className="grid gap-2">
                      <a href="https://huggingface.co/spaces/nickostark/xdash" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-slate-50 hover:border-white/30 hover:shadow-md transition">
                        <div className="text-sm font-normal">
                          𝕏Dash <span className="text-xs text-slate-200/80">(𝕏 Analytics Interactive Dashboard)</span>
                        </div>
                      </a>
                      <a href="#" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-slate-50 hover:border-white/30 hover:shadow-md transition">
                        StarkScan <span className="text-xs text-slate-200/80">(Coming soon...)</span>
                      </a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-200 text-center md:text-left">Playbooks</p>
                    <div className="grid gap-2">
                      <a href="https://sage-party-f46.notion.site/Welcome-d156d6d997544fee9b7b97c250be62a3" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-9 text-slate-50 hover:border-white/30 hover:shadow-md transition">
                        <div className="text-sm font-normal">
                          SANE <span className="text-xs text-slate-200/80">(AI Response Verification Prompts)</span>
                        </div>
                      </a>
                      {/* <a href="#" className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-slate-50 hover:border-white/30 hover:shadow-md transition">
                        <div className="text-sm font-normal">
                          XFactor <span className="text-xs text-slate-200/80">(Playbook)</span>
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            
            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.1em] text-slate-400">
                  <p className="text-xl font-normal text-slate-900 mb-6">A bit about me</p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              ...
            </p>
          </section> */}
        </main>

        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>© 2025 CogniStark. This page’s code is open-sourced on my GitHub.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
