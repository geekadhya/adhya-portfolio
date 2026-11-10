/** Round spinning text badge. */
export function Badge({ text = "scroll down", className = "" }: { text?: string; className?: string }) {
  const label = `${text} • ${text} • `;
  return (
    <div aria-hidden="true" className={`relative h-28 w-28 md:h-32 md:w-32 ${className}`}>
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill="currentColor" fontSize="13.5" fontWeight="700" letterSpacing="2.4">
          <textPath href="#badge-circle">{label}</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v16M5 13l7 7 7-7" />
      </svg>
    </div>
  );
}
