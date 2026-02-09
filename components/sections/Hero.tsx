"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import useLocale from "../../i18n/useLocale";

export default function Hero() {
  const { t } = useLocale();
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <section id="about" className="fixed inset-0 overflow-hidden">
      <div className="mx-auto container px-4 h-full flex items-center">
        <div className="relative w-full rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-10 overflow-hidden">
          <div
            className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-orange-300/90 dark:bg-orange-400/30 blur-3xl"
            style={{ animation: "blob1 10s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-sky-300/90 dark:bg-sky-400/30 blur-3xl"
            style={{ animation: "blob2 12s ease-in-out infinite" }}
          />
          <div
            className="absolute top-10 -left-16 h-48 w-48 rounded-full bg-emerald-300/80 dark:bg-emerald-400/25 blur-3xl"
            style={{ animation: "blob3 11s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-6 -right-12 h-52 w-52 rounded-full bg-indigo-300/80 dark:bg-indigo-400/25 blur-3xl"
            style={{ animation: "blob4 13s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 right-1/3 h-40 w-40 rounded-full bg-rose-300/70 dark:bg-rose-400/20 blur-3xl"
            style={{ animation: "blob5 14s ease-in-out infinite" }}
          />

          <div className="absolute top-6 right-6 hidden md:block">
            <Button
              type="primary"
              danger
              href="/contact"
              size="large"
              className="rounded-full px-6"
            >
              {t("hero.cta_top")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Portrait split (left) */}
            <div className="md:col-span-4 relative h-[360px] mx-auto md:mx-0">
              <div className="absolute -top-6 -left-6 grid grid-cols-6 gap-2 opacity-60">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700"
                  />
                ))}
              </div>
              <div className="absolute -bottom-8 right-0 grid grid-cols-6 gap-2 opacity-60">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700"
                  />
                ))}
              </div>

              <div className="absolute rounded-sm -left-6 top-1/2 -translate-y-1/2 h-8 w-8 rotate-12 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 animate-spinSlow" />
              <div className="absolute rounded-md -right-4 top-16 h-8 w-8 -rotate-12 bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 animate-spinSlowReverse" />

              {/* Single image, split into two slices via mask */}
              <div className="absolute left-6 top-0 h-[360px] w-[260px]">
                <div className="split-mask h-full w-full">
                  <img
                    src="/img/portrait.PNG"
                    alt="Portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Short bio under collage */}
              <div className="absolute left-0 -bottom-12 w-full px-2 text-center">
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Button
                    type="default"
                    size="small"
                    className="rounded-full px-4 bg-white/70 dark:bg-slate-400 border-none"
                    onClick={() => setBioOpen(true)}
                  >
                    {t("hero.bio_cta")}
                  </Button>
                  <Button
                    type="default"
                    size="small"
                    className="rounded-full px-4 bg-white/70 dark:bg-slate-400 border-none"
                    href="/cv.pdf"
                    target="_blank"
                  >
                    {t("hero.cv_cta")}
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 relative min-h-[420px] md:pl-6">
              <div className="absolute inset-0 pointer-events-none z-0">
                <span className="absolute top-2 left-2 px-2 py-1 rounded-md bg-white/70 rotate-[-6deg]">
                  <img
                    src="https://cdn.simpleicons.org/figma?viewbox=auto"
                    alt="Figma"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute top-20 left-4 px-2 py-1 rounded-md bg-white/70 rotate-[3deg]">
                  <img
                    src="https://cdn.simpleicons.org/adobexd?viewbox=auto"
                    alt="Adobe XD"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute top-24 right-6 px-2 py-1 rounded-md bg-white/70 rotate-[-4deg]">
                  <img
                    src="https://cdn.simpleicons.org/sass?viewbox=auto"
                    alt="Sass"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute top-40 left-10 px-2 py-1 rounded-md bg-white/70 rotate-[4deg]">
                  <img
                    src="https://cdn.simpleicons.org/vite?viewbox=auto"
                    alt="Vite"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute top-44 right-12 px-2 py-1 rounded-md bg-white/70 rotate-[-5deg]">
                  <img
                    src="https://cdn.simpleicons.org/antdesign?viewbox=auto"
                    alt="Ant Design"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute top-56 left-6 px-2 py-1 rounded-md bg-white/70 rotate-[2deg]">
                  <img
                    src="https://cdn.simpleicons.org/redux?viewbox=auto"
                    alt="Redux"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute top-60 right-6 px-2 py-1 rounded-md bg-white/70 rotate-[-3deg]">
                  <img
                    src="https://cdn.simpleicons.org/framer?viewbox=auto"
                    alt="Framer"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute bottom-32 left-3 px-2 py-1 rounded-md bg-white/70 rotate-[4deg]">
                  <img
                    src="https://cdn.simpleicons.org/react?viewbox=auto"
                    alt="React"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute bottom-28 right-4 px-2 py-1 rounded-md bg-white/70 rotate-[-4deg]">
                  <img
                    src="https://cdn.simpleicons.org/nextdotjs?viewbox=auto"
                    alt="Next.js"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute bottom-20 left-14 px-2 py-1 rounded-md bg-white/70 rotate-[3deg]">
                  <img
                    src="https://cdn.simpleicons.org/javascript?viewbox=auto"
                    alt="JavaScript"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute bottom-20 right-16 px-2 py-1 rounded-md bg-white/70 rotate-[-2deg]">
                  <img
                    src="https://cdn.simpleicons.org/html5?viewbox=auto"
                    alt="HTML5"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute bottom-10 left-28 px-2 py-1 rounded-md bg-white/70 rotate-[5deg]">
                  <img
                    src="https://cdn.simpleicons.org/tailwindcss?viewbox=auto"
                    alt="Tailwind CSS"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute bottom-10 right-8 px-2 py-1 rounded-md bg-white/70 rotate-[-5deg]">
                  <img
                    src="https://cdn.simpleicons.org/git?viewbox=auto"
                    alt="Git"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute bottom-40 left-24 px-2 py-1 rounded-md bg-white/70 rotate-[6deg]">
                  <img
                    src="https://cdn.simpleicons.org/nodejs?viewbox=auto"
                    alt="Node.js"
                    className="h-4 w-4"
                  />
                </span>
                <span className="absolute bottom-40 right-28 px-2 py-1 rounded-md bg-white/70 rotate-[-6deg]">
                  <img
                    src="https://cdn.simpleicons.org/postman?viewbox=auto"
                    alt="Postman"
                    className="h-4 w-4"
                  />
                </span>
              </div>

              <div className="relative z-10 flex items-center justify-center min-h-[360px]">
                <div className="max-w-[580px] text-center">
                  <div className="inline-block rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 shadow-lg px-6 py-5 text-left font-mono text-sm md:text-base">
                    <div className="text-slate-500">
                      01 &lt;{" "}
                      <span className="text-slate-900 dark:text-white">
                        {t("hero.title")} Rully Lukmansyah
                      </span>{" "}
                      /&gt;
                    </div>
                    <div className="mt-2 text-slate-500">
                      02 &lt;{" "}
                      <span className="text-orange-500">
                        {t("hero.line2_a")}
                      </span>{" "}
                      /&gt;
                    </div>
                    <div className="mt-2 text-slate-500">
                      03 &lt;{" "}
                      <span className="text-orange-500">
                        Frontend Web Developer
                      </span>{" "}
                      . /&gt;
                    </div>
                  </div>

                  <p className="mt-20 w-[500px] text-slate-600 dark:text-slate-300">
                    {t("hero.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes blob1 {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.08) translate(-8px, 6px);
          }
        }
        @keyframes blob2 {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.12) translate(10px, -6px);
          }
        }
        @keyframes blob3 {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.06) translate(6px, 8px);
          }
        }
        @keyframes blob4 {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-6px, -8px);
          }
        }
        @keyframes blob5 {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.07) translate(8px, -4px);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinSlowReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spinSlow {
          animation: spinSlow 8s linear infinite;
        }
        .animate-spinSlowReverse {
          animation: spinSlowReverse 10s linear infinite;
        }
        .split-mask {
          --slice1-x: 0px;
          --slice1-y: 30px;
          --slice1-w: 120px;
          --slice1-h: 300px;
          --slice2-x: 122px;
          --slice2-y: 0px;
          --slice2-w: 120px;
          --slice2-h: 360px;
          -webkit-mask:
            linear-gradient(#000 0 0) var(--slice1-x) var(--slice1-y) /
              var(--slice1-w) var(--slice1-h) no-repeat,
            linear-gradient(#000 0 0) var(--slice2-x) var(--slice2-y) /
              var(--slice2-w) var(--slice2-h) no-repeat;
          mask:
            linear-gradient(#000 0 0) var(--slice1-x) var(--slice1-y) /
              var(--slice1-w) var(--slice1-h) no-repeat,
            linear-gradient(#000 0 0) var(--slice2-x) var(--slice2-y) /
              var(--slice2-w) var(--slice2-h) no-repeat;
          border-radius: 12px;
          box-shadow:
            0 10px 20px rgba(15, 23, 42, 0.15),
            0 4px 8px rgba(15, 23, 42, 0.1);
          overflow: hidden;
        }
        :global(.hero-bio-modal .ant-modal-content) {
          background: #0f172a;
        }
        :global(.hero-bio-modal .ant-modal-header) {
          background: #0f172a;
          border-bottom: 1px solid rgba(148, 163, 184, 0.2);
        }
        :global(.hero-bio-modal .ant-modal-title) {
          color: #f8fafc;
        }
        :global(.hero-bio-modal .ant-modal-close) {
          color: #e2e8f0;
        }
      `}</style>
      <Modal
        open={bioOpen}
        onCancel={() => setBioOpen(false)}
        footer={null}
        centered
        title={t("hero.bio_title")}
        className="hero-bio-modal"
      >
        <p className="text-slate-600 dark:text-slate-300">
          {t("hero.bio_body")}
        </p>
      </Modal>
    </section>
  );
}
