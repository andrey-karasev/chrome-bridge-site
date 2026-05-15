import Image from "next/image";
import { AIExamples } from "@/components/ai-examples";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { ComparisonTable } from "@/components/comparison-table";
import { FeatureCard } from "@/components/feature-card";
import { InstallSteps } from "@/components/install-steps";
import { ToolGrid } from "@/components/tool-grid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg flex items-center gap-2">
            <Image src="/icon.svg" alt="Chrome Bridge" width={28} height={28} />
            chrome-bridge
          </span>
          <nav className="hidden sm:flex gap-6 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#examples" className="hover:text-white transition-colors">
              Examples
            </a>
            <a href="#comparison" className="hover:text-white transition-colors">
              Comparison
            </a>
            <a href="#install" className="hover:text-white transition-colors">
              Install
            </a>
          </nav>
          <a
            href="https://github.com/andrey-karasev/chrome-bridge-mcp"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
            MCP Server + Chrome Extension
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
            Control your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              real browser
            </span>{" "}
            with AI
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            An MCP server that bridges Claude Code to your actual Chrome browser
            — with your sessions, cookies, and logins intact. No headless
            browsers. No separate profiles. Your real browser, AI-powered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#install"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://github.com/andrey-karasev/chrome-bridge-mcp"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Chrome Bridge?
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
            Existing browser automation tools launch separate browser instances.
            Chrome Bridge works with the browser you already have open — your
            authenticated sessions, extensions, and state are all available.
          </p>
          <div className="grid md:grid-cols-3 gap-6" id="features">
            <FeatureCard
              title="Real Browser Sessions"
              description="Works with your existing Chrome window. Already logged into GitHub, Jira, or your company's internal tools? Claude can see and interact with them immediately."
              icon="session"
            />
            <FeatureCard
              title="Zero Configuration"
              description="No browser binaries to download, no Docker containers to manage. Install the extension, start the MCP server, and you're connected."
              icon="config"
            />
            <FeatureCard
              title="Full MCP Integration"
              description="Standard Model Context Protocol server. Works with Claude Code, Claude Desktop, and any MCP-compatible client out of the box."
              icon="mcp"
            />
            <FeatureCard
              title="Visual Feedback"
              description="Take screenshots, read page structure, evaluate JavaScript — all from your AI assistant. See exactly what the AI sees."
              icon="visual"
            />
            <FeatureCard
              title="Lightweight & Fast"
              description="WebSocket connection between the extension and MCP server. Sub-second command execution. No browser launch overhead."
              icon="fast"
            />
            <FeatureCard
              title="Secure by Design"
              description="Runs locally on your machine. No data leaves your computer. The WebSocket connection is localhost-only by default."
              icon="secure"
            />
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 px-6 border-t border-white/5 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            Three components working together through standard protocols.
          </p>
          <ArchitectureDiagram />
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Available Tools
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            12 tools for complete browser control via the Model Context Protocol.
          </p>
          <ToolGrid />
        </div>
      </section>

      {/* AI Examples */}
      <section className="py-20 px-6 border-t border-white/5 bg-zinc-950" id="examples">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            See It in Action
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            Real conversations showing how AI clients use Chrome Bridge to interact with your browser.
          </p>
          <AIExamples />
        </div>
      </section>

      {/* Comparison */}
      <section
        className="py-20 px-6 border-t border-white/5"
        id="comparison"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Comparison with Alternatives
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            How Chrome Bridge compares to other browser automation approaches.
          </p>
          <ComparisonTable />
        </div>
      </section>

      {/* Install */}
      <section className="py-20 px-6 border-t border-white/5" id="install">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get Started in 3 Steps
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            Up and running in under 2 minutes.
          </p>
          <InstallSteps />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>Chrome Bridge MCP — Open Source</span>
          <div className="flex gap-6">
            <a
              href="https://github.com/andrey-karasev/chrome-bridge-mcp"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://modelcontextprotocol.io"
              className="hover:text-white transition-colors"
            >
              MCP Spec
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
