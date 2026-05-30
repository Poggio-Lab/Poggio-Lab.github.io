import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  CalendarDays,
  type LucideIcon,
  MapPin,
  NotebookPen,
  Users,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "9.520 | Poggio Lab",
  description: "Course hub for 9.520 at the Poggio Lab.",
}

type CourseCard = {
  id: string
  eyebrow: string
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}

type LogisticsItem = {
  label: string
  value: string
  icon: LucideIcon
}

// Update these arrays as the course logistics and materials are finalized.
const courseSections: CourseCard[] = [
  {
    id: "syllabus",
    eyebrow: "Syllabus",
    title: "Course overview and policies",
    description:
      "Use this section for the class description, learning goals, expectations, and grading policies.",
    icon: BookOpen,
    items: [
      "Course description and goals",
      "Prerequisites and expected background",
      "Grading breakdown and policies",
      "Office hours and contact details",
    ],
  },
  {
    id: "schedule",
    eyebrow: "Schedule",
    title: "Lecture topics and key dates",
    description:
      "A natural home for the weekly calendar, reading deadlines, guest sessions, and important milestones.",
    icon: CalendarDays,
    items: [
      "Lecture dates and topics",
      "Deadlines and checkpoints",
      "Guest talks or special sessions",
      "Slides and notes after class",
    ],
  },
  {
    id: "materials",
    eyebrow: "Materials",
    title: "Readings, notes, and resources",
    description:
      "Keep the reading list, handouts, lecture notes, and any shared code or datasets together here.",
    icon: NotebookPen,
    items: [
      "Reading list and references",
      "Lecture slides and notes",
      "Handouts and supporting links",
      "Code, notebooks, or datasets",
    ],
  },
  {
    id: "announcements",
    eyebrow: "Announcements",
    title: "Updates and class-wide communication",
    description:
      "A simple place for room changes, reminders, assignment clarifications, and upcoming deadlines.",
    icon: Bell,
    items: [
      "Important updates",
      "Room or timing changes",
      "Assignment clarifications",
      "Upcoming due dates",
    ],
  },
]

const logistics: LogisticsItem[] = [
  {
    label: "Meeting Time",
    value: "To be announced",
    icon: CalendarDays,
  },
  {
    label: "Location",
    value: "To be announced",
    icon: MapPin,
  },
  {
    label: "Instructor",
    value: "To be announced",
    icon: Users,
  },
]

export default function Course9520Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.12),transparent_65%)]" />
        <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              MIT Course Hub
            </p>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-foreground text-balance md:text-6xl">
              9.520
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              A dedicated home for class logistics, readings, assignments,
              notes, and announcements. This page is now live at
              <span className="font-medium text-foreground"> /9-520/</span> and
              ready to hold the course materials.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#course-sections"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Explore Sections
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                Back to Poggio Lab
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <p className="mb-2 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Page Status
            </p>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Ready for course content
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              The structure is in place for syllabus information, lecture
              schedules, materials, and announcements. As the class details are
              finalized, this page can be updated without changing the route.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {courseSections.map((section) => {
                const Icon = section.icon

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-2xl border border-border/70 bg-background/80 p-4 transition-colors hover:border-foreground/20"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-foreground">
                      {section.eyebrow}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {section.title}
                    </p>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-border/70 bg-card p-8">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Logistics
            </p>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
              Course details can live here
            </h2>
            <div className="space-y-4">
              {logistics.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background p-4"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-card p-8">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              What This Page Can Hold
            </p>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
              A single public home for 9.520
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Syllabus PDF or a full web syllabus",
                "Weekly lecture schedule and topics",
                "Reading packets, links, and notes",
                "Assignments, projects, and due dates",
                "Announcements and course-wide reminders",
                "Slides, recordings, or shared materials",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border/60 bg-background px-5 py-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="course-sections" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Course Sections
            </p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
              Four clear places for the main class materials
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The page is structured so the course can grow over time without
              becoming cluttered. Each section below can be filled in as the
              semester takes shape.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {courseSections.map((section) => {
              const Icon = section.icon

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="rounded-3xl border border-border/70 bg-card p-8"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-foreground shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                        {section.eyebrow}
                      </p>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {section.description}
                  </p>

                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-border/60 bg-background px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
