import type { Route } from "./+types/prerender";
import { PageLayout, DemoLayout, DataDisplay } from "~/components/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pre-render - EdgeOne Pages React Router Starter" },
    {
      name: "description",
      content: "Pre-render demonstration with React Router v7 on EdgeOne Pages",
    },
  ];
}

// Fetch data at build time and pre-render the page
export async function loader({}: Route.LoaderArgs) {
  // This function runs only once at build time, generating static content
  const buildTime = new Date().toISOString();
  const buildId = Math.random().toString(36).substring(7);

  return {
    buildTime,
    buildId,
    staticContent: "This content was generated at build time and cached",
    buildNumber: Math.floor(Math.random() * 1000),
  };
}

// Configure pre-rendering - This is the key configuration for React Router v7
export const handle = {
  // Mark this route to be pre-rendered as a static file
  prerender: true,
};

// This page demonstrates Pre-render
export default function PreRenderPage({ loaderData }: Route.ComponentProps) {
  const { buildTime, buildId, staticContent, buildNumber } = loaderData;
  const codeExample = `// Fetch data at build time and pre-render the page
export async function loader({}: Route.LoaderArgs) {
  // This function runs only once at build time, generating static content
  const buildTime = new Date().toISOString();
  
  return {
    buildTime,
    staticContent: "This content was generated at build time"
  };
}


export default function PreRenderPage({ loaderData }) {
  // This component is pre-rendered to static HTML at build time
  const { buildTime, staticContent } = loaderData;
  
  return (
    <div>
      <h2>Pre-render: Build-time Static Generation</h2>
      <p>This page is pre-rendered at build time.</p>
      <p>Build Time: {buildTime}</p>
      <p>Content: {staticContent}</p>
    </div>
  );
}

// react-router.config.ts
export default {
  ssr: true,
  // Enable pre-rendering functionality
  prerender: [
    "/prerender",
  ],
} satisfies Config;
`;

  const prerenderData = [
    { label: "Build Time", value: buildTime, color: "text-blue-400" },
    { label: "Build ID", value: buildId, color: "text-cyan-400" },
    {
      label: "Build Number",
      value: buildNumber.toString(),
      color: "text-indigo-400",
    },
    {
      label: "Rendering Strategy",
      value: "Pre-render (Build-time)",
      color: "text-green-400",
    },
    {
      label: "Cache Duration",
      value: "Indefinite (until rebuild)",
      color: "text-yellow-400",
    },
    {
      label: "Data Freshness",
      value: "Static (Build-time snapshot)",
      color: "text-orange-400",
    },
  ];

  const prerenderFeatures = [
    {
      title: "Build-time Generation",
      description: "Static HTML generated once at build time",
    },
    {
      title: "Static File Delivery",
      description:
        "Pre-built HTML served directly from CDN without server processing",
    },
    {
      title: "Client-side Hydration",
      description:
        "Static HTML hydrates into interactive SPA with client-side routing",
    },
    {
      title: "SEO Friendly",
      description:
        "Full HTML available on first load, making content easily indexable by search engines",
    },
    {
      title: "Data Staleness",
      description:
        "Content frozen at build time - requires rebuild to update data",
    },
    {
      title: "Performance",
      description: "Instant load with zero server overhead after initial build",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Build Phase",
      description: "Loader runs once at build time, fetching data and generating a snapshot.",
      color: "text-blue-400",
    },
    {
      step: "2",
      title: "HTML Generation",
      description: "React components render to static HTML with the build-time data baked in.",
      color: "text-cyan-400",
    },
    {
      step: "3",
      title: "CDN Deployment",
      description: "The pre-built HTML files are deployed to the CDN edge for instant delivery.",
      color: "text-green-400",
    },
    {
      step: "4",
      title: "Client Hydration",
      description: "On page load, React hydrates the static HTML into a fully interactive SPA.",
      color: "text-purple-400",
    },
    {
      step: "5",
      title: "Client-side Routing",
      description: "After hydration, navigation is handled client-side for a seamless SPA experience.",
      color: "text-indigo-400",
    },
    {
      step: "6",
      title: "Rebuild to Update",
      description: "To refresh content, trigger a new build — data stays frozen until the next deploy.",
      color: "text-orange-400",
    },
  ];

  return (
    <PageLayout>
      <DemoLayout
        title="Pre-render"
        subtitle="Static HTML generation at build time for instant delivery."
        description="Ideal for blogs, docs, and marketing pages. Pre-rendered pages are built as static HTML at build time and served directly from CDN, delivering instant load times with zero server overhead. Content is frozen at build time and requires a rebuild to update."
        codeExample={codeExample}
        renderMode="Pre-render"
        dataDisplay={
          <div className="space-y-8">
            <DataDisplay
              title="Pre-render: Build-time Static Generation"
              description="This page uses Pre-render to generate static HTML at build time. All content is frozen at build time and served as pre-built static files, delivering instant load with zero server processing."
              data={prerenderData}
              features={prerenderFeatures}
            />

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How Pre-render Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {howItWorks.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`${item.color} font-bold text-lg`}>
                        Step {item.step}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  💡 <strong>Key Insight:</strong> Pre-rendered pages are
                  generated once at build time and served as static files from
                  CDN. This delivers the fastest possible load times with zero
                  server overhead, making it perfect for content that doesn't
                  change frequently.
                </p>
              </div>
            </div>
          </div>
        }
      />
    </PageLayout>
  );
}
