export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke="#A8875A" strokeWidth="3" />
      <g fill="#A8875A">
        <circle cx="50" cy="27" r="6" />
        <path d="M50 31 L44 47 L50 69 L56 47 Z" />
        <path d="M49 35 C 33 27 18 28 8 35 C 20 39 33 44 45 52 C 46 46 47 40 49 35 Z" />
        <path d="M51 35 C 67 27 82 28 92 35 C 80 39 67 44 55 52 C 54 46 53 40 51 35 Z" />
      </g>
    </svg>
  );
}
