import { Button } from "~/components/ui/button";

interface DemoLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  codeExample: string;
  renderMode: string;
  dataDisplay: React.ReactNode;
  additionalInfo?: string;
}

export const DemoLayout = ({
  title,
  subtitle,
  description,
  codeExample,
  renderMode,
  dataDisplay,
  additionalInfo,
}: DemoLayoutProps) => {
  return (
    <>
      {/* Main title area */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          EdgeOne Pages React Router Starter - {title}
        </h1>
        <p className="text-xl text-gray-300 mb-4">{subtitle}</p>
        <p className="text-lg text-gray-400 mb-8">{description}</p>
        <a
          href="https://reactrouter.com/start/modes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-gray-700 text-white px-8 py-3 text-lg cursor-pointer border-gray-600"
          >
            View Documentation
          </Button>
        </a>
      </div>

      {/* Dynamic data display area */}
      <div className="container mx-auto px-4 mb-8">{dataDisplay}</div>

      {/* Additional info area (optional) */}
      {additionalInfo && (
        <div className="container mx-auto px-4 mb-8">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">📋</span>
              <span>Entry Files Setup</span>
            </h3>
            <div className="space-y-5">
              {additionalInfo.split("\n\n").map((para, index) => {
                // Check if paragraph starts with **
                if (para.trim().startsWith("**")) {
                  const parts = para.split("**");
                  const title = parts[1];
                  const content = parts.slice(2).join("**");
                  
                  return (
                    <div key={index} className="bg-gray-800/40 rounded-lg p-5 border border-gray-700/50">
                      <h4 className="text-base font-semibold text-blue-300 mb-3 font-mono">
                        {title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {content.replace(/^:\s*/, "")}
                      </p>
                    </div>
                  );
                }
                
                return (
                  <p key={index} className="text-gray-300 text-base leading-relaxed bg-gray-800/30 rounded-lg p-4 border-l-4 border-blue-500/50">
                    {para}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Code example area */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <div className="bg-gray-900 rounded p-6 text-left">
            <pre className="text-sm overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};
