import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
  contactName = "Milo",
}: {
  children: React.ReactNode;
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
      <div className="relative rounded-[3rem] bg-gradient-to-b from-[#3a3a3c] to-[#1c1c1e] p-[3px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35),0_10px_30px_-10px_rgba(0,0,0,0.25)]">
        <div className="rounded-[2.9rem] bg-black p-2">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.4rem] bg-[#fafafa] aspect-[9/19.5]">
            {/* Status bar */}
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-7 pt-3.5 text-[13px] font-semibold text-black z-20">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                  <path
                    d="M1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5"
                    stroke="black"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>
              </div>
            </div>

            {/* Dynamic island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[92px] h-[26px] rounded-full bg-black z-30" />

            {/* Header: contact */}
            <div className="absolute top-11 inset-x-0 flex flex-col items-center pt-1 pb-2 z-20 bg-[#fafafa]/90 backdrop-blur-sm">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-dim to-blue flex items-center justify-center text-white text-[13px] font-semibold shadow-sm">
                M
              </div>
              <div className="mt-1 text-[11px] font-medium text-black/80">
                {contactName}
              </div>
            </div>

            {/* Messages content */}
            <div className="absolute top-[92px] bottom-0 inset-x-0 px-3.5 pb-4 overflow-hidden">
              {children}
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
