export default function Atmosphere() {
  const raindrops = Array.from({ length: 18 }, (_, index) => index + 1);

  return (
    <>
      <div className="rain-layer" aria-hidden="true">
        {raindrops.map((drop) => (
          <span key={drop} style={{ '--i': drop }} />
        ))}
      </div>

      <div className="ambient-grain" />

      <div className="bat-flyby" aria-hidden="true">
        <svg viewBox="0 0 100 42">
          <path d="M50 8 43 18 34 11 29 22 17 17 19 30 5 27 13 39 36 34 50 41 64 34 87 39 95 27 81 30 83 17 71 22 66 11 57 18Z" />
        </svg>
      </div>
    </>
  );
}
