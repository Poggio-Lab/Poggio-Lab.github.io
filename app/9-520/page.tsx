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

type ScheduleItem = {
  date: string
  title: string
  instructor: string
  slideHref?: string
  note?: string
}

type ReferenceItem = {
  title: string
  detail: string
  href?: string
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
  {
    name: "Tomaso Poggio",
    role: "Instructor",
    href: "https://mcgovern.mit.edu/profile/tomaso-poggio/",
  },
  {
    name: "Lorenzo Rosasco",
    role: "Instructor",
    href: "https://web.mit.edu/lrosasco/www/",
  },
  {
    name: "Pierfrancesco Beneventano",
    role: "Instructor",
    href: "https://pierbeneventano.github.io",
  },
]

const teachingTeam: Person[] = [
  { name: "Yulu Gan", role: "TA" },
  { name: "Federico V. Cortesi", role: "TA" },
  { name: "Mahmoud Abdelmoneum", role: "TA" },
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
    date: "September 25, 2026",
    title: "Groups and proposals",
    description:
      "Submit your group and indicate three project choices, or two listed projects plus one self-proposed project.",
  },
  {
    date: "October 9, 2026",
    title: "Literature reviews and implications",
    description:
      "For each of the three indicated projects, submit 3-4 pages covering related work and consequences for theory and practice.",
  },
  {
    date: "October 16, 2026",
    title: "Project plan",
    description:
      "Submit a concise plan explaining the chosen problem, expected result, proof or experiment strategy, and milestones.",
  },
  {
    date: "October 30, 2026",
    title: "Initial checkpoint",
    description:
      "Submit early results: first plots, proof sketches, ablations, or a short account of what has been learned.",
  },
  {
    date: "November 3-12, 2026",
    title: "Project discussions",
    description:
      "Meet during office hours to discuss progress, roadblocks, positioning, and next steps.",
  },
  {
    date: "December 1-3, 2026",
    title: "Oral presentation",
    description:
      "Give an 8-minute presentation with up to 10 content slides covering motivation, related work, results, and implications.",
  },
  {
    date: "December 10, 2026",
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

const slideBasePath = "/assets/9-520/slides"

const schedule: ScheduleItem[] = [
  {
    date: "Thu, Sep 10",
    title: "Course overview, logistics, and why theory",
    instructor: "TP / LR / PB",
    slideHref: `${slideBasePath}/01-introduction.pdf`,
  },
  {
    date: "Tue, Sep 15",
    title: "Statistical Learning Theory",
    instructor: "LR",
    slideHref: `${slideBasePath}/02-statistical-learning-theory.pdf`,
  },
  {
    date: "Thu, Sep 17",
    title: "Least squares and overparameterization",
    instructor: "LR",
    slideHref: `${slideBasePath}/03-least-squares-and-overparameterization.pdf`,
  },
  {
    date: "Tue, Sep 22",
    title: "Logistic regression and SGD",
    instructor: "LR",
    slideHref: `${slideBasePath}/04-logistic-regression-and-sgd.pdf`,
  },
  {
    date: "Thu, Sep 24",
    title: "Implicit Regularization",
    instructor: "LR",
    slideHref: `${slideBasePath}/05-implicit-regularization.pdf`,
  },
  {
    date: "Tue, Sep 29",
    title: "Neural networks",
    instructor: "LR",
    slideHref: `${slideBasePath}/06-neural-networks.pdf`,
  },
  {
    date: "Thu, Oct 1",
    title: "Random Features, NTK & RKHS",
    instructor: "LR",
    slideHref: `${slideBasePath}/07-random-features-ntk-rkhs.pdf`,
  },
  {
    date: "Tue, Oct 6",
    title: "Infinite Width Neural Networks & RKBS",
    instructor: "LR",
    slideHref: `${slideBasePath}/08-infinite-width-neural-networks-rkbs.pdf`,
  },
  {
    date: "Thu, Oct 8",
    title: "Learning bounds for linear least squares",
    instructor: "LR",
    slideHref: `${slideBasePath}/09-learning-bounds-linear-least-squares.pdf`,
  },
  {
    date: "Thu, Oct 15",
    title: "Learning bounds for ERM",
    instructor: "LR",
    slideHref: `${slideBasePath}/10-learning-bounds-for-erm.pdf`,
    note: "MIT follows a Monday schedule on Tuesday, October 13, 2026, so there is no 9.520 meeting that day.",
  },
  {
    date: "Tue, Oct 20",
    title: "Sequential prediction as learning dynamical systems",
    instructor: "LR",
    slideHref: `${slideBasePath}/11-sequential-prediction-dynamical-systems.pdf`,
  },
  {
    date: "Thu, Oct 22",
    title: "From classical to modern deep learning",
    instructor: "PB + TP",
    slideHref: `${slideBasePath}/12-classical-to-modern.pdf`,
  },
  {
    date: "Tue, Oct 27",
    title: "Deep Learning: approximation theory",
    instructor: "TP",
    slideHref: `${slideBasePath}/13-approximation-theory.pdf`,
  },
  {
    date: "Thu, Oct 29",
    title: "Sparse Compositionality",
    instructor: "TP",
    slideHref: `${slideBasePath}/14-sparse-compositionality.pdf`,
  },
  {
    date: "Tue, Nov 3",
    title: "Deep Learning Theory: Optimization",
    instructor: "PB",
    slideHref: `${slideBasePath}/15-deep-learning-optimization.pdf`,
  },
  {
    date: "Thu, Nov 5",
    title: "Training neural networks: trainability",
    instructor: "PB",
    slideHref: `${slideBasePath}/16-trainability.pdf`,
  },
  {
    date: "Tue, Nov 10",
    title: "Training neural networks: how we train",
    instructor: "PB",
    slideHref: `${slideBasePath}/17-how-we-train.pdf`,
  },
  {
    date: "Thu, Nov 12",
    title: "Where training goes and its stability",
    instructor: "PB",
    slideHref: `${slideBasePath}/18-where-training-goes-and-stability.pdf`,
  },
  {
    date: "Tue, Nov 17",
    title: "Towards a Learning Theory of Grammars",
    instructor: "Dan Mitropolsky (guest)",
    slideHref: `${slideBasePath}/19-learning-theory-of-grammars.pdf`,
  },
  {
    date: "Thu, Nov 19",
    title: "Open",
    instructor: "Course staff",
  },
  {
    date: "Tue, Nov 24",
    title: "Open",
    instructor: "Course staff",
  },
  {
    date: "Tue, Dec 1",
    title: "Open",
    instructor: "Course staff",
  },
  {
    date: "Thu, Dec 3",
    title: "Open",
    instructor: "Course staff",
  },
  {
    date: "Tue, Dec 8",
    title: "Open",
    instructor: "Course staff",
  },
  {
    date: "Thu, Dec 10",
    title: "Open",
    instructor: "Course staff",
    note: "MIT's fall 2026 last day of classes and the current final paper deadline.",
  },
]

const draftBook: ReferenceItem[] = [
  {
    title: "Machine Learning: a Regularization Approach, MIT 9.520 Lecture Notes",
    detail:
      "L. Rosasco and T. Poggio, manuscript, Dec. 2017 (provided).",
  },
]

const primaryReferences: ReferenceItem[] = [
  {
    title: "Understanding Machine Learning: From Theory to Algorithms",
    detail:
      "S. Shalev-Shwartz and S. Ben-David, Cambridge University Press, 2014.",
  },
  {
    title: "Introduction to Statistical Learning Theory",
    detail:
      "O. Bousquet, S. Boucheron, and G. Lugosi. In Advanced Lectures on Machine Learning, LNCS 3176, pp. 169-207, Springer, 2004.",
  },
  {
    title: "On The Mathematical Foundations of Learning",
    detail:
      "F. Cucker and S. Smale, Bulletin of the American Mathematical Society, 2002.",
  },
  {
    title: "A Probabilistic Theory of Pattern Recognition",
    detail:
      "L. Devroye, L. Gyorfi, and G. Lugosi, Springer, 1997.",
  },
  {
    title: "Regularization Networks and Support Vector Machines",
    detail:
      "T. Evgeniou, M. Pontil, and T. Poggio, Advances in Computational Mathematics, 2000.",
  },
  {
    title: "The Mathematics of Learning: Dealing with Data",
    detail:
      "T. Poggio and S. Smale, Notices of the AMS, 2003.",
  },
  {
    title: "Statistical Learning Theory",
    detail: "V. N. Vapnik, Wiley, 1998.",
  },
]

const papersOfInterest: ReferenceItem[] = [
  {
    title:
      "Why and When Can Deep-but Not Shallow-Networks Avoid the Curse of Dimensionality: A Review",
    detail:
      "T. Poggio, H. Mhaskar, L. Rosasco, B. Miranda, and Q. Liao, International Journal of Automation and Computing, 2017.",
    href: "https://doi.org/10.1007/s11633-017-1054-2",
  },
  {
    title: "Compositional sparsity of learnable functions",
    detail:
      "T. Poggio and M. Fraser, Bulletin of the American Mathematical Society, 2024.",
    href: "https://doi.org/10.1090/bull/1820",
  },
  {
    title:
      "Dynamics in Deep Classifiers Trained with the Square Loss: Normalization, Low Rank, Neural Collapse, and Generalization Bounds",
    detail:
      "M. Xu, A. Rangamani, Q. Liao, T. Galanti, and T. Poggio, Research, 2023.",
    href: "https://doi.org/10.34133/research.0024",
  },
  {
    title: "Deep learning",
    detail:
      "Y. LeCun, Y. Bengio, and G. Hinton, Nature, 521(7553):436-444, 2015.",
    href: "https://doi.org/10.1038/nature14539",
  },
  {
    title: "Mastering the game of Go with deep neural networks and tree search",
    detail:
      "D. Silver et al., Nature, 529(7587):484-489, 2016.",
    href: "https://doi.org/10.1038/nature16961",
  },
  {
    title: "Highly accurate protein structure prediction with AlphaFold",
    detail:
      "J. Jumper et al., Nature, 596(7873):583-589, 2021.",
    href: "https://doi.org/10.1038/s41586-021-03819-2",
  },
  {
    title: "Attention Is All You Need",
    detail:
      "A. Vaswani et al., Advances in Neural Information Processing Systems 30, 2017.",
    href: "https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html",
  },
]

const resourceLinks: ReferenceItem[] = [
  {
    title: "How to Read a Paper",
    detail:
      "S. Keshav, ACM SIGCOMM Computer Communication Review, 37(3):83-84, 2007.",
    href: "https://doi.org/10.1145/1273445.1273458",
  },
  {
    title: "Machine Learning 2017-2018",
    detail:
      "University of Genoa graduate machine learning course.",
    href: "https://lcsl.unige.it/courses/ml/1718/",
  },
  {
    title: "Introductory Machine Learning Notes",
    detail:
      "L. Rosasco, University of Genoa, ML 2016/2017 lecture notes, Oct. 2016.",
    href: "https://lcsl.unige.it/courses/ml/1718/MLNotes.pdf",
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

function ReferenceCard({ item }: { item: ReferenceItem }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-semibold text-foreground">{item.title}</h4>
        {item.href && (
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.detail}
      </p>
    </>
  )

  if (!item.href) {
    return <div className="border border-border bg-background p-5">{content}</div>
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border bg-background p-5 transition-colors hover:border-foreground/30"
    >
      {content}
    </a>
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
              The project area will stay visible on the course page, but we are
              leaving it empty for the moment while the project material is
              prepared.
            </p>
          </div>

          <div className="border border-dashed border-border bg-card px-6 py-12 text-center">
            <p className="text-lg font-medium text-foreground">Coming soon...</p>
          </div>
        </div>
      </section>

      <section id="syllabus" className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-muted-foreground">
              Calendar and Syllabus
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Fall 2026 meeting calendar using the ordered 2025 lecture sequence
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              This schedule follows MIT&apos;s official fall 2026 class calendar
              for Tuesday/Thursday meetings and places the lecture decks from
              last year in the same order. TP = Tomaso Poggio, LR = Lorenzo
              Rosasco, and PB = Pierfrancesco Beneventano.
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="border border-border bg-background p-5">
              <h3 className="mb-2 font-semibold text-foreground">
                MIT calendar notes
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The class starts on Thursday, September 10, 2026 because MIT&apos;s
                first day of classes is Wednesday, September 9, 2026.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                There is no 9.520 meeting on Tuesday, October 13, 2026 because
                MIT holds a Monday schedule that day, and there is no class on
                Thursday, November 26, 2026 for Thanksgiving.
              </p>
            </div>
            <div className="border border-border bg-background p-5">
              <h3 className="mb-2 font-semibold text-foreground">
                Slide archive
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The lecture rows below link directly to the slide decks from
                last year whenever slides are available.
              </p>
              <div className="mt-4">
                <ExternalTextLink href="https://registrar.mit.edu/calendar/current-key-dates">
                  MIT Registrar current key dates
                </ExternalTextLink>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {schedule.map((item) => (
              <div
                key={`${item.date}-${item.title}`}
                className="grid gap-4 border border-border bg-background p-5 lg:grid-cols-[8rem_1.8fr_11rem_9rem]"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.date}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  {item.note && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.note}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.instructor}
                  </p>
                </div>
                <div className="flex items-start lg:justify-end">
                  {item.slideHref ? (
                    <ExternalTextLink href={item.slideHref}>
                      Fall 25 Slides
                    </ExternalTextLink>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {item.title === "Open" ? "Open" : "No slides"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="border-t border-border bg-card px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-muted-foreground">
              References
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Reading list and supporting resources
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              This section intentionally sits at the very end of the page. The
              references below follow last year&apos;s syllabus structure and have
              been cleaned up for consistency.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Notes covering the classes will be provided in the form of
              independent chapters from a draft set of lecture notes. The books
              and papers listed below are useful general references,
              especially from the theoretical viewpoint, and additional
              suggested readings can be attached to individual classes as
              needed.
            </p>
          </div>

          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                Book (draft)
              </h3>
            </div>
            <div className="grid gap-4">
              {draftBook.map((item) => (
                <ReferenceCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-5 w-5 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                Primary References
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {primaryReferences.map((item) => (
                <ReferenceCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <Presentation className="h-5 w-5 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                Papers of Interest
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {papersOfInterest.map((item) => (
                <ReferenceCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <ArrowUpRight className="h-5 w-5 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                Resources and links
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {resourceLinks.map((item) => (
                <ReferenceCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
