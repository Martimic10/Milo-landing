import { ChevronLeft, ChevronRight, Video, Plus, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

function WifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
      <path
        d="M7.5 9.5C8.05 9.5 8.5 9.05 8.5 8.5C8.5 7.95 8.05 7.5 7.5 7.5C6.95 7.5 6.5 7.95 6.5 8.5C6.5 9.05 6.95 9.5 7.5 9.5Z"
        fill="black"
      />
      <path
        d="M4.8 6.3C5.6 5.55 6.55 5.15 7.5 5.15C8.45 5.15 9.4 5.55 10.2 6.3"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M2.3 3.7C3.75 2.35 5.6 1.6 7.5 1.6C9.4 1.6 11.25 2.35 12.7 3.7"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
      <rect x="0.75" y="0.75" width="19.5" height="10.5" rx="3" stroke="black" strokeOpacity="0.4" />
      <rect x="2" y="2" width="17" height="8" rx="2" fill="black" />
      <path d="M22 4.5V7.5C22.8 7.15 23.3 6.35 23.3 6C23.3 5.65 22.8 4.85 22 4.5Z" fill="black" opacity="0.4" />
    </svg>
  );
}

function DefaultInputBar() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-7 w-7 rounded-full bg-[#e9e9eb] flex items-center justify-center shrink-0">
        <Plus size={15} className="text-black/40" />
      </div>
      <div className="flex-1 rounded-full bg-[#e9e9eb] px-3.5 py-1.5 text-[13px] text-black/35">
        iMessage
      </div>
      <div className="h-7 w-7 rounded-full bg-[#e9e9eb] flex items-center justify-center shrink-0">
        <ArrowUp size={14} className="text-black/25" />
      </div>
    </div>
  );
}

export function PhoneFrame({
  children,
  footer,
  className,
  contactName = "Milo",
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  contactName?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[300px] sm:w-[340px] select-none",
        className
      )}
    >
      {/* Outer titanium shell */}
      <div className="relative rounded-[3rem] bg-linear-to-b from-[#4a4a4d] via-[#2c2c2e] to-[#1c1c1e] p-0.75 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35),0_10px_30px_-10px_rgba(0,0,0,0.25)]">
        <div className="rounded-[2.9rem] bg-black p-1.75">
          {/* Screen */}
          <div className="relative flex flex-col overflow-hidden rounded-[2.4rem] bg-white aspect-9/19.5">
            {/* Status bar */}
            <div className="shrink-0 flex items-center justify-between px-7 pt-3.5 pb-1 text-[13px] font-semibold text-black z-20">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <WifiIcon />
                <BatteryIcon />
              </div>
            </div>

            {/* Dynamic island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[92px] h-[26px] rounded-full bg-black z-30 flex items-center justify-end pr-1.5">
              <div className="h-2 w-2 rounded-full bg-[#1a1a2e] ring-1 ring-[#2a3a5e]" />
            </div>

            {/* Header: contact */}
            <div className="shrink-0 relative flex items-center justify-between px-3 pt-9 pb-2.5 z-20">
              <button className="relative h-8 w-8 rounded-full bg-[#e9e9eb] flex items-center justify-center shrink-0">
                <ChevronLeft size={18} className="text-blue" strokeWidth={2.5} />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-white text-[10px] font-semibold flex items-center justify-center">
                  2
                </span>
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                <div className="h-11 w-11 rounded-full bg-linear-to-br from-blue-dim to-blue flex items-center justify-center text-white text-[15px] font-semibold shadow-sm ring-2 ring-white">
                  M
                </div>
                <div className="flex items-center gap-0.5 rounded-full bg-[#e9e9eb]/70 pl-2.5 pr-1.5 py-0.5">
                  <span className="text-[12px] font-semibold text-black">
                    {contactName}
                  </span>
                  <ChevronRight size={12} className="text-black/40" />
                </div>
              </div>

              <button className="h-8 w-8 rounded-full bg-[#e9e9eb] flex items-center justify-center shrink-0">
                <Video size={16} className="text-black/70" />
              </button>
            </div>

            {/* Messages content */}
            <div className="flex-1 min-h-0 overflow-hidden px-3.5 pt-1">
              {children}
            </div>

            {/* Input bar */}
            <div className="shrink-0 px-3 pt-2 pb-3.5">
              {footer ?? <DefaultInputBar />}
            </div>
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#2a2a2c] rounded-l-md" />
      <div className="absolute -left-[3px] top-36 w-[3px] h-14 bg-[#2a2a2c] rounded-l-md" />
      <div className="absolute -left-[3px] top-52 w-[3px] h-14 bg-[#2a2a2c] rounded-l-md" />
      <div className="absolute -right-[3px] top-32 w-[3px] h-20 bg-[#2a2a2c] rounded-r-md" />
    </div>
  );
}
