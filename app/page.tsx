'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarCheck,
  Check,
  ChevronRight,
  GraduationCap,
  Layers3,
  MessageCircle,
  PenLine,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
  Zap
} from 'lucide-react';

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || 'https://calendly.com/ascendprep/free-roadmap';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: "easeOut" }
};

function Button({
  children,
  href,
  variant = 'primary'
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
        variant === 'primary'
          ? 'bg-copper text-cream shadow-glow hover:bg-copper2'
          : 'border border-line bg-cream/5 text-cream hover:border-copper/60 hover:bg-cream/10'
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-copper/25 bg-copper/10 px-4 py-2 text-sm text-[#dec3a4]">
      <span className="h-1.5 w-1.5 rounded-full bg-copper" />
      {children}
    </span>
  );
}

function Nav() {
  const links = [
    ['Services', '#services'],
    ['Method', '#method'],
    ['App', '#app'],
    ['Founder', '#founder'],
    ['FAQ', '#faq']
  ];
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-cream/5 bg-ink/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <Image src="/images/ascend-icon.png" alt="Ascend logo" width={40} height={40} className="rounded-xl" />
          <div>
            <div className="serif text-xl font-bold leading-none">Ascend</div>
            <div className="small-caps mt-1 text-[9px] text-copper">Prep</div>
          </div>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-cream">
              {label}
            </Link>
          ))}
        </div>
        <Link
          href={bookingUrl}
          className="hidden rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-[#ead7bd] sm:inline-flex"
        >
          Free Roadmap
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-32 lg:px-8 lg:pb-36 lg:pt-44">
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-radial-copper" />
      <div className="absolute left-1/2 top-24 -z-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-copper/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge>Personalized SAT Prep & Admissions Strategy</Badge>
          <h1 className="serif mt-8 max-w-4xl text-6xl font-bold leading-[0.9] tracking-[-0.06em] text-cream sm:text-7xl lg:text-8xl">
            Help your student <span className="gradient-text">ascend</span> toward their highest potential.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#cbb99f] sm:text-xl">
            Premium SAT performance coaching and college admissions guidance for ambitious students—built around strategy,
            accountability, and the Ascend learning platform.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={bookingUrl}>Get a Free Personalized Roadmap</Button>
            <Button href="#services" variant="secondary">Explore Services</Button>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Badge>1560 SAT</Badge>
            <Badge>800 Math · 760 English</Badge>
            <Badge>MIT · Princeton · Yale</Badge>
            <Badge>100+ students mentored</Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -left-6 top-10 hidden rounded-3xl border border-line bg-card/90 p-5 shadow-card backdrop-blur-xl md:block">
            <div className="text-3xl font-bold">98</div>
            <div className="text-sm text-muted">questions per test</div>
          </div>
          <div className="absolute -right-2 bottom-24 z-10 hidden rounded-3xl border border-copper/25 bg-card/90 p-5 shadow-card backdrop-blur-xl md:block">
            <div className="flex items-center gap-3 text-lg font-bold"><Trophy className="h-5 w-5 text-copper" /> Top-score strategy</div>
            <div className="mt-1 text-sm text-muted">coaching + analytics</div>
          </div>
          <div className="phone-frame mx-auto max-w-[320px] rotate-[-3deg]">
            <div className="phone-screen">
              <Image
                src="/images/app-dashboard.png"
                alt="Ascend app dashboard"
                width={620}
                height={1342}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ['MIT Admit', 'Princeton Admit', 'Yale Admit', '1560 SAT', 'Ascend App Included'];
  return (
    <section className="px-5 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-4xl border border-line bg-card/55 px-6 py-6 backdrop-blur-xl">
        <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div key={item} className="rounded-3xl border border-cream/6 bg-cream/[0.03] px-4 py-4 text-sm font-semibold text-cream">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAscend() {
  const cards = [
    {
      icon: Target,
      title: 'Personalized by student, not template',
      text: 'Every plan begins with the student’s current score, timeline, goals, strengths, weaknesses, and application strategy.'
    },
    {
      icon: BarChart3,
      title: 'Progress tracked between sessions',
      text: 'Tutoring should not disappear after Zoom ends. Students use Ascend for practice, homework, accountability, and analytics.'
    },
    {
      icon: ShieldCheck,
      title: 'Recent elite admissions perspective',
      text: 'Guidance from someone who recently navigated the process and earned admission to MIT, Princeton, and Yale.'
    }
  ];
  return (
    <section className="px-5 py-24 lg:px-8" id="why">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="small-caps text-sm font-semibold text-copper">Why Ascend Prep</p>
          <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">A premium coaching experience for families who want structure.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Ascend Prep combines one-on-one mentorship, high-performance SAT strategy, and modern learning software into one system.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="glass card-hover rounded-4xl p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copper/15 text-copper">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-7 text-2xl font-bold tracking-tight">{card.title}</h3>
                <p className="mt-4 leading-7 text-muted">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: BookOpenCheck,
      title: 'SAT Performance Coaching',
      price: '$99/hr founding rate',
      text: 'Targeted one-on-one SAT coaching with weekly assignments, test review, strategy, and Ascend app access.',
      bullets: ['Diagnostic review', 'Weekly study plan', 'Practice test analysis', 'Ascend app homework']
    },
    {
      icon: GraduationCap,
      title: 'Admissions Strategy',
      price: '$120/hr founding rate',
      text: 'Personalized college planning for students aiming to become stronger applicants for selective schools.',
      bullets: ['College list strategy', 'Activities positioning', 'Application timeline', 'Interview preparation']
    },
    {
      icon: PenLine,
      title: 'Essay Coaching',
      price: 'Included in consulting',
      text: 'Thoughtful essay brainstorming, structure, revision, and polishing while preserving the student’s authentic voice.',
      bullets: ['Common App brainstorming', 'Supplemental strategy', 'Revision feedback', 'Narrative development']
    }
  ];
  return (
    <section id="services" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="small-caps text-sm font-semibold text-copper">Services</p>
            <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">Coaching that goes beyond the hour.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted">
            Every family starts with a free roadmap call. From there, we build a plan around the student’s test date, college goals, and schedule.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="glass card-hover flex min-h-[520px] flex-col rounded-4xl p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copper/15 text-copper">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-copper/20 bg-copper/10 px-3 py-1 text-xs font-semibold text-copper2">{service.price}</span>
                </div>
                <h3 className="mt-7 text-3xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted">{service.text}</p>
                <div className="mt-7 space-y-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 text-sm text-[#d7c6ac]">
                      <Check className="h-4 w-4 text-moss" />
                      {bullet}
                    </div>
                  ))}
                </div>
                <Link href={bookingUrl} className="group mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-copper2">
                  Book free roadmap <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  return (
    <section id="app" className="relative overflow-hidden px-5 py-24 lg:px-8">
      <div className="absolute left-0 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-copper/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div {...fadeUp}>
          <p className="small-caps text-sm font-semibold text-copper">Powered by Ascend</p>
          <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">Students get the app, not just the tutor.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Ascend Prep is built around the Ascend SAT platform—practice questions, full-length tests, progress tracking, missions, and analytics that keep students moving between sessions.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['1,400+ SAT questions', '10 full-length tests', 'Homework tracking', 'Weak spot analytics'].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-card/70 px-4 py-3 text-sm font-semibold text-[#dbc8aa]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-9">
            <Button href={bookingUrl}>Start with a Free Roadmap</Button>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="grid gap-5 sm:grid-cols-3">
          <div className="phone-frame sm:translate-y-16">
            <div className="phone-screen">
              <Image src="/images/app-tests.png" alt="Ascend practice tests" width={620} height={1342} className="h-auto w-full" />
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-screen">
              <Image src="/images/app-dashboard.png" alt="Ascend dashboard" width={620} height={1342} className="h-auto w-full" />
            </div>
          </div>
          <div className="phone-frame sm:translate-y-24">
            <div className="phone-screen">
              <Image src="/images/app-practice.png" alt="Ascend practice question" width={620} height={1342} className="h-auto w-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ['01', 'Free Roadmap', 'We discuss goals, timeline, score history, school list, and what support would actually help.'],
    ['02', 'Personalized Plan', 'Students receive a structured plan with weekly priorities, assignments, and milestones.'],
    ['03', 'Weekly Coaching', 'Sessions focus on strategy, accountability, practice review, and application guidance.'],
    ['04', 'Track & Refine', 'We measure progress, adjust the plan, and keep students moving with confidence.']
  ];
  return (
    <section id="method" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="small-caps text-sm font-semibold text-copper">The Ascend Method</p>
          <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">A clear process parents can trust.</h2>
        </motion.div>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {steps.map(([num, title, text], index) => (
            <motion.div key={title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="glass rounded-4xl p-6">
              <div className="text-sm font-bold text-copper">{num}</div>
              <h3 className="mt-8 text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-muted">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const proof = [
    ['/images/mit-proof.jpg', 'MIT'],
    ['/images/princeton-proof.jpg', 'Princeton'],
    ['/images/yale-proof.jpg', 'Yale']
  ];
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="small-caps text-sm font-semibold text-copper">Credibility</p>
          <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">Guidance from someone who just did it.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Hasin earned admission to MIT, Princeton, and Yale while building projects, leading organizations, conducting research, and preparing for the SAT.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {proof.map(([src, school], index) => (
            <motion.div key={school} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="group relative overflow-hidden rounded-4xl border border-line bg-card shadow-card">
              <Image src={src} alt={`${school} admission proof card`} width={1400} height={900} className="h-72 w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-3xl font-black">{school}</div>
                <div className="mt-1 text-sm text-muted">Acceptance proof · privacy-safe</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-4 rounded-5xl bg-copper/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-5xl border border-line bg-card shadow-card">
            <Image src="/images/hasin-headshot.jpg" alt="Hasin Shaykat, founder of Ascend Prep" width={960} height={1200} className="h-auto w-full object-cover" />
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <p className="small-caps text-sm font-semibold text-copper">Meet the Founder</p>
          <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">Hasin Shaykat</h2>
          <p className="mt-3 text-xl font-semibold text-[#ead7bd]">Founder of Ascend Prep · Admitted to MIT, Princeton, and Yale</p>
          <div className="mt-7 space-y-5 text-lg leading-8 text-muted">
            <p>
              I founded Ascend Prep to help ambitious students approach standardized testing and college admissions with strategy, structure, and confidence.
            </p>
            <p>
              Having recently navigated one of the most competitive admissions cycles, I understand what today’s applicants are facing: rigorous academics, rising expectations, complex essays, and the pressure to stand out authentically.
            </p>
            <p>
              My goal is not to hand students a generic formula. It is to help each student build a personalized plan that fits their goals, strengths, and story.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['1560 SAT', '800 SAT Math', '760 English', '100+ students mentored'].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-card/70 px-4 py-3 text-sm font-bold text-cream">{item}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FoundingFamilies() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <motion.div {...fadeUp} className="mx-auto max-w-7xl overflow-hidden rounded-5xl border border-copper/25 bg-gradient-to-br from-copper/20 via-card to-ink p-8 shadow-card md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="small-caps text-sm font-semibold text-copper2">Founding Families</p>
            <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">Now accepting the first cohort of Ascend Prep students.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#dbc8aa]">
              Early families receive direct founder-led coaching, complimentary app access, and a more personalized experience while helping shape the Ascend platform.
            </p>
          </div>
          <div className="glass rounded-4xl p-7">
            <div className="flex items-start gap-4">
              <CalendarCheck className="mt-1 h-6 w-6 text-copper2" />
              <div>
                <h3 className="text-2xl font-bold">Free 20-minute roadmap call</h3>
                <p className="mt-3 leading-7 text-muted">We’ll identify the student’s current position, goals, and next steps before recommending any paid service.</p>
                <div className="mt-6">
                  <Button href={bookingUrl}>Book the Call</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FAQ() {
  const items = [
    ['Do you guarantee admission to specific colleges?', 'No. No ethical admissions coach can guarantee outcomes. Ascend Prep helps students build stronger applications, improve preparation, and present themselves thoughtfully.'],
    ['How are sessions conducted?', 'Sessions are currently offered online. Students receive coaching, assignments, and follow-up through the Ascend system.'],
    ['Who is Ascend Prep best for?', 'Rising sophomores, juniors, and seniors who want structured SAT preparation, admissions strategy, essay guidance, or extracurricular planning.'],
    ['Do tutoring students get the app for free?', 'Yes. Students enrolled in SAT coaching receive complimentary access to Ascend as part of the coaching experience.'],
    ['What happens on the free roadmap call?', 'We discuss goals, timeline, strengths, obstacles, test history, and what plan would be most useful. It is designed to be helpful even before any paid work begins.']
  ];
  return (
    <section id="faq" className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div {...fadeUp}>
          <p className="small-caps text-sm font-semibold text-copper">FAQ</p>
          <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">Questions parents usually ask.</h2>
        </motion.div>
        <div className="space-y-4">
          {items.map(([q, a], index) => (
            <motion.details key={q} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }} className="group rounded-3xl border border-line bg-card/70 p-6 open:border-copper/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                {q}
                <span className="rounded-full border border-line p-1 transition group-open:rotate-45"><Zap className="h-4 w-4 text-copper" /></span>
              </summary>
              <p className="mt-4 leading-7 text-muted">{a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesPreview() {
  const posts = [
    ['SAT Math', 'The 30-second strategy for avoiding algebra traps'],
    ['Admissions', 'How to build extracurriculars that tell a clear story'],
    ['Essays', 'The college essay mistake strong students keep making']
  ];
  return (
    <section id="resources" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="small-caps text-sm font-semibold text-copper">Resources</p>
            <h2 className="serif mt-4 text-5xl font-bold leading-tight sm:text-6xl">Content that brings families in.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted">Use this section for your first SAT tips, admissions breakdowns, and parent-facing guides.</p>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map(([tag, title], index) => (
            <motion.div key={title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="glass card-hover rounded-4xl p-6">
              <div className="text-sm font-bold text-copper">{tag}</div>
              <h3 className="mt-12 text-2xl font-bold leading-tight">{title}</h3>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-copper2">Coming soon <ArrowRight className="h-4 w-4" /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="px-5 py-24 lg:px-8">
      <motion.div {...fadeUp} className="mx-auto max-w-7xl rounded-5xl border border-copper/25 bg-radial-copper p-8 text-center shadow-card md:p-16">
        <Sparkles className="mx-auto h-10 w-10 text-copper2" />
        <h2 className="serif mx-auto mt-6 max-w-4xl text-5xl font-bold leading-tight sm:text-7xl">Ready to build your student’s roadmap?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          Book a free consultation to discuss SAT goals, college strategy, and the clearest next steps for your student.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={bookingUrl}>Get a Free Personalized Roadmap</Button>
          <Button href="mailto:hello@ascendprep.co" variant="secondary">Email Ascend Prep</Button>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-muted md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image src="/images/ascend-icon.png" alt="Ascend logo" width={34} height={34} className="rounded-lg" />
          <span>© {new Date().getFullYear()} Ascend Prep. All rights reserved.</span>
        </div>
        <div className="max-w-2xl leading-6 md:text-right">
          Ascend Prep provides educational coaching and does not guarantee test score increases or college admissions outcomes.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="noise">
      <Nav />
      <Hero />
      <TrustBar />
      <WhyAscend />
      <Services />
      <AppShowcase />
      <Method />
      <Proof />
      <Founder />
      <FoundingFamilies />
      <ResourcesPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
