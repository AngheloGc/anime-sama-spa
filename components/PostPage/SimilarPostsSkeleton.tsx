export const SimilarPostsSkeleton: React.FC = () => {
  return (
    <svg
    width="200"
    height="225"
    aria-labelledby="loading-aria"
    preserveAspectRatio="none"
    viewBox="0 0 200 225"
  >
    <rect
      width="100%"
      height="100%"
      fill='url("#fill")'
      clipPath="url(#clip-path)"
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <rect width="44" height="46" x="21" y="10" rx="0" ry="0"></rect>
        <rect width="124" height="15" x="83" y="14" rx="0" ry="0"></rect>
        <rect width="82" height="14" x="83" y="33" rx="0" ry="0"></rect>
        <rect width="44" height="46" x="21" y="62" rx="0" ry="0"></rect>
        <rect width="124" height="15" x="83" y="66" rx="0" ry="0"></rect>
        <rect width="82" height="14" x="83" y="85" rx="0" ry="0"></rect>
        <rect width="44" height="46" x="21" y="115" rx="0" ry="0"></rect>
        <rect width="124" height="15" x="83" y="119" rx="0" ry="0"></rect>
        <rect width="82" height="14" x="83" y="138" rx="0" ry="0"></rect>
        <rect width="44" height="46" x="21" y="167" rx="0" ry="0"></rect>
        <rect width="124" height="15" x="83" y="171" rx="0" ry="0"></rect>
        <rect width="82" height="14" x="83" y="190" rx="0" ry="0"></rect>
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.6" stopColor="#f3f3f3">
          <animate
            attributeName="offset"
            dur="2s"
            keyTimes="0; 0.25; 1"
            repeatCount="indefinite"
            values="-2; -2; 1"
          ></animate>
        </stop>
        <stop offset="1.6" stopColor="#ecebeb">
          <animate
            attributeName="offset"
            dur="2s"
            keyTimes="0; 0.25; 1"
            repeatCount="indefinite"
            values="-1; -1; 2"
          ></animate>
        </stop>
        <stop offset="2.6" stopColor="#f3f3f3">
          <animate
            attributeName="offset"
            dur="2s"
            keyTimes="0; 0.25; 1"
            repeatCount="indefinite"
            values="0; 0; 3"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
  )
}
