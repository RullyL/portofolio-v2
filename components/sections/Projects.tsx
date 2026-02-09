"use client";
import React from "react";
import Image from "next/image";
import { Card, Tag, Button, Space, Collapse } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import useLocale from "../../i18n/useLocale";

const skills = [
  { label: "Figma", slug: "figma" },
  { label: "React", slug: "react" },
  { label: "Next.js", slug: "nextdotjs" },
  { label: "Tailwind", slug: "tailwindcss" },
  { label: "TypeScript", slug: "typescript" },
  { label: "JavaScript", slug: "javascript" },
  { label: "HTML5", slug: "html5" },
  { label: "CSS3", slug: "css" },
  { label: "Sass", slug: "sass" },
  { label: "Git", slug: "git" },
  { label: "GitHub", slug: "github" },
  { label: "GitLab", slug: "gitlab" },
  { label: "Swagger", slug: "swagger" },
  { label: "Trello", slug: "trello" },
  { label: "Trello", slug: "trello" },
  { label: ".env", slug: ".env" },
  { label: "MySql", slug: "mysql" },
  { label: "MongoDb", slug: "mongodb" },

];

const services = [
  {
    title: "UI/UX Design",
    desc: "Wireframes, design systems, and polished interfaces.",
  },
  {
    title: "Frontend Development",
    desc: "Modern, responsive, and accessible web apps.",
  },
  {
    title: "Performance & SEO",
    desc: "Speed optimization and technical SEO improvements.",
  },
];

const projects = [
  {
    company: "Nusantech Technology",
    title: "NDA Product Platform",
    desc: "Redesigned a multi-tenant dashboard to reduce onboarding time and improve task completion.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    tech: ["Research", "UI/UX", "Design System", "Frontend"],
    meta: [
      { key: "role", value: "Lead FE" },
      { key: "timeline", value: "6 weeks" },
      { key: "impact", value: "+28% activation" },
    ],
    nda: true,
  },
  {
    company: "Beyond Ru",
    title: "Confidential E-Commerce Revamp",
    desc: "Improved checkout flow and mobile performance for a high-traffic retail brand.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    tech: ["Performance", "A/B Test", "React", "Analytics"],
    meta: [
      { key: "role", value: "UI Engineer" },
      { key: "timeline", value: "4 weeks" },
      { key: "impact", value: "+18% conversion" },
    ],
    nda: true,
  },
  {
    company: "Nusantech Technology",
    title: "Private Fintech Web App",
    desc: "Built secure dashboard views and reporting for internal financial operations.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    tech: ["Next.js", "TypeScript", "Charts", "Accessibility"],
    meta: [
      { key: "role", value: "Frontend" },
      { key: "timeline", value: "8 weeks" },
      { key: "impact", value: "-35% support tickets" },
    ],
    nda: true,
  },
];

const companyProjects = [
  {
    company: "Nusantara Technology",
    location: "Bandung, Remote",
    since: "Since 2023",
    until: "Now",
    icon: "NT",
  },
];

export default function Projects() {
  const { t } = useLocale();

  return (
    <section
      id="projects"
      className="py-10 relative overflow-hidden rounded-2xl border px-2"
    >
      <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute top-10 -right-24 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mt-6 text-center relative z-10">
        <div className="mx-auto mb-3 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        <h3 className="text-xl md:text-2xl font-semibold">
          {t("projects.skill_title")}
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {t("projects.skill_subtitle")}
        </p>
      </div>

      <div className="mt-4 overflow-hidden relative z-10">
        <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-rose-200/60 blur-2xl" />
        <div className="absolute -bottom-10 right-16 h-28 w-28 rounded-full bg-amber-200/60 blur-2xl" />
        <div className="absolute top-1/2 right-1/3 h-24 w-24 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="flex w-max gap-3 py-2 whitespace-nowrap animate-skillMarquee relative z-10 ">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={`${s.slug}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-gradient-to-r from-white/90 to-slate-50/80 dark:from-slate-900/80 dark:to-slate-800/80 px-3 py-1 text-xs text-slate-700 dark:text-slate-200 shadow-sm"
            >
              <img
                src={`https://cdn.simpleicons.org/${s.slug}?viewbox=auto`}
                alt={s.label}
                className="h-4 w-4"
                style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.25))" }}
              />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center relative z-10">
        <div className="mx-auto mb-3 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        <h3 className="text-xl md:text-2xl font-semibold">Services</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          What I can help you with.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3 relative z-10">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/80 shadow-lg p-5"
          >
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {s.title}
            </div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {s.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center relative z-10">
        <div className="mx-auto mb-3 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        <div className="text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {t("projects.title")}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {t("projects.subtitle")}
          </p>
        </div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {t("projects.experience_subtitle")}
        </p>
      </div>

      <div className="mt-6 relative z-10">
        <div className="rounded-2xl p-[1px] bg-gradient-to-r from-orange-400/50 via-sky-400/50 to-emerald-400/50 bg-[length:200%_200%] animate-gradientLoop">
          <Collapse
            accordion
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className={`rounded-full border mt-10 border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 transition-transform ${
                  isActive ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="M16 20L12 16H20L16 20Z" fill="currentColor" />
              </svg>
            )}
            className="rounded-2xl overflow-hidden bg-white/90 dark:bg-slate-900 shadow-lg dark:[&_.ant-collapse-content]:!bg-slate-900 dark:[&_.ant-collapse-header]:!bg-slate-900"
            items={companyProjects.map((c) => ({
              key: c.company,
              label: (
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm">
                      <img
                        src={"/icon/nusantech.png"}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {c.since}
                      </div>
                      <div className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {c.company}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {c.location}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="h-px w-14 bg-slate-300/70 dark:bg-slate-600/70" />
                    <span>{c.until}</span>
                  </div>
                </div>
              ),
              children: (
                <div className="grid gap-6 sm:grid-cols-2 relative">
                  <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-orange-300/20 blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-sky-300/20 blur-2xl" />
                  {projects
                    .filter(
                      (p) =>
                        p.company === c.company ||
                        p.company ===
                          c.company.replace("Nusantara", "Nusantech"),
                    )
                    .map((p) => (
                      <Card
                        key={p.title}
                        hoverable
                        className="rounded-2xl border border-slate-200/70 dark:border-slate-700/70 overflow-hidden shadow-lg bg-gradient-to-br from-white/90 to-slate-50/80 dark:from-slate-900/80 dark:to-slate-800/80"
                        bodyStyle={{ padding: 16 }}
                      >
                        <div className="h-48 w-full relative rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800">
                          <Image
                            src={p.img}
                            alt={p.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                            className="scale-105 blur-[2px]"
                            priority={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-white/70 dark:bg-slate-900/70 px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                              {t("projects.confidential")}
                            </div>
                          </div>
                          {p.nda && (
                            <div className="absolute top-3 left-3 rounded-full bg-slate-900/70 text-white text-[10px] px-3 py-1">
                              {t("projects.nda")}
                            </div>
                          )}
                        </div>
                        <h3 className="mt-4 font-semibold text-base">
                          {p.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                          {p.desc}
                        </p>
                        <div className="mt-3 grid grid-cols-1 gap-1 text-xs text-slate-500 dark:text-slate-400">
                          {p.meta.map((m) => (
                            <span key={`${m.key}-${m.value}`}>
                              {t(`projects.meta.${m.key}`)}: {m.value}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 flex items-center gap-2 flex-wrap">
                          {p.tech.map((t) => (
                            <Tag key={t} color="cyan">
                              {t}
                            </Tag>
                          ))}
                        </div>
                        <Space className="mt-4">
                          <Button
                            type="primary"
                            icon={<GithubOutlined />}
                            disabled
                          >
                            {t("projects.private_repo")}
                          </Button>
                          <Button icon={<LinkOutlined />} disabled>
                            {t("projects.private_link")}
                          </Button>
                        </Space>
                      </Card>
                    ))}
                </div>
              ),
            }))}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes skillMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-skillMarquee {
          animation: skillMarquee 18s linear infinite;
        }
        .animate-gradientLoop {
          animation: gradientLoop 6s ease-in-out infinite;
        }
        @keyframes gradientLoop {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .ant-collapse-header {
          align-items: center !important;
        }
        .ant-collapse-expand-icon {
          display: flex !important;
          align-items: center !important;
          height: 100% !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
    </section>
  );
}
