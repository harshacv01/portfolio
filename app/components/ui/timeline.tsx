"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { LinkPreview } from "./link-preview";
import { TechLogo } from "./tech-logo";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const logos = [
  "/logos/mistral.png",
  "/logos/nextjs.svg",
  "/logos/react.svg",
  "/logos/redis.svg",
  "/logos/postgresql.svg",
  "/logos/Bun.svg",
];

const data = [
  {
    title: "2025",
    content: (
      <div>
        <LinkPreview
          url="https://los.xgencredit.com/ai"
          imageSrc="/assets/smart-ai-agent.png"
          isStatic={true}
          className="
      text-gradient font-bold
      bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
      text-xl mb-8 
    "
        >
          Smart Agent AI Assistant
        </LinkPreview>{" "}
        <p className="mb-8 text-lg leading-8 text-muted-foreground">
          An AI-powered platform that enables users to effortlessly create,
          customize, and deploy their own intelligent agents equipped with tools
          to automate tasks, streamline workflows, and boost productivity across
          a wide range of professional use cases.
        </p>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">
              Full Stack Developer & AI Specialist
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground">
              Responsibilities
            </h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Designed and implemented the core AI agent architecture</li>
              <li>Integrated communication between LLM & manual agents </li>
              <li>Integrated multiple LLM providers and tool frameworks</li>
              <li>Optimized agent performance and response quality</li>
              <li>
                Implemented robust security measures for sensitive data handling
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground">
              Tech Stack
            </h4>

            <div className="mt-2 flex flex-row gap-4 flex-wrap">
              <Image
                src={"/logos/mistral.png"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain "
              />
              <Image
                src={"/logos/nextjs.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/react.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/redis.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/postgresql.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/Bun.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/docker.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/aws.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/gitlab.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <LinkPreview
          url="https://dev.st.xgencredit.com"
          imageSrc="/assets/spreading-tool.png"
          isStatic={true}
          className="
      text-gradient font-bold
      bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
      text-xl mb-8 
    "
        >
          Smart Credit Spreading Tool
        </LinkPreview>{" "}
        <p className="mb-8 text-lg leading-8 text-muted-foreground">
          A web-based platform designed to simplify and automate credit risk
          analysis. The system allows users to input and review financial
          statements at both group and entity levels, perform KPI analysis,
          calculate risk scores, and handle financial consolidations. Developed
          for Nissan Financial Services to improve underwriting accuracy,
          efficiency, and decision-making.
        </p>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground">
              Responsibilities
            </h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                Designed and implemented dynamic forms for financial statement
                data entry, supporting both entity-level and group-level
                structures.
              </li>
              <li>
                Developed logic to calculate key performance indicators (KPIs),
                risk scores, and financial ratios in real-time.
              </li>
              <li>
                Built and maintained modules for financial statement
                consolidation across multiple business units.
              </li>
              <li>
                Integrated rule-based engines to automate credit analysis
                workflows and ensure consistency in underwriting decisions.
              </li>
              <li>
                Collaborated with financial analysts and underwriters to
                translate business requirements into technical specifications.
              </li>
              <li>
                Ensured data accuracy, auditability, and performance across
                large datasets using optimized queries and validation layers.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground">
              Tech Stack
            </h4>
            <div className="mt-2 flex flex-row gap-4 flex-wrap">
              <Image
                src={"/logos/nextjs.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/react.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/nodejs.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/redis.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/sqlite.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/docker.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/aws.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/gitlab.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <LinkPreview
          url="https://los.xgencredit.com"
          imageSrc="/assets/los.png"
          isStatic={true}
          className="
      text-gradient font-bold
      bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
      text-xl mb-8 
    "
        >
          Loan Origination System
        </LinkPreview>{" "}
        <p className="mb-8 text-lg leading-8 text-muted-foreground">
          A comprehensive web-based platform designed to streamline the loan
          origination process for Regional Development Bank Srilaka. The system
          automates the entire workflow, from application submission to
          underwriting and approval, ensuring a seamless experience for both
          lenders and borrowers.
        </p>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground">
              Responsibilities
            </h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                Developed end-to-end system configuration modules, enabling
                dynamic form creation, workflow customization, and approval
                matrix setup.
              </li>
              <li>
                Engineered scorecard-based credit evaluation logic with
                customizable rules and thresholds for automated decision-making.
              </li>
              <li>
                Implemented robust reporting and analytics features, including
                exportable reports, risk summaries, and user activity logs.
              </li>
              <li>
                Integrated financial data input, validation, and scoring engines
                to support automated underwriting.
              </li>
              <li>
                Collaborated with QA and business teams to refine requirements
                and ensure high-quality feature delivery.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground">
              Tech Stack
            </h4>

            <div className="mt-2 flex flex-row gap-4 flex-wrap">
              <Image
                src={"/logos/react.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/nodejs.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/redis.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/oracle.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/docker.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/aws.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src={"/logos/gitlab.svg"}
                alt="OpenAI"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id="journey" className="py-20 bg-background overflow-hidden" ref={containerRef}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          My Journey
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The evolution of my work and passion through the years
        </p>
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row  items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
