import { useRef, useEffect } from "react";

export default function InfinteScroll({ endReached, children }) {
  const bottomRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("hi");
        endReached();
      }
    });
    observer.observe(bottomRef.current);

    return () => {
      observer.disconnect();
    };
  }, [endReached]);

  return (
    <div>
      {children}
      <div ref={bottomRef} />
    </div>
  );
}
