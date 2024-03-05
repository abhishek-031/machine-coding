import { useState, useMemo, useCallback } from "react";

export default function Stars({ count = 5 }) {
  const [selectedStars, setSelectedStars] = useState(-1);
  const [hoveredStars, setHoveredStars] = useState(-1);

  const starsArray = useMemo(() => Array(count).fill(1), [count]);

  const handleClick = useCallback((e) => {
    const index = e.target?.dataset?.starno;
    console.log("click", index);

    if (index) {
      setSelectedStars(index);
    }
  }, []);

  const handleHover = useCallback((e) => {
    const index = e.target?.dataset?.starno;
    console.log("hover", index);
    if (index) {
      setHoveredStars(index);
    }
  }, []);

  return (
    <div
      className="stars"
      onMouseOut={() => setHoveredStars(selectedStars)}
      onClick={handleClick}
      onMouseOver={handleHover}
    >
      {starsArray.map((x, i) => (
        <div
          data-starno={i}
          className={i <= hoveredStars ? "filled" : ""}
          key={i}
        />
      ))}
    </div>
  );
}
