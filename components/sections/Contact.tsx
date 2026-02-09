"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Layout, Typography } from "antd";
import useLocale from "../../i18n/useLocale";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [visible, setVisible] = useState([false, false, false, false, false]);
  const { Content } = Layout;
  const { Title: AntTitle } = Typography;
  const { t } = useLocale();

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setVisible([true, false, false, false, false]), 500),
      setTimeout(() => setVisible([true, true, false, false, false]), 800),
      setTimeout(() => setVisible([true, true, true, false, false]), 1200),
      setTimeout(() => setVisible([true, true, true, true, false]), 1600),
      setTimeout(() => setVisible([true, true, true, true, true]), 2000),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const layout = {
    labelCol: { span: 24 },
  };

  const onFinish = (values: any) => {
    const hide = message.loading(t("contact.loading"), 0);

    emailjs
      .send("service_xothpql", "template_memf5mx", values, "tQ-ECCUIxOLvZ3Uui")
      .then(() => {
        hide();
        message.success(t("contact.success"));
      })
      .catch(() => {
        hide();
        message.error(t("contact.error"));
      });
  };

  return (
    <Content className="w-full" style={{ maxWidth: 980, margin: "0 auto" }}>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/70 shadow-xl p-6 md:p-10">
        <div
          className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-orange-200/70 dark:bg-orange-400/20 blur-3xl"
          style={{ animation: "contactBlob1 14s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-sky-200/70 dark:bg-sky-400/20 blur-3xl"
          style={{ animation: "contactBlob2 16s ease-in-out infinite" }}
        />

        <div className="flex flex-col h-full justify-around lg:gap-y-10 relative z-10">
          <div className="text-center">
            <div className="mx-auto mb-3 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          <AntTitle level={2} className="!mb-2 !text-slate-900 dark:!text-white">
            {t("contact.title")}
          </AntTitle>
          <p className="text-slate-600 dark:text-slate-300">
            {t("contact.subheading")}
          </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-slate-600 dark:text-slate-300">
                {t("contact.badge_1")}
              </span>
              <span className="rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-slate-600 dark:text-slate-300">
                {t("contact.badge_2")}
              </span>
              <span className="rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-slate-600 dark:text-slate-300">
                {t("contact.badge_3")}
              </span>
            </div>
            <div className="mt-4 flex justify-center">
              <svg
                width="120"
                height="24"
                viewBox="0 0 120 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70"
              >
                <circle cx="12" cy="12" r="4" className="fill-orange-400/80" />
                <circle cx="36" cy="12" r="4" className="fill-sky-400/80" />
                <circle cx="60" cy="12" r="4" className="fill-emerald-400/80" />
                <circle cx="84" cy="12" r="4" className="fill-rose-400/80" />
                <circle cx="108" cy="12" r="4" className="fill-indigo-400/80" />
              </svg>
            </div>
          </div>
          <div
            className={`transition-opacity duration-1000 ${
              visible[1] ? "opacity-100" : "opacity-0"
            }`}
          >
          <h2 className="text-[25px] text-black dark:text-white my-4 lg:my-0 lg:text-[32px]">
            {t("contact.heading")}
          </h2>
          </div>
          <div
            className={`w-full transition-opacity duration-1000 ${
              visible[2] ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-orange-400/50 via-sky-400/50 to-emerald-400/50 bg-[length:200%_200%] animate-gradientLoop">
              <Form
                {...layout}
                onFinish={onFinish}
        className={`w-full rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/80 shadow-lg p-6 md:p-8
        dark:[&_.ant-form-item-label>label]:!text-slate-200
        [&_.ant-form-item-label>label]:!text-slate-700
        dark:[&_.ant-input]:!bg-slate-800 dark:[&_.ant-input]:!text-white dark:[&_.ant-input]:!border-slate-700
        dark:[&_.ant-input::placeholder]:!text-slate-400
        dark:[&_.ant-input-affix-wrapper]:!bg-slate-800 dark:[&_.ant-input-affix-wrapper]:!text-white dark:[&_.ant-input-affix-wrapper]:!border-slate-700
        dark:[&_.ant-input-affix-wrapper::placeholder]:!text-slate-400
        dark:[&_.ant-input-textarea]:!bg-slate-800 dark:[&_.ant-input-textarea]:!text-white dark:[&_.ant-input-textarea]:!border-slate-700
        dark:[&_.ant-input-textarea::placeholder]:!text-slate-400
        dark:[&_.ant-btn-primary]:!bg-orange-500 dark:[&_.ant-btn-primary]:!border-orange-500
        dark:[&_.ant-btn-primary]:hover:!bg-orange-400 dark:[&_.ant-btn-primary]:hover:!border-orange-400
        `}
                layout="vertical"
              >
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <Form.Item
                    name="first_name"
            label={t("contact.first_name")}
                    className="flex-grow"
                    rules={[
              { required: true, message: t("contact.first_name") },
            ]}
          >
            <Input
              placeholder={t("contact.placeholder_first")}
              size="large"
              className="bg-white/80"
            />
          </Form.Item>
          <Form.Item
            name="last_name"
            label={t("contact.last_name")}
            className="flex-grow"
            rules={[{ required: true, message: t("contact.last_name") }]}
          >
            <Input
              placeholder={t("contact.placeholder_last")}
              size="large"
              className="bg-white/80"
            />
          </Form.Item>
        </div>
        <Form.Item
          name="email"
          label={t("contact.email")}
          rules={[
            { required: true, message: t("contact.email") },
            { type: "email", message: t("contact.invalid_email") },
          ]}
        >
          <Input
            placeholder={t("contact.placeholder_email")}
            size="large"
            className="bg-white/80"
          />
        </Form.Item>
        <Form.Item
          name="message"
          label={t("contact.message")}
          rules={[{ required: true, message: t("contact.message") }]}
        >
          <Input.TextArea
            placeholder={t("contact.placeholder_message")}
            rows={4}
            className="bg-white/80"
          />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" block>
            {t("contact.submit")}
          </Button>
        </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes contactBlob1 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.12) translate(-14px, 10px); }
        }
        @keyframes contactBlob2 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.15) translate(14px, -10px); }
        }
        @keyframes gradientLoop {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientLoop {
          animation: gradientLoop 6s ease-in-out infinite;
        }
      `}</style>
    </Content>
  );
}
