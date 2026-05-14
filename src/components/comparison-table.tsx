const features = [
  {
    name: "Uses your real browser",
    chromeBridge: true,
    playwright: false,
    puppeteer: false,
    selenium: false,
  },
  {
    name: "Existing logins & cookies",
    chromeBridge: true,
    playwright: false,
    puppeteer: false,
    selenium: false,
  },
  {
    name: "No browser binary needed",
    chromeBridge: true,
    playwright: false,
    puppeteer: false,
    selenium: false,
  },
  {
    name: "MCP protocol native",
    chromeBridge: true,
    playwright: "plugin",
    puppeteer: false,
    selenium: false,
  },
  {
    name: "Works with extensions",
    chromeBridge: true,
    playwright: false,
    puppeteer: false,
    selenium: false,
  },
  {
    name: "Sub-second startup",
    chromeBridge: true,
    playwright: false,
    puppeteer: false,
    selenium: false,
  },
  {
    name: "Screenshot support",
    chromeBridge: true,
    playwright: true,
    puppeteer: true,
    selenium: true,
  },
  {
    name: "JavaScript evaluation",
    chromeBridge: true,
    playwright: true,
    puppeteer: true,
    selenium: true,
  },
  {
    name: "Multi-tab control",
    chromeBridge: true,
    playwright: true,
    puppeteer: true,
    selenium: true,
  },
  {
    name: "Headless mode",
    chromeBridge: false,
    playwright: true,
    puppeteer: true,
    selenium: true,
  },
  {
    name: "Cross-browser support",
    chromeBridge: false,
    playwright: true,
    puppeteer: false,
    selenium: true,
  },
  {
    name: "CI/CD optimized",
    chromeBridge: false,
    playwright: true,
    puppeteer: true,
    selenium: true,
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="text-emerald-400 font-mono text-sm">&#10003;</span>
    );
  }
  if (value === false) {
    return <span className="text-zinc-600 font-mono text-sm">&#10007;</span>;
  }
  return <span className="text-amber-400 text-xs font-mono">{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.02]">
            <th className="text-left p-4 font-medium text-zinc-400">
              Feature
            </th>
            <th className="p-4 font-semibold text-emerald-400 text-center">
              Chrome Bridge
            </th>
            <th className="p-4 font-medium text-zinc-400 text-center">
              Playwright MCP
            </th>
            <th className="p-4 font-medium text-zinc-400 text-center">
              Puppeteer
            </th>
            <th className="p-4 font-medium text-zinc-400 text-center">
              Selenium
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((f) => (
            <tr key={f.name} className="border-b border-white/5 hover:bg-white/[0.02]">
              <td className="p-4 text-zinc-300">{f.name}</td>
              <td className="p-4 text-center">
                <Cell value={f.chromeBridge} />
              </td>
              <td className="p-4 text-center">
                <Cell value={f.playwright} />
              </td>
              <td className="p-4 text-center">
                <Cell value={f.puppeteer} />
              </td>
              <td className="p-4 text-center">
                <Cell value={f.selenium} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
