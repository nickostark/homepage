import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        <header className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-12 tracking-tight">
            CogniStark
          </h1>

          <div className="space-y-3">
            <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed">
              Identify AI-shaped gaps
            </p>
            <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed">
              Prototype, Deploy, Maintain
            </p>
          </div>
        </header>

        <main className="space-y-16">
          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">What I'm Working On</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Learning to better help SMBs either identify AI-shaped gaps in their workflows,
              map out a solution, or find out what's not working in their current AI setups and fix it.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">What I Write About</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              How AI thinks, how we should think <em>with</em> it, not <em>through</em> it,
              and what that looks like in practice.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            <h2 className="text-3xl font-semibold text-slate-900 mb-8">Find My Work</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="#newsletter"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Mail className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Newsletter</div>
                  <div className="text-sm text-slate-600">Published at most 2x a month</div>
                </div>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Twitter className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">X (Twitter)</div>
                  <div className="text-sm text-slate-600">Daily thoughts and updates</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
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
                href="https://github.com"
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
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">About Me</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm passionate about bridging the gap between AI capabilities and practical business needs.
              My focus is on helping small and medium businesses unlock the potential of AI in ways that
              are pragmatic, sustainable, and aligned with how humans actually work. Through hands-on
              consulting and writing, I explore the intersection of human cognition and artificial intelligence,
              always seeking to understand not just what AI can do, but how we can work alongside it effectively.
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
