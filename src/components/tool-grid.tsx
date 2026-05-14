const tools = [
  {
    name: "browser_navigate",
    description: "Navigate the active tab to any URL",
  },
  {
    name: "browser_read_page",
    description: "Read the simplified DOM structure of the current page",
  },
  {
    name: "browser_read_selector",
    description: "Read content of elements matching a CSS selector",
  },
  {
    name: "browser_click",
    description: "Click an element by CSS selector",
  },
  {
    name: "browser_type",
    description: "Type text into input fields with framework event support",
  },
  {
    name: "browser_screenshot",
    description: "Capture a screenshot of the visible viewport",
  },
  {
    name: "browser_evaluate",
    description: "Execute arbitrary JavaScript in the page context",
  },
  {
    name: "browser_list_tabs",
    description: "List all open browser tabs with URLs and titles",
  },
  {
    name: "browser_switch_tab",
    description: "Switch to a specific tab by ID",
  },
  {
    name: "browser_new_tab",
    description: "Open a new tab with an optional URL",
  },
  {
    name: "browser_press_key",
    description: "Dispatch keyboard events with modifier support",
  },
  {
    name: "browser_wait_for",
    description: "Wait for an element to appear in the DOM",
  },
];

export function ToolGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="p-4 rounded-lg border border-white/10 bg-white/[0.02]"
        >
          <code className="text-xs text-emerald-400 font-mono">
            {tool.name}
          </code>
          <p className="text-zinc-400 text-sm mt-2">{tool.description}</p>
        </div>
      ))}
    </div>
  );
}
