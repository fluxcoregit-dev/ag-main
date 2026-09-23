export const contactEmail = 'contact@axiomgroup.services';

export const intents = [
  { id: 'product', label: 'Build or rebuild a product' },
  { id: 'ai', label: 'Put intelligence into a system' },
  { id: 'brand', label: 'Design system or brand architecture' },
  { id: 'growth', label: 'Growth and measurement infrastructure' },
  { id: 'trust', label: 'Security, reliability, or compliance' },
  { id: 'venture', label: 'A venture under the holding company' },
  { id: 'other', label: 'Something else' },
] as const;

export type IntentId = (typeof intents)[number]['id'];

export function isIntentId(value: string | undefined): value is IntentId {
  return intents.some((intent) => intent.id === value);
}

export const practices = [
  {
    id: 'product',
    intent: 'product' as const,
    index: '01',
    title: 'Product & platform engineering',
    summary:
      'Architecture and build for a product that has to survive its second and third version.',
    outcome: 'A platform other people can extend without rewriting it.',
    covers: [
      'Platform architecture and service boundaries',
      'The standards a second team can follow',
      'A codebase that stays explainable as it grows',
    ],
    when: 'The next release is costing more than the last one, or a new product needs a foundation that will not be thrown away in a year.',
  },
  {
    id: 'ai',
    intent: 'ai' as const,
    index: '02',
    title: 'Intelligent systems',
    summary:
      'Decision support, automation, and models placed inside the operation, with explicit limits.',
    outcome: 'Intelligence people can rely on because they know what it will not do.',
    covers: [
      'Where a model is allowed to act, and where a person decides',
      'Workflows that absorb the output instead of displaying it',
      'Evaluation, fallbacks, and an audit trail',
    ],
    when: 'You need the system to take on judgment or repetitive work, and a chat window on the homepage would not change the operation.',
  },
  {
    id: 'brand',
    intent: 'brand' as const,
    index: '03',
    title: 'Design systems & brand architecture',
    summary:
      'Visual and interaction rules a portfolio can share without collapsing into one template.',
    outcome: 'A brand and interface system a new product can inherit on day one.',
    covers: [
      'Brand architecture across more than one product',
      'Interface standards and component rules',
      'The decisions that keep expression consistent as teams multiply',
    ],
    when: 'Each venture looks unrelated, or every new screen is being designed from scratch.',
  },
  {
    id: 'growth',
    intent: 'growth' as const,
    index: '04',
    title: 'Growth infrastructure & analytics',
    summary:
      'The measurement and lifecycle plumbing that shows whether the system is compounding or decaying.',
    outcome: 'A small set of signals the company can act on, tied to how the system actually works.',
    covers: [
      'What is worth measuring, and what is noise',
      'Instrumentation that matches the product structure',
      'Reporting an operator can use without a separate analytics project',
    ],
    when: 'Decisions are being made from dashboards nobody trusts, or growth work has no connection to the system underneath.',
  },
  {
    id: 'trust',
    intent: 'trust' as const,
    index: '05',
    title: 'Security, reliability & compliance',
    summary:
      'The defaults that keep a system trustworthy as more people, and more ventures, depend on it.',
    outcome: 'Secure, reliable operation as the normal path, not a late project.',
    covers: [
      'Security and reliability standards built into the architecture',
      'The controls a regulated or customer-facing system has to show',
      'Operational habits that survive a team change',
    ],
    when: 'Trust is being handled as a checklist after the product already exists.',
  },
] as const;

export const audiences = [
  {
    title: 'A product that has outgrown its first build',
    summary:
      'You have shipped. The next year of features is getting more expensive than the last. We rebuild the structure underneath so the product can keep moving.',
    intent: 'product' as const,
    cta: 'Talk about a rebuild',
  },
  {
    title: 'Several ventures that need one standard',
    summary:
      'You operate more than one company. We set the technical, design, and operating patterns they share, and leave day-to-day execution with each team.',
    intent: 'venture' as const,
    cta: 'Talk about a portfolio',
  },
  {
    title: 'An operation that needs intelligence inside it',
    summary:
      'The useful version is the one people stop noticing. We put decision support and automation into the work, with boundaries a team can explain.',
    intent: 'ai' as const,
    cta: 'Talk about an intelligent system',
  },
] as const;

export const stages = [
  {
    step: '01',
    title: 'Discover',
    summary:
      'We map the system that already exists, the constraint that cannot move, and the decision the work has to support.',
    output: 'A written problem frame',
  },
  {
    step: '02',
    title: 'Design',
    summary:
      'We set architecture, interface rules, and the boundaries for anything intelligent before implementation starts.',
    output: 'A structure a team can build against',
  },
  {
    step: '03',
    title: 'Build',
    summary:
      'Product, model, and brand work stay in one line of accountability, following the structure already agreed.',
    output: 'A system in use, with the standard beside it',
  },
  {
    step: '04',
    title: 'Evolve',
    summary:
      'The system stays legible as usage, regulation, and the rest of the portfolio change.',
    output: 'A way to change it without starting over',
  },
] as const;

export const essays = [
  {
    href: '/writing/systems-are-the-product',
    title: 'Systems Are the Product',
    summary:
      'Features age quickly. The structure underneath decides what the company can still build years from now.',
    featured: true,
  },
  {
    href: '/writing/ai-as-infrastructure',
    title: 'AI Should Be Infrastructure, Not Spectacle',
    summary:
      'Interfaces that demonstrate intelligence are easy to ship. Intelligence that does not introduce itself is what an operation can trust.',
    featured: true,
  },
  {
    href: '/writing/clarity-is-a-competitive-advantage',
    title: 'Clarity Is a Competitive Advantage',
    summary:
      'Unclear roles and boundaries create drag. Teams then add process and tools that never touch the actual problem.',
    featured: true,
  },
  {
    href: '/writing/long-term-systems',
    title: 'Why Long-Term Systems Outlast Fast Products',
    summary:
      'Speed produces motion. Durability is a property of the architecture: it anticipates change and stays legible.',
    featured: false,
  },
  {
    href: '/writing/software-is-not-the-product',
    title: 'Software Is Rarely the Product',
    summary:
      'Software exposes the system. The product is the decision rules, constraints, and feedback loops underneath it.',
    featured: false,
  },
  {
    href: '/writing/platform-decay',
    title: 'Most Digital Platforms Decay by Design',
    summary:
      'Growth assumptions that cannot hold become structural debt. The platform gets harder to explain and harder to change.',
    featured: false,
  },
  {
    href: '/writing/visibility-is-a-tax-on-thinking',
    title: 'Visibility Is a Tax on Thinking',
    summary:
      'Dashboards and status theater are often framed as accountability. Some work gets worse when every move is on display.',
    featured: false,
  },
] as const;

export const stackGroups = [
  {
    group: 'Product',
    items: [
      { name: 'An explicit architecture', why: 'Service boundaries are written down so a second team can change the system without guessing.' },
      { name: 'A codebase that stays explainable', why: 'The next version has to be cheaper to change than the last one.' },
    ],
  },
  {
    group: 'Interface',
    items: [
      { name: 'One interface system', why: 'A new product inherits the components and the rules, instead of redrawing every screen.' },
      { name: 'Interaction that confirms', why: 'Motion marks a state change. It does not decorate the product.' },
    ],
  },
  {
    group: 'Intelligence',
    items: [
      { name: 'A written decision boundary', why: 'The model drafts. A person approves anything that commits the company.' },
      { name: 'Evaluation and an audit trail', why: 'Every automated action can be checked after it runs.' },
    ],
  },
  {
    group: 'Trust',
    items: [
      { name: 'Defaults in the architecture', why: 'Security and reliability are part of the build, not a late review.' },
    ],
  },
] as const;

export const comparison = [
  {
    topic: 'Who holds the standard',
    axiom: 'The parent company, shared across ventures.',
    other: 'A project team, for the length of one engagement.',
  },
  {
    topic: 'What you leave with',
    axiom: 'A working system and the rules for changing it.',
    other: 'A release, then a handoff document.',
  },
  {
    topic: 'How intelligence is used',
    axiom: 'Inside the operation, with a limit on what it may decide.',
    other: 'A visible feature added to the surface.',
  },
  {
    topic: 'How the work is sequenced',
    axiom: 'A written frame, then a build.',
    other: 'A proposal, then a backlog.',
  },
  {
    topic: 'After launch',
    axiom: 'The system stays legible as it grows.',
    other: 'The engagement ends when the pages are live.',
  },
] as const;

export const paths = [
  {
    intent: 'product' as const,
    title: 'Rebuild the platform',
    summary: 'The product has shipped, and the next year of features is getting more expensive.',
    leaves: 'A platform other people can extend without rewriting it.',
    includes: ['A written problem frame', 'Service boundaries', 'A build the current team can keep'],
  },
  {
    intent: 'venture' as const,
    title: 'Set the portfolio standard',
    summary: 'Several ventures need one technical, design, and operating pattern.',
    leaves: 'A standard a new company can inherit, with execution left to each team.',
    includes: ['Shared architecture rules', 'An interface system', 'What each venture still decides alone'],
  },
  {
    intent: 'ai' as const,
    title: 'Put intelligence in the operation',
    summary: 'The work needs judgment or repetition taken on, inside the workflow people already use.',
    leaves: 'A bounded system, with a record of what it did.',
    includes: ['Where a model may act', 'Where a person decides', 'Evaluation and a fallback'],
  },
] as const;

export const faqs = [
  {
    q: 'Who is this for?',
    a: 'Founders and operators with a product that has outgrown its first build, a portfolio that needs one standard, or an operation that needs intelligence inside the work.',
  },
  {
    q: 'What happens after I write?',
    a: 'We read the note and reply by email. If the work fits, the next step is a working conversation. You get a written problem frame before any proposal.',
  },
  {
    q: 'Do you list a price?',
    a: 'A scope follows the frame. The system, the constraint, and the year you have in mind change the shape of the work, so a rate on this page would be a guess.',
  },
  {
    q: 'Is this a staffed project shop?',
    a: 'Axiom is the parent. It holds the standard. Day-to-day product work stays with the venture once the structure is in place.',
  },
] as const;

export const briefItems = [
  {
    label: 'The system',
    detail: 'What already has to keep working while this changes.',
  },
  {
    label: 'The constraint',
    detail: 'The deadline, regulation, team, or codebase that cannot move.',
  },
  {
    label: 'The outcome',
    detail: 'What “done” means in a year, not in the next sprint.',
  },
  {
    label: 'The boundary',
    detail: 'What the system is allowed to decide on its own.',
  },
] as const;
