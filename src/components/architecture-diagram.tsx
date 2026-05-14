export function ArchitectureDiagram() {
  return (
    <div className="relative overflow-x-auto">
      <div className="flex items-center justify-center gap-4 min-w-[600px] py-8">
        {/* Claude Code */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-44 p-5 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-center">
            <div className="text-xs text-cyan-400 font-mono mb-1">AI Client</div>
            <div className="font-semibold">Claude Code</div>
            <div className="text-xs text-zinc-500 mt-1">or Claude Desktop</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs text-zinc-500 font-mono">stdio</div>
          <div className="w-16 h-px bg-gradient-to-r from-cyan-500/50 to-emerald-500/50 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-emerald-500/50 border-y-[4px] border-y-transparent" />
          </div>
          <div className="text-xs text-zinc-500 font-mono">MCP</div>
        </div>

        {/* MCP Server */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-44 p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-center">
            <div className="text-xs text-emerald-400 font-mono mb-1">Bridge</div>
            <div className="font-semibold">MCP Server</div>
            <div className="text-xs text-zinc-500 mt-1">Node.js process</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs text-zinc-500 font-mono">WebSocket</div>
          <div className="w-16 h-px bg-gradient-to-r from-emerald-500/50 to-amber-500/50 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-amber-500/50 border-y-[4px] border-y-transparent" />
          </div>
          <div className="text-xs text-zinc-500 font-mono">:9229</div>
        </div>

        {/* Chrome Extension */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-44 p-5 rounded-xl border border-amber-500/30 bg-amber-500/5 text-center">
            <div className="text-xs text-amber-400 font-mono mb-1">Browser</div>
            <div className="font-semibold">Chrome Extension</div>
            <div className="text-xs text-zinc-500 mt-1">Manifest V3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
