export function InstallSteps() {
  return (
    <div className="space-y-8">
      {/* Step 1 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold">
          1
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">Clone and install</h3>
          <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm border border-white/10">
            <div className="text-zinc-500"># Clone the repository</div>
            <div>
              <span className="text-emerald-400">$</span> git clone
              https://github.com/andrey-karasev/chrome-bridge-mcp.git
            </div>
            <div>
              <span className="text-emerald-400">$</span> cd chrome-bridge
            </div>
            <div>
              <span className="text-emerald-400">$</span> npm install
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold">
          2
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">
            Load the Chrome extension
          </h3>
          <div className="bg-zinc-900 rounded-lg p-4 text-sm border border-white/10 space-y-2 text-zinc-300">
            <p>
              1. Open{" "}
              <code className="text-amber-400">chrome://extensions</code>
            </p>
            <p>2. Enable &quot;Developer mode&quot; (top right)</p>
            <p>3. Click &quot;Load unpacked&quot;</p>
            <p>
              4. Select the{" "}
              <code className="text-amber-400">extension/</code> folder
            </p>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold">
          3
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">
            Add to Claude Code config
          </h3>
          <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm border border-white/10 overflow-x-auto">
            <div className="text-zinc-500">
              {"// ~/.claude/settings.json or project .claude/settings.json"}
            </div>
            <pre className="text-zinc-300">{`{
  "mcpServers": {
    "chrome-bridge": {
      "command": "node",
      "args": ["/path/to/chrome-bridge/mcp-server/index.mjs"]
    }
  }
}`}</pre>
          </div>
          <p className="text-zinc-500 text-sm mt-3">
            The extension badge turns green when connected. You&apos;re ready to
            go.
          </p>
        </div>
      </div>
    </div>
  );
}
