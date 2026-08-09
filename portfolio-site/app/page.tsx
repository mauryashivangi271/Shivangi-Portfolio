
"use client";

import { useEffect, useState } from "react";

const skills = [
  "Python",
  "SQL / MySQL",
  "Power BI",
  "Microsoft Excel",
  "Pandas",
  "NumPy",
  "Data Analysis",
  "PHP",
  "HTML5",
  "CSS3",
  "Web Development",
  "Git & GitHub",
];

const strengths = [
  "Quick Learner",
  "Attention to Detail",
  "Problem Solving",
  "Time Management",
  "Teamwork",
  "Communication",
  "Adaptability",
];

const tools = ["Python", "SQL", "Power BI", "Excel", "Pandas", "MySQL"];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30">

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">

        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-lg font-bold tracking-[0.2em]"
          >
            SHIVANGI<span className="text-purple-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#education" className="transition hover:text-white">
              Education
            </a>

            <a href="#certifications" className="transition hover:text-white">
              Certifications
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>

          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-purple-400/50 hover:bg-white/5"
          >
            Let's Talk
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-24"
      >

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">

          <div>

            <div className="mb-8 flex items-center gap-3">

              <span className="h-px w-10 bg-purple-400" />

              <span className="text-sm uppercase tracking-[0.35em] text-purple-300">
                Data Analyst • BCA Student
              </span>

            </div>

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[105px]">

              SHIVANGI
              <br />

              <span className="text-gray-500">
                MAURYA.
              </span>

            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
              Turning raw data into meaningful insights, interactive
              dashboards, and smarter business decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:scale-105"
              >
                View My Work

                <span className="ml-2 transition group-hover:ml-3">
                  →
                </span>

              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 font-semibold transition duration-300 hover:border-purple-400/50 hover:bg-white/5"
              >
                Contact Me
              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-3">

              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400 backdrop-blur-sm transition hover:border-purple-400/30 hover:text-white"
                >
                  {tool}
                </span>
              ))}

            </div>

          </div>

          {/* ANALYTICS CARD */}
          <div className="relative hidden lg:block">

            <div className="absolute -inset-10 rounded-full bg-purple-600/10 blur-[100px]" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">

              <div className="mb-6 flex items-center justify-between">

                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Analytics
                </span>

                <span className="flex items-center gap-2 text-xs text-green-400">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  Available

                </span>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

                  <p className="text-xs text-gray-500">
                    Focus
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    Data
                  </p>

                  <p className="text-xl font-semibold text-purple-400">
                    Analytics
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

                  <p className="text-xs text-gray-500">
                    CGPA
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    8.4
                  </p>

                  <p className="text-sm text-gray-500">
                    BCA
                  </p>

                </div>

                <div className="col-span-2 rounded-2xl border border-white/10 bg-black/40 p-5">

                  <div className="mb-5 flex items-end justify-between">

                    <div>

                      <p className="text-xs text-gray-500">
                        Current Focus
                      </p>

                      <p className="mt-1 font-semibold">
                        Business Intelligence
                      </p>

                    </div>

                    <span className="text-sm text-purple-400">
                      01
                    </span>

                  </div>

                  <div className="flex h-28 items-end gap-2">

                    {[35, 52, 42, 68, 58, 80, 72, 95, 78, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-purple-600/20 to-purple-400/80 transition hover:from-purple-500/40 hover:to-purple-300"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400">
            01 — About Me
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">

              Data tells a story.
              <br />

              <span className="text-gray-500">
                I find it.
              </span>

            </h2>

            <div>

              <p className="text-lg leading-8 text-gray-400">
                I am Shivangi Maurya, a motivated and detail-oriented
                BCA student with a strong interest in Data Analysis
                and Web Development.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                I enjoy working with datasets, discovering patterns,
                building dashboards, and transforming raw information
                into meaningful insights.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                I am currently seeking internship opportunities where
                I can apply my technical skills, gain practical
                experience, contribute to real-world projects, and
                continue learning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
                  Quick Learner
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
                  Problem Solver
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
                  Detail Oriented
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400">
            02 — Selected Work
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">

            Projects
            <br />

            <span className="text-gray-500">
              that show what I build.
            </span>

          </h2>

          {/* E-COMMERCE SALES ANALYSIS */}

          <div className="mt-16">

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

              <div>

                <p className="text-sm text-purple-400">
                  01 / DATA ANALYTICS
                </p>

                <h3 className="mt-3 text-3xl font-bold md:text-5xl">
                  E-Commerce Sales Analysis
                </h3>

              </div>

              <span className="text-sm text-gray-500">
                Python • SQL • Power BI • Excel
              </span>

            </div>

            <div className="group relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <img
                src="/projects/dashboard.png"
                alt="E-Commerce Sales Analysis Dashboard"
                className="w-full transition duration-700 group-hover:scale-[1.02]"
              />

            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">

              <div>

                <p className="text-lg leading-8 text-gray-400">
                  An end-to-end data analytics project analyzing
                  sales trends, customer segments, product
                  performance, regional performance, and business
                  insights.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {[
                    "Python",
                    "Pandas",
                    "SQL",
                    "MySQL",
                    "Power BI",
                    "Excel",
                  ].map((tool) => (

                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400"
                    >
                      {tool}
                    </span>

                  ))}

                </div>

                {/* E-COMMERCE GITHUB LINK */}

                <a
                  href="https://github.com/mauryashivangi271/ecommerce-sales-analysis-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-purple-400/40 hover:bg-white/5"
                >
                  View Project on GitHub ↗
                </a>

              </div>

              <div className="grid grid-cols-2 gap-4">

                {[
                  ["Analysis", "Sales Trends"],
                  ["Insights", "Top Products"],
                  ["Business", "Segments"],
                  ["Visualization", "Dashboard"],
                ].map(([title, value]) => (

                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/30"
                  >

                    <p className="text-xs text-gray-500">
                      {title}
                    </p>

                    <p className="mt-3 text-lg font-semibold">
                      {value}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* WEB DEVELOPMENT PROJECTS */}

          <div className="mt-28 grid gap-8 md:grid-cols-2">

            {/* SNAPCART */}

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-purple-400/30">

              <p className="text-sm text-purple-400">
                02 / WEB DEVELOPMENT
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Snapcart
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                Developed a responsive e-commerce website with a
                clean and user-friendly interface. Focused on
                responsive layouts, navigation, and front-end
                experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">

                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  Web Development
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  Responsive Design
                </span>

              </div>

              <a
                href="https://github.com/mauryashivangi271/Snapcart"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-sm font-semibold text-white transition hover:text-purple-400"
              >
                View on GitHub →
              </a>

            </div>

            {/* PIXEL NATURE */}

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-purple-400/30">

              <p className="text-sm text-purple-400">
                03 / WEB DEVELOPMENT
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Pixel Nature
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                Designed and developed a responsive nature-themed
                website using modern HTML and CSS layouts with a
                focus on responsive design and user experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">

                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  HTML5
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  CSS3
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  Responsive
                </span>

              </div>

              <a
                href="https://github.com/mauryashivangi271/pixel-nature"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-sm font-semibold text-white transition hover:text-purple-400"
              >
                View on GitHub →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400">
            03 — Technical Skills
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">

            My Toolkit
            <br />

            <span className="text-gray-500">
              built for analysis.
            </span>

          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">

            {skills.map((skill, index) => (

              <div
                key={skill}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.06]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xl font-semibold">
                    {skill}
                  </span>

                  <span className="text-xs text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="mt-6 h-px w-full bg-white/10">

                  <div className="h-px w-1/2 bg-purple-400/70 transition-all duration-500 group-hover:w-full" />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section
        id="education"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400">
            04 — Education
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">

              <p className="text-sm text-gray-500">
                2024 — 2027
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                Bachelor of Computer Applications
              </h3>

              <p className="mt-3 text-lg text-purple-400">
                Dr. Priti Global University
              </p>

              <div className="mt-8 border-t border-white/10 pt-8">

                <p className="text-sm text-gray-500">
                  Current CGPA
                </p>

                <p className="mt-2 text-5xl font-bold">
                  8.4
                </p>

              </div>

            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">

              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Academic Background
              </p>

              <div className="mt-8 space-y-6">

                <div className="flex items-center justify-between border-b border-white/10 pb-6">

                  <div>

                    <p className="font-semibold">
                      Class XII
                    </p>

                    <p className="text-sm text-gray-500">
                      Percentage
                    </p>

                  </div>

                  <p className="text-2xl font-bold">
                    69%
                  </p>

                </div>

                <div className="flex items-center justify-between">

                  <div>

                    <p className="font-semibold">
                      Class X
                    </p>

                    <p className="text-sm text-gray-500">
                      Percentage
                    </p>

                  </div>

                  <p className="text-2xl font-bold">
                    91%
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STRENGTHS */}

      <section className="border-t border-white/10 px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400">
            05 — Strengths
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">

            What I bring
            <br />

            <span className="text-gray-500">
              to the table.
            </span>

          </h2>

          <div className="mt-12 flex flex-wrap gap-3">

            {strengths.map((strength) => (

              <span
                key={strength}
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-gray-300 transition hover:border-purple-400/30 hover:bg-purple-400/5"
              >
                {strength}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}

      <section
        id="certifications"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400">
            06 — Certifications
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">

            Learning
            <br />

            <span className="text-gray-500">
              beyond the classroom.
            </span>

          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* DATA ANALYSIS CERTIFICATE */}

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-400/30">

              <div className="flex items-start justify-between gap-5">

                <div>

                  <p className="text-sm text-purple-400">
                    Data Analysis
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Data Analysis Certificate
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Certificate of completion in Data Analysis.
                  </p>

                </div>

                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-400">
                  Verified
                </span>

              </div>

              {/* VERIFICATION LINK */}

              <a
                href="https://skillshop.credential.net/93920fc7-0ae0-4cd5-8b25-19f6a1228a32"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-purple-400/40 hover:bg-white/5"
              >
                View Certificate ↗
              </a>

            </div>

            {/* GOOGLE ANALYTICS */}

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-400/30">

              <div className="flex items-start justify-between gap-5">

                <div>

                  <p className="text-sm text-purple-400">
                    Google
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Google Analytics Certification
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Google Analytics Certification (2026)
                  </p>

                </div>

                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-400">
                  Certified
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="border-t border-white/10 px-6 py-36"
      >

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400">
            07 — Contact
          </p>

          <h2 className="mt-8 text-5xl font-black tracking-tight md:text-8xl">

            LET'S
            <br />

            <span className="text-gray-500">
              CONNECT.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Looking for internship opportunities, data projects,
            and opportunities to learn, build, and grow.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {/* EMAIL → GMAIL COMPOSE */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mauryashivangi271@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Email Me
            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/mauryashivangi271"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:border-purple-400/40 hover:bg-white/5"
            >
              GitHub ↗
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/shivangi-maurya19/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:border-purple-400/40 hover:bg-white/5"
            >
              LinkedIn ↗
            </a>

          </div>

          <div className="mt-10 text-sm text-gray-500">

            <p>
              Azamgarh, Uttar Pradesh, India
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mauryashivangi271@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block transition hover:text-purple-400"
            >
              mauryashivangi271@gmail.com
            </a>

            <p className="mt-2">
              6386443618
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Shivangi Maurya
          </p>

          <p>
            Built with Next.js • Data • Curiosity
          </p>

        </div>

      </footer>

    </main>
  );
}

