import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Presentation,
  type LucideIcon,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "9.520 | Poggio Lab",
  description:
    "MIT 9.520 course page for Statistical Learning Theory and its applications to modern machine learning.",
}

type Fact = {
  label: string
  value: string
  icon: LucideIcon
}

type Person = {
  name: string
  role: string
  href?: string
}

type TimelineItem = {
  date: string
  title: string
  description: string
}

type ProjectIdea = {
  title: string
  description: string
}

type Reading = {
  title: string
  detail: string
}

const facts: Fact[] = [
  {
    label: "Units",
    value: "3-0-9 H,G",
    icon: GraduationCap,
  },
  {
    label: "Class Times",
    value: "Tuesday and Thursday, 11:00 AM - 12:30 PM",
    icon: CalendarDays,
  },
  {
    label: "Location",
    value: "46-3002, Singleton Auditorium",
    icon: MapPin,
  },
  {
    label: "Contact",
    value: "9.520@mit.edu",
    icon: Mail,
  },
]

const instructors: Person[] = [
  { name: "Tomaso Poggio", role: "Instructor" },
  { name: "Lorenzo Rosasco", role: "Instructor" },
  {
    name: "Pierfrancesco Beneventano",
    role: "Instructor and TA",
    href: "https://pierbeneventano.github.io",
  },
]

const teachingTeam: Person[] = [
  {
    name: "Pierfrancesco Beneventano",
    role: "TA",
    href: "https://pierbeneventano.github.io",
  },
  { name: "Liu Ziyin", role: "TA" },
]

const classicalTopics = [
  "Classical regularization and regularized least squares",
  "Kernel methods and support vector machines",
  "Logistic regression, squared loss, and exponential loss",
  "Large margin theory and minimum norm solutions",
  "Stochastic gradient methods",
  "Overparameterization and implicit regularization for linear models",
  "Approximation and estimation errors",
]

const deepLearningTopics = [
  "Approximation: why deep networks can be universal parametric approximators and avoid the curse of dimensionality",
  "Optimization: how weights evolve in time and across layers during training",
  "Learning theory: if and how generalization in deep networks can be explained by implicit complexity control and sparse compositional structure",
  "What breaks and what survives as model, task, and data complexity increase",
  "How recent machine learning theory reconnects to the Statistical Learning Theory framework",
  "New paradigms in learning, including diffusion models and autoregressive transformers",
]

const timeline: TimelineItem[] = [
  {
    date: "Sep 26",
    title: "Groups and proposals",
    description:
      "Submit your group and indicate three project choices, or two listed projects plus one self-proposed project.",
  },
  {
    date: "Oct 10",
    title: "Literature reviews and implications",
    description:
      "For each of the three indicated projects, submit 3-4 pages covering related work and consequences for theory and practice.",
  },
  {
    date: "Oct 17",
    title: "Project plan",
    description:
      "Submit a concise plan explaining the chosen problem, expected result, proof or experiment strategy, and milestones.",
  },
  {
    date: "Oct 31",
    title: "Initial checkpoint",
    description:
      "Submit early results: first plots, proof sketches, ablations, or a short account of what has been learned.",
  },
  {
    date: "First two weeks of November",
    title: "Project discussions",
    description:
      "Meet during office hours to discuss progress, roadblocks, positioning, and next steps.",
  },
  {
    date: "Dec 2-4",
    title: "Oral presentation",
    description:
      "Give an 8-minute presentation with up to 10 content slides covering motivation, related work, results, and implications.",
  },
  {
    date: "Dec 10",
    title: "Final paper",
    description:
      "Submit the final paper and a link to a public code repository or runnable notebook.",
  },
]

const grading = [
  {
    label: "Participation",
    value: "Up to 10 points for active attendance, engagement, and project discussion.",
  },
  {
    label: "Literature reviews",
    value: "Up to 15 points across the three project reviews and implications documents.",
  },
  {
    label: "Initial checkpoint",
    value: "Up to 10 points for early evidence that the project is on track.",
  },
  {
    label: "Presentation",
    value: "Up to 25 points for motivation, results, clarity, organization, and answering questions.",
  },
  {
    label: "Final paper",
    value: "Up to 40 points for execution, positioning, clarity, novelty, limitations, and significance.",
  },
]

const projectIdeas: ProjectIdea[] = [
  {
    title: "Non-vacuous bounds for random labels",
    description:
      "Revisit random-label experiments with overparameterized ReLU networks and test whether modern Rademacher-style bounds can predict generalization from training data.",
  },
  {
    title: "Norm-based vs rank-based bounds",
    description:
      "Compare generalization bounds based on norms and ranks across the same networks and problems.",
  },
  {
    title: "Neural collapse and loss functions",
    description:
      "Study when regularization is needed for neural collapse under square loss and exponential loss.",
  },
  {
    title: "Intermediate neural collapse",
    description:
      "Investigate whether gradient descent can achieve intermediate neural collapse, and whether stochasticity or regularization is necessary.",
  },
  {
    title: "Kolmogorov-Arnold representations",
    description:
      "Analyze approximation properties of KA-style representations and compare them with standard MLPs.",
  },
  {
    title: "Adversarial examples",
    description:
      "Critically examine recent work that may clarify the puzzle of adversarial examples.",
  },
  {
    title: "Double descent",
    description:
      "Review double descent claims in the context of recent theory and empirical evidence.",
  },
  {
    title: "SGD vs layerwise optimization",
    description:
      "Compare standard feedforward training against staged polynomial residual regression on simple low-dimensional polynomial targets.",
  },
  {
    title: "Invariant representations",
    description:
      "Explore whether transformation-invariant preprocessing can reduce sample complexity without relying on data augmentation.",
  },
  {
    title: "PDEs and PINNs",
    description:
      "Study the approximation-theoretic foundations of deep networks for solving partial differential equations.",
  },
  {
    title: "Definitions of superintelligence",
    description:
      "Formulate definitions that are achievable through supervised learning and definitions that are not.",
  },
  {
    title: "Large Embedding Models and memory",
    description:
      "Test whether reconstructing full memories from partial fragments can model aspects of recall, dreams, and imagination.",
  },
  {
    title: "Step-by-step learning with simple predictors",
    description:
      "Generate algorithmic step datasets and compare autoregressive and diffusion-style learning with linear threshold predictors and small baselines.",
  },
  {
    title: "Associative memory and hippocampus",
    description:
      "Connect recent key-value and attention mechanisms to classic associative memory models and hippocampal theories.",
  },
  {
    title: "Beneficial misalignment",
    description:
      "Study whether increasingly capable AI systems may benefit from representations that are less human-like.",
  },
  {
    title: "Unsupervised contrastive learning in vision",
    description:
      "Investigate why augmentation-based contrastive pretraining improves downstream visual classification.",
  },
  {
    title: "Prefix optimization for mathematics",
    description:
      "Optimize fixed-length token prefixes to improve mathematical output.",
  },
  {
    title: "Attention heads across task families",
    description:
      "Test whether many attention heads help language tasks differently than arithmetic or algorithmic tasks.",
  },
  {
    title: "Depth-width tradeoffs",
    description:
      "Under fixed compute or parameter budgets, compare deeper-narrow and shallower-wide transformers across language and arithmetic tasks.",
  },
]

const primaryReadings: Reading[] = [
  {
    title: "Machine Learning: a Regularization Approach",
    detail:
      "L. Rosasco and T. Poggio, MIT 9.520 lecture notes, draft manuscript.",
  },
  {
    title: "Understanding Machine Learning: From Theory to Algorithms",
    detail: "S. Shalev-Shwartz and S. Ben-David, Cambridge University Press, 2014.",
  },
  {
    title: "Introduction to Statistical Learning Theory",
    detail: "O. Bousquet, S. Boucheron, and G. Lugosi, Advanced Lectures on Machine Learning, 2004.",
  },
  {
    title: "On The Mathematical Foundations of Learning",
    detail: "F. Cucker and S. Smale, Bulletin of the AMS, 2002.",
  },
  {
    title: "A Probabilistic Theory of Pattern Recognition",
    detail: "L. Devroye, L. Gyorfi, and G. Lugosi, Springer, 1997.",
  },
  {
    title: "Regularization Networks and Support Vector Machines",
    detail: "T. Evgeniou, M. Pontil, and T. Poggio, Advances in Computational Mathematics, 2000.",
  },
  {
    title: "The Mathematics of Learning: Dealing with Data",
    detail: "T. Poggio and S. Smale, Notices of the AMS, 2003.",
  },
  {
    title: "Statistical Learning Theory",
    detail: "V. N. Vapnik, Wiley, 1998.",
  },
]

function ExternalTextLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-muted-foreground"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  )
}

function PersonLine({ person }: { person: Person }) {
  const content = (
    <>
      <span className="font-medium text-foreground">{person.name}</span>
      <span className="text-muted-foreground"> - {person.role}</span>
    </>
  )

  if (!person.href) {
    return <li>{content}</li>
  }

  return (
    <li>
      <ExternalTextLink href={person.href}>{person.name}</ExternalTextLink>
      <span className="text-muted-foreground"> - {person.role}</span>
    </li>
  )
}

export default function Course9520Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-medium uppercase text-muted-foreground">
                MIT 9.520
              </p>
              <h1 className="mb-6 text-4xl font-semibold text-foreground text-balance md:text-6xl">
                Statistical Learning Theory and Applications
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                A graduate course on the foundations of learning, from
                classical regularization and kernel methods to modern questions
                about deep networks, optimization, generalization, and the
                theory needed to understand today&apos;s AI systems.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:9.520@mit.edu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                >
                  Contact Staff
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="border border-border bg-card p-6">
              <h2 className="mb-5 text-xl font-semibold text-foreground">
                Course at a Glance
              </h2>
              <div className="space-y-4">
                {facts.map((fact) => {
                  const Icon = fact.icon

                  return (
                    <div key={fact.label} className="flex gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-background text-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {fact.label}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                Office hours: Pier, Tuesdays and Thursdays, 1:30 PM - 3:00 PM,
                46-5155D. Email{" "}
                <a
                  href="mailto:pierb@mit.edu"
                  className="font-medium text-foreground underline decoration-dotted underline-offset-4"
                >
                  pierb@mit.edu
                </a>{" "}
                for project questions.
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Instructors
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              {instructors.map((person) => (
                <PersonLine key={person.name} person={person} />
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Teaching Assistants
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              {teachingTeam.map((person) => (
                <PersonLine key={person.name} person={person} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="description" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-medium uppercase text-muted-foreground">
            Course Description
          </p>
          <h2 className="mb-8 text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Learning theory as a route to understanding intelligence
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Understanding intelligence, and how to replicate it in machines,
              is arguably one of the greatest problems in science. Learning,
              through its theory and computational implementations, lies at the
              core of intelligence.
            </p>
            <p>
              Over the last two decades, AI systems have learned to solve
              complex tasks that were once the exclusive domain of biological
              organisms: computer vision, speech recognition, and natural
              language understanding and generation. These successes are driven
              by algorithms trained from examples rather than explicitly
              programmed to solve each task. This course, probably the oldest
              continuously running machine learning course at MIT, has been
              pushing toward this shift since its inception in 1992.
            </p>
            <p>
              Yet a comprehensive theory of learning, especially one that
              explains the empirical puzzles raised by deep learning, remains
              incomplete. Such a theory could enable more powerful learning
              approaches, guide the use of learning algorithms in high-stakes
              settings, and inform our understanding of human intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="border border-border bg-card p-7">
            <div className="mb-5 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-foreground" />
              <h2 className="text-2xl font-semibold text-foreground">
                Part I: Classical SLT
              </h2>
            </div>
            <ul className="space-y-3">
              {classicalTopics.map((topic) => (
                <li
                  key={topic}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-card p-7">
            <div className="mb-5 flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-foreground" />
              <h2 className="text-2xl font-semibold text-foreground">
                Part II: Neural Networks
              </h2>
            </div>
            <ul className="space-y-3">
              {deepLearningTopics.map((topic) => (
                <li
                  key={topic}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="rules" className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-muted-foreground">
              Rules and Expectations
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Project-centered grading and research practice
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The current format removes traditional problem sets to give more
              time to projects and introduces an oral presentation. The goal is
              to understand how well students own their project, how clearly
              they can position it within Statistical Learning Theory, and how
              carefully they can connect theory, experiments, and implications.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="border border-border bg-background p-6">
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Prerequisites
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Part II is designed for students with a good background in ML.
                The course uses calculus, linear algebra, probability, basic
                optimization, and some functional or convex analysis. For course
                6 students, expected background includes 6.041, 18.06, and an
                introductory ML course such as 6.036, 6.401, or 6.867.
              </p>
            </div>
            <div className="border border-border bg-background p-6">
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                AI Tools
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Students are expected to use modern LLM-based tools when useful,
                but must still read the relevant papers and be able to explain,
                rework, and defend the work offline.
              </p>
            </div>
            <div className="border border-border bg-background p-6">
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Teams
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Projects may be individual or in teams of two. Groups of two are
                encouraged. Multiple teams may work on related problems, but
                authorship and submission plans should be coordinated with the
                staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-muted-foreground">
              Timeline
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Deliverables are designed to move projects early
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Deadlines are intended to make the project research process
              concrete: choose a problem, understand the literature, plan the
              path, show early evidence, present the work, and submit a paper.
            </p>
          </div>

          <div className="grid gap-4">
            {timeline.map((item) => (
              <div
                key={`${item.date}-${item.title}`}
                className="grid gap-4 border border-border bg-card p-5 md:grid-cols-[11rem_1fr]"
              >
                <p className="text-sm font-semibold text-foreground">
                  {item.date}
                </p>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-muted-foreground">
              Grading
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Participation plus project work
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The grading scheme is project-based: 10 points for participation
              and up to 90 points for project-related activities, with possible
              bonus points for a strong project plan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {grading.map((item) => (
              <div key={item.label} className="border border-border bg-background p-5">
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-muted-foreground">
              Projects
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Research questions for the semester
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Some projects are well-defined with a clear path toward a paper;
              others are intentionally exploratory. Students should reach out to
              Pier with questions and use the project form to indicate their
              preferences.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ExternalTextLink href="https://forms.gle/d3Q8EEZiskYzCStQA">
                Project form
              </ExternalTextLink>
              <ExternalTextLink href="https://poggio-lab.mit.edu/9-520/">
                Public course page
              </ExternalTextLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectIdeas.map((project, index) => (
              <article key={project.title} className="border border-border bg-card p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center border border-border bg-background text-sm font-semibold text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="border-t border-border bg-card px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-muted-foreground">
              Readings and Resources
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Primary references for the course
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Lecture notes are provided as independent draft chapters. The
              references below are useful background reading, especially from
              the theoretical viewpoint.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {primaryReadings.map((reading) => (
              <div key={reading.title} className="border border-border bg-background p-5">
                <div className="mb-3 flex items-center gap-3">
                  <FileText className="h-5 w-5 text-foreground" />
                  <h3 className="font-semibold text-foreground">
                    {reading.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reading.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-border bg-background p-6">
            <div className="mb-3 flex items-center gap-3">
              <Presentation className="h-5 w-5 text-foreground" />
              <h3 className="font-semibold text-foreground">
                Course materials and updates
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Slides, notes, readings, project updates, and any schedule changes
              can be added here as the semester evolves. For administrative
              questions, email{" "}
              <a
                href="mailto:9.520@mit.edu"
                className="font-medium text-foreground underline decoration-dotted underline-offset-4"
              >
                9.520@mit.edu
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
