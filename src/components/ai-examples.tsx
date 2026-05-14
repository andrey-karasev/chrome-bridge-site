"use client";

import { useState } from "react";

type Example = {
  client: string;
  label: string;
  color: string;
  conversations: { role: "user" | "ai" | "tool"; text: string }[];
};

const examples: Example[] = [
  {
    client: "claude-code",
    label: "Claude Code",
    color: "emerald",
    conversations: [
      { role: "user", text: "Navigate to GitHub and show me my notifications" },
      {
        role: "tool",
        text: 'browser_navigate({ url: "https://github.com/notifications" })',
      },
      { role: "tool", text: "browser_read_page({ maxLength: 50000 })" },
      {
        role: "ai",
        text: "Here are your GitHub notifications:\n\n• **Fix CI pipeline (#234)** — review requested by @teammate\n• **Update deps (#198)** — merged 2 hours ago\n• **New issue: Login timeout (#301)** — assigned to you",
      },
      { role: "user", text: "Click on the CI pipeline one" },
      {
        role: "tool",
        text: 'browser_click({ selector: "a[href*=\'/pull/234\']" })',
      },
      {
        role: "tool",
        text: "browser_wait_for({ selector: \".pull-request-body\" })",
      },
      {
        role: "ai",
        text: 'Opened PR #234 "Fix CI pipeline". The author changed the Node version in the GitHub Actions workflow from 18 to 20 and updated the caching strategy.',
      },
    ],
  },
  {
    client: "claude-desktop",
    label: "Claude Desktop",
    color: "cyan",
    conversations: [
      {
        role: "user",
        text: "Take a screenshot of the page I have open and tell me what you see",
      },
      { role: "tool", text: "browser_screenshot({})" },
      {
        role: "ai",
        text: "You have a Figma design open showing a mobile app login screen. The design uses a dark theme with a gradient background. I can see:\n\n• Email and password input fields\n• A \"Sign In\" button with rounded corners\n• Social login options (Google, Apple)\n• A \"Forgot password?\" link below",
      },
      {
        role: "user",
        text: "Now open a new tab and go to our staging environment to compare",
      },
      {
        role: "tool",
        text: 'browser_new_tab({ url: "https://staging.myapp.com/login" })',
      },
      { role: "tool", text: "browser_screenshot({})" },
      {
        role: "ai",
        text: "Here's your staging login page. Comparing with the Figma design:\n\n• The button border-radius matches\n• The social login icons are in the correct order\n• **Difference:** The staging version is missing the gradient background — it's using a solid #1a1a1a instead",
      },
    ],
  },
  {
    client: "chatgpt",
    label: "ChatGPT Desktop",
    color: "violet",
    conversations: [
      {
        role: "user",
        text: "Open my Google Calendar and tell me what's on my schedule today",
      },
      {
        role: "tool",
        text: 'browser_navigate({ url: "https://calendar.google.com" })',
      },
      { role: "tool", text: "browser_read_page({ maxLength: 50000 })" },
      {
        role: "ai",
        text: "Here's your schedule for today:\n\n• **10:00 AM** — Team standup (30 min)\n• **2:00 PM** — Design review with Sarah (1 hr)\n• **4:30 PM** — 1:1 with manager (30 min)\n\nYou have a 3.5-hour gap between standup and the design review.",
      },
      { role: "user", text: "Search for \"MCP protocol specification\" in a new tab" },
      {
        role: "tool",
        text: 'browser_new_tab({ url: "https://www.google.com/search?q=MCP+protocol+specification" })',
      },
      { role: "tool", text: "browser_read_page({})" },
      {
        role: "ai",
        text: "Here are the top results:\n\n1. **modelcontextprotocol.io** — Official MCP specification and documentation\n2. **GitHub: modelcontextprotocol/spec** — The open-source protocol repository\n3. **Anthropic blog post** — \"Introducing the Model Context Protocol\"\n\nWould you like me to open any of these?",
      },
    ],
  },
  {
    client: "automation",
    label: "Form Automation",
    color: "amber",
    conversations: [
      { role: "user", text: "Fill out the contact form on this page with test data" },
      {
        role: "tool",
        text: 'browser_type({ selector: "#name", text: "John Doe" })',
      },
      {
        role: "tool",
        text: 'browser_type({ selector: "#email", text: "john@example.com" })',
      },
      {
        role: "tool",
        text: 'browser_type({ selector: "textarea[name=message]", text: "Hello, I\'m interested in your product. Could you send me a demo?" })',
      },
      {
        role: "tool",
        text: 'browser_click({ selector: "button[type=submit]" })',
      },
      {
        role: "tool",
        text: 'browser_wait_for({ selector: ".success-message" })',
      },
      {
        role: "ai",
        text: "Done! I filled out the contact form with test data and submitted it. The page showed a success message: \"Thank you! We'll be in touch within 24 hours.\"",
      },
    ],
  },
];

function RoleBadge({ role }: { role: "user" | "ai" | "tool" }) {
  if (role === "user") {
    return (
      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-700 text-zinc-300">
        You
      </span>
    );
  }
  if (role === "tool") {
    return (
      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
        tool
      </span>
    );
  }
  return (
    <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
      AI
    </span>
  );
}

export function AIExamples() {
  const [active, setActive] = useState(0);
  const example = examples[active];

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {examples.map((ex, i) => (
          <button
            key={ex.client}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === i
                ? "bg-white/10 text-white border border-white/20"
                : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {ex.label}
          </button>
        ))}
      </div>

      {/* Conversation */}
      <div className="max-w-3xl mx-auto rounded-xl border border-white/10 bg-zinc-900/50 overflow-hidden">
        <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-3 text-xs text-zinc-500 font-mono">
            {example.label} + Chrome Bridge
          </span>
        </div>
        <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
          {example.conversations.map((msg, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="flex-shrink-0 mt-0.5">
                <RoleBadge role={msg.role} />
              </div>
              <div
                className={`text-sm leading-relaxed ${
                  msg.role === "tool"
                    ? "font-mono text-xs text-emerald-300/80 bg-emerald-500/5 px-3 py-1.5 rounded"
                    : msg.role === "user"
                      ? "text-white"
                      : "text-zinc-300"
                }`}
              >
                {msg.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < msg.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
