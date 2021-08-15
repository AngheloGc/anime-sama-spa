export const SimilarPostsSkeleton: React.FC = () => {
  return (
      <>
    <svg
      role="img"
      width="200"
      height="225"
      aria-labelledby="loading-aria"
      viewBox="0 0 200 225"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clip-path="url(#clip-path)"
        style={{fill: 'url("#fill")'}}
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <rect x="21" y="10" rx="0" ry="0" width="44" height="46" />
          <rect x="83" y="14" rx="0" ry="0" width="124" height="15" />
          <rect x="83" y="33" rx="0" ry="0" width="82" height="14" />
          <rect x="21" y="62" rx="0" ry="0" width="44" height="46" />
          <rect x="83" y="66" rx="0" ry="0" width="124" height="15" />
          <rect x="83" y="85" rx="0" ry="0" width="82" height="14" />
          <rect x="21" y="115" rx="0" ry="0" width="44" height="46" />
          <rect x="83" y="119" rx="0" ry="0" width="124" height="15" />
          <rect x="83" y="138" rx="0" ry="0" width="82" height="14" />
          <rect x="21" y="167" rx="0" ry="0" width="44" height="46" />
          <rect x="83" y="171" rx="0" ry="0" width="124" height="15" />
          <rect x="83" y="190" rx="0" ry="0" width="82" height="14" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
    </>
  )
}
