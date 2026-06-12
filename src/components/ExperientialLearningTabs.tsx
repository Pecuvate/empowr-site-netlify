'use client'

import { useState } from 'react'
import Link from 'next/link'


const EELA_PROGRAMMES = [
  {
    name: 'MoveWell',
    tagline: 'Movement & Wellness',
    description: 'Dynamic ways to improve physical and mental health through movement.',
    active: true,
  },
  {
    name: 'Mind Body & Wellness',
    tagline: 'Mindfulness & Recovery',
    description: 'A space for relaxation and rejuvenation, nurturing inner peace, mental clarity, and physical flexibility.',
    active: false,
  },
  {
    name: 'Creative Expression & Arts',
    tagline: 'Creativity & Self-Expression',
    description: 'Exploring personal expression as a meaningful pathway to wellbeing.',
    active: false,
  },
  {
    name: 'Outdoor & Adventure',
    tagline: 'Nature & Exploration',
    description: 'Building fitness, teamwork, and a genuine connection with the natural world.',
    active: false,
  },
  {
    name: 'Team-Building & Leadership',
    tagline: 'Collaboration & Growth',
    description: 'Group challenges and interactive workshops that develop leadership, problem-solving, and strategic thinking through hands-on experience.',
    active: false,
  },
]

const EVIDENCE_ITEMS = [
  {
    label: 'Neuroplasticity',
    body: 'Repeated engagement in novel, hands-on activities leads to growth of new neural pathways and improved brain health.',
  },
  {
    label: 'Resilience & Self-Efficacy',
    body: 'Real-world challenges foster confidence, adaptability, and coping strategies — skills protective against anxiety and depression.',
  },
  {
    label: 'Social Connection',
    body: 'Group-based experiential learning directly counteracts isolation — a recognised driver of poor mental health.',
  },
  {
    label: 'Physical Health Synergy',
    body: 'Movement-rich programmes deliver simultaneous mental and physical benefits, reducing stress hormones and enhancing emotional regulation.',
  },
  {
    label: 'Long-Term Impact',
    body: 'Participatory, experiential learning models improve mood, lower anxiety, and reduce healthcare reliance.',
  },
]

const CONTEXT_STATS = [
  { figure: '1 in 4', label: 'adults experience a mental health problem each year' },
  { figure: '8.7M', label: 'antidepressant prescriptions in England in 2023/24' },
  { figure: '+45%', label: 'rise in NHS mental health contacts since 2019' },
  { figure: '11.4', label: 'per 100,000 — suicide rate in 2023, highest since 1999' },
]

const ECONOMIC_ITEMS = [
  {
    label: 'Greater Workforce Engagement',
    body: 'Individuals who stay mentally and physically active are more focused, adaptable, and productive — better able to maintain a healthy work-life balance.',
  },
  {
    label: 'Health System Relief',
    body: 'Improving mental resilience reduces reliance on NHS services — freeing resources for critical, acute care.',
  },
  {
    label: 'A More Resilient Population',
    body: 'A society built on continual learning and personal agency is more resilient in the face of social, economic, and technological change.',
  },
  {
    label: 'Indirect Public Benefit',
    body: 'The psychological effects of learning and achievement — increased dopamine and serotonin — naturally lead to more positive social behaviour and community contribution.',
  },
]

const TABS = [
  'What is EELA?',
  'The Science',
  'The Evidence',
  'Why It Matters',
  'Our Vision',
]

export default function ExperientialLearningTabs({ reportUrl }: { reportUrl: string }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              active === i
                ? 'bg-blue text-white'
                : 'bg-white text-mid border border-border hover:border-blue/40 hover:text-blue'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab 0 — What is EELA? */}
      {active === 0 && (
        <div className="space-y-8">
          <div className="space-y-5 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Empowr Experiential Learning Activities
            </h2>
            <div className="bg-blue-pale rounded-2xl p-6 border border-blue/10">
              <p className="text-mid leading-relaxed">
                <strong className="text-black">Experiential learning</strong> is a structured cycle in which
                individuals <em>do</em> (engage in purposeful, often novel activity), <em>reflect</em> (analyse
                the experience), <em>conceptualise</em> (draw general principles), and <em>apply</em> (transfer
                insights to new situations).
              </p>
            </div>
            <p className="text-mid text-lg leading-relaxed">
              EELA is the architecture that every Empowr programme lives within. It ensures every session is
              grounded in psychological safety, inclusion, meaningful challenge, and joy — keeping Empowr true to
              its roots: people learn and grow best through doing.
            </p>
            <p className="text-mid text-lg leading-relaxed">
              EELA is not a single programme. It is an umbrella across five sub-programmes, each with its own
              team and focus, all aligned to the same mission.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black mb-4">The Five Sub-Programmes</h3>
            <div className="flex flex-col gap-3">
              {EELA_PROGRAMMES.map((prog) => (
                <div
                  key={prog.name}
                  className={`rounded-2xl border p-5 ${
                    prog.active ? 'bg-white border-blue/30' : 'bg-white/60 border-border'
                  }`}
                >
                  <div className="flex items-center flex-wrap gap-2 mb-1.5">
                    <p className={`font-bold ${prog.active ? 'text-black' : 'text-black/70'}`}>
                      {prog.name}
                    </p>
                    <span className="text-xs text-muted">{prog.tagline}</span>
                    {prog.active ? (
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue bg-blue/10 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted bg-black/5 px-2 py-0.5 rounded-full">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${prog.active ? 'text-mid' : 'text-muted'}`}>
                    {prog.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:opacity-75 transition-opacity"
              >
                See our active programmes →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tab 1 — The Science */}
      {active === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Why Experiential Learning Works
            </h2>
            <p className="text-mid text-lg leading-relaxed">
              Science shows that the brain, like the body, thrives on stimulation. Just as physical exercise
              strengthens muscles, engaging in challenging experiences triggers{' '}
              <strong className="text-black">neuroplasticity</strong> — forming new neural connections, boosting
              cognitive flexibility, and promoting emotional resilience. Without such mental exercise, neural
              pathways weaken, reducing our ability to adapt to and navigate life&apos;s complexities.
            </p>
            <p className="text-mid text-lg leading-relaxed">
              Through carefully designed experiential learning programmes, Empowr introduces individuals to fresh
              challenges that stimulate brain activity at a cellular level. This activation leads to the creation
              of new neural pathways, improving brain function, reducing stress hormones, and enhancing the
              body&apos;s natural ability to stay adaptable.
            </p>
            <p className="text-mid text-lg leading-relaxed">
              Without regular and meaningful stimulation, our neural connections weaken, and our ability to grow,
              cope, and thrive diminishes. That&apos;s why we create hands-on experiences that keep people
              thinking, moving, and connecting — nurturing sharper minds, stronger bodies, and deeper human
              connection.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-pale rounded-2xl p-6 border border-blue/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-2">Neuroplasticity</p>
              <p className="text-mid text-sm leading-relaxed">
                New experiences form new neural connections — improving how the brain processes stress, emotion,
                and learning.
              </p>
            </div>
            <div className="bg-blue-pale rounded-2xl p-6 border border-blue/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-2">Stress Response</p>
              <p className="text-mid text-sm leading-relaxed">
                Physical movement and mental challenge combined reduce cortisol and enhance the body&apos;s
                emotional regulation.
              </p>
            </div>
            <div className="bg-blue-pale rounded-2xl p-6 border border-blue/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-2">
                Cognitive Flexibility
              </p>
              <p className="text-mid text-sm leading-relaxed">
                Regular novel challenges build adaptability — the capacity to navigate complexity and bounce back
                from setbacks.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2 — The Evidence */}
      {active === 2 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-3">What the Research Shows</h2>
          <p className="text-mid text-lg mb-8 max-w-2xl">
            Five areas of research consistently support the experiential learning approach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EVIDENCE_ITEMS.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue">{item.label}</p>
                <p className="text-mid text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href={reportUrl}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:opacity-75 transition-opacity"
            >
              Read the full report →
            </Link>
          </div>
        </div>
      )}

      {/* Tab 3 — Why It Matters */}
      {active === 3 && (
        <div className="space-y-8 max-w-3xl">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              The Context That Drives Our Work
            </h2>
            <p className="text-mid text-lg leading-relaxed">
              EELA was built on a belief — but the data makes the urgency of that belief impossible to ignore.
              The UK is facing a mental health challenge that medication and traditional services alone are not
              equipped to solve.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {CONTEXT_STATS.map((stat) => (
              <div key={stat.figure} className="bg-white rounded-2xl border border-border p-6 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-blue mb-2">{stat.figure}</p>
                <p className="text-muted text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-muted text-xs">Sources: NHS Digital, ONS.</p>
          <p className="text-mid text-lg leading-relaxed">
            Antidepressant prescribing has more than doubled since 2015, NHS wait times continue to grow, and
            probable mental disorder rates among young people nearly doubled between 2017 and 2023. Experiential
            learning is one of the most evidence-backed complementary strategies available.
          </p>
          <div>
            <Link
              href={reportUrl}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:opacity-75 transition-opacity"
            >
              Read the full report →
            </Link>
          </div>
        </div>
      )}

      {/* Tab 4 — Our Vision */}
      {active === 4 && (
        <div className="space-y-8">
          <div className="space-y-5 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              A Smarter Investment in Society
            </h2>
            <p className="text-mid text-lg leading-relaxed">
              Humans — regardless of age — are wired to seek progress and thrive on accomplishment. Whether
              mastering a new skill, moving with more confidence, or simply showing up and trying again, these
              experiences have a measurable effect on brain health and emotional stability. As more people feel
              capable and fulfilled, their contribution to society naturally increases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ECONOMIC_ITEMS.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-border p-6">
                <p className="font-bold text-black mb-2">{item.label}</p>
                <p className="text-mid text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue rounded-2xl p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-light mb-2">
              Our Long-Term Ambition
            </p>
            <p className="font-bold text-lg mb-2">Recognised as a Health Activities Provider</p>
            <p className="text-blue-light leading-relaxed text-sm">
              Empowr&apos;s ambition is to be recognised as a legitimate health intervention alongside clinical
              care — with experiential learning prescribed as part of a broader wellbeing strategy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-3">Leading the Movement</h3>
            <p className="text-mid text-lg leading-relaxed mb-3">
              The statistics are clear: the UK is facing a mental health challenge that cannot be solved by
              medication and therapy alone. Experiential learning is a powerful yet under-utilised tool —
              scientifically proven to build resilience, foster connection, and promote lifelong wellbeing.
            </p>
            <p className="text-mid text-lg leading-relaxed">
              Empowr is committed to leading this movement — because we believe in the potential for every
              individual to thrive through experience.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
