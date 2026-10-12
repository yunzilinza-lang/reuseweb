import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean; // If true, renders letters in white/light for dark backgrounds
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-8',
  isDark = false,
  showTagline = false,
}) => {
  const textColor = isDark ? '#FFFFFF' : '#222E35';

  return (
    <div className={`inline-flex flex-col items-start ${showTagline ? 'gap-0.5' : ''}`}>
      <svg
        viewBox="0 0 340 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} w-auto overflow-visible select-none`}
        aria-label="REUSE"
      >
        <defs>
          {/* Sprout & Leaf Stem Gradient */}
          <linearGradient id="reuse-stem-grad" x1="168" y1="75" x2="238" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E5258" />
            <stop offset="35%" stopColor="#2A7C6E" />
            <stop offset="70%" stopColor="#4BB682" />
            <stop offset="100%" stopColor="#75D79B" />
          </linearGradient>

          {/* Leaf Fill Gradient */}
          <linearGradient id="reuse-leaf-grad" x1="195" y1="52" x2="236" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#40B17A" />
            <stop offset="60%" stopColor="#67D195" />
            <stop offset="100%" stopColor="#92E7B0" />
          </linearGradient>
        </defs>

        {/* Letter R */}
        <path
          d="M20 75V35H46C56 35 63 41 63 50C63 58 57 63 48 64.5L64 75H51L37 65H31V75H20ZM31 56H45C50 56 53 53.5 53 50C53 46.5 50 44 45 44H31V56Z"
          fill={textColor}
        />

        {/* Letter E */}
        <path
          d="M74 75V35H112V44H85V51H109V59H85V66H113V75H74Z"
          fill={textColor}
        />

        {/* Letter U (Base + Left stem) */}
        <path
          d="M125 35H136V58C136 64 139 67.5 145 67.5C151 67.5 154 64 154 58V45"
          stroke={textColor}
          strokeWidth="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />

        {/* Organic Stem flowing out from right arm of U */}
        <path
          d="M154 52C154 38 168 36 182 34C198 32 208 30 216 26"
          stroke="url(#reuse-stem-grad)"
          strokeWidth="8.5"
          strokeLinecap="round"
        />

        {/* Sprouting Leaf */}
        <path
          d="M198 34C203 23 218 19 235 19C235 27 225 39 204 36.5C199 36 198 34 198 34Z"
          fill="url(#reuse-leaf-grad)"
        />

        {/* Subtle Leaf Vein Accent */}
        <path
          d="M202 33.5C212 29 224 23.5 233 19.5"
          stroke="#1E5258"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* Letter S */}
        <path
          d="M236 45.5C232 44 227 43 222 43C214 43 210 46.5 210 50.5C210 54.5 214 56.5 222 58.5L227 59.8C238 62.5 244 66.5 244 75C244 84.5 234 90 220 90C212 90 205 88 198 85.5L201 77C207 79.5 214 81.5 221 81.5C228 81.5 233 78.5 233 74.5C233 70 229 68 221 66L216 64.7C205 62 199 57.5 199 50C199 41.5 208 35 221 35C227 35 233 36.5 238 38.5L236 45.5Z"
          transform="translate(18, -15)"
          fill={textColor}
        />

        {/* Letter E (Final) */}
        <path
          d="M272 75V35H310V44H283V51H307V59H283V66H311V75H272Z"
          fill={textColor}
        />
      </svg>

      {showTagline && (
        <span
          className={`text-[11px] font-medium tracking-wide pl-0.5 ${
            isDark ? 'text-[#8AA895]' : 'text-[#5A685F]'
          }`}
        >
          Smarter Secondhand
        </span>
      )}
    </div>
  );
};

export const LogoMark: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="REUSE Mark"
    >
      <defs>
        <linearGradient id="reuse-mark-stem" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E5258" />
          <stop offset="40%" stopColor="#2A7C6E" />
          <stop offset="75%" stopColor="#4BB682" />
          <stop offset="100%" stopColor="#75D79B" />
        </linearGradient>
        <linearGradient id="reuse-mark-leaf" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#40B17A" />
          <stop offset="60%" stopColor="#67D195" />
          <stop offset="100%" stopColor="#92E7B0" />
        </linearGradient>
      </defs>

      <path
        d="M14 18V34C14 41 19 46 27 46C35 46 40 41 40 34V28"
        stroke="#222E35"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 32C40 23 44 19 50 18C52 17.7 54 18 55 18.5"
        stroke="url(#reuse-mark-stem)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M45 19C47 11 57 8 59 8C59 13 54 21 45 19Z"
        fill="url(#reuse-mark-leaf)"
      />
      <path
        d="M46 18.5C51 15 56 11 58.5 8.5"
        stroke="#1E5258"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
};
