const columns = [
  {
    heading: "Product",
    links: [
      { label: "Get Early Access", href: "/#waitlist" },
      { label: "Try Milo", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [{ label: "X", href: "#" }],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <span className="text-[13px] text-muted">{col.heading}</span>
              <ul className="mt-5 flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-ink hover:text-blue transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 border-t border-line pt-8">
          <span className="text-[13px] text-muted">
            {`© ${new Date().getFullYear()} Milo  |  Built for your text messages`}
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-[13px] text-green-600">
              All systems operational
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none -mt-4 sm:-mt-8">
        <span className="block text-center font-semibold tracking-tight text-ink/[0.06] text-[22vw] leading-none whitespace-nowrap">
          Milo
        </span>
      </div>
    </footer>
  );
}
