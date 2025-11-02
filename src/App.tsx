import { X, Linkedin, Github, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        <header className="text-center mb-20">
          <div className="-mx-6 mb-10 bg-slate-200 px-6 py-6 shadow-sm">
            <h1 className="text-6xl md:text-5xl font-bold text-slate-700 tracking-tight">
              CogniStark
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-600">
              Nicko Stark
            </p>
          </div>
          <p className="mb-6 text-xl md:text-2xl text-slate-600 uppercase tracking-[0.1em]">
            Do you want to know where AI can scale your business?
          </p>
          <div className="mx-auto mb-12 grid max-w-3xl gap-6 text-left md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Free AI Audit consultation
              </p>
              <a
                href="https://forms.gle/qzpTdj6epTdE8BrP6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-slate-700"
              >
                Sign me up
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Subscribe to my newsletter
              </p>
              <a
                href="https://nickostark.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#800020] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-[#660019]"
              >
                Subscribe
              </a>
            </div>
          </div>

        </header>

        {/* <div className="text-center mb-20">
          <p className="text-l md:text-xl font-light text-slate-700 leading-relaxed">
            Hi! I'm Nicko Stark, and this is CogniStark - an AI consultancy for small/medium businesses.
          </p>
        </div> */}

        <main className="space-y-16">
          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            
            <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
              <p className="text-xl font-semibold text-slate-900 mb-6">What I do At CogniStark</p>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Many businesses know they need AI, they just don't know where. That's why I've made CogniStark's mission to help SMBs either find that out,
              map out a solution and deploy it, or, find out what's not working in their current AI setups and fix it. In short:
            </p>

            <div className="space-y-1 text-slate-500">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-5 py-3 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#800020]">
                  Discover
                </span>
                <span className="text-m md:text-l font-light">
                  Identify AI-shaped gaps
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
                <span className="h-px w-16 bg-slate-200" />
                ↓↓↓↓↓↓
                <span className="h-px w-16 bg-slate-200" />
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-5 py-3 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#800020]">
                  Build
                </span>
                <span className="text-m md:text-l font-light">
                  Prototype → Deploy → Maintain
                </span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
          
            <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
              <p className="text-xl font-semibold text-slate-900 mb-6">What I Write in CogniStark</p>
            </div>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              How AI thinks, how we should think <em>with</em> it, not <em>through</em> it,
              and what that looks like in practice.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            
            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.2em] text-slate-400">
                <p className="text-xl font-semibold text-slate-900 mb-6">Connect with me/Follow my work</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="https://nickostark.substack.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group">
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Mail className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Newsletter (Substack)</div>
                  <div className="text-sm text-slate-600">Publish at most 2x a month</div>
                </div>
              </a>

              <a
                href="https://x.com/CogniStark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <X className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">X (Twitter)</div>
                  <div className="text-sm text-slate-600">Daily thoughts and updates</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nicko-stark-37a688394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Linkedin className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">LinkedIn</div>
                  <div className="text-sm text-slate-600">Professional network</div>
                </div>
              </a>

              <a
                href="https://github.com/nickostark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Github className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">GitHub</div>
                  <div className="text-sm text-slate-600">Code and projects</div>
                </div>
              </a>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            
            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.1em] text-slate-400">
                  <p className="text-xl font-semibold text-slate-900 mb-6">A bit about me</p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              ...
            </p>
          </section>
        </main>

        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>© 2025 CogniStark. Building bridges between AI and business.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
