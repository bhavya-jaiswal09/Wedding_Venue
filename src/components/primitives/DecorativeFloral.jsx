function DecorativeFloral({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none absolute text-gold/35 ${className}`}
      viewBox="0 0 220 340"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M110 332C136 268 158 220 170 184C183 145 181 114 161 84C146 61 124 47 98 44"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M97 44C87 20 68 9 42 8C46 31 58 53 79 63C87 67 94 66 97 44Z" fill="currentColor" />
      <path d="M124 89C133 64 152 53 178 53C174 76 161 96 141 106C133 110 126 111 124 89Z" fill="currentColor" />
      <path d="M148 141C160 120 183 113 207 117C199 137 183 153 162 159C153 161 145 159 148 141Z" fill="currentColor" />
      <path d="M120 183C136 169 162 170 182 183C167 198 145 206 124 204C114 202 109 197 120 183Z" fill="currentColor" />
      <path d="M99 225C82 213 57 214 38 228C52 242 73 249 94 248C104 246 110 241 99 225Z" fill="currentColor" />
    </svg>
  );
}

export default DecorativeFloral;
