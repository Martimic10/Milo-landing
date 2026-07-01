export interface PricingPlan {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  featured?: boolean;
  cta: string;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    tagline: "Get a feel for Milo.",
    monthly: 0,
    yearly: 0,
    cta: "Get Started",
    features: ["50 texts a month", "7-day memory", "Community support"],
  },
  {
    name: "Standard",
    tagline: "For everyday life.",
    monthly: 15,
    yearly: 12,
    featured: true,
    cta: "Get Started",
    features: [
      "Unlimited texts",
      "Full memory",
      "Custom reminders & check-ins",
      "Email support",
    ],
  },
  {
    name: "Premium",
    tagline: "The full Milo experience.",
    monthly: 75,
    yearly: 55,
    cta: "Get Started",
    features: [
      "Everything in Standard",
      "Advanced memory & insights",
      "Dedicated phone number",
      "Priority response speed",
      "24/7 priority support",
      "Early access to new features",
    ],
  },
];

export interface ComparisonRow {
  feature: string;
  free: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: "Texts per month", free: "50", standard: "Unlimited", premium: "Unlimited" },
  { feature: "Memory", free: "7-day", standard: "Full", premium: "Full + insights" },
  { feature: "Custom reminders & check-ins", free: false, standard: true, premium: true },
  { feature: "Dedicated phone number", free: false, standard: false, premium: true },
  { feature: "Priority response speed", free: false, standard: false, premium: true },
  { feature: "Support", free: "Community", standard: "Email", premium: "24/7 priority" },
  { feature: "Early access to new features", free: false, standard: false, premium: true },
];
