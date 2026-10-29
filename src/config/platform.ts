export const SITE_URL = "https://akilihight.com";
export const EXTERNAL_LINKS = {
  kitArchive: "https://akili-hight.kit.com",
  introCall: "https://calendly.com/hightnetworksconsulting/30min",
  hightNetworks: "https://hightnetworks.com/",
} as const;

export const newsletterLatestIssue: { title: string; url: string; issueNumber?: string } | null = null;
export const newsletterBenefits = [
  "One practical AI idea",
  "One useful workflow or prompt",
  "One tool or capability worth knowing",
  "One risk, limitation, or mistake to avoid",
  "One resource to help you go further",
];

export const DIGITAL_GOODS_POLICY: { approved: boolean; text: string | null } = {
  approved: false,
  text: null,
};

export type DigitalProduct = {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  description: string;
  category: string;
  public: boolean;
  status: "live" | "comingSoon";
  detailUrl: string | null;
  checkoutUrl: string | null;
  price: number | null;
  currency: "USD";
  thumbnail: { src: string; alt: string; approved: boolean } | null;
  // Fulfillment is handled entirely inside Kit Commerce. This file is bundled
  // into the browser, so no paid-product download URL, credential, or secret
  // may ever be stored here. fulfillmentConfigured is only an owner-confirmed
  // readiness flag; it is not proof of payment or delivery.
  deliveryProvider: "kit";
  fulfillmentConfigured: boolean;
  ctaLabel: string | null;
  nameFinalized: boolean;
  descriptionFinalized: boolean;
  contentsApproved: boolean;
  plannedTopics: string[];
  introductoryPriceLabel: string | null;
  format: string | null;
  version: string | null;
  publicationDate: string | null;
  includedDeliverables: string[];
  learningOutcomes: string[];
  licenseSummary: string | null;
  refundPolicySummary: string | null;
  personalUseLicense: string | null;
  refundPolicy: string | null;
  deliveryDisclosure: string | null;
  previewUrl: string | null;
  faqs: { question: string; answer: string }[];
};

const pending = {
  checkoutUrl: null, price: null, currency: "USD" as const, thumbnail: null,
  deliveryProvider: "kit" as const, fulfillmentConfigured: false,
  ctaLabel: null,
  nameFinalized: false, descriptionFinalized: false,
  contentsApproved: false, status: "comingSoon" as const,
  introductoryPriceLabel: null, format: null, version: null, publicationDate: null,
  includedDeliverables: [], learningOutcomes: [], licenseSummary: null,
  refundPolicySummary: null, personalUseLicense: null, refundPolicy: null,
  deliveryDisclosure: null, previewUrl: null, faqs: [],
};

export const KIT_PRODUCTS: Record<string, DigitalProduct> = {
  aiStarterKit: {
    ...pending,
    id: "aiStarterKit", public: true, title: "AI Confidence Starter Kit",
    subtitle: "Practical AI for everyday life and work.",
    audience: "people getting started with AI at home and at work",
    description: "A beginner-friendly guide to understanding AI, choosing the right tools, writing better prompts, verifying answers, protecting your information, and putting AI to useful work.",
    category: "Getting started", detailUrl: "/products/ai-starter-kit",
    plannedTopics: [
      "AI basics in plain English", "ChatGPT, Claude, Gemini, Copilot, and Perplexity overview",
      "Practical everyday use cases", "A simple prompting framework", "Useful follow-up prompts",
      "AI privacy checklist", "AI verification checklist", "Repeatable workflows for everyday tasks", "Beginner exercises",
    ],
  },
  aiWorkdayToolkit: {
    ...pending, id: "aiWorkdayToolkit", public: false, title: "AI Workday Toolkit",
    subtitle: "Practical workflows for everyday work.", audience: "Working professionals",
    description: "Planned workflows for writing, research, meetings, and planning.", category: "AI at work", detailUrl: null, plannedTopics: [],
  },
  aiJobSearchToolkit: {
    ...pending, id: "aiJobSearchToolkit", public: false, title: "AI Job Search Toolkit",
    subtitle: "Thoughtful AI support for career preparation.", audience: "Job seekers",
    description: "Planned resources for research, preparation, and professional communication.", category: "Career", detailUrl: null, plannedTopics: [],
  },
  futureBundle: {
    ...pending, id: "futureBundle", public: false, title: "Practical AI Bundle",
    subtitle: "", audience: "", description: "", category: "Bundle", detailUrl: null, plannedTopics: [],
  },
};

export function isHttpsUrl(value: string | null): value is string {
  if (!value) return false;
  try { return new URL(value).protocol === "https:"; } catch { return false; }
}

export function isKitCheckoutUrl(value: string | null): value is string {
  if (!isHttpsUrl(value)) return false;
  const host = new URL(value).hostname;
  return host === "kit.com" || host.endsWith(".kit.com") || host === "convertkit.com" || host.endsWith(".convertkit.com");
}

export function isProductLive(product: DigitalProduct, policy = DIGITAL_GOODS_POLICY): boolean {
  return product.public && product.status === "live" && product.nameFinalized && !!product.title.trim()
    && product.descriptionFinalized && !!product.description.trim() && product.contentsApproved
    && product.includedDeliverables.length > 0 && product.includedDeliverables.every((item) => !!item.trim())
    && !!product.audience.trim() && !!product.format?.trim()
    && !!product.licenseSummary?.trim() && !!product.refundPolicySummary?.trim()
    && !!product.personalUseLicense?.trim() && !!product.refundPolicy?.trim() && !!product.deliveryDisclosure?.trim()
    && product.price !== null && Number.isFinite(product.price) && product.price > 0
    && product.deliveryProvider === "kit" && product.fulfillmentConfigured
    && (!product.thumbnail || (product.thumbnail.approved && !!product.thumbnail.src && !!product.thumbnail.alt))
    && isKitCheckoutUrl(product.checkoutUrl) && policy.approved && !!policy.text?.trim();
}

// Price text is derived from the one confirmed numeric price, never entered separately.
export function getProductDisplayPrice(product: DigitalProduct): string | null {
  if (!isProductLive(product) || product.price === null) return null;
  return new Intl.NumberFormat("en-US", { style: "currency", currency: product.currency }).format(product.price);
}

export const resourceCategories = [
  { id: "getting-started", title: "Getting Started With AI", description: "Build a foundation before adding more tools.", resources: [{ title: "Everyday AI learning pathway", kind: "Learning overview", description: "Prompting, everyday use, and responsible AI habits.", href: "/learning#learning-pathways" }] },
  { id: "ai-at-work", title: "AI at Work", description: "Bring practical AI habits into everyday tasks.", resources: [{ title: "Practical skills for work", kind: "Learning overview", description: "Explore communication, research, productivity, and organization.", href: "/learning" }] },
  { id: "career-job-search", title: "Career & Job Search", description: "Prepare and communicate your experience thoughtfully.", resources: [{ title: "Career and work readiness", kind: "Career pathway", description: "Job research, career narratives, and interview preparation.", href: "/learning#career-readiness" }] },
  { id: "small-business", title: "Small Business", description: "Find a useful starting point for your business.", resources: [{ title: "Practical AI for everyday decisions", kind: "Newsletter archive", description: "Browse plain-English ideas and workflows in The Everyday AI Digest.", href: EXTERNAL_LINKS.kitArchive }] },
  { id: "responsible-ai", title: "Responsible AI", description: "Understand limitations, privacy, and verification.", resources: [{ title: "Safety and privacy in AI learning", kind: "Workshop overview", description: "See the responsible-use topics covered in Everyday AI Made Simple.", href: "/workshops#everyday-ai" }] },
  { id: "tools-comparisons", title: "Tools & Comparisons", description: "Understand tools in the context of real tasks.", resources: [{ title: "Meet everyday AI tools", kind: "Workshop overview", description: "Explore the workshop's introduction to ChatGPT, Gemini, Claude, and Copilot.", href: "/workshops#everyday-ai" }] },
];

export const futureResourceTopics = ["ChatGPT for Beginners", "ChatGPT vs. Claude vs. Gemini", "How to Write Better AI Prompts", "How to Check an AI Answer", "AI Privacy for Beginners", "AI for Job Seekers", "AI for Small Business"];

export type ResourceArticle = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string | null;
  status: "draft" | "published";
  image: { src: string; alt: string } | null;
  seoTitle: string;
  metaDescription: string;
};

// Real guides are added here when ready. Drafts are never rendered publicly,
// never added to the sitemap, and never receive structured data.
export const resourceArticles: ResourceArticle[] = [];

export const publishedResourceArticles = resourceArticles.filter((article) => article.status === "published");

export const visitorPathways = [
  { title: "Understand AI", description: "Start with the basics and learn what today's AI tools can actually do.", href: "/resources#getting-started" },
  { title: "Use AI at Work", description: "Use AI more effectively for writing, research, meetings, planning, and everyday work.", href: "/resources#ai-at-work" },
  { title: "Improve My Job Search", description: "Use AI to strengthen your search, preparation, communication, and career decisions.", href: "/learning#career-readiness" },
  { title: "Use AI in My Business", description: "Identify practical ways AI and automation can improve small-business workflows.", href: "/resources#small-business" },
  { title: "Train My Team", description: "Explore practical AI workshops for teams, communities, and organizations.", href: "/workshops" },
  { title: "Plan AI for My Organization", description: "Move from experimentation toward responsible, structured implementation.", href: "/#how-i-help" },
];