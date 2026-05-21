export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Remote Team Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Paying Hidden Costs of<br />
          <span className="text-[#58a6ff]">Timezone Misaligned Meetings</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Calculate the real financial and productivity cost of scheduling meetings across timezones. Get instant cost breakdowns and AI-suggested optimal meeting windows for your global team.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Get Access — $8/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">$1,200+</div>
            <div className="text-sm text-[#8b949e]">Average monthly cost per poorly-timed recurring meeting for a 6-person team</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">3.4 hrs</div>
            <div className="text-sm text-[#8b949e]">Average productivity lost per employee per week due to off-hours meeting fatigue</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">12 zones</div>
            <div className="text-sm text-[#8b949e]">Supported timezones with overlap scoring and cost-per-hour analysis</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-md mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to optimize team meetings</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited team members & timezones",
              "Real-time meeting cost calculator",
              "Optimal meeting time suggestions",
              "Salary-weighted productivity impact",
              "Exportable cost reports (PDF/CSV)",
              "Slack & calendar integrations"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Start Saving Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the meeting cost calculator work?",
              a: "You input each team member's location, timezone, and hourly rate. The tool calculates the total salary cost of the meeting, applies a productivity penalty for off-hours attendance, and surfaces the true financial impact."
            },
            {
              q: "What makes a meeting time 'optimal'?",
              a: "We score every hour of the day based on overlap with each team member's core working hours, weighted by their salary. The highest-scoring windows minimize both cost and fatigue across all timezones."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal with no questions asked. You'll retain access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Meeting Cost Calculator. All rights reserved.
      </footer>
    </main>
  );
}
